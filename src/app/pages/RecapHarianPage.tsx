import { useState, useEffect, useCallback, useRef } from "react";
import RecapHarian1 from "@/imports/RecapHarian1/index";
import { supabase } from "@/lib/supabase";
import {
  UtensilsCrossed, Bus, Receipt, Zap, GraduationCap, Heart,
  Smartphone, Gamepad2, Sparkles, MoreHorizontal,
} from "lucide-react";

type RecapSubPage = "awal" | "kalender" | "detail";

const W = 393;
const H = 852;

const PATH_DASHBOARD = "M0 13.2857V5.57143C0 5.3 0.0621248 5.04286 0.186375 4.8C0.310625 4.55714 0.481833 4.35714 0.7 4.2L5.95 0.342857C6.25625 0.114286 6.60625 0 7 0C7.39375 0 7.74375 0.114286 8.05 0.342857L13.3 4.2C13.5187 4.35714 13.6902 4.55714 13.8145 4.8C13.9387 5.04286 14.0006 5.3 14 5.57143V13.2857C14 13.7571 13.8285 14.1609 13.4855 14.4969C13.1425 14.8329 12.7307 15.0006 12.25 15H9.625C9.37708 15 9.16941 14.9177 9.002 14.7531C8.83458 14.5886 8.75058 14.3851 8.75 14.1429V9.85714C8.75 9.61428 8.666 9.41085 8.498 9.24685C8.33 9.08285 8.12233 9.00057 7.875 9H6.125C5.87708 9 5.66942 9.08228 5.502 9.24685C5.33458 9.41143 5.25058 9.61485 5.25 9.85714V14.1429C5.25 14.3857 5.166 14.5894 4.998 14.754C4.83 14.9186 4.62233 15.0006 4.375 15H1.75C1.26875 15 0.856916 14.8323 0.5145 14.4969C0.172083 14.1614 0.000583333 13.7577 0 13.2857Z";
const PATH_RECAP_1 = "M4.5493 6.5761H8.09859M4.5493 9.73399H10.8592M4.5493 12.8919H8.49296M14.4085 9.73399V17.234H1V2.23399H8.09859";
const PATH_RECAP_2 = "M13.2253 2.43152L13.7774 3.6552L15 4.20783L13.7774 4.76046L13.2253 5.98415L12.6732 4.76046L11.4507 4.20783L12.6732 3.6552L13.2253 2.43152Z";

const CATEGORY_META: Record<string, { Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>, color: string, bg: string }> = {
  "Makan/minum":    { Icon: UtensilsCrossed, color: "#73CD6C", bg: "#E4F2E3" },
  "Transportasi":   { Icon: Bus,             color: "#8869F5", bg: "#EAE2FB" },
  "Pajak":          { Icon: Receipt,         color: "#EF4D4D", bg: "#FFDADA" },
  "Listrik":        { Icon: Zap,             color: "#F5A623", bg: "#FFF3DC" },
  "Pendidikan":     { Icon: GraduationCap,   color: "#8869F5", bg: "#EAE2FB" },
  "Kesehatan":      { Icon: Heart,           color: "#EF4D4D", bg: "#FFDADA" },
  "Pulsa/data":     { Icon: Smartphone,      color: "#8869F5", bg: "#EAE2FB" },
  "Hiburan":        { Icon: Gamepad2,        color: "#F5A623", bg: "#FFF3DC" },
  "Perawatan Diri": { Icon: Sparkles,        color: "#73CD6C", bg: "#E4F2E3" },
  "Lainnya":        { Icon: MoreHorizontal,  color: "#8869F5", bg: "#EAE2FB" },
};

function formatRp(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + " JT";
  if (n >= 1_000) return (n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 0) + " RB";
  return n.toLocaleString("id-ID");
}

function formatRpFull(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}

function formatDateLabel(dateStr: string) {
  if (!dateStr) return "Pilih Tanggal";
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return "Tanggal Tidak Valid";
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

type Tx = {
  id: string;
  jumlah: number;
  catatan: string | null;
  tanggal: string;
  kategori: { nama: string } | null;
};

// Helper function to format date to string
const toDateStr = (d: Date) => {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

// Helper function to get weekday name
const getDayName = (d: Date) => {
  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  return days[d.getDay()];
};

// ─── Swipeable/Scrollable Horizontal Date Bar Component ───
function HorizontalDateBar({
  selectedDate,
  onSelectDate,
}: {
  selectedDate: string;
  onSelectDate: (date: string) => void;
}) {
  const dates = [];
  let center = new Date();
  if (selectedDate) {
    const parsed = new Date(selectedDate + "T00:00:00");
    if (!isNaN(parsed.getTime())) {
      center = parsed;
    }
  }

  // Generate 7 days before and 7 days after the selected date
  for (let i = -7; i <= 7; i++) {
    const d = new Date(center);
    d.setDate(center.getDate() + i);
    dates.push(d);
  }

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      if (container.children && container.children.length > 7) {
        const selectedItem = container.children[7] as HTMLElement;
        if (selectedItem) {
          container.scrollLeft = selectedItem.offsetLeft - container.offsetWidth / 2 + selectedItem.offsetWidth / 2;
        }
      }
    }
  }, [selectedDate]);

  return (
    <div
      ref={containerRef}
      className="recap-scroll"
      style={{
        display: "flex",
        gap: 8,
        overflowX: "auto",
        scrollbarWidth: "none",
        padding: "10px 20px",
        background: "white",
        borderRadius: 15,
        boxShadow: "0px 0px 7px 1px #ede8ff",
        margin: "12px 20px 0",
        scrollBehavior: "smooth",
      }}
    >
      {dates.map((d) => {
        const dStr = toDateStr(d);
        const isSelected = dStr === selectedDate;
        return (
          <button
            key={dStr}
            type="button"
            onClick={() => onSelectDate(dStr)}
            style={{
              flexShrink: 0,
              width: 37,
              height: 48,
              borderRadius: 10,
              background: isSelected ? "#eaa22c" : "white",
              border: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span style={{ fontSize: 9, color: isSelected ? "white" : "rgba(0,0,0,0.5)", fontWeight: 500 }}>
              {getDayName(d)}
            </span>
            <span style={{ fontSize: 13, color: isSelected ? "white" : "black", fontWeight: 700, marginTop: 2 }}>
              {d.getDate()}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Interactive Calendar Component (matching RecapHarian2 visual style) ───
function FunctionalCalendar({ onSelectDate, onBack }: { onSelectDate: (date: string) => void; onBack?: () => void }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-indexed
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const MONTH_NAMES = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const DAY_HEADERS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

  const cells: Array<{ day: number; type: "prev" | "curr" | "next" }> = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, type: "prev" });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, type: "curr" });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ day: cells.length - daysInMonth - firstDayOfMonth + 1, type: "next" });
  }

  const rows: typeof cells[] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  const handleSelect = (cell: typeof cells[0]) => {
    if (cell.type !== "curr") return;
    setSelectedDay(cell.day);
    const mm = String(viewMonth + 1).padStart(2, "0");
    const dd = String(cell.day).padStart(2, "0");
    onSelectDate(`${viewYear}-${mm}-${dd}`);
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
    setSelectedDay(null);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
    setSelectedDay(null);
  };

  const todayDay = today.getFullYear() === viewYear && today.getMonth() === viewMonth ? today.getDate() : null;

  return (
    <div style={{
      position: "absolute", inset: 0, background: "#fdfdff",
      borderRadius: 30, fontFamily: "'Inter', sans-serif",
    }}>
      {/* Header - matching RecapHarian2 style */}
      <div style={{ padding: "85px 22px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            type="button"
            onClick={onBack}
            style={{ width: 30, height: 30, background: "rgba(234,225,254,0.7)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer", padding: 0 }}
          >
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
              <path d="M9 16L1 8.5L9 1" stroke="#8869F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span style={{ fontWeight: 700, fontSize: 13, color: "#8869F5" }}>Pilih Tanggal</span>
        </div>
      </div>

      {/* Calendar Card */}
      <div style={{ margin: "0 22px", background: "white", borderRadius: 20, boxShadow: "0 0 10px 1px #eae1fe", padding: "16px 12px" }}>
        {/* Month nav */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <button onClick={prevMonth} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 8px" }}>
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
              <path d="M9 16L1 8.5L9 1" stroke="#8869F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span style={{ fontWeight: 700, fontSize: 13, color: "#855dff" }}>
            {MONTH_NAMES[viewMonth]} {viewYear}
          </span>
          <button onClick={nextMonth} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 8px" }}>
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
              <path d="M1 1L9 8.5L1 16" stroke="#8869F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Separator line */}
        <div style={{ height: 0.5, background: "rgba(150,150,150,0.4)", marginBottom: 8 }} />

        {/* Day headers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", textAlign: "center", marginBottom: 4 }}>
          {DAY_HEADERS.map((d, i) => (
            <div key={d} style={{ fontSize: 10, fontWeight: 500, color: i === 0 ? "red" : "#4a4a4a", padding: "4px 0" }}>
              {d}
            </div>
          ))}
        </div>

        {/* Date cells */}
        {rows.map((row, ri) => (
          <div key={ri} style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }}>
            {row.map((cell, ci) => {
              const isSun = ci === 0;
              const isCurr = cell.type === "curr";
              const isSelected = isCurr && cell.day === selectedDay;
              const isToday = isCurr && cell.day === todayDay;
              return (
                <button
                  key={ci}
                  type="button"
                  onClick={() => handleSelect(cell)}
                  style={{
                    background: isSelected ? "#8869F5" : isToday ? "#EAE2FB" : "white",
                    border: "none",
                    borderRadius: 8,
                    cursor: isCurr ? "pointer" : "default",
                    padding: "7px 0",
                    margin: "1px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{
                    fontSize: 14,
                    fontWeight: 590,
                    color: isSelected
                      ? "white"
                      : !isCurr
                        ? "rgba(0,0,0,0.35)"
                        : isSun
                          ? "red"
                          : "#111",
                  }}>
                    {cell.day}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Tips box - matching RecapHarian2 style */}
      <div style={{ margin: "14px 22px 0", background: "#f3f0fe", borderRadius: 20, padding: "12px 16px", display: "flex", gap: 8 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
          <circle cx="12" cy="12" r="10" fill="#EAE2FB"/>
          <path d="M12 8v4M12 16h.01" stroke="#7459D0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <div>
          <p style={{ fontSize: 10, fontWeight: 590, color: "#7459d0", margin: 0 }}>Tips</p>
          <p style={{ fontSize: 10, color: "#5b5b5b", margin: "2px 0 0" }}>
            Pilih tanggal untuk melihat ringkasan keuanganmu pada hari tersebut.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Detail View (matching RecapHarian3 visual style) ───
function RecapDetailView({
  userId,
  tanggal,
  saldo,
  onTabChange,
  onSelectDate,
}: {
  userId?: string;
  tanggal: string;
  saldo: number;
  onTabChange: (tab: "bulanan" | "tahunan") => void;
  onSelectDate: (date: string) => void;
}) {
  const [transactions, setTransactions] = useState<Tx[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId || !tanggal) return;
    setLoading(true);
    supabase
      .from("transaksi")
      .select("id, jumlah, catatan, tanggal, kategori:kategori_id(nama)")
      .eq("user_id", userId)
      .eq("tanggal", tanggal)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setTransactions((data as Tx[]) || []);
        setLoading(false);
      });
  }, [userId, tanggal]);

  const totalPengeluaran = transactions.reduce((s, t) => s + (t.jumlah || 0), 0);
  const dateLabel = formatDateLabel(tanggal);

  // Group transactions by category for multi-colored donut segments
  const groupedExpenses = transactions.reduce((acc, tx) => {
    const catName = tx.kategori?.nama || "Lainnya";
    acc[catName] = (acc[catName] || 0) + (tx.jumlah || 0);
    return acc;
  }, {} as Record<string, number>);

  const expenseCategories = Object.entries(groupedExpenses).map(([name, amount]) => {
    const meta = CATEGORY_META[name] || CATEGORY_META["Lainnya"];
    return { name, amount, color: meta.color };
  });

  const r = 40;
  const circ = 2 * Math.PI * r;
  const donutPct = saldo > 0 ? Math.min(100, Math.round((totalPengeluaran / saldo) * 100)) : 0;

  return (
    <div style={{ background: "#fdfdff", minHeight: H, fontFamily: "'Inter', sans-serif" }}>

      {/* Top header area (matching RecapHarian3 white header) */}
      <div style={{ background: "white", paddingBottom: 12, boxShadow: "0px 1px 7px 3px rgba(182,158,255,0.17)", borderRadius: "30px 30px 0 0" }}>
        <div style={{ padding: "56px 22px 10px" }}>
          <span style={{ fontWeight: 800, fontSize: 15, color: "#111" }}>Recap</span>
        </div>
        {/* Tab row */}
        <div style={{ display: "flex", gap: 8, padding: "0 22px" }}>
          <div style={{ background: "#b69eff", borderRadius: 100, padding: "4px 16px" }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: "#111" }}>Harian</span>
          </div>
          <button onClick={() => onTabChange("bulanan")} style={{ background: "#eae1fe", borderRadius: 100, padding: "4px 16px", border: "none", cursor: "pointer" }}>
            <span style={{ fontSize: 10, fontWeight: 500, color: "#111" }}>Bulanan</span>
          </button>
          <button onClick={() => onTabChange("tahunan")} style={{ background: "#eae1fe", borderRadius: 100, padding: "4px 16px", border: "none", cursor: "pointer" }}>
            <span style={{ fontSize: 10, fontWeight: 500, color: "#111" }}>Tahunan</span>
          </button>
        </div>
      </div>

      {/* Purple Total Pengeluaran card (matching RecapHarian3) */}
      <div style={{ margin: "16px 20px 0", borderRadius: 20, overflow: "hidden", position: "relative", minHeight: 137, background: "#8869F5" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 8% 14%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)", borderRadius: 20 }} />
        <div style={{ position: "relative", zIndex: 1, padding: "18px 130px 18px 22px" }}>
          <p style={{ color: "white", fontWeight: 700, fontSize: 14, margin: 0 }}>Total Pengeluaran</p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, margin: "4px 0 10px", fontWeight: 590 }}>{dateLabel}</p>
          <p style={{ color: "white", fontWeight: 800, fontSize: 24, margin: 0, lineHeight: 1 }}>
            {loading ? "..." : formatRpFull(totalPengeluaran)}
          </p>
        </div>
        {/* Wallet image placeholder - matches RecapHarian3 right side image */}
        <div style={{ position: "absolute", right: 0, top: 8, width: 120, height: 110, opacity: 0.9, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <circle cx="45" cy="45" r="40" fill="rgba(255,255,255,0.12)"/>
            <rect x="20" y="35" width="50" height="30" rx="5" fill="rgba(255,255,255,0.4)"/>
            <rect x="18" y="28" width="35" height="10" rx="3" fill="rgba(255,255,255,0.5)"/>
            <circle cx="62" cy="50" r="5" fill="rgba(255,255,255,0.6)"/>
          </svg>
        </div>
      </div>

      {/* Swipeable Horizontal Week Day Bar */}
      <HorizontalDateBar selectedDate={tanggal} onSelectDate={onSelectDate} />

      {/* Ringkasan Hari Ini card (matching RecapHarian3) */}
      <div style={{ margin: "14px 20px 0", background: "white", borderRadius: 16, boxShadow: "0 0 10px 1px #eae1fe", padding: "14px 16px" }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: "#111", margin: "0 0 12px" }}>Ringkasan Hari Ini</p>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {/* Donut chart */}
          <div style={{ position: "relative", width: 90, height: 90, flexShrink: 0 }}>
            <svg width="90" height="90" viewBox="0 0 110 110" style={{ transform: "rotate(-90deg)" }}>
              {/* Background circle */}
              <circle cx="55" cy="55" r={r} fill="none" stroke="#F3F0FE" strokeWidth="12" />

              {/* Colored segments */}
              {(() => {
                if (loading) return null;
                if (transactions.length === 0) {
                  return (
                    <circle cx="55" cy="55" r={r} fill="none" stroke="#EAE2FB" strokeWidth="12" />
                  );
                }

                let accumulated = 0;
                return expenseCategories.map((cat, idx) => {
                  const dash = totalPengeluaran > 0 ? (cat.amount / totalPengeluaran) * circ : 0;
                  const offset = -accumulated;
                  accumulated += dash;
                  return (
                    <circle
                      key={idx}
                      cx="55"
                      cy="55"
                      r={r}
                      fill="none"
                      stroke={cat.color}
                      strokeWidth="12"
                      strokeDasharray={`${dash} ${circ}`}
                      strokeDashoffset={offset}
                    />
                  );
                });
              })()}
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#111" }}>
                {loading ? "..." : formatRp(totalPengeluaran)}
              </span>
              <span style={{ fontSize: 7, color: "rgba(67,67,67,0.8)" }}>Total</span>
            </div>
          </div>
          {/* Right side: Pemasukan & Pengeluaran */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ background: "white", borderRadius: 10, boxShadow: "0 0 7px 1px #ede8ff", padding: "8px 10px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 26, height: 26, background: "#E4F2E3", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3v12M3 9l6-6 6 6" stroke="#73CD6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 8, color: "#434343", margin: 0 }}>Pemasukan</p>
                <p style={{ fontSize: 12, fontWeight: 800, color: "#73CD6C", margin: 0 }}>Rp 100.000</p>
              </div>
            </div>
            <div style={{ background: "white", borderRadius: 10, boxShadow: "0 0 7px 1px #ede8ff", padding: "8px 10px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 26, height: 26, background: "#FFDADA", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                  <path d="M9 15V3M3 9l6 6 6-6" stroke="#EF4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 8, color: "#434343", margin: 0 }}>Pengeluaran</p>
                <p style={{ fontSize: 12, fontWeight: 800, color: "#EF4D4D", margin: 0 }}>
                  {loading ? "..." : formatRpFull(totalPengeluaran)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insight strip (matching RecapHarian3) */}
      <div style={{ margin: "10px 20px 0", background: "#f3f0fe", borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
          <ellipse cx="11" cy="11" rx="11" ry="11" fill="rgba(136,105,245,0.3)"/>
          <path d="M11 6v5M11 14h.01" stroke="#8869F5" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div>
          <p style={{ fontSize: 9, fontWeight: 590, color: "#7459d0", margin: 0 }}>Insight Hari Ini</p>
          <p style={{ fontSize: 7, color: "#5b5b5b", margin: 0 }}>
            {loading
              ? "Memuat..."
              : `Kamu mengeluarkan ${donutPct}% dari total saldo`}
          </p>
        </div>
      </div>

      {/* Rincian Pengeluaran (matching RecapHarian3) */}
      <div style={{ margin: "14px 20px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 20, height: 20, background: "#EAE2FB", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M10.2 1.316H9V.658A.658.658 0 007.8.658v.658H4.2V.658A.658.658 0 003 .658v.658H1.8A1.8 1.8 0 000 3.289v7.893a1.8 1.8 0 001.8 1.973H10.2A1.8 1.8 0 0012 11.182V3.289a1.8 1.8 0 00-1.8-1.973zm.6 9.866a.658.658 0 01-.6.657H1.8a.658.658 0 01-.6-.657V6.578H10.8v4.604zm0-5.92H1.2V3.289a.658.658 0 01.6-.657H3v.657a.658.658 0 001.2 0v-.657H7.8v.657a.658.658 0 001.2 0v-.657H10.2a.658.658 0 01.6.657v1.973z" fill="#8869F5"/>
            </svg>
          </div>
          <p style={{ fontWeight: 700, fontSize: 13, color: "#111", margin: 0 }}>Rincian Pengeluaran</p>
        </div>

        {loading && (
          <div style={{ textAlign: "center", padding: "20px 0", color: "#8869F5", fontSize: 12 }}>Memuat...</div>
        )}

        {!loading && transactions.length === 0 && (
          <div style={{ background: "white", borderRadius: 14, padding: "20px 14px", boxShadow: "0 0 7px 1px #ede8ff", textAlign: "center" }}>
            <p style={{ fontSize: 12, color: "rgba(0,0,0,0.4)", margin: 0 }}>Belum ada pengeluaran pada tanggal ini</p>
          </div>
        )}

        {!loading && transactions.map((tx) => {
          const catName = tx.kategori?.nama || "Lainnya";
          const meta = CATEGORY_META[catName] || CATEGORY_META["Lainnya"];
          const { Icon, color, bg } = meta;

          // Calculate percentage for this item relative to total
          const itemPct = totalPengeluaran > 0 ? Math.round(((tx.jumlah || 0) / totalPengeluaran) * 100) : 0;

          return (
            <div key={tx.id} style={{
              background: "white", borderRadius: 14, padding: "10px 14px",
              boxShadow: "0 0 7px 1px #ede8ff", marginBottom: 8,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <div style={{ width: 32, height: 32, background: bg, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={15} style={{ color }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, fontSize: 12, color: "#111", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {catName}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                  <span style={{ fontSize: 7, fontWeight: 700, color: "#eaa22c", background: "#fef3ea", padding: "1px 4px", borderRadius: 3 }}>
                    {itemPct}%
                  </span>
                  {tx.catatan && (
                    <span style={{ fontSize: 10, color: "rgba(0,0,0,0.4)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      • {tx.catatan}
                    </span>
                  )}
                </div>
              </div>
              <p style={{ fontWeight: 700, fontSize: 12, color: "#111", flexShrink: 0, margin: 0 }}>
                {formatRpFull(tx.jumlah)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Page ───
export default function RecapHarianPage({
  onBack,
  onTabChange,
  onDashboard,
  onAddExpense,
  userId,
}: {
  onBack: () => void;
  onTabChange: (tab: "bulanan" | "tahunan") => void;
  onDashboard?: () => void;
  onAddExpense?: () => void;
  userId?: string;
}) {
  const [subPage, setSubPage] = useState<RecapSubPage>("awal");
  const [selectedDate, setSelectedDate] = useState("");
  const [todayPengeluaran, setTodayPengeluaran] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const goToDashboard = onDashboard ?? onBack;

  const todayStr = (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; })();

  // Sync selectedDate with todayStr initially so it's never empty
  useEffect(() => {
    if (!selectedDate) {
      setSelectedDate(todayStr);
    }
  }, [selectedDate, todayStr]);

  // Load today's summary data for "Ringkasan Cepat" on the awal page
  const loadTodaySummary = useCallback(async () => {
    if (!userId) return;
    const [txRes, rekRes] = await Promise.all([
      supabase
        .from("transaksi")
        .select("jumlah")
        .eq("user_id", userId)
        .eq("tanggal", todayStr),
      supabase
        .from("rekening")
        .select("saldo")
        .eq("user_id", userId)
        .limit(1),
    ]);
    const total = (txRes.data || []).reduce((s: number, t: { jumlah: number }) => s + (t.jumlah || 0), 0);
    setTodayPengeluaran(total);
    setSaldo(rekRes.data?.[0]?.saldo || 0);
  }, [userId, todayStr]);

  useEffect(() => {
    loadTodaySummary();
  }, [loadTodaySummary]);

  // Reload when returning to "awal"
  useEffect(() => {
    if (subPage === "awal") loadTodaySummary();
  }, [subPage, loadTodaySummary]);

  const handleDateSelected = (date: string) => {
    setSelectedDate(date);
    setSubPage("detail");
  };

  const handleBack = () => {
    if (subPage === "detail") { setSubPage("kalender"); return; }
    if (subPage === "kalender") { setSubPage("awal"); return; }
    onBack();
  };

  const getBackLabel = () => {
    if (subPage === "detail") return "Kembali ke Kalender";
    if (subPage === "kalender") return "Kembali ke Recap Harian";
    return "Dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#f0ecff" }}>
      <div>
        <div style={{ position: "relative", width: W, height: H, overflow: "hidden", borderRadius: 30, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", background: "#fdfdff" }}>

          {/* ── Scrollable content ── */}
          <div style={{ position: "absolute", inset: 0, bottom: 80, overflowY: subPage === "detail" ? "auto" : "hidden", scrollbarWidth: "none" }}>
            <style>{`.recap-scroll::-webkit-scrollbar{display:none}`}</style>

            {/* ── AWAL: RecapHarian1 with dynamic Ringkasan Cepat overlay ── */}
            {subPage === "awal" && (
              <div className="recap-scroll" style={{ position: "relative", width: W, height: H }}>
                {/* Static Figma design */}
                <RecapHarian1 />

                {/* Overlay: hide static "Rp 0" values and replace with real data */}
                {/* Pemasukan value - position matches RecapHarian1 Pemasukan */}
                <div style={{
                  position: "absolute", left: 47, top: 674, width: 60, height: 14,
                  background: "white", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ color: "#73cd6c", fontSize: 7, fontWeight: 800 }}>Rp 0</span>
                </div>

                {/* Pengeluaran value - position matches RecapHarian1 Pengeluaran */}
                <div style={{
                  position: "absolute", left: 168, top: 674, width: 60, height: 14,
                  background: "white", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ color: "#ef4d4d", fontSize: 7, fontWeight: 800 }}>
                    Rp {formatRp(todayPengeluaran)}
                  </span>
                </div>

                {/* Saldo value - position matches RecapHarian1 Saldo */}
                <div style={{
                  position: "absolute", left: 296, top: 674, width: 60, height: 14,
                  background: "white", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ color: "#8c6af6", fontSize: 7, fontWeight: 800 }}>
                    Rp {formatRp(saldo)}
                  </span>
                </div>

                {/* Transparent button: "Pilih Tanggal" */}
                <button
                  style={{ position: "absolute", zIndex: 20, left: 133, top: 490, width: 128, height: 31, background: "transparent", border: "none", cursor: "pointer" }}
                  onClick={() => setSubPage("kalender")}
                />
                {/* Tab: Bulanan */}
                <button
                  style={{ position: "absolute", zIndex: 20, left: 160, top: 113, width: 73, height: 21, background: "transparent", border: "none", cursor: "pointer" }}
                  onClick={() => onTabChange("bulanan")}
                />
                {/* Tab: Tahunan */}
                <button
                  style={{ position: "absolute", zIndex: 20, left: 283, top: 113, width: 73, height: 21, background: "transparent", border: "none", cursor: "pointer" }}
                  onClick={() => onTabChange("tahunan")}
                />
              </div>
            )}

            {/* ── KALENDER: Functional interactive calendar ── */}
            {subPage === "kalender" && (
              <div style={{ position: "relative", width: W, height: H }}>
                <FunctionalCalendar onSelectDate={handleDateSelected} onBack={() => setSubPage("awal")} />
                {/* Tab: Bulanan */}
                <button
                  style={{ position: "absolute", zIndex: 20, left: 160, top: 113, width: 73, height: 21, background: "transparent", border: "none", cursor: "pointer" }}
                  onClick={() => onTabChange("bulanan")}
                />
                {/* Tab: Tahunan */}
                <button
                  style={{ position: "absolute", zIndex: 20, left: 283, top: 113, width: 73, height: 21, background: "transparent", border: "none", cursor: "pointer" }}
                  onClick={() => onTabChange("tahunan")}
                />
              </div>
            )}

            {/* ── DETAIL: Real data for selected date ── */}
            {subPage === "detail" && selectedDate && (
              <div className="recap-scroll" style={{ minHeight: H }}>
                <RecapDetailView
                  userId={userId}
                  tanggal={selectedDate}
                  saldo={saldo}
                  onTabChange={onTabChange}
                  onSelectDate={setSelectedDate}
                />
              </div>
            )}
          </div>

          {/* ── Back button ── */}
          {subPage === "detail" && (
            <button
              onClick={handleBack}
              style={{ position: "absolute", top: 20, left: 20, zIndex: 60, display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: "#8869F5", fontWeight: 700, fontSize: 13 }}
            >
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M7 1L1 6.5L7 12" stroke="#8869F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {getBackLabel()}
            </button>
          )}

          {/* ── Bottom Navbar ── */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "white", zIndex: 40 }}>
            <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, height: 49, background: "white", borderRadius: 15, boxShadow: "0px 0px 7px 1px #ede8ff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
              <button
                onClick={goToDashboard}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer", padding: 0, minWidth: 60 }}
              >
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d={PATH_DASHBOARD} fill="#C0C0C0"/>
                </svg>
                <span style={{ fontSize: 8, fontWeight: 700, color: "#C0C0C0" }}>Dashboard</span>
              </button>

              <div style={{ width: 56 }} />

              <button
                onClick={() => setSubPage("awal")}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer", padding: 0, minWidth: 60 }}
              >
                <div style={{ position: "relative" }}>
                  <svg width="14" height="18" viewBox="0 0 15 18" fill="none">
                    <path d={PATH_RECAP_1} stroke="#8869F5" strokeLinecap="square" strokeWidth="2"/>
                    <path d={PATH_RECAP_2} stroke="#8869F5" strokeWidth="2"/>
                  </svg>
                  <div style={{ position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)", width: 18, height: 2, background: "#8869F5", borderRadius: 2 }}/>
                </div>
                <span style={{ fontSize: 8, fontWeight: 700, color: "#8869F5" }}>Recap</span>
              </button>
            </div>

            {/* FAB */}
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: 28 }}>
              <div style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "white", boxShadow: "0 0 8px 4px rgba(136,105,245,0.3)" }}/>
              <button
                onClick={onAddExpense}
                style={{ position: "relative", width: 53, height: 53, background: "#8869F5", borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 4V18M4 11H18" stroke="#E9EBF8" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
