import svgPaths from "./svg-a6lqdrgiqy";
import imgCdef7C789Cc967E560Fca00F07901E9E4 from "./c45dba6774961b79db46eabcdb4d29add249dcee.png";
import imgChatGptImage16Mei20261953201 from "./1ade8e2f8478279c1740ad02b539622ef8574e06.png";
import { useState, useEffect } from 'react';
import { supabase } from "@/lib/supabase";

interface KeypadKeyProps {
  left: number;
  top: number;
  label: React.ReactNode;
  onClick: () => void;
}

function KeypadKey({ left, top, label, onClick }: KeypadKeyProps) {
  return (
    <button
      onClick={onClick}
      className="absolute rounded-[7px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-gray-100 active:scale-95 transition-all bg-white"
      style={{
        left,
        top,
        width: 80,
        height: 40,
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <div className="absolute inset-0 rounded-[7px] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)] pointer-events-none" />
      {typeof label === "string" ? (
        <span className="font-['SF_Pro:Semibold',sans-serif] font-[590] text-[16px] text-black leading-none">
          {label}
        </span>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          {label}
        </div>
      )}
    </button>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute backdrop-blur-[21px] h-[258px] left-0 rounded-[15px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] top-0 w-[393px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 393 258' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(38.343 24.371 -37.167 54.374 3.5349 7.676)'><stop stop-color='rgba(255,255,255,0.4)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>\")" }} />
    </div>
  );
}

function Group8({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute left-[35px] size-[20px] top-[91px] border-none bg-transparent p-0 cursor-pointer active:scale-95 transition-transform"
      style={{ border: "none", background: "none", padding: 0, outline: "none" }}
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 311">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse 16" r="10" />
          <path clipRule="evenodd" d={svgPaths.p1be61800} fill="var(--fill-0, #8B5BC5)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </button>
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
    <div className="absolute left-[32px] overflow-clip size-[20px] top-[235px]" data-name="iconoir:wallet-solid">
      <Group />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[32px] top-[235px]">
      <IconoirWalletSolid />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[55px] text-[13px] text-black top-[238px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Jumlah Pemasukan
      </p>
    </div>
  );
}

function Group1() {
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

function IconoirWalletSolid1() {
  return (
    <div className="absolute left-[32px] overflow-clip size-[20px] top-[235px]" data-name="iconoir:wallet-solid">
      <Group1 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[32px] top-[235px]">
      <IconoirWalletSolid1 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[32px] top-[235px]">
      <Group13 />
      <div className="absolute bg-white border border-[#e8e1ff] border-solid h-[56px] left-[48px] rounded-[15px] top-[265px] w-[314px]" />
    </div>
  );
}

function Group9({ value }: { value: string }) {
  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 justify-center font-['SF_Pro:Bold',sans-serif] font-bold whitespace-nowrap h-[56px]"
      style={{ top: 265 }}
    >
      <span className="text-[#7459d0] text-[20px]">Rp</span>
      <span className="text-[#ef4d4d] text-[30px]">{value}</span>
    </div>
  );
}

function Group14({ value }: { value: string }) {
  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 justify-center font-['SF_Pro:Bold',sans-serif] font-bold whitespace-nowrap h-[56px]"
      style={{ top: 265 }}
    >
      <span className="text-[#7459d0] text-[20px]">Rp</span>
      <span className="text-[#ef4d4d] text-[30px]">{value}</span>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute left-[81px] top-[344px] w-[231px] h-[56px]">
      <div className="absolute bg-[rgba(161,136,247,0.14)] border border-[#e8e1ff] border-solid h-full w-full rounded-[15px] left-0 top-0" />
      <div className="absolute -translate-y-1/2 flex flex-col justify-center left-[51px] text-[#5b5b5b] text-[10px] top-[28px] whitespace-nowrap font-['SF_Pro:Medium',sans-serif] font-[510]">
        <p className="leading-[normal] mb-0 whitespace-pre">{`Saldo ini akan digunakan sebagai `}</p>
        <p className="leading-[normal] whitespace-pre">saldo awal bulan</p>
      </div>
      <div className="absolute left-[15px] top-[15px] size-[25px]" data-name="Vector">
        <svg className="block size-full" fill="none" viewBox="0 0 25 25">
          <path d={svgPaths.p3599b00} fill="#7459D0" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%_8.33%_0.78%_4.92%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8203 20.8139">
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
      <Group2 />
    </div>
  );
}

function Group11() {
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
      
      {/* Next button - clickable to close keypad */}
      <button 
        onClick={() => setIsKeypadVisible(false)}
        className="absolute inset-[86.62%_19.85%_11.74%_77.86%] cursor-pointer border-none bg-transparent p-0 z-10"
        aria-label="Close keypad"
      >
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
          <path clipRule="evenodd" d={svgPaths.p17a7b000} fill="var(--fill-0, #8869F5)" fillRule="evenodd" id="Vector" />
        </svg>
      </button>
      
      <MingcuteDeleteBackLine />
    </div>
  );
}

function Group4() {
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

function Group6() {
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

function Group3() {
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

function Group5() {
  return (
    <div className="absolute contents left-[293px] top-[800px]">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[293px] text-[#c0c0c0] text-[8px] top-[818px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Recap
      </p>
      <Group3 />
    </div>
  );
}

function Group16() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.5px)] top-[778px]">
      <div className="absolute bg-white h-[49px] left-[22px] rounded-[15px] shadow-[0px_0px_7px_1px_#ede8ff] top-[788px] w-[350px]" />
      <div className="-translate-x-1/2 absolute left-[calc(50%+1px)] size-[59px] top-[778px]">
        <div className="absolute inset-[-6.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
            <g filter="url(#filter0_d_1_97)" id="Ellipse 5">
              <circle cx="33.5" cy="33.5" fill="var(--fill-0, white)" r="29.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="67" id="filter0_d_1_97" width="67" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.713726 0 0 0 0 0.619608 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_97" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_97" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group4 />
      <Group6 />
      <Group5 />
    </div>
  );
}

export default function InputSaldo({ 
  userId, 
  onBack,
  onNavigateDashboard,
  onNavigateRecap,
}: { 
  userId: string; 
  onBack: () => void;
  onNavigateDashboard?: () => void;
  onNavigateRecap?: () => void;
}) {
  const [isKeypadVisible, setIsKeypadVisible] = useState(false);
  const [rawAmount, setRawAmount] = useState("");
  const [saving, setSaving] = useState(false);

  const handleKeyPress = (key: string) => {
    if (key === "⌫") {
      setRawAmount((prev) => prev.slice(0, -1));
    } else {
      if (rawAmount.length >= 12) return; // avoid overflow
      setRawAmount((prev) => prev + key);
    }
  };

  const handleSave = async () => {
    if (saving) return;
    const amountNum = rawAmount ? parseInt(rawAmount, 10) : 0;
    if (isNaN(amountNum) || amountNum === 0) {
      onBack();
      return;
    }

    try {
      setSaving(true);
      
      // 1. Fetch current balance
      const { data, error: fetchErr } = await supabase
        .from("rekening")
        .select("saldo")
        .eq("user_id", userId)
        .limit(1);

      if (fetchErr) throw fetchErr;

      if (data && data.length > 0) {
        const currentSaldo = data[0].saldo || 0;
        const newSaldo = currentSaldo + amountNum;
        
        // 2. Update saldo in rekening table
        const { error: updateErr } = await supabase
          .from("rekening")
          .update({ saldo: newSaldo })
          .eq("user_id", userId);
        if (updateErr) throw updateErr;
      } else {
        // 2. Insert new row
        const { error: insertErr } = await supabase
          .from("rekening")
          .insert({
            user_id: userId,
            saldo: amountNum,
            nama: "Dompet Utama",
            limit_pengeluaran: 0
          });
        if (insertErr) throw insertErr;
      }

      onBack();
    } catch (err) {
      console.error("Error saving saldo:", err);
      alert("Gagal menyimpan saldo");
    } finally {
      setSaving(false);
    }
  };

  const formatDisplay = (raw: string) => {
    if (!raw) return "0.00";
    const val = parseInt(raw, 10);
    if (isNaN(val)) return "0.00";
    return val.toLocaleString("id-ID");
  };

  const displayVal = formatDisplay(rawAmount);

  return (
    <div className="bg-[#fdfdff] overflow-clip relative rounded-[30px] size-full" data-name="Input Saldo">
      <div className="absolute h-[21px] left-[280px] top-[20px] w-[91px]" data-name="cdef7c789cc967e560fca00f07901e9e 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[243.65%] left-0 max-w-none top-[-62.3%] w-full" src={imgCdef7C789Cc967E560Fca00F07901E9E4} />
        </div>
      </div>
      <div className="absolute h-[252px] left-0 pointer-events-none rounded-[10px] shadow-[0px_15px_4px_0px_rgba(0,0,0,0),0px_5px_3px_0px_rgba(0,0,0,0.05),0px_2px_2px_0px_rgba(0,0,0,0.09),0px_1px_1px_0px_rgba(0,0,0,0.1)] top-0 w-[393px]">
        <div aria-hidden className="absolute bg-[#8869f5] inset-0 rounded-[10px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.01)]" />
      </div>
      <Group7 />
      <div className="absolute bg-white h-[116px] left-0 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[30px] rounded-tr-[30px] top-[205px] w-[393px]" />
      <Group8 onClick={onBack} />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[74px] text-[20px] text-white top-[91px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Pemasukan Baru
      </p>
      <Group12 />
      <div className="absolute bg-white border border-[#e8e1ff] border-solid h-[56px] left-[48px] rounded-[15px] top-[265px] w-[314px]" />
      <Group15 />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] left-[74px] text-[11px] text-white top-[123px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Catat pemasukanmu dengan mudah
      </p>
      <div className="absolute h-[114px] left-[220px] top-[91px] w-[176px]" data-name="ChatGPT Image 16 Mei 2026, 19.53.20 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.96%] left-[-6.25%] max-w-none top-[-9.8%] w-[113.64%]" src={imgChatGptImage16Mei20261953201} />
        </div>
      </div>
      
      {/* Display input text */}
      <Group9 value={displayVal} />
      <Group14 value={displayVal} />
      
      {/* Invisible button overlay to make input area clickable */}
      <button 
        onClick={() => setIsKeypadVisible((v) => !v)}
        className="absolute h-[56px] left-[48px] top-[265px] w-[314px] cursor-pointer border-none bg-transparent z-10"
        aria-label="Open keypad"
      />
      
      <Group10 />
      
      {/* Show keypad only when visible */}
      {isKeypadVisible && (
        <div className="absolute left-[9px] top-[535px] w-[375px] h-[240px] z-20">
          <div className="absolute inset-0 bg-white rounded-[20px] shadow-[inset_0px_0px_8px_0px_rgba(0,0,0,0.25)] pointer-events-none" />
          
          <KeypadKey left={30} top={15} label="1" onClick={() => handleKeyPress("1")} />
          <KeypadKey left={147} top={15} label="2" onClick={() => handleKeyPress("2")} />
          <KeypadKey left={263} top={15} label="3" onClick={() => handleKeyPress("3")} />
          
          <KeypadKey left={28} top={72} label="4" onClick={() => handleKeyPress("4")} />
          <KeypadKey left={145} top={72} label="5" onClick={() => handleKeyPress("5")} />
          <KeypadKey left={262} top={72} label="6" onClick={() => handleKeyPress("6")} />
          
          <KeypadKey left={27} top={133} label="7" onClick={() => handleKeyPress("7")} />
          <KeypadKey left={144} top={133} label="8" onClick={() => handleKeyPress("8")} />
          <KeypadKey left={261} top={133} label="9" onClick={() => handleKeyPress("9")} />
          
          <KeypadKey left={27} top={190} label={
            <svg width="21" height="21" viewBox="0 0 20.8203 20.8139" fill="none">
              <path d={svgPaths.p4bf000} fill="#8869F5" />
            </svg>
          } onClick={() => handleKeyPress("⌫")} />
          <KeypadKey left={144} top={190} label="0" onClick={() => handleKeyPress("0")} />
          <KeypadKey left={261} top={190} label={
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
              <path d={svgPaths.p17a7b000} fill="#8869F5" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          } onClick={handleSave} />
        </div>
      )}
      
      <Group16 />
      
      {/* Navbar overlay buttons */}
      {onNavigateDashboard && (
        <button
          onClick={onNavigateDashboard}
          className="absolute left-[30px] top-[788px] w-[90px] h-[49px] cursor-pointer z-30 bg-transparent border-none outline-none"
          aria-label="Navigate Dashboard"
        />
      )}
      {onNavigateRecap && (
        <button
          onClick={onNavigateRecap}
          className="absolute left-[272px] top-[788px] w-[90px] h-[49px] cursor-pointer z-30 bg-transparent border-none outline-none"
          aria-label="Navigate Recap"
        />
      )}
      <button
        onClick={onBack}
        className="absolute left-[167px] top-[774px] w-[59px] h-[59px] rounded-full cursor-pointer z-30 bg-transparent border-none outline-none"
        aria-label="Back to Dashboard"
      />
    </div>
  );
}