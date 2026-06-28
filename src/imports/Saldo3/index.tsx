import svgPaths from "./svg-7679w71e06";
import imgChatGptImage15Mei20261730541 from "./b919fe9e06545fa2c3d9cd48bbf119c63749fcb4.png";

function WeuiArrowFilled() {
  return (
    <div className="absolute h-[12px] left-[210px] top-[137px] w-[6px]" data-name="weui:arrow-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 12">
        <g id="weui:arrow-filled">
          <path clipRule="evenodd" d={svgPaths.p2b9b580} fill="var(--fill-0, black)" fillOpacity="0.7" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[133px] top-[136px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[148px] text-[12px] text-[rgba(0,0,0,0.7)] top-[136px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Edit Limit
      </p>
      <WeuiArrowFilled />
      <div className="absolute inset-[69.54%_58.62%_24.87%_38.22%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p1048f300} fill="var(--fill-0, black)" fillOpacity="0.7" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_0_6.09%_0]">
      <div className="absolute backdrop-blur-[21px] border border-[#e0d5ff] border-solid inset-[0_0_6.09%_0] rounded-[15px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 348 185' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(33.953 17.476 -32.911 38.989 3.1302 5.5041)'><stop stop-color='rgba(255,255,255,0.4)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>\")" }} />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] inset-[9.14%_65.23%_85.28%_5.46%] leading-[normal] text-[9px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Sisa Saldo Pengeluaran
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold inset-[19.29%_47.99%_65.48%_5.46%] leading-[normal] text-[25px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Rp 2.500.000
      </p>
      <div className="absolute aspect-[177/139] left-1/2 right-[7.18%] top-[22px]" data-name="ChatGPT Image 15 Mei 2026, 17.30.54 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[159.71%] left-[-55.93%] max-w-none top-[-28.06%] w-[188.14%]" src={imgChatGptImage15Mei20261730541} />
        </div>
      </div>
      <div className="absolute bg-[#eae1fe] inset-[62.44%_12.64%_17.26%_12.64%] rounded-[15px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.25)]" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] inset-[41.12%_58.33%_53.3%_5.46%] leading-[normal] text-[9px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Batas Pengeluaran Bulan Mei
      </p>
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[5px] left-[161px] top-[190px] w-[25px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 5">
        <g id="Group 417">
          <circle cx="22.5" cy="2.5" fill="var(--fill-0, #C0C0C0)" id="Ellipse 25" r="2.5" />
          <line id="Line 26" stroke="var(--stroke-0, #C2AFFF)" strokeLinecap="round" strokeWidth="5" x1="2.5" x2="15.5" y1="2.5" y2="2.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Saldo() {
  return (
    <div className="relative size-full" data-name="Saldo 3">
      <Group />
      <Group1 />
    </div>
  );
}