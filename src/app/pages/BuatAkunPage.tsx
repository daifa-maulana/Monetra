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
      <div className="w-full max-w-[393px]" style={{ height: 852 }}>
        <BuatAkun
          onDaftar={handleRegister}
          onMasuk={onMasuk}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          loading={loading}
          errorMsg={errorMsg}
        />
      </div>
    </div>
  );
}
