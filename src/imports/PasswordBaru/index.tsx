import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import imgLock from "./fa7871d379d83d3001f826ac14acbcb743b0fa61.png";

interface PasswordBaruProps {
  onSimpan?: () => void;
}

export default function PasswordBaru({ onSimpan }: PasswordBaruProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="bg-white overflow-clip relative rounded-[30px] size-full" data-name="Password Baru">
      {/* Sparkle decorations */}
      <svg style={{ position: "absolute", top: 128, left: 64, zIndex: 2 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 0L8.05 5.95L14 7L8.05 8.05L7 14L5.95 8.05L0 7L5.95 5.95L7 0Z" fill="#FF6B9D"/>
      </svg>
      <svg style={{ position: "absolute", top: 272, right: 52, zIndex: 2 }} width="11" height="11" viewBox="0 0 14 14" fill="none">
        <path d="M7 0L8.05 5.95L14 7L8.05 8.05L7 14L5.95 8.05L0 7L5.95 5.95L7 0Z" fill="#A78BFA"/>
      </svg>
      <svg style={{ position: "absolute", top: 320, right: 40, zIndex: 2 }} width="8" height="8" viewBox="0 0 14 14" fill="none">
        <path d="M7 0L8.05 5.95L14 7L8.05 8.05L7 14L5.95 8.05L0 7L5.95 5.95L7 0Z" fill="#818CF8" opacity="0.7"/>
      </svg>

      <div className="absolute bg-[#e0d5ff] h-[353px] left-0 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[40px] rounded-tr-[40px] top-[499px] w-[393px]" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] left-[200px] text-[15px] text-[rgba(0,0,0,0.7)] text-center top-[591px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Masukkan password baru anda
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Heavy',sans-serif] font-[860] leading-[normal] left-[77px] text-[18px] text-black top-[551px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Masukkan password baru
      </p>

      {/* Save button */}
      <div
        className="absolute bg-[#3a33f4] h-[45px] left-[55px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[756px] w-[280px] cursor-pointer"
        onClick={onSimpan}
      />
      <p
        className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] left-[170px] text-[13px] text-white top-[771px] whitespace-nowrap cursor-pointer z-10"
        style={{ fontVariationSettings: '"wdth" 100' }}
        onClick={onSimpan}
      >
        Simpan
      </p>

      {/* Password input */}
      <div className="absolute bg-white h-[45px] left-[56px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[624px] w-[280px] flex items-center px-4 z-10">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password baru"
          className="flex-1 bg-transparent outline-none text-[13px] font-bold text-black/50 placeholder:text-black/50"
        />
        <button type="button" onClick={() => setShowPassword(v => !v)} className="ml-2 text-black/30">
          {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] left-[138.5px] text-[10px] text-[rgba(0,0,0,0.5)] text-center top-[671px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Gunakan minimal 8 karakter
      </p>

      {/* Confirm password input */}
      <div className="absolute bg-white h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[689px] w-[280px] flex items-center px-4 z-10">
        <input
          type={showConfirm ? "text" : "password"}
          placeholder="Konfirmasi password baru"
          className="flex-1 bg-transparent outline-none text-[13px] font-bold text-black/50 placeholder:text-black/50"
        />
        <button type="button" onClick={() => setShowConfirm(v => !v)} className="ml-2 text-black/30">
          {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
      </div>

      <div className="absolute h-[249px] left-[107px] top-[158px] w-[179px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLock} />
      </div>
    </div>
  );
}
