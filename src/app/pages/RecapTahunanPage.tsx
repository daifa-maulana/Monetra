import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import RecapTahunan1 from "@/imports/RecapTahunan1/index";
import RecapTahunan2 from "@/imports/RecapTahunan2/index";
import RecapTahunan4 from "@/imports/RecapTahunan4/index";

type RecapSubPage = "awal" | "kalender" | "detail";

const W = 393;
const H = 852;

const PATH_DASHBOARD = "M0 13.2857V5.57143C0 5.3 0.0621248 5.04286 0.186375 4.8C0.310625 4.55714 0.481833 4.35714 0.7 4.2L5.95 0.342857C6.25625 0.114286 6.60625 0 7 0C7.39375 0 7.74375 0.114286 8.05 0.342857L13.3 4.2C13.5187 4.35714 13.6902 4.55714 13.8145 4.8C13.9387 5.04286 14.0006 5.3 14 5.57143V13.2857C14 13.7571 13.8285 14.1609 13.4855 14.4969C13.1425 14.8329 12.7307 15.0006 12.25 15H9.625C9.37708 15 9.16941 14.9177 9.002 14.7531C8.83458 14.5886 8.75058 14.3851 8.75 14.1429V9.85714C8.75 9.61428 8.666 9.41085 8.498 9.24685C8.33 9.08285 8.12233 9.00057 7.875 9H6.125C5.87708 9 5.66942 9.08228 5.502 9.24685C5.33458 9.41143 5.25058 9.61485 5.25 9.85714V14.1429C5.25 14.3857 5.166 14.5894 4.998 14.754C4.83 14.9186 4.62233 15.0006 4.375 15H1.75C1.26875 15 0.856916 14.8323 0.5145 14.4969C0.172083 14.1614 0.000583333 13.7577 0 13.2857Z";
const PATH_RECAP_1 = "M4.5493 6.5761H8.09859M4.5493 9.73399H10.8592M4.5493 12.8919H8.49296M14.4085 9.73399V17.234H1V2.23399H8.09859";
const PATH_RECAP_2 = "M13.2253 2.43152L13.7774 3.6552L15 4.20783L13.7774 4.76046L13.2253 5.98415L12.6732 4.76046L11.4507 4.20783L12.6732 3.6552L13.2253 2.43152Z";

export default function RecapTahunanPage({
  onBack,
  onTabChange,
  onDashboard,
  onAddExpense,
  userId,
}: {
  onBack: () => void;
  onTabChange: (tab: "harian" | "bulanan") => void;
  onDashboard?: () => void;
  onAddExpense?: () => void;
  userId?: string;
  onNavigateToMonth?: (month: number, year: number) => void;
}) {
  const [subPage, setSubPage] = useState<RecapSubPage>("awal");
  const goToDashboard = onDashboard ?? onBack;

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [monthlyTotals, setMonthlyTotals] = useState<number[]>(Array(12).fill(0));
  const [totalPemasukan, setTotalPemasukan] = useState(0);

  useEffect(() => {
    if (!userId || subPage !== "detail") return;

    let cancelled = false;
    async function fetchYearData() {
      try {
        // 1. Fetch Pemasukan
        const { data: rekeningData } = await supabase
          .from("rekening")
          .select("saldo")
          .eq("user_id", userId)
          .single();
        if (!cancelled) setTotalPemasukan(rekeningData?.saldo ?? 0);

        // 2. Fetch Pengeluaran for selected year
        const startDate = `${selectedYear}-01-01`;
        const endDate = `${selectedYear}-12-31`;

        const { data: txData } = await supabase
          .from("transaksi")
          .select("jumlah, tanggal")
          .eq("user_id", userId)
          .gte("tanggal", startDate)
          .lte("tanggal", endDate);

        if (cancelled) return;

        const totals = Array(12).fill(0);
        if (txData) {
          for (const tx of txData) {
            // tanggal format is YYYY-MM-DD
            const monthStr = tx.tanggal.split("-")[1];
            if (monthStr) {
              const monthIdx = parseInt(monthStr, 10) - 1; // 0-11
              totals[monthIdx] += (tx.jumlah ?? 0);
            }
          }
        }
        setMonthlyTotals(totals);
      } catch (err) {
        console.error("Error fetching recap tahunan:", err);
      }
    }

    fetchYearData();
    return () => { cancelled = true; };
  }, [userId, subPage, selectedYear]);

  const handleBack = () => {
    if (subPage === "detail") { setSubPage("kalender"); return; }
    if (subPage === "kalender") { setSubPage("awal"); return; }
    onBack();
  };

  const getBackLabel = () => {
    if (subPage === "detail") return "Kembali ke Kalender";
    if (subPage === "kalender") return "Kembali ke Recap Tahunan";
    return "Dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#f0ecff" }}>
      <div>
        <div style={{ position: "relative", width: W, height: H, overflow: "hidden", borderRadius: 30, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", background: "#fdfdff" }}>

          {/* ── Scrollable content area ── */}
          <div style={{ position: "absolute", inset: 0, bottom: 80, overflowY: subPage === "detail" ? "auto" : "hidden", scrollbarWidth: "none" }}>
            <style>{`.recap-t-scroll::-webkit-scrollbar{display:none}`}</style>

            {subPage === "awal" && (
              <div style={{ position: "relative", width: W, height: H }}>
                <RecapTahunan1 />
                <button style={{ position: "absolute", zIndex: 20, left: 37, top: 113, width: 73, height: 21, background: "transparent", border: "none", cursor: "pointer" }} onClick={() => onTabChange("harian")} />
                <button style={{ position: "absolute", zIndex: 20, left: 160, top: 113, width: 73, height: 21, background: "transparent", border: "none", cursor: "pointer" }} onClick={() => onTabChange("bulanan")} />
                <button style={{ position: "absolute", zIndex: 20, left: 133, top: 490, width: 128, height: 31, background: "transparent", border: "none", cursor: "pointer" }} onClick={() => setSubPage("kalender")} />
              </div>
            )}

            {subPage === "kalender" && (
              <div style={{ position: "relative", width: W, height: H }}>
                <RecapTahunan2
                  onConfirm={(year) => {
                    setSelectedYear(year);
                    setSubPage("detail");
                  }}
                  onBack={handleBack}
                  onDashboard={goToDashboard}
                  onRecap={() => setSubPage("awal")}
                />
              </div>
            )}

            {subPage === "detail" && (
              <div className="recap-t-scroll" style={{ position: "relative", width: W, height: 1340 }}>
                <RecapTahunan4
                  year={selectedYear}
                  monthlyTotals={monthlyTotals}
                  totalPemasukan={totalPemasukan}
                  onMonthClick={(month) => onNavigateToMonth?.(month, selectedYear)}
                />
                <button style={{ position: "absolute", zIndex: 20, left: 37, top: 113, width: 73, height: 21, background: "transparent", border: "none", cursor: "pointer" }} onClick={() => onTabChange("harian")} />
                <button style={{ position: "absolute", zIndex: 20, left: 160, top: 113, width: 73, height: 21, background: "transparent", border: "none", cursor: "pointer" }} onClick={() => onTabChange("bulanan")} />
              </div>
            )}
          </div>

          {/* ── Back button ── */}
          {subPage !== "awal" && (
            <button
              onClick={handleBack}
              style={{ position: "absolute", top: 20, left: 20, zIndex: 60, display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: "#8869F5", fontWeight: 700, fontSize: 13 }}
            >
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M7 1L1 6.5L7 12" stroke="#8869F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {getBackLabel()}
            </button>
          )}

          {/* ── Bottom Navbar ── */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "white", zIndex: 40 }}>
            <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, height: 49, background: "white", borderRadius: 15, boxShadow: "0px 0px 7px 1px #ede8ff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
              <button onClick={goToDashboard} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer", padding: 0, minWidth: 60 }}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d={PATH_DASHBOARD} fill="#C0C0C0" />
                </svg>
                <span style={{ fontSize: 8, fontWeight: 700, color: "#C0C0C0" }}>Dashboard</span>
              </button>
              <div style={{ width: 56 }} />
              <button onClick={() => setSubPage("awal")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer", padding: 0, minWidth: 60 }}>
                <div style={{ position: "relative" }}>
                  <svg width="14" height="18" viewBox="0 0 15 18" fill="none">
                    <path d={PATH_RECAP_1} stroke="#8869F5" strokeLinecap="square" strokeWidth="2" />
                    <path d={PATH_RECAP_2} stroke="#8869F5" strokeWidth="2" />
                  </svg>
                  <div style={{ position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)", width: 18, height: 2, background: "#8869F5", borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 8, fontWeight: 700, color: "#8869F5" }}>Recap</span>
              </button>
            </div>
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: 28 }}>
              <div style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "white", boxShadow: "0 0 8px 4px rgba(136,105,245,0.3)" }} />
              <button onClick={onAddExpense} style={{ position: "relative", width: 53, height: 53, background: "#8869F5", borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 4V18M4 11H18" stroke="#E9EBF8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
