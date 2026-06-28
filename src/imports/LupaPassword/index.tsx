import imgLock from "./f5f6320fc422c74c336e9f529ffcdc78164b2b3c.png";

interface LupaPasswordProps {
  onKirimKode?: () => void;
  onBack?: () => void;
}

export default function LupaPassword({ onKirimKode }: LupaPasswordProps) {
  return (
    <div className="bg-white overflow-clip relative rounded-[30px] size-full" data-name="Lupa password">
      <div className="absolute bg-[#e0d5ff] h-[355px] left-0 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[40px] rounded-tr-[40px] top-[497px] w-[393px]" />
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[0] left-[201.5px] text-[15px] text-[rgba(0,0,0,0.7)] text-center top-[617px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0 whitespace-pre">{`Masukkan email untuk menerima kode `}</p>
        <p className="leading-[normal] whitespace-pre">verifikasi</p>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] left-[121px] text-[18px] text-black top-[555px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Lupa Password?
      </p>
      <div
        className="absolute bg-[#3a33f4] h-[45px] left-[62px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[732px] w-[280px] cursor-pointer"
        onClick={onKirimKode}
      />
      <div className="absolute bg-white h-[45px] left-[62px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[670px] w-[280px]" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[77px] text-[13px] text-[rgba(0,0,0,0.5)] top-[684px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Email
      </p>
      <p
        className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[161px] text-[13px] text-white top-[747px] whitespace-nowrap cursor-pointer z-10"
        style={{ fontVariationSettings: '"wdth" 100' }}
        onClick={onKirimKode}
      >
        Kirim Kode
      </p>
      <div className="absolute h-[217px] left-[104px] top-[177px] w-[184px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLock} />
      </div>
    </div>
  );
}
