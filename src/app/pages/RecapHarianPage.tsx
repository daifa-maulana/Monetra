import { useState } from "react";
import RecapHarian1 from "@/imports/RecapHarian1/index";
import RecapHarian2 from "@/imports/RecapHarian2/index";
import RecapHarian3 from "@/imports/RecapHarian3/index";

type RecapSubPage = "awal" | "kalender" | "detail";

const W = 393;
const H = 852;

export default function RecapHarianPage({
  onBack,
  onTabChange,
  onDashboard,
  onAddExpense,
}: {
  onBack: () => void;
  onTabChange: (tab: "bulanan" | "tahunan") => void;
  onDashboard?: () => void;
  onAddExpense?: () => void;
}) {
  const [subPage, setSubPage] = useState<RecapSubPage>("awal");

  const goToDashboard = onDashboard ?? onBack;

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

  const renderContent = () => {
    if (subPage === "awal") {
      return (
        <div
          style={{ position: "relative", width: W, height: H, overflow: "hidden" }}
        >
          <RecapHarian1 />
          {/* Tab: Bulanan */}
          <button
            style={{ position: "absolute", zIndex: 20, left: 160, top: 113, width: 73, height: 21, borderRadius: 100, background: "transparent", border: "none", cursor: "pointer" }}
            onClick={() => onTabChange("bulanan")}
          />
          {/* Tab: Tahunan */}
          <button
            style={{ position: "absolute", zIndex: 20, left: 283, top: 113, width: 73, height: 21, borderRadius: 100, background: "transparent", border: "none", cursor: "pointer" }}
            onClick={() => onTabChange("tahunan")}
          />
          {/* Pilih Tanggal */}
          <button
            style={{ position: "absolute", zIndex: 20, left: 133, top: 490, width: 128, height: 31, borderRadius: 10, background: "transparent", border: "none", cursor: "pointer" }}
            onClick={() => setSubPage("kalender")}
          />
          {/* Navbar: Dashboard */}
          <button
            style={{ position: "absolute", zIndex: 20, left: 22, top: 788, width: 150, height: 49, background: "transparent", border: "none", cursor: "pointer" }}
            onClick={goToDashboard}
          />
          {/* Navbar: FAB (Plus) */}
          <button
            style={{ position: "absolute", zIndex: 20, left: 170, top: 778, width: 54, height: 54, borderRadius: "50%", background: "transparent", border: "none", cursor: "pointer" }}
            onClick={onAddExpense}
          />
          {/* Navbar: Recap */}
          <button
            style={{ position: "absolute", zIndex: 20, left: 220, top: 788, width: 150, height: 49, background: "transparent", border: "none", cursor: "pointer" }}
            onClick={() => setSubPage("awal")}
          />
        </div>
      );
    }
    if (subPage === "kalender") {
      return (
        <div style={{ position: "relative", width: W, height: H, overflow: "hidden" }}>
          <RecapHarian2 />
          {/* Click content to go to detail (ignores navbar and top header) */}
          <button
            style={{ position: "absolute", zIndex: 10, left: 0, right: 0, top: 150, bottom: 70, background: "transparent", border: "none", cursor: "pointer" }}
            onClick={() => setSubPage("detail")}
          />
          {/* Navbar: Dashboard */}
          <button
            style={{ position: "absolute", zIndex: 20, left: 22, top: 788, width: 150, height: 49, background: "transparent", border: "none", cursor: "pointer" }}
            onClick={goToDashboard}
          />
          {/* Navbar: FAB (Plus) */}
          <button
            style={{ position: "absolute", zIndex: 20, left: 170, top: 778, width: 54, height: 54, borderRadius: "50%", background: "transparent", border: "none", cursor: "pointer" }}
            onClick={onAddExpense}
          />
          {/* Navbar: Recap */}
          <button
            style={{ position: "absolute", zIndex: 20, left: 220, top: 788, width: 150, height: 49, background: "transparent", border: "none", cursor: "pointer" }}
            onClick={() => setSubPage("awal")}
          />
        </div>
      );
    }
    if (subPage === "detail") {
      return (
        <div
          style={{ position: "absolute", inset: 0, overflowY: "auto", scrollbarWidth: "none" }}
        >
          <style>{`.rh3-scroll::-webkit-scrollbar{display:none}`}</style>
          {/* Fixed parent height H so the size-full child knows its height and absolute items render */}
          <div className="rh3-scroll" style={{ position: "relative", width: W, height: 1040 }}>
            {/* Added spacer to prevent back button from overlapping header content */}
            <div style={{ height: 40 }} />
            <RecapHarian3 />
            {/* Tab: Bulanan */}
            <button
              style={{ position: "absolute", zIndex: 20, left: 160, top: 113, width: 73, height: 21, borderRadius: 100, background: "transparent", border: "none", cursor: "pointer" }}
              onClick={() => onTabChange("bulanan")}
            />
            {/* Tab: Tahunan */}
            <button
              style={{ position: "absolute", zIndex: 20, left: 283, top: 113, width: 73, height: 21, borderRadius: 100, background: "transparent", border: "none", cursor: "pointer" }}
              onClick={() => onTabChange("tahunan")}
            />
            {/* Navbar: Dashboard */}
            <button
              style={{ position: "absolute", zIndex: 20, left: 22, top: 788, width: 150, height: 49, background: "transparent", border: "none", cursor: "pointer" }}
              onClick={goToDashboard}
            />
            {/* Navbar: FAB (Plus) */}
            <button
              style={{ position: "absolute", zIndex: 20, left: 170, top: 778, width: 54, height: 54, borderRadius: "50%", background: "transparent", border: "none", cursor: "pointer" }}
              onClick={onAddExpense}
            />
            {/* Navbar: Recap */}
            <button
              style={{ position: "absolute", zIndex: 20, left: 220, top: 788, width: 150, height: 49, background: "transparent", border: "none", cursor: "pointer" }}
              onClick={() => setSubPage("awal")}
            />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#f0ecff" }}>
      <div className="relative">
        <div
          style={{ position: "relative", width: W, height: H, overflow: "hidden", borderRadius: 30, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", background: "#fdfdff" }}
        >
          {/* Back button kept inside the phone frame boundaries */}
          {subPage !== "awal" && (
            <button
              onClick={handleBack}
              className="absolute top-[20px] left-[20px] flex items-center gap-1 text-[#8869F5] font-bold text-[13px] hover:opacity-70 transition-opacity z-30"
            >
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M7 1L1 6.5L7 12" stroke="#8869F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {getBackLabel()}
            </button>
          )}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
