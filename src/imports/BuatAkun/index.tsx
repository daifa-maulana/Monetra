import imgLogo1 from "./c331e61fb610ec441601c30133af8749a1655092.png";

interface BuatAkunProps {
  onDaftar?: () => void;
  onMasuk?: () => void;
}

function Logo() {
  return (
    <div className="absolute contents left-[68px] top-[128px]" data-name="logo">
      <div className="absolute h-[69px] left-[68px] top-[131px] w-[54px]" data-name="logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[299.57%] left-[-50.54%] max-w-none top-[-95.25%] w-[800%]" src={imgLogo1} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Baloo:Regular',sans-serif] from-[#8b5bc5] h-[76px] leading-[normal] left-[139px] not-italic text-[50px] text-[transparent] to-[#fb9b44] top-[128px] via-1/2 via-[#eb7f9e] w-[203px]">Monetra</p>
    </div>
  );
}

export default function BuatAkun({ onDaftar, onMasuk }: BuatAkunProps) {
  return (
    <div className="bg-white overflow-clip relative rounded-[30px] size-full" data-name="Buat akun">
      <Logo />
      <div className="absolute bg-[#e0d5ff] h-[570px] left-0 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[40px] rounded-tr-[40px] top-[282px] w-[393px]" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] left-[132px] text-[15px] text-[rgba(0,0,0,0.7)] top-[375px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Lengkapi data diri
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] left-[126px] text-[18px] text-black top-[335px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Buat akun baru
      </p>
      <div className="absolute bg-white h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[476px] w-[280px]" />
      <div className="absolute bg-white h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[533px] w-[280px]" />
      <div
        className="absolute bg-[#3a33f4] h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[675px] w-[280px] cursor-pointer"
        onClick={onDaftar}
      />
      <div className="[word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[0] left-[68px] text-[15px] text-[rgba(0,0,0,0.7)] top-[444px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">​</p>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[74px] text-[13px] text-[rgba(0,0,0,0.5)] top-[490px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Email
      </p>
      <div className="absolute bg-white h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[419px] w-[280px]" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[74px] text-[13px] text-[rgba(0,0,0,0.5)] top-[433px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Nama Lengkap
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[72px] text-[13px] text-[rgba(0,0,0,0.5)] top-[547px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Password
      </p>
      <div className="absolute bg-white h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[590px] w-[280px]" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[72px] text-[13px] text-[rgba(0,0,0,0.5)] top-[604px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Konfirmasi Password
      </p>
      <p
        className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[179px] text-[13px] text-white top-[690px] whitespace-nowrap cursor-pointer z-10"
        style={{ fontVariationSettings: '"wdth" 100' }}
        onClick={onDaftar}
      >
        Daftar
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[0] left-[90px] text-[12px] text-black top-[785px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[normal]">{`Sudah punya akun? `}</span>
        <span
          className="font-['SF_Pro:Black',sans-serif] font-[1000] leading-[normal] cursor-pointer"
          style={{ fontVariationSettings: '"wdth" 100' }}
          onClick={onMasuk}
        >
          Masuk
        </span>
        <span className="leading-[normal]">{` di sini`}</span>
      </p>
    </div>
  );
}
