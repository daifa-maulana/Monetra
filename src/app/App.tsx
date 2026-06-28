import { useState } from "react";
import BuatAkun from "@/imports/BuatAkun/index";
import SuksesScreen from "@/imports/SuksesScreen/index";
import LupaPassword from "@/imports/LupaPassword/index";
import KodeOtp from "@/imports/KodeOtp/index";
import PasswordBaru from "@/imports/PasswordBaru/index";
import SuksesPassword from "@/imports/SuksesPassword/index";

// Modular Page Imports
import SplashPage from "./pages/SplashPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import RecapPage from "./pages/RecapPage";

type Page =
  | "splash" | "login" | "buat-akun" | "sukses-daftar" | "lupa-password"
  | "kode-otp" | "password-baru" | "sukses-password"
  | "dashboard"
  | "recap";

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[393px]" style={{ height: 852 }}>{children}</div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("splash");

  return (
    <>
      {page === "splash" && <SplashPage onDone={() => setPage("login")} />}
      {page === "login" && <LoginPage onDaftar={() => setPage("buat-akun")} onLupaPassword={() => setPage("lupa-password")} onLogin={() => setPage("dashboard")} />}
      {page === "buat-akun" && <PageWrapper><BuatAkun onDaftar={() => setPage("sukses-daftar")} onMasuk={() => setPage("login")} /></PageWrapper>}
      {page === "sukses-daftar" && <PageWrapper><SuksesScreen onMulai={() => setPage("login")} /></PageWrapper>}
      {page === "lupa-password" && <PageWrapper><LupaPassword onKirimKode={() => setPage("kode-otp")} /></PageWrapper>}
      {page === "kode-otp" && <PageWrapper><KodeOtp onVerifikasi={() => setPage("password-baru")} /></PageWrapper>}
      {page === "password-baru" && <PageWrapper><PasswordBaru onSimpan={() => setPage("sukses-password")} /></PageWrapper>}
      {page === "sukses-password" && <PageWrapper><SuksesPassword onMulai={() => setPage("login")} /></PageWrapper>}

      {page === "dashboard" && <DashboardPage onLogout={() => setPage("login")} onRecap={() => setPage("recap")} />}
      {page === "recap" && <RecapPage onBack={() => setPage("dashboard")} />}
    </>
  );
}
