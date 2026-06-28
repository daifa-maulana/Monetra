import { useState } from "react";
import RecapHarian1 from "@/imports/RecapHarian1/index";
import RecapHarian2 from "@/imports/RecapHarian2/index";
import RecapHarian3 from "@/imports/RecapHarian3/index";

type RecapSubPage = "awal" | "kalender" | "detail";

export default function RecapHarianPage({
  onBack,
  onTabChange,
}: {
  onBack: () => void;
  onTabChange: (tab: "bulanan" | "tahunan") => void;
}) {
  const [subPage, setSubPage] = useState<RecapSubPage>("awal");

  const renderContent = () => {
    if (subPage === "awal") {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <RecapHarian1 />
          {/* Tab: Bulanan */}
          <button
            className="absolute z-20 rounded-[100px]"
            style={{ left: 160, top: 113, width: 73, height: 21 }}
            onClick={() => onTabChange("bulanan")}
            title="Recap Bulanan"
          />
          {/* Tab: Tahunan */}
          <button
            className="absolute z-20 rounded-[100px]"
            style={{ left: 283, top: 113, width: 73, height: 21 }}
            onClick={() => onTabChange("tahunan")}
            title="Recap Tahunan"
          />
          {/* Pilih Tanggal */}
          <button
            className="absolute z-20 rounded-[10px]"
            style={{ left: 133, top: 490, width: 128, height: 31 }}
            onClick={() => setSubPage("kalender")}
            title="Pilih Tanggal"
          />
        </div>
      );
    }
    if (subPage === "kalender") {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <RecapHarian2 />
          <button
            className="absolute z-20 inset-0"
            onClick={() => setSubPage("detail")}
            title="Pilih Tanggal"
          />
        </div>
      );
    }
    if (subPage === "detail") {
      return (
        <div
          className="absolute inset-0 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`.rh3-scroll::-webkit-scrollbar{display:none}`}</style>
          <div className="rh3-scroll" style={{ width: 393, position: "relative" }}>
            <RecapHarian3 />
          </div>
        </div>
      );
    }
    return null;
  };

  const getBackLabel = () => {
    if (subPage === "detail") return "Kembali ke Kalender";
    if (subPage === "kalender") return "Kembali ke Recap Harian";
    return "Dashboard";
  };

  const handleBack = () => {
    if (subPage === "detail") { setSubPage("kalender"); return; }
    if (subPage === "kalender") { setSubPage("awal"); return; }
    onBack();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#f0ecff" }}>
      <div className="relative">
        <button
          onClick={handleBack}
          className="absolute -top-10 left-0 flex items-center gap-1 text-[#8869F5] font-bold text-[13px] hover:opacity-70 transition-opacity z-10"
        >
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M7 1L1 6.5L7 12" stroke="#8869F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {getBackLabel()}
        </button>

        <div
          className="relative overflow-hidden rounded-[30px] shadow-2xl bg-[#fdfdff]"
          style={{ width: 393, height: 852 }}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
