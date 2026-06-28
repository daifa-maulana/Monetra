import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

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
import InputSaldo from "@/imports/InputSaldo";
import InputLimit from "@/imports/InputLimit";

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
  | "recap-tahunan"
  | "input-saldo"
  | "input-limit";

export default function App() {
  const [page, setPage] = useState<Page>("splash");
  const [openAddExpenseOnLoad, setOpenAddExpenseOnLoad] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [targetPageAfterSplash, setTargetPageAfterSplash] = useState<Page>("login");

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUserId(session.user.id);
        setTargetPageAfterSplash("dashboard");
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUserId(session.user.id);
        setPage((current) => {
          if (current === "splash") {
            setTargetPageAfterSplash("dashboard");
            return "splash";
          }
          return "dashboard";
        });
      } else {
        setUserId(null);
        setPage((current) => {
          if (current === "splash") {
            setTargetPageAfterSplash("login");
            return "splash";
          }
          return "login";
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      {page === "splash" && <SplashPage onDone={() => setPage(targetPageAfterSplash)} />}
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
          userId={userId || ""}
          onLogout={() => setPage("login")}
          onRecap={() => setPage("recap-harian")}
          openAddExpense={openAddExpenseOnLoad}
          onAddExpenseOpenComplete={() => setOpenAddExpenseOnLoad(false)}
          onNavigateSaldo={() => setPage("input-saldo")}
          onNavigateLimit={() => setPage("input-limit")}
        />
      )}

      {page === "recap-harian" && (
        <RecapHarianPage
          userId={userId || ""}
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
          userId={userId || ""}
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
          userId={userId || ""}
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
      
      {page === "input-saldo" && (
        <div className="min-h-screen bg-gray-100 flex items-start justify-center py-6 px-4">
          <div
            className="relative bg-white rounded-[30px] shadow-2xl w-full max-w-[393px] flex flex-col overflow-hidden"
            style={{ fontFamily: "'Inter', sans-serif", height: 852 }}
          >
            <InputSaldo
              userId={userId || ""}
              onBack={() => setPage("dashboard")}
              onNavigateDashboard={() => setPage("dashboard")}
              onNavigateRecap={() => setPage("recap-harian")}
            />
          </div>
        </div>
      )}

      {page === "input-limit" && (
        <div className="min-h-screen bg-gray-100 flex items-start justify-center py-6 px-4">
          <div
            className="relative bg-white rounded-[30px] shadow-2xl w-full max-w-[393px] flex flex-col overflow-hidden"
            style={{ fontFamily: "'Inter', sans-serif", height: 852 }}
          >
            <InputLimit
              userId={userId || ""}
              onBack={() => setPage("dashboard")}
              onNavigateDashboard={() => setPage("dashboard")}
              onNavigateRecap={() => setPage("recap-harian")}
            />
          </div>
        </div>
      )}
    </>
  );
}
