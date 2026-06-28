import { useState } from "react";
import { supabase } from "@/lib/supabase";
import BuatAkun from "@/imports/BuatAkun/index";

export default function BuatAkunPage({ onDaftar, onMasuk }: { onDaftar: () => void; onMasuk: () => void }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      setErrorMsg("Semua kolom harus diisi");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Password dan konfirmasi password tidak cocok");
      return;
    }
    if (password.length < 6) {
      setErrorMsg("Password minimal 6 karakter");
      return;
    }

    try {
      setLoading(true);
      setErrorMsg("");

      // 1. Sign up user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      if (data?.user) {
        // 2. Update profile name
        const { error: profileError } = await supabase
          .from("profiles")
          .update({ nama: fullName })
          .eq("id", data.user.id);

        if (profileError) console.error("Error updating profile name:", profileError);

        onDaftar();
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Gagal mendaftar. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[393px] relative" style={{ height: 852 }}>
        {/* Render base design from figma */}
        <BuatAkun onMasuk={onMasuk} />

        {/* Input fields overlay positioned exactly on top of Figma boxes */}
        <form onSubmit={handleRegister} className="absolute inset-0 pointer-events-none">
          {/* Error Message Box */}
          {errorMsg && (
            <div className="absolute top-[286px] left-[57px] w-[280px] bg-red-100 border border-red-300 text-red-700 text-[10px] font-semibold rounded-[10px] p-1.5 text-center pointer-events-auto z-20">
              {errorMsg}
            </div>
          )}

          {/* Nama Lengkap Input (Figma Box top: 419) */}
          <input
            type="text"
            placeholder="Masukkan nama lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="absolute top-[425px] left-[74px] w-[246px] h-[33px] bg-transparent outline-none border-none text-[13px] font-semibold text-black placeholder:text-black/30 pointer-events-auto z-20"
            disabled={loading}
          />

          {/* Email Input (Figma Box top: 476) */}
          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="absolute top-[482px] left-[74px] w-[246px] h-[33px] bg-transparent outline-none border-none text-[13px] font-semibold text-black placeholder:text-black/30 pointer-events-auto z-20"
            disabled={loading}
          />

          {/* Password Input (Figma Box top: 533) */}
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="absolute top-[539px] left-[74px] w-[246px] h-[33px] bg-transparent outline-none border-none text-[13px] font-semibold text-black placeholder:text-black/30 pointer-events-auto z-20"
            disabled={loading}
          />

          {/* Konfirmasi Password Input (Figma Box top: 590) */}
          <input
            type="password"
            placeholder="Konfirmasi password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="absolute top-[596px] left-[74px] w-[246px] h-[33px] bg-transparent outline-none border-none text-[13px] font-semibold text-black placeholder:text-black/30 pointer-events-auto z-20"
            disabled={loading}
          />

          {/* Submit Button Overlay (Figma Button top: 675, width 280, height 45) */}
          <button
            type="submit"
            className="absolute top-[675px] left-[57px] w-[280px] h-[45px] bg-transparent border-none cursor-pointer pointer-events-auto z-25 flex items-center justify-center text-white text-[13px] font-bold"
            disabled={loading}
          >
            {loading ? "Mendaftar..." : ""}
          </button>
        </form>
      </div>
    </div>
  );
}
