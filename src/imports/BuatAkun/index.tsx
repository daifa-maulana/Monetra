import { useState } from "react";
import imgLogo1 from "./c331e61fb610ec441601c30133af8749a1655092.png";

interface BuatAkunProps {
  onDaftar?: (e: React.FormEvent) => void;
  onMasuk?: () => void;
  fullName: string;
  setFullName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  confirmPassword: string;
  setConfirmPassword: (v: string) => void;
  loading: boolean;
  errorMsg: string;
}

function Logo() {
  return (
    <div className="absolute contents left-[68px] top-[128px]" data-name="logo">
      <div className="absolute h-[69px] left-[68px] top-[131px] w-[54px]" data-name="logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[299.57%] left-[-50.54%] max-w-none top-[-95.25%] w-[800%]" src={imgLogo1} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute h-[76px] leading-[normal] left-[139px] not-italic text-[50px] top-[128px] w-[203px]" style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, background: "linear-gradient(to right, #8b5bc5, #eb7f9e 50%, #fb9b44)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Monetra</p>
    </div>
  );
}

export default function BuatAkun({
  onDaftar,
  onMasuk,
  fullName,
  setFullName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  loading,
  errorMsg,
}: BuatAkunProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

      {errorMsg && (
        <div className="absolute top-[286px] left-[57px] w-[280px] bg-red-100 border border-red-300 text-red-700 text-[10px] font-semibold rounded-[10px] p-1.5 text-center z-20">
          {errorMsg}
        </div>
      )}

      <form onSubmit={onDaftar} className="absolute contents">
        {/* Nama Lengkap Input card replacing Figma background card and label */}
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={loading}
          required
          className="absolute bg-white h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[419px] w-[280px] px-4 text-[13px] font-bold text-black border-none outline-none placeholder:text-black/35"
        />

        {/* Email Input card replacing Figma background card and label */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
          className="absolute bg-white h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[476px] w-[280px] px-4 text-[13px] font-bold text-black border-none outline-none placeholder:text-black/35"
        />

        {/* Password Input card replacing Figma background card and label */}
        <div className="absolute bg-white h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[533px] w-[280px] flex items-center px-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
            className="w-full bg-transparent outline-none text-[13px] font-bold text-black border-none placeholder:text-black/35"
          />
          <button type="button" onClick={() => setShowPassword((v) => !v)} className="ml-2 shrink-0 text-black/50 hover:text-black/70 transition-colors" disabled={loading}>
            {showPassword ? (<svg width="17" height="14" viewBox="0 0 17 14" fill="none"><path d="M8.5 2.5C11.617 2.5 14.438 4.268 16 7.17C14.438 10.072 11.617 11.84 8.5 11.84C5.383 11.84 2.562 10.072 1 7.17C2.562 4.268 5.383 2.5 8.5 2.5ZM8.5 4.41C6.79 4.41 5.41 5.79 5.41 7.5C5.41 9.21 6.79 10.59 8.5 10.59C10.21 10.59 11.59 9.21 11.59 7.5C11.59 5.79 10.21 4.41 8.5 4.41ZM8.5 5.86C9.41 5.86 10.14 6.59 10.14 7.5C10.14 8.41 9.41 9.14 8.5 9.14C7.59 9.14 6.86 8.41 6.86 7.5C6.86 6.59 7.59 5.86 8.5 5.86Z" fill="currentColor" fillOpacity="0.5" /></svg>) : (<svg width="17" height="14" viewBox="0 0 17 14" fill="none"><path clipRule="evenodd" d="M13.6541 11.1301L15.783 13.3245L15.1269 14L2.20227 0.67706L2.85677 0L5.06291 2.27412C6.12927 1.83443 7.28836 1.59308 8.5 1.59308C12.2153 1.59308 15.4329 3.86163 17 7.16887C16.244 8.77095 15.0895 10.1378 13.6541 11.1301ZM5.78464 3.01889L7.07045 4.34433C7.65381 4.02996 8.3193 3.91578 8.96999 4.01842C9.62069 4.12106 10.2226 4.43515 10.6881 4.91496C11.1535 5.39477 11.4582 6.01523 11.5578 6.68598C11.6574 7.35673 11.5466 8.04272 11.2416 8.64406L12.9841 10.4403C14.2004 9.64372 15.2281 8.52617 15.9553 7.16966C14.4392 4.34115 11.6172 2.54893 8.5 2.54893C7.57588 2.54953 6.65827 2.70834 5.78464 3.01889ZM10.5385 7.91921C10.6763 7.5215 10.7019 7.09161 10.612 6.67954C10.5222 6.26747 10.3207 5.89017 10.031 5.59153C9.74124 5.29289 9.37522 5.08518 8.97547 4.99257C8.57572 4.89996 8.15868 4.92625 7.77286 5.06839L10.5385 7.91921ZM11.9371 12.0644C10.8707 12.5041 9.71164 12.7454 8.5 12.7454C4.78473 12.7454 1.56709 10.4769 0 7.16966C0.755975 5.56758 1.9105 4.20074 3.34591 3.20847L4.01586 3.89907C2.77525 4.71504 1.75356 5.83944 1.04473 7.16887C2.56082 9.99659 5.38282 11.7888 8.5 11.7888C9.42412 11.7882 10.3417 11.6294 11.2154 11.3188L11.9371 12.0644ZM5.75914 5.69527L6.46155 6.42012C6.32366 6.81783 6.29815 7.24772 6.38799 7.65979C6.47783 8.07185 6.67933 8.44915 6.96905 8.7478C7.25876 9.04644 7.62478 9.25415 8.02453 9.34676C8.42428 9.43937 8.84132 9.41308 9.22714 9.27094L9.93032 9.9942C9.34696 10.3086 8.68147 10.4228 8.03078 10.3201C7.38008 10.2175 6.77817 9.90338 6.31271 9.42357C5.84724 8.94376 5.54253 8.3233 5.44296 7.65255C5.34339 6.9818 5.45416 6.2966 5.75914 5.69527Z" fill="currentColor" fillOpacity="0.5" fillRule="evenodd" /></svg>)}
          </button>
        </div>

        {/* Konfirmasi Password Input card replacing Figma background card and label */}
        <div className="absolute bg-white h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[590px] w-[280px] flex items-center px-4">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Konfirmasi Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={loading}
            required
            className="w-full bg-transparent outline-none text-[13px] font-bold text-black border-none placeholder:text-black/35"
          />
          <button type="button" onClick={() => setShowConfirmPassword((v) => !v)} className="ml-2 shrink-0 text-black/50 hover:text-black/70 transition-colors" disabled={loading}>
            {showConfirmPassword ? (<svg width="17" height="14" viewBox="0 0 17 14" fill="none"><path d="M8.5 2.5C11.617 2.5 14.438 4.268 16 7.17C14.438 10.072 11.617 11.84 8.5 11.84C5.383 11.84 2.562 10.072 1 7.17C2.562 4.268 5.383 2.5 8.5 2.5ZM8.5 4.41C6.79 4.41 5.41 5.79 5.41 7.5C5.41 9.21 6.79 10.59 8.5 10.59C10.21 10.59 11.59 9.21 11.59 7.5C11.59 5.79 10.21 4.41 8.5 4.41ZM8.5 5.86C9.41 5.86 10.14 6.59 10.14 7.5C10.14 8.41 9.41 9.14 8.5 9.14C7.59 9.14 6.86 8.41 6.86 7.5C6.86 6.59 7.59 5.86 8.5 5.86Z" fill="currentColor" fillOpacity="0.5" /></svg>) : (<svg width="17" height="14" viewBox="0 0 17 14" fill="none"><path clipRule="evenodd" d="M13.6541 11.1301L15.783 13.3245L15.1269 14L2.20227 0.67706L2.85677 0L5.06291 2.27412C6.12927 1.83443 7.28836 1.59308 8.5 1.59308C12.2153 1.59308 15.4329 3.86163 17 7.16887C16.244 8.77095 15.0895 10.1378 13.6541 11.1301ZM5.78464 3.01889L7.07045 4.34433C7.65381 4.02996 8.3193 3.91578 8.96999 4.01842C9.62069 4.12106 10.2226 4.43515 10.6881 4.91496C11.1535 5.39477 11.4582 6.01523 11.5578 6.68598C11.6574 7.35673 11.5466 8.04272 11.2416 8.64406L12.9841 10.4403C14.2004 9.64372 15.2281 8.52617 15.9553 7.16966C14.4392 4.34115 11.6172 2.54893 8.5 2.54893C7.57588 2.54953 6.65827 2.70834 5.78464 3.01889ZM10.5385 7.91921C10.6763 7.5215 10.7019 7.09161 10.612 6.67954C10.5222 6.26747 10.3207 5.89017 10.031 5.59153C9.74124 5.29289 9.37522 5.08518 8.97547 4.99257C8.57572 4.89996 8.15868 4.92625 7.77286 5.06839L10.5385 7.91921ZM11.9371 12.0644C10.8707 12.5041 9.71164 12.7454 8.5 12.7454C4.78473 12.7454 1.56709 10.4769 0 7.16966C0.755975 5.56758 1.9105 4.20074 3.34591 3.20847L4.01586 3.89907C2.77525 4.71504 1.75356 5.83944 1.04473 7.16887C2.56082 9.99659 5.38282 11.7888 8.5 11.7888C9.42412 11.7882 10.3417 11.6294 11.2154 11.3188L11.9371 12.0644ZM5.75914 5.69527L6.46155 6.42012C6.32366 6.81783 6.29815 7.24772 6.38799 7.65979C6.47783 8.07185 6.67933 8.44915 6.96905 8.7478C7.25876 9.04644 7.62478 9.25415 8.02453 9.34676C8.42428 9.43937 8.84132 9.41308 9.22714 9.27094L9.93032 9.9942C9.34696 10.3086 8.68147 10.4228 8.03078 10.3201C7.38008 10.2175 6.77817 9.90338 6.31271 9.42357C5.84724 8.94376 5.54253 8.3233 5.44296 7.65255C5.34339 6.9818 5.45416 6.2966 5.75914 5.69527Z" fill="currentColor" fillOpacity="0.5" fillRule="evenodd" /></svg>)}
          </button>
        </div>

        {/* Submit button replacing Figma background card and label */}
        <button
          type="submit"
          disabled={loading}
          className="absolute bg-[#3a33f4] h-[45px] left-[57px] rounded-[15px] shadow-[0px_35px_10px_0px_rgba(0,0,0,0),0px_22px_9px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.05),0px_6px_6px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[675px] w-[280px] cursor-pointer text-white text-[13px] font-bold border-none outline-none hover:bg-[#2e27df] active:scale-95 transition-all"
        >
          {loading ? "Mendaftar..." : "Daftar"}
        </button>
      </form>

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
