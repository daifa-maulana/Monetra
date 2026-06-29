import { useState } from "react";
import imgChatGptImage15Mei20261730541 from "./b919fe9e06545fa2c3d9cd48bbf119c63749fcb4.png";
import img09Db3Ec9E5B384A71344061Ddc2Ba4B91 from "./c7114843781c63f9bbda7f363d43c9f3e397e718.png";
import imgEc2106E9379302B94Bcced1Dd5Bf85B91 from "./9f83dd8858dbce9e805b0001243c2bf8459c87c8.png";
import imgJaringan from "./7f1bfa4ed2fdb4ba458095339d2992111fb9f5da.png";

const PURPLE = "#8869F5";
const PURPLE_LIGHT = "#EAE2FB";
const RED = "#EF4D4D";

function formatDisplay(raw: string): string {
  if (!raw) return "0.00";
  if (raw.includes(".")) {
    const [int, dec = ""] = raw.split(".");
    const f = int ? parseInt(int, 10).toLocaleString("id-ID") : "0";
    return f + "," + dec;
  }
  return parseInt(raw, 10).toLocaleString("id-ID");
}

const KEY_ROWS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["⌫", "0", "."],
];

type CategoryProp = {
  label: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  bg: string;
};

function NumpadKey({ label, onPress }: { label: string; onPress: (k: string) => void }) {
  const isDelete = label === "⌫";
  const isSpecial = label === "." || isDelete;
  return (
    <button
      onClick={() => onPress(label)}
      style={{
        flex: 1,
        height: 42,
        borderRadius: 10,
        border: "none",
        background: "white",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.09), 0px 1px 2px rgba(0,0,0,0.07)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 17,
        fontWeight: isSpecial ? 600 : 500,
        color: isSpecial ? PURPLE : "#1a1a1a",
        fontFamily: "inherit",
        userSelect: "none" as const,
      }}
      onPointerDown={(e) => { e.currentTarget.style.transform = "scale(0.93)"; }}
      onPointerUp={(e) => { e.currentTarget.style.transform = ""; }}
      onPointerLeave={(e) => { e.currentTarget.style.transform = ""; }}
    >
      {isDelete ? (
        <svg width="20" height="16" viewBox="0 0 22 18" fill="none">
          <path d="M8 1H20C21.1 1 22 1.9 22 3V15C22 16.1 21.1 17 20 17H8L1 9L8 1Z"
            stroke={PURPLE} strokeWidth="1.6" fill="none" strokeLinejoin="round" />
          <line x1="14" y1="6" x2="10" y2="12" stroke={PURPLE} strokeWidth="1.6" strokeLinecap="round" />
          <line x1="10" y1="6" x2="14" y2="12" stroke={PURPLE} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ) : label}
    </button>
  );
}

import { supabase } from "@/lib/supabase";

function InputForm({ onClose, onSaved, category, userId }: { onClose?: () => void; onSaved?: () => void; category?: CategoryProp; userId?: string }) {
  const CatIcon = category?.icon;
  const catLabel = category?.label ?? "Makan/minum";
  const catColor = category?.color ?? "#73CD6C";
  const catBg = category?.bg ?? "#E4F2E3";

  const [rawAmount, setRawAmount] = useState("");
  const [note, setNote] = useState("");
  const [showKeypad, setShowKeypad] = useState(false);
  const [saving, setSaving] = useState(false);

  function handleKey(k: string) {
    if (k === "⌫") { setRawAmount((p) => p.slice(0, -1)); return; }
    setRawAmount((prev) => {
      if (k === "." && prev.includes(".")) return prev;
      if (k === "." && prev === "") return "0.";
      if (prev.length >= 12) return prev;
      return prev + k;
    });
  }

  const displayAmount = formatDisplay(rawAmount);

  const handleSave = async () => {
    if (!rawAmount || !userId) return;
    const amountNum = parseFloat(rawAmount);
    if (isNaN(amountNum) || amountNum <= 0) return;

    try {
      setSaving(true);
      
      // Get rekening_id
      const { data: rekData } = await supabase
        .from("rekening")
        .select("id")
        .eq("user_id", userId)
        .limit(1);
      const rekeningId = rekData?.[0]?.id || null;

      // Get kategori_id
      // Let's resolve by name. The mockup has names like Makan/minum, Transportasi
      // Let's check with case-insensitive or exact match
      const { data: catData } = await supabase
        .from("kategori")
        .select("id")
        .eq("nama", catLabel)
        .limit(1);
      const kategoriId = catData?.[0]?.id || null;

      // Insert transaction
      const { error } = await supabase.from("transaksi").insert({
        user_id: userId,
        rekening_id: rekeningId,
        kategori_id: kategoriId,
        jumlah: amountNum,
        catatan: note || null,
        tanggal: (() => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; })(),
      });

      if (error) throw error;
      // If onSaved is provided (navigate to recap), use it; else fallback to onClose
      if (onSaved) {
        onSaved();
      } else {
        onClose?.();
      }
    } catch (err) {
      console.error("Error saving instant transaction:", err);
      alert("Gagal menyimpan transaksi");
    } finally {
      setSaving(false);
    }
  };

  return (
    // Sheet: posisi absolute dari bawah, tinggi max sudah dibatasi parent 852px
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "white",
        borderRadius: "22px 22px 0 0",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 -4px 20px rgba(136,105,245,0.12)",
        // max tinggi sheet = 852 - tinggi purple header yg terlihat (≈240px)
        maxHeight: 612,
        overflow: "hidden",
      }}
    >
      {/* Drag handle */}
      <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 4px", flexShrink: 0 }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "#E0E0E0" }} />
      </div>

      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center",
        padding: "6px 18px 10px",
        borderBottom: "1px solid #F2EEFF",
        flexShrink: 0,
      }}>
        <div style={{
          width: 30, height: 30, borderRadius: 8, background: catBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginRight: 10, flexShrink: 0,
        }}>
          {CatIcon && <CatIcon size={16} style={{ color: catColor }} />}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: PURPLE, lineHeight: 1.2 }}>{catLabel}</div>
          <div style={{ fontSize: 10, color: "rgba(0,0,0,0.45)", marginTop: 1 }}>Tambah Pengeluaran</div>
        </div>
        <button onClick={onClose} style={{
          background: "none", border: "none", cursor: "pointer",
          padding: 4, color: "rgba(0,0,0,0.4)", display: "flex", borderRadius: "50%",
        }} disabled={saving}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Jumlah Pengeluaran label */}
      <div style={{ padding: "12px 18px 6px", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        <div style={{
          width: 20, height: 20, borderRadius: 4, background: PURPLE_LIGHT,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path d="M21 12V7H5a2 2 0 010-4h14v4" stroke={PURPLE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 5v14a2 2 0 002 2h16v-5" stroke={PURPLE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 12a2 2 0 000 4h4v-4h-4z" stroke={PURPLE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a" }}>Jumlah Pengeluaran</span>
      </div>

      {/* Amount box — klik untuk munculkan keypad */}
      <div style={{ padding: "0 18px 10px", flexShrink: 0 }}>
        <button
          onClick={() => setShowKeypad(true)}
          style={{
            width: "100%", height: 52,
            borderRadius: 14,
            border: `${showKeypad ? "2px" : "1.5px"} solid ${showKeypad ? PURPLE : "#E8E1FF"}`,
            background: "white", cursor: "text",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            transition: "border-color 0.2s",
            boxShadow: showKeypad ? "0 0 0 3px rgba(136,105,245,0.11)" : "none",
          }}
          disabled={saving}
        >
          <span style={{ fontWeight: 700, fontSize: 15, color: "#7459d0" }}>Rp</span>
          <span style={{
            fontWeight: 700,
            fontSize: rawAmount ? 24 : 26,
            color: rawAmount ? RED : "#CFBFFF",
            letterSpacing: -0.5,
          }}>
            {displayAmount}
          </span>
        </button>
      </div>

      {/* Catatan */}
      <div style={{ padding: "0 18px 10px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <div style={{
            width: 18, height: 18, borderRadius: 4, background: PURPLE_LIGHT,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
                stroke={PURPLE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ fontWeight: 600, fontSize: 12, color: "#1a1a1a" }}>
            Catatan <span style={{ color: RED, fontWeight: 700 }}>(opsional)</span>
          </span>
        </div>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Tambah catatan....."
          style={{
            width: "100%", height: 34, borderRadius: 10,
            border: "1.5px solid #E8E1FF", padding: "0 12px",
            fontSize: 12, color: "#1a1a1a", fontFamily: "inherit",
            outline: "none", boxSizing: "border-box" as const, background: "white",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => {
            setShowKeypad(false);
            e.currentTarget.style.borderColor = PURPLE;
          }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "#E8E1FF"; }}
          disabled={saving}
        />
      </div>

      {/* Numpad — hanya tampil saat showKeypad true */}
      {showKeypad && (
        <div style={{
          background: "#F8F7FF",
          borderRadius: "16px 16px 0 0",
          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.04)",
          padding: "10px 14px 16px",
          display: "flex", flexDirection: "column", gap: 8,
          flexShrink: 0,
        }}>
          {KEY_ROWS.map((row, ri) => (
            <div key={ri} style={{ display: "flex", gap: 8 }}>
              {row.map((k) => <NumpadKey key={k} label={k} onPress={handleKey} />)}
            </div>
          ))}
          <button
            onClick={handleSave}
            style={{
              marginTop: 2, height: 44, borderRadius: 12, border: "none",
              background: rawAmount && !saving ? PURPLE : PURPLE_LIGHT,
              color: rawAmount && !saving ? "white" : "#BBA8F5",
              fontWeight: 700, fontSize: 13,
              cursor: rawAmount && !saving ? "pointer" : "default",
              fontFamily: "inherit",
              transition: "background 0.2s, color 0.2s",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            }}
            disabled={!rawAmount || saving}
          >
            {saving ? "Menyimpan..." : "Simpan Pengeluaran"}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {/* Tombol simpan saat keypad tidak tampil */}
      {!showKeypad && (
        <div style={{ padding: "0 14px 16px", flexShrink: 0 }}>
          <button
            onClick={handleSave}
            style={{
              width: "100%", height: 44, borderRadius: 12, border: "none",
              background: rawAmount && !saving ? PURPLE : PURPLE_LIGHT,
              color: rawAmount && !saving ? "white" : "#BBA8F5",
              fontWeight: 700, fontSize: 13,
              cursor: rawAmount && !saving ? "pointer" : "default",
              fontFamily: "inherit",
              transition: "background 0.2s, color 0.2s",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            }}
            disabled={!rawAmount || saving}
          >
            {saving ? "Menyimpan..." : "Simpan Pengeluaran"}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default function Blur({ onClose, onSaved, category, userId }: { onClose?: () => void; onSaved?: () => void; category?: CategoryProp; userId?: string }) {
  return (
    // Ikuti ukuran parent phone frame (393×852) dari App.tsx
    <div style={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      background: "white",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Purple header */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 333, background: "#8869F5", borderRadius: "0 0 20px 20px",
      }} />

      {/* Status bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 24px 0", zIndex: 10,
      }}>
        <span style={{ color: "white", fontWeight: 700, fontSize: 16 }}>10:45</span>
        <img src={imgJaringan} alt="" style={{ height: 14, opacity: 0.9 }} />
      </div>

      {/* Greeting */}
      <div style={{ position: "absolute", left: 22, top: 42 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: "white", fontWeight: 800, fontSize: 14 }}>Hello, Muja</span>
          <img src={img09Db3Ec9E5B384A71344061Ddc2Ba4B91} alt="" style={{ width: 14, height: 14, objectFit: "contain" }} />
        </div>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 9, marginTop: 2 }}>Semangat atur keuangan hari ini!</p>
      </div>

      {/* Profile avatar */}
      <div style={{ position: "absolute", right: 22, top: 36 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: "2px solid #9B86D9", overflow: "hidden" }}>
          <img src={imgEc2106E9379302B94Bcced1Dd5Bf85B91} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Saldo card */}
      <div style={{ position: "absolute", left: 22, right: 22, top: 82 }}>
        <div style={{
          position: "relative", borderRadius: 15,
          border: "1px solid #e0d5ff", overflow: "hidden",
          backdropFilter: "blur(21px)",
          background: "radial-gradient(ellipse at 8% 14%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 60%), rgba(255,255,255,0.12)",
        }}>
          <div style={{ padding: "14px 120px 10px 20px" }}>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 9, fontWeight: 500 }}>Sisa Saldo Pengeluaran</p>
            <p style={{ color: "white", fontWeight: 700, fontSize: 25, marginTop: 4, lineHeight: 1 }}>Rp 2.500.000</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 9, marginTop: 6 }}>Batas Pengeluaran Bulan Mei</p>
          </div>
          <div style={{ margin: "0 20px 12px" }}>
            <div style={{
              background: "#eae1fe", borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "8px 0", cursor: "pointer",
            }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(0,0,0,0.7)" }}>Edit Limit</span>
            </div>
          </div>
          <div style={{ position: "absolute", right: 8, top: 8, width: 110, height: 90, pointerEvents: "none" }}>
            <img src={imgChatGptImage15Mei20261730541} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        </div>
      </div>

      {/* Frosted overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 333,
        background: "rgba(255,255,255,0.20)",
        backdropFilter: "blur(2.5px)",
      }} />

      {/* Input form sheet */}
      <InputForm onClose={onClose} onSaved={onSaved} category={category} userId={userId} />
    </div>
  );
}
