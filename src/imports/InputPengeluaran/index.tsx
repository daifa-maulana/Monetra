import { useState } from "react";
import ExpenseCalendar, { formatExpenseDate } from "../../components/ExpenseCalendar";
import svgPaths from "./svg-i0q9zuqhzb";
import imgCdef7C789Cc967E560Fca00F07901E9E4 from "./c45dba6774961b79db46eabcdb4d29add249dcee.png";
import img83268B2142E742368463468D7E429C2C1 from "./32da596fe4708bac239014123fefc5dfc5511cc8.png";

// ── Inline category icons ──
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

const CATEGORIES = [
  { name: "Makan/minum",    icon: <IconMakan /> },
  { name: "Transportasi",   icon: <IconTransportasi /> },
  { name: "Pajak",          icon: <IconPajak /> },
  { name: "Listrik",        icon: <IconListrik /> },
  { name: "Pendidikan",     icon: <IconPendidikan /> },
  { name: "Kesehatan",      icon: <IconKesehatan /> },
  { name: "Pulsa/Data",     icon: <IconPulsa /> },
  { name: "Hiburan",        icon: <IconHiburan /> },
  { name: "Perawatan Diri", icon: <IconPerawatan /> },
  { name: "Lainnya",        icon: <IconLainnya /> },
];

function Group10() {
  return (
    <div className="absolute h-[20.151px] left-[35px] top-[91.69px] w-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.1511">
        <g id="Group 311">
          <ellipse cx="10" cy="10.0755" fill="var(--fill-0, white)" id="Ellipse 16" rx="10" ry="10.0755" />
          <path clipRule="evenodd" d={svgPaths.p18128780} fill="var(--fill-0, #8B5BC5)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[35px] top-[91.69px]">
      <Group10 />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold h-[24px] leading-[normal] left-[74px] text-[20px] text-white top-[92px] w-[177px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Pengeluaran Baru
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] h-[13px] leading-[normal] left-[74px] text-[11px] text-white top-[124px] w-[199px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Catat pengeluaranmu dengan mudah
      </p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute backdrop-blur-[21px] h-[267px] left-0 rounded-[15px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] top-0 w-[393px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 393 267' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(38.343 25.222 -37.167 56.271 3.5349 7.9438)'><stop stop-color='rgba(255,255,255,0.4)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>\")" }} />
      <Group12 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.51%_9.37%_13.54%_9.38%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 14.7904">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pa9b6900} fill="var(--fill-0, #8E70F5)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p3b22f480} fill="var(--fill-0, #8E70F5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IconoirWalletSolid() {
  return (
    <div className="absolute left-[44px] overflow-clip size-[20px] top-[238px]" data-name="iconoir:wallet-solid">
      <Group />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[44px] top-[238px]">
      <IconoirWalletSolid />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[67px] text-[13px] text-black top-[241px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Jumlah Pengeluaran
      </p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[40px] top-[238px]">
      <Group14 />
      <div className="absolute bg-white border border-[#e8e1ff] border-solid h-[56px] left-[40px] rounded-[15px] top-[265px] w-[314px]" />
    </div>
  );
}

function Group15() {
  return (
    <div className="[word-break:break-word] absolute contents font-['SF_Pro:Bold',sans-serif] font-bold leading-[0] left-[148px] text-center top-[275px] whitespace-nowrap">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[161.5px] text-[#7459d0] text-[20px] top-[296px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Rp</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[213px] text-[#ef4d4d] text-[30px] top-[293px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">0.00</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[40px] top-[238px]">
      <Group16 />
      <Group15 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute left-[46px] size-[18px] top-[329px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group 306">
          <rect fill="var(--fill-0, #EAE2FB)" height="18" id="Rectangle 90" rx="4" width="18" />
          <path d={svgPaths.p311e0e00} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[46px] top-[329px]">
      <Group9 />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[70px] text-[11.5px] text-black top-[331px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Kategori
      </p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[46px] top-[329px]">
      <div className="absolute flex inset-[43.19%_12.3%_56.11%_85.5%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-98.491cqw,3.23838cqh)] rotate-[88.7deg] w-[hypot(1.50905cqw,96.7616cqh)]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7722 8.53101">
              <path clipRule="evenodd" d={svgPaths.pc12f800} fill="var(--fill-0, #EAE1FE)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Group23 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[46px] top-[396px]">
      <div className="absolute bg-[#eae2fb] left-[46px] rounded-[4px] size-[18px] top-[396px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[46.83%_84.48%_51.76%_12.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Group">
          <path d={svgPaths.p39687400} fill="var(--fill-0, #8869F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[46.83%_84.48%_51.76%_12.47%]">
      <Group1 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[46px] top-[396px]">
      <Group21 />
      <Group8 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[46px] top-[396px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[70px] text-[11.5px] text-black top-[398px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tanggal
      </p>
      <Group22 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[40px] top-[396px]">
      <div className="absolute bg-white border border-[#e8e1ff] border-solid h-[35px] left-[40px] rounded-[10px] top-[419px] w-[314px]" />
      <Group24 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[46px] top-[463px]">
      <div className="absolute bg-[#eae2fb] left-[46px] rounded-[4px] size-[18px] top-[463px]" />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[54.58%_84.22%_44.01%_12.72%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12.002">
        <g id="Group 327">
          <path d={svgPaths.pe97b900} fill="var(--fill-0, #8869F5)" id="Vector" />
          <path d={svgPaths.p29277300} fill="var(--fill-0, #8869F5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[46px] top-[463px]">
      <Group18 />
      <Group20 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[46px] top-[463px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[70px] text-[11.5px] text-black top-[465px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Catatan (opsional)
      </p>
      <Group19 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[40px] top-[463px]">
      <div className="absolute bg-white border border-[#e8e1ff] border-solid h-[35px] left-[40px] rounded-[10px] top-[486px] w-[314px]" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[58px] text-[11px] text-[rgba(0,0,0,0.3)] top-[497px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tambah catatan.....
      </p>
      <Group25 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-[40px] top-[329px]">
      <Group26 />
      <Group27 />
      <Group28 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute left-[171px] size-[53px] top-[781px]">
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

function Group7() {
  return (
    <div className="absolute contents left-[58px] top-[799px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[58px] text-[#c0c0c0] text-[8px] top-[816px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dashboard
      </p>
      <div className="absolute inset-[93.78%_77.86%_4.46%_18.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
          <path d={svgPaths.p5c0c040} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[93.9%_20.36%_4.34%_76.08%]" data-name="Group">
      <div className="absolute inset-[-14.89%_-17.34%_-6.67%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4277 18.234">
          <g id="Group">
            <path d={svgPaths.p289ce400} id="Vector" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="square" strokeWidth="2" />
            <path d={svgPaths.p30e0cab2} id="Vector_2" stroke="var(--stroke-0, #C0C0C0)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[293px] top-[800px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[293px] text-[#c0c0c0] text-[8px] top-[818px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Recap
      </p>
      <Group2 />
    </div>
  );
}

function Group31() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[778px]">
      <div className="absolute bg-white h-[49px] left-[22px] rounded-[15px] shadow-[0px_0px_7px_1px_#ede8ff] top-[788px] w-[350px]" />
      <div className="-translate-x-1/2 absolute left-[calc(50%+1px)] size-[59px] top-[778px]">
        <div className="absolute inset-[-6.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
            <g filter="url(#filter0_d_1_350)" id="Ellipse 5">
              <circle cx="33.5" cy="33.5" fill="var(--fill-0, white)" r="29.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="67" id="filter0_d_1_350" width="67" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.619608 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_350" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_350" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group5 />
      <Group7 />
      <Group6 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%_8.33%_0.78%_4.92%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8203 20.814">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p4bf000} fill="var(--fill-0, #8869F5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteDeleteBackLine() {
  return (
    <div className="absolute left-[64px] overflow-clip size-[24px] top-[733px]" data-name="mingcute:delete-back-line">
      <Group3 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[9px] top-[535px]">
      <div className="absolute h-[240px] left-[9px] pointer-events-none rounded-[20px] top-[535px] w-[375px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[20px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_8px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute h-[40px] left-[39px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[550px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[75px] text-[16px] text-black top-[560px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
      <div className="absolute h-[40px] left-[156px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[550px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <div className="absolute h-[40px] left-[272px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[550px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[307px] text-[16px] text-black top-[560px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3
      </p>
      <div className="absolute h-[40px] left-[37px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[607px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <div className="absolute h-[40px] left-[154px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[607px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <div className="absolute h-[40px] left-[271px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[607px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <div className="absolute h-[40px] left-[36px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[668px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <div className="absolute h-[40px] left-[153px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[668px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <div className="absolute h-[40px] left-[270px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[668px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <div className="absolute h-[40px] left-[36px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[725px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <div className="absolute h-[40px] left-[153px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[725px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <div className="absolute h-[40px] left-[270px] pointer-events-none rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-[725px] w-[80px]">
        <div aria-hidden className="absolute bg-white inset-0 rounded-[7px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[191px] text-[16px] text-black top-[560px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[72px] text-[16px] text-black top-[617px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        4
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[306px] text-[16px] text-black top-[617px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        6
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[189px] text-[16px] text-black top-[617px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        5
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[71px] text-[16px] text-black top-[678px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        7
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[305px] text-[16px] text-black top-[678px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        9
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[186px] text-[16px] text-black top-[678px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        8
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] left-[188px] text-[16px] text-black top-[735px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        0
      </p>
      <div className="absolute inset-[86.62%_19.85%_11.74%_77.86%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
          <path clipRule="evenodd" d={svgPaths.p17a7b000} fill="var(--fill-0, #8869F5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <MingcuteDeleteBackLine />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0_6.27%_96.68%_89.85%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Group">
          <path d={svgPaths.p36cce00} fill="var(--fill-0, #E0D5FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <button className="absolute contents cursor-pointer inset-[0_6.27%_96.68%_89.85%]">
      <Group4 />
    </button>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[0_0_90.25%_0]">
      <div className="absolute bg-white border border-[#eee8ff] border-solid inset-[0_0_90.25%_0] rounded-[10px]" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] inset-[3.34%_71.97%_93.04%_5.41%] leading-[normal] text-[11px] text-[rgba(0,0,0,0.3)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Pilih kategori
      </p>
    </div>
  );
}

function Group33() {
  return (
    <button className="absolute contents cursor-pointer inset-[0_0_90.25%_0]">
      <Group32 />
    </button>
  );
}

export default function InputPengeluaran({ onClose, onRecap }: { onClose?: () => void; onRecap?: () => void }) {
  const [showKeypad, setShowKeypad] = useState(false);
  const [category, setCategory] = useState("");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(() => new Date(2026, 4, 1));

  return (
    <div className="bg-[#fdfdff] overflow-clip relative rounded-[30px] size-full" data-name="Input Pengeluaran">
      <div className="absolute h-[255px] left-0 pointer-events-none rounded-[10px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-0 w-[393px]">
        <div aria-hidden className="absolute bg-[#8869f5] inset-0 rounded-[10px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <Group11 />
      {/* Back button overlay */}
      <button
        style={{ position: "absolute", zIndex: 20, left: 30, top: 85, width: 30, height: 30, borderRadius: "50%", background: "transparent", border: "none", cursor: "pointer" }}
        onClick={onClose}
      />
      <div className="absolute bg-white h-[161px] left-0 rounded-[30px] top-[205px] w-[393px]" />
      {/* Jumlah Pengeluaran box — clickable to toggle keypad */}
      <div onClick={() => setShowKeypad(v => !v)} className="cursor-pointer">
        <Group17 />
      </div>
      <div className="absolute h-[86px] left-[273px] top-[107px] w-[97px]" data-name="83268b21-42e7-4236-8463-468d7e429c2c 1">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={img83268B2142E742368463468D7E429C2C1} />
      </div>
      <Group29 />
      <button
        type="button"
        onClick={() => setShowCalendar((open) => !open)}
        aria-expanded={showCalendar}
        className="absolute bg-white flex items-center justify-between text-left"
        style={{ top: 419, left: 40, width: 314, height: 35, borderRadius: 10, border: "1px solid #e8e1ff", padding: "0 11px 0 17px", zIndex: 10 }}
      >
        <span style={{ fontSize: 11, fontFamily: "Inter, sans-serif", fontWeight: 590, color: date ? "#111" : "rgba(0,0,0,0.3)" }}>
          {date ? formatExpenseDate(date) : "Pilih tanggal"}
        </span>
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <rect width="18" height="18" rx="4" fill="#EAE2FB" />
          <rect x="4" y="5.5" width="10" height="9" rx="1" stroke="#8869F5" strokeWidth="1" />
          <path d="M4 8.5 H14 M7 3.5 V6.5 M11 3.5 V6.5" stroke="#8869F5" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </button>
      {showCalendar && (
        <ExpenseCalendar
          month={calendarMonth}
          selectedDate={date}
          onMonthChange={setCalendarMonth}
          onSelect={(selected) => {
            setDate(selected);
            setCalendarMonth(new Date(selected.getFullYear(), selected.getMonth(), 1));
            setShowCalendar(false);
          }}
        />
      )}
      <Group31 />
      {/* Navbar overlays inside the modal */}
      <button
        style={{ position: "absolute", zIndex: 20, left: 22, top: 788, width: 150, height: 49, background: "transparent", border: "none", cursor: "pointer" }}
        onClick={onClose}
      />
      <button
        style={{ position: "absolute", zIndex: 20, left: 220, top: 788, width: 150, height: 49, background: "transparent", border: "none", cursor: "pointer" }}
        onClick={onRecap}
      />
      {showKeypad && <Group13 />}
      <div className="absolute h-[392px] left-[29px] top-[431px] w-[335px]" data-name="1">
        <Group30 />
      </div>

      {/* ── CATEGORY BUTTON (replaces the static Group33) ── */}
      <button
        className="absolute bg-white flex items-center"
        style={{ top: 355, left: 40, width: 314, height: 35, borderRadius: 10, border: "1px solid #e8e1ff", paddingLeft: 14, paddingRight: 28, cursor: "pointer" }}
        onClick={() => setShowCategorySheet((open) => !open)}
        aria-expanded={showCategorySheet}
      >
        <span style={{ fontSize: 11, fontFamily: "Inter, sans-serif", fontWeight: 590, color: category ? "#000" : "rgba(0,0,0,0.3)" }}>
          {category || "Pilih kategori"}
        </span>
        <div className="absolute flex items-center justify-center" style={{ right: 10, top: "50%", transform: "translateY(-50%)" }}>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path d="M1 1 L5 5 L1 9" stroke="#8869F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {/* ── CATEGORY BOTTOM SHEET ── */}
      {showCategorySheet && (
        <div
          className="absolute z-50 bg-white"
          style={{ top: 390, left: 50, width: 294, borderRadius: "0 0 14px 14px", padding: "3px 16px 7px", boxShadow: "0 5px 7px rgba(0,0,0,0.28)" }}
        >
          <div
            className="w-full"
            style={{}}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="hidden" />

            {/* Header */}
            <div className="hidden">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect width="18" height="18" rx="4" fill="#EAE2FB" />
                <rect x="3" y="3" width="5" height="5" rx="1" fill="#8869F5" />
                <rect x="10" y="3" width="5" height="5" rx="1" fill="#8869F5" />
                <rect x="3" y="10" width="5" height="5" rx="1" fill="#8869F5" />
                <rect x="10" y="10" width="5" height="5" rx="1" fill="#8869F5" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: 15, fontFamily: "Inter, sans-serif", color: "#000" }}>Kategori</span>
            </div>

            {/* Search placeholder */}
            <div className="hidden">
              Pilih kategori
            </div>

            {/* Category list */}
            <div className="flex flex-col">
              {CATEGORIES.map((cat, index) => (
                <button
                  key={cat.name}
                  onClick={() => { setCategory(cat.name); setShowCategorySheet(false); }}
                  className="flex w-full items-center text-left"
                  style={{
                    height: 29,
                    gap: 10,
                    padding: 0,
                    borderRadius: 0,
                    fontSize: 11,
                    fontWeight: 590,
                    fontFamily: "Inter, sans-serif",
                    background: category === cat.name ? "#f6f3ff" : "#fff",
                    color: "#111",
                    border: "none",
                    borderBottom: index < CATEGORIES.length - 1 ? "1px solid #eeeeee" : "none",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {cat.icon}
                  </div>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
