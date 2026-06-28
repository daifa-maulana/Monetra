import imgLogo1 from "./c331e61fb610ec441601c30133af8749a1655092.png";
import imgRocket from "./3fd55aa0b40949cd089102ce4965f7c91e9aac73.png";

interface SuksesScreenProps {
  onMulai?: () => void;
}

function Logo() {
  return (
    <div className="absolute contents left-[66px] top-[130px]" data-name="logo">
      <div className="absolute h-[69px] left-[66px] top-[133px] w-[54px]" data-name="logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[299.57%] left-[-50.54%] max-w-none top-[-95.25%] w-[800%]" src={imgLogo1} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute h-[76px] leading-[normal] left-[137px] not-italic text-[50px] top-[130px] w-[203px]" style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, background: "linear-gradient(to right, #8b5bc5, #eb7f9e 50%, #fb9b44)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Monetra</p>
    </div>
  );
}

function Group() {
  return (
    <div className="[word-break:break-word] absolute contents left-[54px] top-[530px] whitespace-nowrap">
      <p className="absolute font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] left-[95px] text-[18px] text-black top-[530px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Pendaftaran Berhasil
      </p>
      <div className="-translate-x-1/2 absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[0] left-[194.5px] text-[14px] text-[rgba(0,0,0,0.6)] text-center top-[583px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0 whitespace-pre">{`Selamat, akun Anda telah aktif. Sekarang `}</p>
        <p className="leading-[normal] mb-0 whitespace-pre">{`Anda dapat mengakses semua fitur `}</p>
        <p className="leading-[normal] mb-0 whitespace-pre">{`pengelolaan aset dan pemantauan `}</p>
        <p className="leading-[normal] whitespace-pre">transaksi di Monetra</p>
      </div>
    </div>
  );
}

export default function SuksesScreen({ onMulai }: SuksesScreenProps) {
  return (
    <div className="bg-white overflow-clip relative rounded-[30px] size-full" data-name="Sukses screen">
      <Logo />
      <div className="absolute h-[237px] left-[85px] top-[249px] w-[217px]" data-name="ChatGPT Image 15 Mei 2026, 15.53.51 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-9.22%] max-w-none top-0 w-[109.22%]" src={imgRocket} />
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[0] left-[66px] text-[15px] text-[rgba(0,0,0,0.7)] top-[423px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">​</p>
      </div>
      <div
        className="absolute bg-[#3a33f4] h-[45px] left-[54px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[705px] w-[280px] cursor-pointer"
        onClick={onMulai}
      />
      <p
        className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[113px] text-[13px] text-white top-[719px] whitespace-nowrap cursor-pointer z-10"
        style={{ fontVariationSettings: '"wdth" 100' }}
        onClick={onMulai}
      >
        Mulai Mencatat Keuangan
      </p>
      <Group />
    </div>
  );
}
