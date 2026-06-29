import { createContext, useContext } from 'react';
import svgPaths from "./svg-yyox7zj3b4";
import imgChatGptImageMay152026053144Pm1 from "./f3f96c9a29ac726fc05617fbf5e5f1de9a09f760.png";

export const RecapDataContext = createContext({
  year: 2026,
  monthlyTotals: Array(12).fill(0) as number[],
  totalPemasukan: 0,
  onMonthClick: (month: number) => {},
});

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
      <div className="absolute bg-[#eae1fe] h-[21.295px] left-[160px] rounded-[100px] top-[113px] w-[73px]">
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
      <div className="absolute bg-[#b69eff] h-[21.295px] left-[283px] rounded-[100px] top-[113px] w-[73px]">
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

function Group8() {
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

function Group62() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const text = total > 0 ? `${(total / 1000).toLocaleString("id-ID")}k` : "0";
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[80px] text-center top-[497px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[12.127px] justify-center left-[106.92px] text-[8px] text-[rgba(67,67,67,0.79)] top-[514.06px] w-[39.845px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Total</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Black',sans-serif] font-[1000] h-[10.763px] justify-center left-[106.52px] text-[12px] text-black top-[502.38px] w-[53.044px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[80px] top-[497px]">
      <Group62 />
    </div>
  );
}

function Group30() {
  const { totalPemasukan } = useContext(RecapDataContext);
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[244px] top-[449px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] justify-center left-[244px] text-[#434343] text-[8px] top-[456px] w-[65px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Pemasukan</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] h-[14px] justify-center left-[244px] text-[#73cd6c] text-[12px] top-[477px] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Rp {totalPemasukan.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
}

function Group31() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const totalPengeluaran = monthlyTotals.reduce((a, b) => a + b, 0);
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[243px] top-[517px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] justify-center left-[243px] text-[#434343] text-[8px] top-[524px] w-[65px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Pengeluaran</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] h-[14px] justify-center left-[243px] text-[#ef4d4d] text-[12px] top-[545px] w-[96px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Rp {totalPengeluaran.toLocaleString("id-ID")}</p>
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

function Group29() {
  return (
    <div className="absolute contents left-[204px] top-[449px]">
      <div className="absolute bg-[#e4f2e3] left-[204px] rounded-[5px] size-[35px] top-[449px]" />
      <div className="absolute left-[210px] size-[24px] top-[455px]" data-name="healthicons:low-income-level">
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

function Group28() {
  return (
    <div className="absolute contents left-[204px] top-[517px]">
      <div className="absolute bg-[#ffdada] left-[204px] rounded-[5px] size-[35px] top-[517px]" />
      <div className="absolute left-[210px] size-[24px] top-[523px]" data-name="healthicons:low-income-level">
        <Group4 />
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[195px] top-[441px]">
      <div className="absolute bg-white h-[52px] left-[196px] rounded-[10px] shadow-[0px_0px_7px_1px_#ede8ff] top-[441px] w-[152px]" />
      <div className="absolute bg-white h-[52px] left-[195px] rounded-[10px] shadow-[0px_0px_7px_1px_#ede8ff] top-[509px] w-[152px]" />
      <Group30 />
      <Group31 />
      <Group29 />
      <Group28 />
    </div>
  );
}

function Group33() {
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

function Group34() {
  const { monthlyTotals, totalPemasukan } = useContext(RecapDataContext);
  const totalPengeluaran = monthlyTotals.reduce((a, b) => a + b, 0);
  const insightPct = totalPemasukan > 0 ? Math.round((totalPengeluaran / totalPemasukan) * 100) : 0;
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute contents leading-[0] left-[calc(50%-35px)] top-[591px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center left-[calc(50%-120.5px)] text-[#7459d0] text-[9px] top-[598px] w-[81px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Insight Tahun Ini</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-[14px] justify-center left-[calc(50%-120.5px)] text-[#5b5b5b] text-[7px] top-[613px] w-[171px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Kamu mengeluarkan {insightPct}% dari total pemasukan</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[22px] top-[171px]">
      <div className="absolute bg-[#8869f5] h-[137px] left-[22px] rounded-[20px] top-[171px] w-[350px]" />
      <div className="absolute backdrop-blur-[21px] border border-[#e0d5ff] border-solid h-[137px] left-[22px] rounded-[15px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] top-[171px] w-[350px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 350 137' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(34.148 12.941 -33.101 28.873 3.1482 4.076)'><stop stop-color='rgba(255,255,255,0.4)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>\")" }} />
    </div>
  );
}

function Group35() {
  const { year, monthlyTotals } = useContext(RecapDataContext);
  const totalPengeluaran = monthlyTotals.reduce((a, b) => a + b, 0);
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] left-[41px] text-white top-[189px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[14px] justify-center left-[41px] text-[14px] top-[196px] w-[172px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Total Pengeluaran</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center left-[42px] text-[12px] top-[218px] w-[172px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{year}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[25px] justify-center left-[42px] text-[0px] top-[272.5px] w-[189px]" style={{ fontVariationSettings: '"wdth" 100' }}>
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

function Group36() {
  return (
    <div className="absolute contents left-[41px] top-[189px]">
      <div className="absolute h-[94px] left-[250px] top-[193px] w-[103px]" data-name="ChatGPT Image May 15, 2026, 05_31_44 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[143.46%] left-[-57.47%] max-w-none top-[-21.73%] w-[195.4%]" src={imgChatGptImageMay152026053144Pm1} />
        </div>
      </div>
      <Group35 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute left-[20px] size-[20px] top-[390px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 295">
          <rect fill="var(--fill-0, #EAE2FB)" height="20" id="Rectangle 51" rx="4" width="20" />
          <path d={svgPaths.p1ff1faf0} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[22px] top-[667px]">
      <div className="absolute bg-[#eae2fb] left-[22px] rounded-[4px] size-[20px] top-[667px]" />
      <div className="absolute left-[24px] size-[16px] top-[669px]" data-name="fluent:receipt-16-regular">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p3377f600} fill="var(--fill-0, #8869F5)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[22px] top-[667px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[52px] text-[13px] text-black top-[677px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Rincian Pengeluaran</p>
      </div>
      <Group26 />
    </div>
  );
}

function Group13() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[0] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[724px]">
      <div className="absolute bg-[#eeecfd] h-[10px] left-[70px] rounded-[3px] top-[724px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#896aed] text-[6px] text-center top-[729px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group14() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[10] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[1164px]">
      <div className="absolute bg-[#d4c9fa] h-[10px] left-[70px] rounded-[3px] top-[1164px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#4d359a] text-[6px] text-center top-[1169px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group15() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[1] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[768px]">
      <div className="absolute bg-[#fde8ef] h-[10px] left-[70px] rounded-[3px] top-[768px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#fd6795] text-[6px] text-center top-[773px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group16() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[11] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[1208px]">
      <div className="absolute bg-[#eeb9c9] h-[10px] left-[70px] rounded-[3px] top-[1208px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#bd345e] text-[6px] text-center top-[1213px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group17() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[2] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[812px]">
      <div className="absolute bg-[#e4f8ea] h-[10px] left-[70px] rounded-[3px] top-[812px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#73d283] text-[6px] text-center top-[817px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group18() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[3] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[856px]">
      <div className="absolute bg-[#fef6e2] h-[10px] left-[70px] rounded-[3px] top-[856px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#fddc74] text-[6px] text-center top-[861px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group19() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[4] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[900px]">
      <div className="absolute bg-[#e4f2fe] h-[10px] left-[70px] rounded-[3px] top-[900px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#8bcafe] text-[6px] text-center top-[905px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group20() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[5] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[944px]">
      <div className="absolute bg-[#eae3ff] h-[10px] left-[70px] rounded-[3px] top-[944px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#c2afff] text-[6px] text-center top-[949px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group21() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[6] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[988px]">
      <div className="absolute bg-[#ffe6ee] h-[10px] left-[70px] rounded-[3px] top-[988px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#f7abc2] text-[6px] text-center top-[993px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group22() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[7] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[1033px]">
      <div className="absolute bg-[#e7ffeb] h-[10px] left-[70px] rounded-[3px] top-[1033px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#92e6a0] text-[6px] text-center top-[1038px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group23() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[8] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[1078px]">
      <div className="absolute bg-[#fffae8] h-[10px] left-[70px] rounded-[3px] top-[1078px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#ffe288] text-[6px] text-center top-[1083px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group24() {
  const { monthlyTotals } = useContext(RecapDataContext);
  const total = monthlyTotals.reduce((a, b) => a + b, 0);
  const pct = total > 0 ? Math.round((monthlyTotals[9] / total) * 100) : 0;
  return (
    <div className="absolute contents left-[70px] top-[1120px]">
      <div className="absolute bg-[#dcefff] h-[10px] left-[70px] rounded-[3px] top-[1120px] w-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[6px] justify-center leading-[0] left-[78px] text-[#98d0ff] text-[6px] text-center top-[1125px] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{pct}%</p>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[712px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 393">
          <circle cx="10" cy="10" fill="var(--fill-0, #EEECFD)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #896AED)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #896AED)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[756px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 377">
          <circle cx="10" cy="10" fill="var(--fill-0, #FDE8EF)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #FD6795)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #FD6795)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[800px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 378">
          <circle cx="10" cy="10" fill="var(--fill-0, #E4F8EA)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #73D283)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #73D283)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[1020px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 388">
          <circle cx="10" cy="10" fill="var(--fill-0, #E7FFEB)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #A8F0B4)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #A8F0B4)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[844px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 379">
          <circle cx="10" cy="10" fill="var(--fill-0, #FEF6E2)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #FDDC74)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #FDDC74)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[1064px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 389">
          <circle cx="10" cy="10" fill="var(--fill-0, #FFFAE9)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #FFE8A0)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #FFE8A0)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[888px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 380">
          <circle cx="10" cy="10" fill="var(--fill-0, #E4F2FE)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #8BCAFE)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #8BCAFE)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[1108px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 390">
          <circle cx="10" cy="10" fill="var(--fill-0, #DCEFFF)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #B0DBFF)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #B0DBFF)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[932px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 381">
          <circle cx="10" cy="10" fill="var(--fill-0, #EAE3FF)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #C2AFFF)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #C2AFFF)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[1152px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 391">
          <circle cx="10" cy="10" fill="var(--fill-0, #D5C9FA)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #4D359A)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #4D359A)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[976px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 382">
          <circle cx="10" cy="10" fill="var(--fill-0, #FFE6EE)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #F7ABC2)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #F7ABC2)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute left-[36px] size-[20px] top-[1196px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 392">
          <circle cx="10" cy="10" fill="var(--fill-0, #EEB9C9)" id="Ellipse 13" r="10" />
          <g id="Group 375">
            <path d={svgPaths.pddd0780} fill="var(--fill-0, #BD345E)" id="Vector" />
            <path d={svgPaths.p8fa8500} fill="var(--fill-0, #BD345E)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[713px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[757px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[801px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[845px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[889px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[933px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[977px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[1021px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[1065px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[1109px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[1153px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute left-[342px] size-[17px] top-[1197px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Group 456">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, #EAE1FE)" fillOpacity="0.7" id="Ellipse 10" r="8.5" transform="rotate(180 8.5 8.5)" />
          <path d={svgPaths.p2da60e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute left-[171px] size-[53px] top-[1264px]">
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
    <div className="absolute contents left-[58px] top-[1282px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[58px] text-[#c0c0c0] text-[8px] top-[1299px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dashboard
      </p>
      <div className="absolute inset-[95.46%_77.86%_3.43%_18.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
          <path d={svgPaths.p5c0c040} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[95.53%_20.36%_3.35%_76.08%]" data-name="Group">
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
    <div className="absolute contents left-[293px] top-[1283px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[293px] text-[#8869f5] text-[8px] top-[1301px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Recap
      </p>
      <Group5 />
    </div>
  );
}

function Group49() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[1261px]">
      <div className="absolute bg-white h-[49px] left-[22px] rounded-[15px] shadow-[0px_0px_7px_1px_#ede8ff] top-[1271px] w-[350px]" />
      <div className="-translate-x-1/2 absolute left-[calc(50%+1px)] size-[59px] top-[1261px]">
        <div className="absolute inset-[-6.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
            <g filter="url(#filter0_d_1_330)" id="Ellipse 5">
              <circle cx="33.5" cy="33.5" fill="var(--fill-0, white)" r="29.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="67" id="filter0_d_1_330" width="67" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.619608 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_330" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_330" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group7 />
      <Group12 />
      <div className="absolute h-0 left-[297px] top-[1318px] w-[18px]">
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

export default function RecapTahunan4({
  year = 2026,
  monthlyTotals = Array(12).fill(0),
  totalPemasukan = 0,
  onMonthClick,
}: {
  year?: number;
  monthlyTotals?: number[];
  totalPemasukan?: number;
  onMonthClick?: (month: number) => void;
}) {
  const formatRp = (n) => "Rp " + (n || 0).toLocaleString('id-ID');
  const ARROW_TOPS = [713, 757, 801, 845, 889, 933, 977, 1021, 1065, 1109, 1153, 1197];

  return (
    <RecapDataContext.Provider value={{ year, monthlyTotals, totalPemasukan, onMonthClick }}>
      <div className="bg-[#fdfdff] overflow-clip relative rounded-[30px] size-full" data-name="Recap Tahunan 4">
      <Group8 />
      <div className="-translate-x-1/2 absolute bg-white h-[42px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_10px_1px_#eae1fe] top-[323px] w-[350px]" />
      <div className="-translate-x-1/2 absolute bg-white h-[214px] left-1/2 rounded-[15px] shadow-[0px_0px_7px_1px_#ede8ff] top-[423px] w-[353px]" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[50px] text-[13px] text-black top-[392px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ringkasan Tahun Ini
      </p>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute bottom-[72.58%] left-1/2 right-[24.76%] top-[0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0505 33.5337">
            <g id="Ellipse 4">
              <mask fill="white" id="path-1-inside-1_1_444">
                <path d={svgPaths.p63b4e00} />
              </mask>
              <path d={svgPaths.p63b4e00} fill="var(--fill-0, #896AED)" mask="url(#path-1-inside-1_1_444)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[0.13%_49.68%_72.67%_25.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0929 33.4639">
            <g id="Ellipse 24">
              <mask fill="white" id="path-1-inside-1_1_456">
                <path d={svgPaths.p13ef3b80} />
              </mask>
              <path d={svgPaths.p13ef3b80} fill="var(--fill-0, #BD345E)" mask="url(#path-1-inside-1_1_456)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[24.04%_72.37%_50.51%_0.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.7035 31.3023">
            <g id="Ellipse 22">
              <mask fill="white" id="path-1-inside-1_1_458">
                <path d={svgPaths.p88fe100} />
              </mask>
              <path d={svgPaths.p88fe100} fill="var(--fill-0, #B0DBFF)" mask="url(#path-1-inside-1_1_458)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[71.79%_22.23%_0.48%_51.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9259 34.112">
            <g id="Ellipse 18">
              <mask fill="white" id="path-1-inside-1_1_440">
                <path d={svgPaths.pe886400} />
              </mask>
              <path d={svgPaths.pe886400} fill="var(--fill-0, #C2AFFF)" mask="url(#path-1-inside-1_1_440)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[71.64%_47.59%_0_21.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.6321 34.8541">
            <g id="Ellipse 19">
              <mask fill="white" id="path-1-inside-1_1_418">
                <path d={svgPaths.p2fa81200} />
              </mask>
              <path d={svgPaths.p2fa81200} fill="var(--fill-0, #F7ABC2)" mask="url(#path-1-inside-1_1_418)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[63.09%_66.67%_11.72%_7.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0981 30.993">
            <g id="Ellipse 20">
              <mask fill="white" id="path-1-inside-1_1_454">
                <path d={svgPaths.p22ebf100} />
              </mask>
              <path d={svgPaths.p22ebf100} fill="var(--fill-0, #A8F0B4)" mask="url(#path-1-inside-1_1_454)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[9.07%_64.7%_65.17%_9.65%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.5421 31.6863">
            <g id="Ellipse 23">
              <mask fill="white" id="path-1-inside-1_1_452">
                <path d={svgPaths.p21793e80} />
              </mask>
              <path d={svgPaths.p21793e80} fill="var(--fill-0, #4D359A)" mask="url(#path-1-inside-1_1_452)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[9.16%_9.55%_65.09%_64.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.5668 31.6629">
            <g id="Ellipse 14">
              <mask fill="white" id="path-1-inside-1_1_448">
                <path d={svgPaths.p27e27200} />
              </mask>
              <path d={svgPaths.p27e27200} fill="var(--fill-0, #FD6795)" mask="url(#path-1-inside-1_1_448)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[24.33%_0.55%_52.12%_72.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.1972 28.9717">
            <g id="Ellipse 15">
              <mask fill="white" id="path-1-inside-1_1_446">
                <path d={svgPaths.p3fa24b80} />
              </mask>
              <path d={svgPaths.p3fa24b80} fill="var(--fill-0, #73D283)" mask="url(#path-1-inside-1_1_446)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[46.79%_0_30.36%_73.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0934 28.1143">
            <g id="Ellipse 16">
              <mask fill="white" id="path-1-inside-1_1_442">
                <path d={svgPaths.p249a1bf0} />
              </mask>
              <path d={svgPaths.p249a1bf0} fill="var(--fill-0, #FDDC74)" mask="url(#path-1-inside-1_1_442)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[61.9%_6.07%_11.29%_66.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8934 32.9733">
            <g id="Ellipse 17">
              <mask fill="white" id="path-1-inside-1_1_432">
                <path d={svgPaths.p3e89880} />
              </mask>
              <path d={svgPaths.p3e89880} fill="var(--fill-0, #8BCAFE)" mask="url(#path-1-inside-1_1_432)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-90px)] size-[123px] top-[447px]">
        <div className="absolute inset-[49.36%_73.41%_27.96%_0.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5772 27.8995">
            <g id="Ellipse 21">
              <mask fill="white" id="path-1-inside-1_1_390">
                <path d={svgPaths.p326d7200} />
              </mask>
              <path d={svgPaths.p326d7200} fill="var(--fill-0, #FFE8A1)" mask="url(#path-1-inside-1_1_390)" stroke="var(--stroke-0, white)" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </div>
      <Group10 />
      <Group32 />
      <div className="-translate-x-1/2 absolute bg-[#f3f0fe] h-[37px] left-[calc(50%+0.5px)] rounded-[10px] top-[587px] w-[330px]" />
      <Group33 />
      <Group34 />
      <Group9 />
      <Group36 />
      <Group25 />
      <Group27 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[702px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[715px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Januari</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[715px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[0])}</p>
      </div>
      <Group13 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[1142px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[1155px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">November</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[1155px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[10])}</p>
      </div>
      <Group14 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[746px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[759px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Februari</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[759px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[1])}</p>
      </div>
      <Group15 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[1186px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[1199px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Desember</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[1199px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[11])}</p>
      </div>
      <Group16 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[790px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[803px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Maret</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[803px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[2])}</p>
      </div>
      <Group17 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[834px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[847px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">April</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[847px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[3])}</p>
      </div>
      <Group18 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[878px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[891px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Mei</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[891px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[4])}</p>
      </div>
      <Group19 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[922px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[935px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Juni</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[935px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[5])}</p>
      </div>
      <Group20 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[966px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[979px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Juli</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[979px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[6])}</p>
      </div>
      <Group21 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[1010px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[1024px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Agustus</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[1024px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[7])}</p>
      </div>
      <Group22 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[1054px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[1069px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">September</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[1069px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[8])}</p>
      </div>
      <Group23 />
      <div className="-translate-x-1/2 absolute bg-white h-[39px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_0px_3px_1px_#ede8ff] top-[1098px] w-[350px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[70px] text-[10px] text-black top-[1111px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Oktober</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] justify-center leading-[0] left-[318px] text-[10px] text-black text-right top-[1111px] w-[156px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{formatRp(monthlyTotals[9])}</p>
      </div>
      <Group24 />
      <Group48 />
      <Group37 />
      <Group38 />
      <Group43 />
      <Group39 />
      <Group44 />
      <Group40 />
      <Group45 />
      <Group41 />
      <Group46 />
      <Group42 />
      <Group47 />
      <div className="absolute h-[23px] left-[307px] top-[332px] w-[48px]" data-name="Tahun">
        <div className="absolute bg-[#eaa22c] inset-0 rounded-[10px]" />
        <div className="[word-break:break-word] absolute flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] inset-[39.13%_12.5%_34.78%_10.42%] justify-center leading-[0] text-[13px] text-center text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">2026</p>
        </div>
      </div>
      <div className="absolute h-[23px] left-[240px] top-[332px] w-[48px]" data-name="Tahun">
        <div className="absolute bg-white inset-0 rounded-[10px]" />
        <div className="[word-break:break-word] absolute flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] inset-[39.13%_12.5%_34.78%_10.42%] justify-center leading-[0] text-[13px] text-black text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">2026</p>
        </div>
      </div>
      <div className="absolute h-[23px] left-[240px] top-[332px] w-[48px]">
        <div className="absolute bg-white inset-0 rounded-[10px]" />
        <div className="[word-break:break-word] absolute flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] inset-[39.13%_12.5%_34.78%_10.42%] justify-center leading-[0] text-[13px] text-black text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">2025</p>
        </div>
      </div>
      <div className="absolute h-[23px] left-[173px] top-[332px] w-[48px]" data-name="Tahun">
        <div className="absolute bg-white inset-0 rounded-[10px]" />
        <div className="[word-break:break-word] absolute flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] inset-[39.13%_12.5%_34.78%_10.42%] justify-center leading-[0] text-[13px] text-black text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">2024</p>
        </div>
      </div>
      <div className="absolute h-[23px] left-[106px] top-[332px] w-[48px]" data-name="Tahun">
        <div className="absolute bg-white inset-0 rounded-[10px]" />
        <div className="[word-break:break-word] absolute flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] inset-[39.13%_12.5%_34.78%_10.42%] justify-center leading-[0] text-[13px] text-black text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">2023</p>
        </div>
      </div>
      <div className="absolute h-[23px] left-[39px] top-[332px] w-[48px]" data-name="Tahun">
        <div className="absolute bg-white inset-0 rounded-[10px]" />
        <div className="[word-break:break-word] absolute flex flex-col font-['SF_Pro:Heavy',sans-serif] font-[860] inset-[39.13%_12.5%_34.78%_10.42%] justify-center leading-[0] text-[13px] text-black text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">2022</p>
        </div>
      </div>
      <Group50 />
      <Group51 />
      <Group52 />
      <Group53 />
      <Group54 />
      <Group55 />
      <Group56 />
      <Group57 />
      <Group58 />
      <Group59 />
      <Group60 />
      <Group61 />
      {ARROW_TOPS.map((top, idx) => (
        <button key={idx} onClick={() => onMonthClick?.(idx + 1)} style={{ position: "absolute", left: 320, top: top - 5, width: 40, height: 30, background: "transparent", border: "none", cursor: "pointer", zIndex: 100 }} />
      ))}
    </div>
    </RecapDataContext.Provider>
  );
}