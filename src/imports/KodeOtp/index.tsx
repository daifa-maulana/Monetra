import { useRef, useState, KeyboardEvent, ClipboardEvent } from "react";
import imgOtp from "./fd63af57fdef9e828acef1f067f0530729ab2f75.png";

const OTP_LENGTH = 5;

interface KodeOtpProps {
  onVerifikasi?: () => void;
}

export default function KodeOtp({ onVerifikasi }: KodeOtpProps) {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const focusAt = (index: number) => inputs.current[index]?.focus();

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < OTP_LENGTH - 1) focusAt(index + 1);
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) focusAt(index - 1);
    if (e.key === "ArrowLeft" && index > 0) focusAt(index - 1);
    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) focusAt(index + 1);
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    const next = [...otp];
    pasted.split("").forEach((d, i) => { next[i] = d; });
    setOtp(next);
    focusAt(Math.min(pasted.length, OTP_LENGTH - 1));
  };

  const isFilled = otp.every((d) => d !== "");

  return (
    <div className="bg-white overflow-clip relative rounded-[30px] size-full" data-name="Kode OTP">
      <div className="absolute bg-[#e0d5ff] h-[355px] left-0 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[40px] rounded-tr-[40px] top-[497px] w-[393px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] left-[202px] text-[15px] text-[rgba(0,0,0,0.7)] text-center top-[591px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Masukkan kode verifikasi
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[0] left-[205.5px] text-[14px] text-black text-center top-[780px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[normal]">{`Belum menerima kode? `}</span>
        <span className="font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal]" style={{ fontVariationSettings: '"wdth" 100' }}>
          kirim ulang
        </span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] left-[129px] text-[18px] text-black top-[551px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Masukkan kode
      </p>

      {/* OTP inputs — interactive, positioned at the box locations from design */}
      {[54, 114, 174, 234, 294].map((left, i) => (
        <input
          key={i}
          ref={(el) => { inputs.current[i] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[i]}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          className="absolute w-[45px] h-[45px] top-[630px] rounded-[10px] text-center text-[18px] font-bold text-black bg-white outline-none"
          style={{
            left,
            boxShadow: "0px 15px 4px 0px rgba(0,0,0,0),0px 10px 4px 0px rgba(0,0,0,0.01),0px 5px 3px 0px rgba(0,0,0,0.05),0px 2px 2px 0px rgba(0,0,0,0.09),0px 1px 1px 0px rgba(0,0,0,0.1)",
            border: otp[i] ? "2px solid #3a33f4" : "2px solid transparent",
          }}
        />
      ))}

      {/* Verifikasi button */}
      <div
        className="absolute bg-[#3a33f4] h-[45px] left-[62px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[705px] w-[280px] cursor-pointer"
        style={{ opacity: isFilled ? 1 : 0.5 }}
        onClick={() => isFilled && onVerifikasi?.()}
      />
      <p
        className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[171px] text-[13px] text-white top-[720px] whitespace-nowrap cursor-pointer z-10"
        style={{ fontVariationSettings: '"wdth" 100', opacity: isFilled ? 1 : 0.5 }}
        onClick={() => isFilled && onVerifikasi?.()}
      >
        Verifikasi
      </p>

      <div className="absolute h-[240px] left-[107px] top-[173px] w-[180px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOtp} />
      </div>
    </div>
  );
}
