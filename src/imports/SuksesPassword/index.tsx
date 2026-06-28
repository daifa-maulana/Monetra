import imgLogo1 from "./c331e61fb610ec441601c30133af8749a1655092.png";
import imgRocket from "./3fd55aa0b40949cd089102ce4965f7c91e9aac73.png";

interface SuksesPasswordProps {
  onMulai?: () => void;
}

function Logo() {
  return (
    <div className="absolute contents left-[66px] top-[130px]" data-name="logo">
      <div className="absolute h-[69px] left-[66px] top-[133px] w-[54px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Monetra Logo" className="absolute h-[299.57%] left-[-50.54%] max-w-none top-[-95.25%] w-[800%]" src={imgLogo1} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Baloo_2',sans-serif] from-[#8b5bc5] h-[76px] leading-[normal] left-[137px] not-italic text-[50px] text-[transparent] to-[#fb9b44] top-[130px] via-1/2 via-[#eb7f9e] w-[203px]">Monetra</p>
    </div>
  );
}

export default function SuksesPassword({ onMulai }: SuksesPasswordProps) {
  return (
    <div className="bg-white overflow-clip relative rounded-[30px] size-full" data-name="Sukses screen">
      <Logo />
      <div className="absolute h-[237px] left-[85px] top-[249px] w-[217px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Success" className="absolute h-full left-[-9.22%] max-w-none top-0 w-[109.22%]" src={imgRocket} />
        </div>
      </div>

      <p className="absolute font-['SF_Pro',sans-serif] font-[900] leading-[normal] left-[108px] text-[18px] text-black top-[530px]">
        Password Berhasil Diubah
      </p>
      <div className="-translate-x-1/2 absolute font-['SF_Pro',sans-serif] font-[500] leading-[0] left-[194.5px] text-[14px] text-[rgba(0,0,0,0.6)] text-center top-[583px]">
        <p className="leading-[normal] mb-0 whitespace-pre">{`Password Anda telah berhasil diperbarui.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre">{`Silakan login dengan password baru`}</p>
        <p className="leading-[normal] whitespace-pre">Anda.</p>
      </div>

      <button
        onClick={onMulai}
        className="absolute bg-[#3a33f4] h-[45px] left-[54px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[705px] w-[280px] hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
      >
        <span className="font-['SF_Pro',sans-serif] font-bold text-[13px] text-white">
          Kembali ke Login
        </span>
      </button>
    </div>
  );
}
