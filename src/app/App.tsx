import { useState } from "react";

// Modular Page Imports
import SplashPage from "./pages/SplashPage";
import LoginPage from "./pages/LoginPage";
import BuatAkunPage from "./pages/BuatAkunPage";
import SuksesDaftarPage from "./pages/SuksesDaftarPage";
import LupaPasswordPage from "./pages/LupaPasswordPage";
import KodeOtpPage from "./pages/KodeOtpPage";
import PasswordBaruPage from "./pages/PasswordBaruPage";
import SuksesPasswordPage from "./pages/SuksesPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import RecapHarianPage from "./pages/RecapHarianPage";
import RecapBulananPage from "./pages/RecapBulananPage";
import RecapTahunanPage from "./pages/RecapTahunanPage";

type Page =
  | "splash"
  | "login"
  | "buat-akun"
  | "sukses-daftar"
  | "lupa-password"
  | "kode-otp"
  | "password-baru"
  | "sukses-password"
  | "dashboard"
  | "recap-harian"
  | "recap-bulanan"
  | "recap-tahunan";

export default function App() {
  const [page, setPage] = useState<Page>("splash");
  const [openAddExpenseOnLoad, setOpenAddExpenseOnLoad] = useState(false);

  return (
    <>
      {page === "splash" && <SplashPage onDone={() => setPage("login")} />}
      {page === "login" && (
        <LoginPage
          onDaftar={() => setPage("buat-akun")}
          onLupaPassword={() => setPage("lupa-password")}
          onLogin={() => setPage("dashboard")}
        />
      )}
      {page === "buat-akun" && (
        <BuatAkunPage
          onDaftar={() => setPage("sukses-daftar")}
          onMasuk={() => setPage("login")}
        />
      )}
      {page === "sukses-daftar" && (
        <SuksesDaftarPage onMulai={() => setPage("login")} />
      )}
      {page === "lupa-password" && (
        <LupaPasswordPage onKirimKode={() => setPage("kode-otp")} />
      )}
      {page === "kode-otp" && (
        <KodeOtpPage onVerifikasi={() => setPage("password-baru")} />
      )}
      {page === "password-baru" && (
        <PasswordBaruPage onSimpan={() => setPage("sukses-password")} />
      )}
      {page === "sukses-password" && (
        <SuksesPasswordPage onMulai={() => setPage("login")} />
      )}

      {page === "dashboard" && (
        <DashboardPage
          onLogout={() => setPage("login")}
          onRecap={() => setPage("recap-harian")}
          openAddExpense={openAddExpenseOnLoad}
          onAddExpenseOpenComplete={() => setOpenAddExpenseOnLoad(false)}
        />
      )}

      {page === "recap-harian" && (
        <RecapHarianPage
          onBack={() => setPage("dashboard")}
          onDashboard={() => setPage("dashboard")}
          onAddExpense={() => {
            setPage("dashboard");
            setOpenAddExpenseOnLoad(true);
          }}
          onTabChange={(tab) =>
            setPage(tab === "bulanan" ? "recap-bulanan" : "recap-tahunan")
          }
        />
      )}
      {page === "recap-bulanan" && (
        <RecapBulananPage
          onBack={() => setPage("dashboard")}
          onDashboard={() => setPage("dashboard")}
          onAddExpense={() => {
            setPage("dashboard");
            setOpenAddExpenseOnLoad(true);
          }}
          onTabChange={(tab) =>
            setPage(tab === "harian" ? "recap-harian" : "recap-tahunan")
          }
        />
      )}
      {page === "recap-tahunan" && (
        <RecapTahunanPage
          onBack={() => setPage("dashboard")}
          onDashboard={() => setPage("dashboard")}
          onAddExpense={() => {
            setPage("dashboard");
            setOpenAddExpenseOnLoad(true);
          }}
          onTabChange={(tab) =>
            setPage(tab === "harian" ? "recap-harian" : "recap-bulanan")
          }
        />
      )}
    </>
  );
}
