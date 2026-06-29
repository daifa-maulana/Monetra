import { useRef, useEffect } from "react";
import svgPaths from "./svg-vrh57ted1p";
import imgChatGptImage14Mei202614284915 from "./945e4b2ed69c1c8b798ecf63e181e086addea369.png";
import imgChatGptImageMay152026053144Pm1 from "./f3f96c9a29ac726fc05617fbf5e5f1de9a09f760.png";

export interface CategoryData {
  nama: string;
  total: number;
  pct: number;
}

// ── Icons ──
const IconMakan = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#E8F5E9" />
    <ellipse cx="13" cy="17" rx="6" ry="2.5" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
    <path d="M7 15.5 Q7 12 13 12 Q19 12 19 15.5" stroke="#4CAF50" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <rect x="18" y="12" width="4" height="6" rx="1" stroke="#4CAF50" strokeWidth="1.3" fill="none" />
    <line x1="19.5" y1="11" x2="20.5" y2="8" stroke="#4CAF50" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const IconTransportasi = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#E3F2FD" />
    <rect x="8" y="9" width="12" height="10" rx="2" stroke="#2196F3" strokeWidth="1.5" fill="none" />
    <rect x="10" y="11" width="3" height="2.5" rx="0.5" stroke="#2196F3" strokeWidth="1" fill="none" />
    <rect x="15" y="11" width="3" height="2.5" rx="0.5" stroke="#2196F3" strokeWidth="1" fill="none" />
    <line x1="11" y1="19" x2="17" y2="19" stroke="#2196F3" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="10.5" cy="20.5" r="1.2" stroke="#2196F3" strokeWidth="1.2" fill="none" />
    <circle cx="17.5" cy="20.5" r="1.2" stroke="#2196F3" strokeWidth="1.2" fill="none" />
  </svg>
);
const IconPajak = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#FBE9E7" />
    <rect x="9" y="8" width="9" height="11" rx="1" stroke="#FF5722" strokeWidth="1.5" fill="none" />
    <path d="M15 8 L18 11" stroke="#FF5722" strokeWidth="1.2" />
    <line x1="11" y1="13" x2="16" y2="13" stroke="#FF5722" strokeWidth="1" strokeLinecap="round" />
    <line x1="11" y1="15" x2="14" y2="15" stroke="#FF5722" strokeWidth="1" strokeLinecap="round" />
    <circle cx="17.5" cy="19.5" r="3" fill="#FBE9E7" stroke="#FF5722" strokeWidth="1.3" />
    <text x="17.5" y="21" textAnchor="middle" fontSize="4" fill="#FF5722" fontWeight="bold">%</text>
  </svg>
);
const IconListrik = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#FFF8E1" />
    <circle cx="14" cy="13.5" r="4.5" stroke="#FF9800" strokeWidth="1.5" fill="none" />
    <path d="M15 10.5 L12.5 13.5 L14.2 13.5 L13 16.5 L15.5 13.5 L13.8 13.5 Z" fill="#FF9800" />
    <line x1="14" y1="7" x2="14" y2="8.2" stroke="#FF9800" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="18.5" y1="9" x2="17.6" y2="9.9" stroke="#FF9800" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="20" y1="13.5" x2="18.8" y2="13.5" stroke="#FF9800" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="9.5" y1="9" x2="10.4" y2="9.9" stroke="#FF9800" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="8" y1="13.5" x2="9.2" y2="13.5" stroke="#FF9800" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="11.5" y1="19" x2="16.5" y2="19" stroke="#FF9800" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="12" y1="20.5" x2="16" y2="20.5" stroke="#FF9800" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const IconPendidikan = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#EDE7F6" />
    <path d="M7 13 L14 10 L21 13 L14 16 Z" stroke="#7C4DFF" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <line x1="21" y1="13" x2="21" y2="17" stroke="#7C4DFF" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="21" cy="17.5" r="0.8" fill="#7C4DFF" />
  </svg>
);
const IconKesehatan = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#FCE4EC" />
    <path d="M14 20 C14 20 7 16 7 11.5 C7 9.5 8.5 8 10.5 8 C12 8 13.5 9 14 10.5 C14.5 9 16 8 17.5 8 C19.5 8 21 9.5 21 11.5 C21 16 14 20 14 20 Z" stroke="#E91E63" strokeWidth="1.5" fill="none" />
    <line x1="14" y1="10" x2="14" y2="14" stroke="#E91E63" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="12" y1="12" x2="16" y2="12" stroke="#E91E63" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const IconPulsa = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#E0F7FA" />
    <rect x="10" y="7" width="8" height="13" rx="1.5" stroke="#00BCD4" strokeWidth="1.5" fill="none" />
    <rect x="12" y="7.5" width="4" height="1" rx="0.5" fill="#00BCD4" />
    <rect x="11.5" y="16" width="1.2" height="1.5" rx="0.3" fill="#00BCD4" />
    <rect x="13.4" y="15" width="1.2" height="2.5" rx="0.3" fill="#00BCD4" />
    <rect x="15.3" y="14" width="1.2" height="3.5" rx="0.3" fill="#00BCD4" />
  </svg>
);
const IconHiburan = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#EDE8FF" />
    <circle cx="14" cy="11" r="3.5" stroke="#8869F5" strokeWidth="1.3" fill="none" />
    <path d="M13 9.5 L16 11 L13 12.5 Z" fill="#8869F5" />
    <path d="M8 15.5 Q8 13.5 14 13.5 Q20 13.5 20 15.5 Q20 19 17 19.5 L14 20 L11 19.5 Q8 19 8 15.5 Z" stroke="#8869F5" strokeWidth="1.3" fill="none" />
    <line x1="11" y1="15.5" x2="11" y2="17.5" stroke="#8869F5" strokeWidth="1" strokeLinecap="round" />
    <line x1="10" y1="16.5" x2="12" y2="16.5" stroke="#8869F5" strokeWidth="1" strokeLinecap="round" />
    <circle cx="17" cy="15.8" r="0.7" fill="#8869F5" />
    <circle cx="18.2" cy="16.8" r="0.7" fill="#8869F5" />
  </svg>
);
const IconPerawatan = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#FFF3E0" />
    <circle cx="14" cy="13" r="5" stroke="#E91E63" strokeWidth="1.5" fill="none" />
    <path d="M9 11 Q14 8 19 11" stroke="#E91E63" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M11.5 13.5 Q12.5 14.5 13 13.5" stroke="#E91E63" strokeWidth="1" fill="none" strokeLinecap="round" />
    <path d="M15 13.5 Q15.5 14.5 16.5 13.5" stroke="#E91E63" strokeWidth="1" fill="none" strokeLinecap="round" />
    <path d="M20 9 L20.5 8 L21 9 L20 9.5 Z" fill="#E91E63" />
  </svg>
);
const IconLainnya = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#ECEFF1" />
    <rect x="8" y="8" width="5" height="5" rx="1" stroke="#607D8B" strokeWidth="1.3" fill="none" />
    <rect x="15" y="8" width="5" height="5" rx="1" stroke="#607D8B" strokeWidth="1.3" fill="none" />
    <rect x="8" y="15" width="5" height="5" rx="1" stroke="#607D8B" strokeWidth="1.3" fill="none" />
    <rect x="15" y="15" width="5" height="5" rx="1" stroke="#607D8B" strokeWidth="1.3" fill="none" strokeDasharray="1.5 1" />
  </svg>
);

const getCategoryIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("makan") || n.includes("minum")) return <IconMakan />;
  if (n.includes("transport")) return <IconTransportasi />;
  if (n.includes("pajak")) return <IconPajak />;
  if (n.includes("listrik")) return <IconListrik />;
  if (n.includes("didik")) return <IconPendidikan />;
  if (n.includes("sehat")) return <IconKesehatan />;
  if (n.includes("pulsa") || n.includes("data")) return <IconPulsa />;
  if (n.includes("hibur")) return <IconHiburan />;
  if (n.includes("rawat")) return <IconPerawatan />;
  return <IconLainnya />;
};

function Group3() {
  return (
    <div className="absolute contents left-[37px] top-[113px]">
      <div className="absolute bg-[#eae1fe] h-[21.295px] left-[37px] rounded-[100px] top-[113px] w-[73px]">
        <div aria-hidden className="absolute border-[#b69eff] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[13.45px] justify-center leading-[0] left-[73px] text-[10px] text-black text-center top-[123.09px] w-[48px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Harian</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[160px] top-[113px]">
      <div className="absolute bg-[#b69eff] h-[21.295px] left-[160px] rounded-[100px] top-[113px] w-[73px]">
        <div aria-hidden className="absolute border-[#b69eff] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[13.45px] justify-center leading-[0] left-[197px] text-[10px] text-black text-center top-[123.09px] w-[48px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Bulanan</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[283px] top-[113px]">
      <div className="absolute bg-[#eae1fe] h-[21.295px] left-[283px] rounded-[100px] top-[113px] w-[73px]">
        <div aria-hidden className="absolute border-[#b69eff] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[13.45px] justify-center leading-[0] left-[320px] text-[10px] text-black text-center top-[123.09px] w-[48px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Tahunan</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[37px] top-[113px]">
      <Group3 />
      <Group2 />
      <Group1 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#fffefe] h-[147px] left-0 rounded-[30px] shadow-[0px_1px_7px_3px_rgba(182,158,255,0.17)] top-0 w-[393px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[50.5px] text-[15px] text-black text-center top-[80px] w-[47px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Recap</p>
      </div>
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[36px] top-[887px]">
      <div className="absolute left-[36px] size-[25px] top-[887px]" data-name="ChatGPT Image 14 Mei 2026, 14.28.49 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[592.59%] left-[-225.27%] max-w-none top-[-155.74%] w-[879.12%]" src={imgChatGptImage14Mei202614284915} />
        </div>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-[37px] top-[337px]">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[51.15px] text-[13px] text-center text-white top-[344px] w-[28.302px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Jan</p>
      </div>
    </div>
  );
}

function Group13({ pct }: { pct: number }) {
  return (
    <div className="absolute contents left-[69px] top-[724px]">
      <div className="absolute bg-[#e4fcee] h-[10px] left-[69px] rounded-[3px] top-[724px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[77px] text-[#0ec57e] text-[6px] text-center top-[729px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group14({ pct }: { pct: number }) {
  return (
    <div className="absolute contents left-[69px] top-[768px]">
      <div className="absolute bg-[#f1eafe] h-[10px] left-[69px] rounded-[3px] top-[768px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[77px] text-[#6b31d8] text-[6px] text-center top-[773px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group15({ pct }: { pct: number }) {
  return (
    <div className="absolute contents left-[69px] top-[812px]">
      <div className="absolute bg-[#fee9f2] h-[10px] left-[69px] rounded-[3px] top-[812px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[77px] text-[#e7267f] text-[6px] text-center top-[817px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group16({ pct }: { pct: number }) {
  return (
    <div className="absolute contents left-[69px] top-[856px]">
      <div className="absolute bg-[#eae0fd] h-[10px] left-[69px] rounded-[3px] top-[856px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[77px] text-[#6930d6] text-[6px] text-center top-[861px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group17({ pct }: { pct: number }) {
  return (
    <div className="absolute contents left-[69px] top-[900px]">
      <div className="absolute bg-[#ebf2fe] h-[10px] left-[69px] rounded-[3px] top-[900px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[77px] text-[#225aff] text-[6px] text-center top-[905px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group18({ pct }: { pct: number }) {
  return (
    <div className="absolute contents left-[69px] top-[944px]">
      <div className="absolute bg-[#eaf1fd] h-[10px] left-[69px] rounded-[3px] top-[944px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[77px] text-[#1d50fd] text-[6px] text-center top-[949px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group19({ pct }: { pct: number }) {
  return (
    <div className="absolute contents left-[69px] top-[988px]">
      <div className="absolute bg-[#ffebf1] h-[10px] left-[69px] rounded-[3px] top-[988px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[77px] text-[#f44f56] text-[6px] text-center top-[993px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group20({ pct }: { pct: number }) {
  return (
    <div className="absolute contents left-[69px] top-[1032px]">
      <div className="absolute bg-[#fdf2e9] h-[10px] left-[69px] rounded-[3px] top-[1032px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[77px] text-[#fe8512] text-[6px] text-center top-[1037px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group21({ pct }: { pct: number }) {
  return (
    <div className="absolute contents left-[69px] top-[1076px]">
      <div className="absolute bg-[#e9fcf1] h-[10px] left-[69px] rounded-[3px] top-[1076px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[77px] text-[#0fc383] text-[6px] text-center top-[1081px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group22({ pct }: { pct: number }) {
  return (
    <div className="absolute contents left-[69px] top-[1120px]">
      <div className="absolute bg-[#f4f4f7] h-[10px] left-[69px] rounded-[3px] top-[1120px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[77px] text-[#5f6983] text-[6px] text-center top-[1125px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group37() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[449px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 123">
        <g id="Group 446">
          <g id="Ellipse 4">
            <mask fill="white" id="path-1-inside-1_1_267">
              <path d={svgPaths.p32ccab80} />
            </mask>
            <path d={svgPaths.p32ccab80} fill="var(--fill-0, #8DFFC1)" mask="url(#path-1-inside-1_1_267)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
          <g id="Ellipse 5">
            <mask fill="white" id="path-2-inside-2_1_267">
              <path d={svgPaths.p1b1cd800} />
            </mask>
            <path d={svgPaths.p1b1cd800} fill="var(--fill-0, #DCCBFF)" mask="url(#path-2-inside-2_1_267)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
          <g id="Ellipse 6">
            <mask fill="white" id="path-3-inside-3_1_267">
              <path d={svgPaths.pfda0180} />
            </mask>
            <path d={svgPaths.pfda0180} fill="var(--fill-0, #FFD7D7)" mask="url(#path-3-inside-3_1_267)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
          <g id="Ellipse 7">
            <mask fill="white" id="path-4-inside-4_1_267">
              <path d={svgPaths.p247aab00} />
            </mask>
            <path d={svgPaths.p247aab00} fill="var(--fill-0, #B896FF)" mask="url(#path-4-inside-4_1_267)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
          <g id="Ellipse 8">
            <mask fill="white" id="path-5-inside-5_1_267">
              <path d={svgPaths.p2ad09b00} />
            </mask>
            <path d={svgPaths.p2ad09b00} fill="var(--fill-0, #CEE2FF)" mask="url(#path-5-inside-5_1_267)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
          <g id="Ellipse 9">
            <mask fill="white" id="path-6-inside-6_1_267">
              <path d={svgPaths.p15316900} />
            </mask>
            <path d={svgPaths.p15316900} fill="var(--fill-0, #A4C6FA)" mask="url(#path-6-inside-6_1_267)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
          <g id="Ellipse 10">
            <mask fill="white" id="path-7-inside-7_1_267">
              <path d={svgPaths.pff0d000} />
            </mask>
            <path d={svgPaths.pff0d000} fill="var(--fill-0, #FEABB0)" mask="url(#path-7-inside-7_1_267)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
          <g id="Ellipse 11">
            <mask fill="white" id="path-8-inside-8_1_267">
              <path d={svgPaths.p8db0e00} />
            </mask>
            <path d={svgPaths.p8db0e00} fill="var(--fill-0, #FFDCBC)" mask="url(#path-8-inside-8_1_267)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
          <g id="Ellipse 12">
            <mask fill="white" id="path-9-inside-9_1_267">
              <path d={svgPaths.p3eafd670} />
            </mask>
            <path d={svgPaths.p3eafd670} fill="var(--fill-0, #53D58E)" mask="url(#path-9-inside-9_1_267)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
          <g id="Ellipse 13">
            <mask fill="white" id="path-10-inside-10_1_267">
              <path d={svgPaths.p2907df00} />
            </mask>
            <path d={svgPaths.p2907df00} fill="var(--fill-0, #C3C3C3)" mask="url(#path-10-inside-10_1_267)" stroke="var(--stroke-0, white)" strokeWidth="4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents left-[82px] top-[496px]">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Black',sans-serif] font-[1000] h-[18px] justify-center leading-[0] left-[107px] text-[12px] text-black text-center top-[505px] w-[50px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">0</p>
      </div>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[82px] top-[496px]">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[12.127px] justify-center leading-[0] left-[106.92px] text-[8px] text-[rgba(67,67,67,0.79)] text-center top-[520.06px] w-[39.845px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Total</p>
      </div>
      <Group38 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents left-[45px] top-[449px]">
      <Group37 />
      <Group39 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute left-[20px] size-[20px] top-[390px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 295">
          <rect fill="var(--fill-0, #EAE2FB)" height="20" id="Rectangle 51" rx="4" width="20" />
          <path d={svgPaths.p3b3c400} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28({ pemasukan }: { pemasukan: number }) {
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[245px] top-[459px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] justify-center left-[245px] text-[#434343] text-[8px] top-[466px] w-[65px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Pemasukan</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] h-[14px] justify-center left-[245px] text-[#73cd6c] text-[12px] top-[487px] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Rp {pemasukan.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
}

function Group29({ pengeluaran }: { pengeluaran: number }) {
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[244px] top-[527px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] justify-center left-[244px] text-[#434343] text-[8px] top-[534px] w-[65px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Pengeluaran</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] h-[14px] justify-center left-[244px] text-[#ef4d4d] text-[12px] top-[555px] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Rp {pengeluaran.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p31ccdc80} fill="var(--fill-0, #73CD6C)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1a00d100} fill="var(--fill-0, #73CD6C)" id="Vector_2" />
          <path d={svgPaths.p2a37a400} fill="var(--fill-0, #73CD6C)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1e870f00} fill="var(--fill-0, #73CD6C)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[205px] top-[459px]">
      <div className="absolute bg-[#e4f2e3] left-[205px] rounded-[5px] size-[35px] top-[459px]" />
      <div className="absolute left-[211px] size-[24px] top-[465px]" data-name="healthicons:low-income-level">
        <Group />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p31ccdc80} fill="var(--fill-0, #EF4D4D)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1a00d100} fill="var(--fill-0, #EF4D4D)" id="Vector_2" />
          <path d={svgPaths.p2a37a400} fill="var(--fill-0, #EF4D4D)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1b03180} fill="var(--fill-0, #EF4D4D)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[205px] top-[527px]">
      <div className="absolute bg-[#ffdada] left-[205px] rounded-[5px] size-[35px] top-[527px]" />
      <div className="absolute left-[211px] size-[24px] top-[533px]" data-name="healthicons:low-income-level">
        <Group4 />
      </div>
    </div>
  );
}

function Group30({ pemasukan, pengeluaran }: { pemasukan: number; pengeluaran: number }) {
  return (
    <div className="absolute contents left-[196px] top-[451px]">
      <div className="absolute bg-white h-[52px] left-[197px] rounded-[10px] shadow-[0px_0px_7px_1px_#ede8ff] top-[451px] w-[152px]" />
      <div className="absolute bg-white h-[52px] left-[196px] rounded-[10px] shadow-[0px_0px_7px_1px_#ede8ff] top-[519px] w-[152px]" />
      <Group28 pemasukan={pemasukan} />
      <Group29 pengeluaran={pengeluaran} />
      <Group27 />
      <Group26 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute h-[22px] left-[45px] top-[594px] w-[22.759px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7586 22">
        <g id="Group 348">
          <ellipse cx="11.3793" cy="11" fill="var(--fill-0, #8869F5)" fillOpacity="0.3" id="Ellipse 21" rx="11.3793" ry="11" />
          <g id="basil:chart-pie-solid">
            <path d={svgPaths.p37324e00} fill="var(--fill-0, #8869F5)" id="Vector" />
            <path d={svgPaths.p2537cb00} fill="var(--fill-0, #8869F5)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group32({ insightPct }: { insightPct: number }) {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute contents leading-[0] left-[calc(50%-35px)] top-[591px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center left-[calc(50%-120.5px)] text-[#7459d0] text-[9px] top-[598px] w-[72px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Insight Bulan Ini</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[14px] justify-center left-[calc(50%-120.5px)] text-[#5b5b5b] text-[7px] top-[613px] w-[171px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Kamu mengeluarkan {insightPct}% dari total pemasukan</p>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[20px] top-[667px]">
      <div className="absolute bg-[#eae2fb] left-[20px] rounded-[4px] size-[20px] top-[667px]" />
      <div className="absolute left-[22px] size-[16px] top-[669px]" data-name="fluent:receipt-16-regular">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p3377f600} fill="var(--fill-0, #8869F5)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[20px] top-[667px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[50px] text-[13px] text-black top-[677px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Rincian Pengeluaran</p>
      </div>
      <Group24 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[22px] top-[171px]">
      <div className="absolute bg-[#8869f5] h-[137px] left-[22px] rounded-[20px] top-[171px] w-[350px]" />
      <div className="absolute backdrop-blur-[21px] border border-[#e0d5ff] border-solid h-[137px] left-[22px] rounded-[15px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] top-[171px] w-[350px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 350 137' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(34.148 12.941 -33.101 28.873 3.1482 4.076)'><stop stop-color='rgba(255,255,255,0.4)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>\")" }} />
    </div>
  );
}

function Group33({ monthName, year, totalPengeluaran }: { monthName: string; year: number; totalPengeluaran: number }) {
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[41px] text-white top-[189px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[14px] justify-center left-[41px] text-[14px] top-[196px] w-[172px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Total Pengeluaran</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center left-[42px] text-[12px] top-[218px] w-[172px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{monthName} {year}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[25px] justify-center left-[42px] text-[0px] top-[272.5px] w-[170px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="[word-break:break-word] font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] text-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Rp
          </span>
          <span className="leading-[normal] text-[32px]">{` `}</span>
          <span className="[word-break:break-word] font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] text-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            {totalPengeluaran.toLocaleString("id-ID")}
          </span>
        </p>
      </div>
    </div>
  );
}

function Group34({ monthName, year, totalPengeluaran }: { monthName: string; year: number; totalPengeluaran: number }) {
  return (
    <div className="absolute contents left-[41px] top-[189px]">
      <div className="absolute h-[94px] left-[250px] top-[193px] w-[103px]" data-name="ChatGPT Image May 15, 2026, 05_31_44 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[143.46%] left-[-57.47%] max-w-none top-[-21.73%] w-[195.4%]" src={imgChatGptImageMay152026053144Pm1} />
        </div>
      </div>
      <Group33 monthName={monthName} year={year} totalPengeluaran={totalPengeluaran} />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute left-[171px] size-[53px] top-[1174px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 53">
        <g id="Group 110">
          <circle cx="26.5" cy="26.5" fill="var(--fill-0, #8869F5)" id="Ellipse 5" r="26.5" />
          <g id="Group 68">
            <path d={svgPaths.p3fecd000} fill="var(--fill-0, #E9EBF8)" id="plus" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[58px] top-[1192px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[58px] text-[#c0c0c0] text-[8px] top-[1209px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dashboard
      </p>
      <div className="absolute inset-[95.59%_77.86%_3.21%_18.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
          <path d={svgPaths.p5c0c040} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[95.67%_20.36%_3.13%_76.08%]" data-name="Group">
      <div className="absolute inset-[-14.89%_-17.34%_-6.67%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4277 18.234">
          <g id="Group">
            <path d={svgPaths.p289ce400} id="Vector" stroke="var(--stroke-0, #8869F5)" strokeLinecap="square" strokeWidth="2" />
            <path d={svgPaths.p30e0cab2} id="Vector_2" stroke="var(--stroke-0, #8869F5)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[293px] top-[1193px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[293px] text-[#8869f5] text-[8px] top-[1211px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Recap
      </p>
      <Group5 />
    </div>
  );
}

function Group36() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[1171px]">
      <div className="absolute bg-white h-[49px] left-[22px] rounded-[15px] shadow-[0px_0px_7px_1px_#ede8ff] top-[1181px] w-[350px]" />
      <div className="-translate-x-1/2 absolute left-[calc(50%+1px)] size-[59px] top-[1171px]">
        <div className="absolute inset-[-6.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
            <g filter="url(#filter0_d_1_250)" id="Ellipse 5">
              <circle cx="33.5" cy="33.5" fill="var(--fill-0, white)" r="29.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="67" id="filter0_d_1_250" width="67" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.619608 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_250" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_250" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group8 />
      <Group12 />
      <div className="absolute h-0 left-[297px] top-[1228px] w-[18px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
            <line id="Line 6" stroke="var(--stroke-0, #8869F5)" strokeLinecap="round" strokeWidth="2" x1="1" x2="17" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <Group11 />
    </div>
  );
}

const CATEGORY_COLORS = [
  { fill: "#8DFFC1", pctColor: "#0ec57e", pctBg: "#e4fcee" },
  { fill: "#DCCBFF", pctColor: "#6b31d8", pctBg: "#f1eafe" },
  { fill: "#FFD7D7", pctColor: "#e7267f", pctBg: "#fee9f2" },
  { fill: "#B896FF", pctColor: "#6930d6", pctBg: "#eae0fd" },
  { fill: "#CEE2FF", pctColor: "#225aff", pctBg: "#ebf2fe" },
  { fill: "#A4C6FA", pctColor: "#1d50fd", pctBg: "#eaf1fd" },
  { fill: "#FEABB0", pctColor: "#f44f56", pctBg: "#ffebf1" },
  { fill: "#FFDCBC", pctColor: "#fe8512", pctBg: "#fdf2e9" },
  { fill: "#53D58E", pctColor: "#0fc383", pctBg: "#e9fcf1" },
  { fill: "#C3C3C3", pctColor: "#5f6983", pctBg: "#f4f4f7" },
];

interface CategoryData {
  nama: string;
  total: number;
  pct: number;
}

export default function RecapBulananJanuari({
  monthName = "Januari",
  year = 2026,
  totalPengeluaran = 0,
  pemasukan = 0,
  categoryData = [],
  selectedMonth = 1,
  onSelectMonthQuick,
}: {
  monthName?: string;
  year?: number;
  totalPengeluaran?: number;
  pemasukan?: number;
  categoryData?: CategoryData[];
  selectedMonth?: number;
  onSelectMonthQuick?: (month: number) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      // selectedMonth is 1-indexed, but the children also contain a <style> tag at index 0.
      // So the buttons are at indices 1 through 12.
      const selectedItem = scrollRef.current.children[selectedMonth] as HTMLElement;
      if (selectedItem) {
        scrollRef.current.scrollLeft = selectedItem.offsetLeft - scrollRef.current.offsetWidth / 2 + selectedItem.offsetWidth / 2;
      }
    }
  }, [selectedMonth]);
  const insightPct = pemasukan > 0 ? Math.round((totalPengeluaran / pemasukan) * 100) : 0;
  const totalForChart = totalPengeluaran > 0 ? totalPengeluaran : 1;
  const cx = 61.5;
  const cy = 61.5;
  const r = 54;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const segments = categoryData.slice(0, 10).map((cat, i) => {
    const frac = cat.total / totalForChart;
    const dashLen = frac * circumference;
    const color = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
    const seg = { dashLen, offset, color, frac };
    offset += dashLen;
    return seg;
  });
  const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const leftPositions = [38, 84, 130, 176, 222, 268, 314, 360, 406, 452, 498, 544];
  const visibleMonths = MONTH_LABELS.slice(0, 7);
  const visibleLeft = leftPositions.slice(0, 7);
  const catStartTop = 702;
  const rowH = 44;

  return (
    <div className="bg-[#fdfdff] overflow-clip relative rounded-[30px] size-full" data-name="Recap Bulanan Januari">
      <Group9 />

      {/* ── Total Pengeluaran header card ── */}
      <Group10 />
      <Group34 monthName={monthName} year={year} totalPengeluaran={totalPengeluaran} />

      {/* ── Horizontal month scroll bar ── */}
      <div 
        ref={scrollRef}
        className="absolute bg-white rounded-[20px] shadow-[0px_0px_10px_1px_#eae1fe] recap-m-scroll"
        style={{
          height: 42, left: 21, top: 323, width: 350,
          display: "flex", gap: 16, alignItems: "center", padding: "0 20px",
          overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth"
        }}
      >
        <style>{`.recap-m-scroll::-webkit-scrollbar{display:none}`}</style>
        {MONTH_LABELS.map((label, i) => {
          const mIdx = i + 1;
          const isSelected = mIdx === selectedMonth;
          return (
            <button
              key={label}
              onClick={() => onSelectMonthQuick?.(mIdx)}
              className="flex items-center justify-center flex-shrink-0 rounded-[10px] transition-colors"
              style={{
                width: 41,
                height: 17,
                background: isSelected ? "#eaa22c" : "transparent",
                color: isSelected ? "white" : "black",
                border: "none",
                cursor: "pointer",
                padding: 0
              }}
            >
              <span className="font-['SF_Pro:Bold',sans-serif] font-bold text-[13px] leading-[normal]">{label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Ringkasan Bulan Ini ── */}
      <Group23 />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[50px] text-[13px] text-black top-[392px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ringkasan Bulan Ini
      </p>
      {/* White card background first */}
      <div className="-translate-x-1/2 absolute bg-white h-[214px] left-1/2 rounded-[15px] shadow-[0px_0px_7px_1px_#ede8ff] top-[423px] w-[353px]" />

      {/* Donut chart on top of card */}
      <div className="-translate-x-1/2 absolute" style={{ left: "calc(50% - 90px)", top: 449, width: 123, height: 123 }}>
        {categoryData.length > 0 ? (
          <svg width="123" height="123" viewBox="0 0 123 123" fill="none">
            {segments.map((seg, i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={CATEGORY_COLORS[i % CATEGORY_COLORS.length].fill}
                strokeWidth="12"
                strokeDasharray={`${seg.dashLen} ${circumference - seg.dashLen}`}
                strokeDashoffset={-(seg.offset)}
                transform={`rotate(-90 ${cx} ${cy})`}
                strokeLinecap="butt"
              />
            ))}
            <circle cx={cx} cy={cy} r={r - 7} fill="white" />
          </svg>
        ) : (
          <svg width="123" height="123" viewBox="0 0 123 123" fill="none">
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e0e0e0" strokeWidth="12" />
            <circle cx={cx} cy={cy} r={r - 7} fill="white" />
          </svg>
        )}
      </div>

      {/* Center label inside donut */}
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Black',sans-serif] font-[1000] h-[18px] justify-center leading-[0] text-[12px] text-black text-center"
        style={{ left: 107, top: 505, width: 80, fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Rp {(totalPengeluaran / 1000).toLocaleString("id-ID")}k</p>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[12px] justify-center leading-[0] text-[8px] text-center"
        style={{ left: 106.92, top: 520.06, width: 50, color: "rgba(67,67,67,0.79)", fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Pengeluaran</p>
      </div>

      {/* Pemasukan / Pengeluaran cards */}
      <Group30 pemasukan={pemasukan} pengeluaran={totalPengeluaran} />

      {/* Insight section */}
      <div className="-translate-x-1/2 absolute bg-[#f3f0fe] h-[37px] left-[calc(50%+0.5px)] rounded-[10px] top-[587px] w-[330px]" />
      <Group31 />
      <Group32 insightPct={insightPct} />

      {/* ── Rincian Pengeluaran section ── */}
      <Group25 />

      {/* Dynamic category list */}
      {categoryData.slice(0, 10).map((cat, i) => {
        const top = catStartTop + i * rowH;
        const color = CATEGORY_COLORS[i % CATEGORY_COLORS.length];
        return (
          <div key={cat.nama}>
            <div
              className="absolute bg-white rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff]"
              style={{ height: 39, left: 21, top, width: 350 }}
            />
            {/* Dynamic Icon (SVG) */}
            <div
              className="absolute"
              style={{
                left: 33,
                top: top + 5.5,
              }}
            >
              {getCategoryIcon(cat.nama)}
            </div>
            {/* Category name */}
            <div
              className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black w-[156px]"
              style={{ top: top + 8, fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[normal]">{cat.nama}</p>
            </div>
            {/* Color badge (Percentage) */}
            <div
              className="absolute rounded-[3px] flex items-center justify-center font-['SF_Pro:Semibold',sans-serif] font-[590] text-[6px]"
              style={{
                width: 24,
                height: 10,
                left: 70,
                top: top + 23,
                background: color.pctBg,
                color: color.pctColor,
                fontVariationSettings: '"wdth" 100'
              }}
            >
              {cat.pct}%
            </div>
            {/* Amount */}
            <div
              className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[349px] text-[10px] text-black text-right w-[156px]"
              style={{ top: top + 19.5, fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[normal]">Rp {cat.total.toLocaleString("id-ID")}</p>
            </div>
          </div>
        );
      })}

      {categoryData.length === 0 && (
        <div
          className="absolute bg-white rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] flex items-center justify-center"
          style={{ height: 39, left: 21, top: catStartTop, width: 350 }}
        >
          <p className="text-[10px] text-gray-400">Tidak ada transaksi bulan ini</p>
        </div>
      )}
    </div>
  );
}
