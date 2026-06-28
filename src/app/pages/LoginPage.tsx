import { useState } from "react";
import svgPaths from "@/imports/LoginEmail/svg-tq6bzi07qp";
import imgLogo1 from "@/imports/LoginEmail/c331e61fb610ec441601c30133af8749a1655092.png";
import imgGoogle from "@/imports/LoginEmail/7e7a002f9ad30ccb7688265eca3b94a7acf29402.png";

export default function LoginPage({ onDaftar, onLupaPassword, onLogin }: {
  onDaftar: () => void; onLupaPassword: () => void; onLogin: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[393px] bg-white rounded-[30px] overflow-hidden relative" style={{ minHeight: 852 }}>
        <div className="flex items-center gap-3 px-[68px] pt-[128px]">
          <div className="w-[54px] h-[69px] overflow-hidden relative shrink-0">
            <img alt="Monetra Logo" className="absolute max-w-none" style={{ width: "800%", left: "-50.54%", top: "-95.25%" }} src={imgLogo1} />
          </div>
          <span className="text-[50px] font-bold leading-none" style={{ fontFamily: "'Baloo 2', sans-serif", background: "linear-gradient(to right, #8b5bc5, #eb7f9e 50%, #fb9b44)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Monetra
          </span>
        </div>
        <div className="mx-0 mt-8 bg-[#e0d5ff] rounded-[40px_40px_20px_20px] px-[57px] pt-[55px] pb-[50px] flex flex-col gap-0">
          <p className="text-center text-[18px] font-black text-black mb-[12px]">Selamat datang!</p>
          <p className="text-center text-[15px] text-black/70 font-medium mb-[30px]">Login untuk melanjutkan</p>
          <div className="bg-white rounded-[15px] h-[45px] flex items-center px-4 mb-[12px]" style={{ boxShadow: "0px 1px 3px rgba(0,0,0,0.10), 0px 6px 6px rgba(0,0,0,0.09), 0px 13px 8px rgba(0,0,0,0.05), 0px 22px 9px rgba(0,0,0,0.01)" }}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent outline-none text-[13px] font-bold text-black/50 placeholder:text-black/50" />
          </div>
          <div className="bg-white rounded-[15px] h-[45px] flex items-center px-4 mb-[32px]" style={{ boxShadow: "0px 1px 3px rgba(0,0,0,0.10), 0px 6px 6px rgba(0,0,0,0.09), 0px 13px 8px rgba(0,0,0,0.05), 0px 22px 9px rgba(0,0,0,0.01)" }}>
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent outline-none text-[13px] font-bold text-black/50 placeholder:text-black/50" />
            <button type="button" onClick={() => setShowPassword((v) => !v)} className="ml-2 shrink-0 text-black/50 hover:text-black/70 transition-colors">
              {showPassword ? (
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none"><path d="M8.5 2.5C11.617 2.5 14.438 4.268 16 7.17C14.438 10.072 11.617 11.84 8.5 11.84C5.383 11.84 2.562 10.072 1 7.17C2.562 4.268 5.383 2.5 8.5 2.5ZM8.5 4.41C6.79 4.41 5.41 5.79 5.41 7.5C5.41 9.21 6.79 10.59 8.5 10.59C10.21 10.59 11.59 9.21 11.59 7.5C11.59 5.79 10.21 4.41 8.5 4.41ZM8.5 5.86C9.41 5.86 10.14 6.59 10.14 7.5C10.14 8.41 9.41 9.14 8.5 9.14C7.59 9.14 6.86 8.41 6.86 7.5C6.86 6.59 7.59 5.86 8.5 5.86Z" fill="currentColor" fillOpacity="0.5" /></svg>
              ) : (
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none"><path clipRule="evenodd" d={svgPaths.p16d06680} fill="currentColor" fillOpacity="0.5" fillRule="evenodd" /></svg>
              )}
            </button>
          </div>
          <button type="button" className="w-full h-[45px] bg-[#3a33f4] rounded-[15px] text-white text-[13px] font-bold hover:bg-[#2d27d4] active:scale-[0.98] transition-all mb-[14px]" style={{ boxShadow: "0px 1px 3px rgba(0,0,0,0.15), 0px 6px 6px rgba(0,0,0,0.13), 0px 13px 8px rgba(0,0,0,0.08), 0px 22px 9px rgba(0,0,0,0.02)" }} onClick={onLogin}>Login</button>
          <div className="flex justify-end mb-[30px]">
            <button type="button" className="text-[12px] font-bold text-black hover:text-black/70 transition-colors" onClick={onLupaPassword}>Lupa Password?</button>
          </div>
          <div className="flex items-center gap-3 mb-[22px]">
            <div className="h-px bg-black flex-1" />
            <span className="text-[12px] font-semibold text-black whitespace-nowrap">atau masuk dengan</span>
            <div className="h-px bg-black flex-1" />
          </div>
          <div className="flex justify-center mb-[28px]">
            <button type="button" className="w-[55px] h-[55px] hover:opacity-80 active:scale-95 transition-all" onClick={onLogin}>
              <img alt="Google" src={imgGoogle} className="w-full h-full object-cover" />
            </button>
          </div>
          <p className="text-center text-[12px] text-black">
            <span>Belum punya akun? </span>
            <button type="button" className="font-black hover:underline" onClick={onDaftar}>Daftar</button>
            <span> di sini</span>
          </p>
        </div>
      </div>
    </div>
  );
}
