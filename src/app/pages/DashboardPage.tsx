import { useState, useRef, useEffect } from "react";
import {
  UtensilsCrossed, Bus, Receipt, Zap, GraduationCap, Heart,
  Smartphone, Gamepad2, Sparkles, MoreHorizontal, Plus,
  LayoutDashboard, FileText, ChevronRight, Wallet, TrendingUp,
  TrendingDown, Shield, ArrowLeft, Camera, X,
} from "lucide-react";

import imgProfile from "@/imports/Awal/9f83dd8858dbce9e805b0001243c2bf8459c87c8.png";
import imgWallet from "@/imports/Awal/f3f96c9a29ac726fc05617fbf5e5f1de9a09f760.png";
import imgEmoji from "@/imports/Awal/c7114843781c63f9bbda7f363d43c9f3e397e718.png";
import imgWallet2 from "@/imports/Saldo3/b919fe9e06545fa2c3d9cd48bbf119c63749fcb4.png";
import InputInstan from "@/imports/Blur";
import InputPengeluaran from "@/imports/InputPengeluaran/index";

const CATEGORIES = [
  { label: "Makan/minum", icon: UtensilsCrossed, color: "#73CD6C", bg: "#E4F2E3" },
  { label: "Transportasi", icon: Bus, color: "#8869F5", bg: "#EAE2FB" },
  { label: "Pajak", icon: Receipt, color: "#EF4D4D", bg: "#FFDADA" },
  { label: "Listrik", icon: Zap, color: "#F5A623", bg: "#FFF3DC" },
  { label: "Pendidikan", icon: GraduationCap, color: "#8869F5", bg: "#EAE2FB" },
  { label: "Kesehatan", icon: Heart, color: "#EF4D4D", bg: "#FFDADA" },
  { label: "Pulsa/data", icon: Smartphone, color: "#8869F5", bg: "#EAE2FB" },
  { label: "Hiburan", icon: Gamepad2, color: "#F5A623", bg: "#FFF3DC" },
  { label: "Perawatan Diri", icon: Sparkles, color: "#73CD6C", bg: "#E4F2E3" },
  { label: "Lainnya", icon: MoreHorizontal, color: "#8869F5", bg: "#EAE2FB" },
];

type Category = {
  label: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  bg: string;
};

export default function DashboardPage({
  onLogout,
  onRecap,
  openAddExpense,
  onAddExpenseOpenComplete,
}: {
  onLogout: () => void;
  onRecap: () => void;
  openAddExpense?: boolean;
  onAddExpenseOpenComplete?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"dashboard" | "recap">("dashboard");
  const [cardSlide, setCardSlide] = useState(0);
  const [showLogout, setShowLogout] = useState(false);
  const [showInputInstan, setShowInputInstan] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showInputPengeluaran, setShowInputPengeluaran] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>(CATEGORIES[0]);
  const totalSlides = 2;
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (openAddExpense) {
      setShowInputPengeluaran(true);
      onAddExpenseOpenComplete?.();
    }
  }, [openAddExpense, onAddExpenseOpenComplete]);

  const [profileName, setProfileName] = useState("Muja Karamoy");
  const [profileEmail, setProfileEmail] = useState("kelompok1@gmail.com");
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [editName, setEditName] = useState(profileName);
  const [editEmail, setEditEmail] = useState(profileEmail);
  const [editPhoto, setEditPhoto] = useState<string | null>(null);

  const openEditProfile = () => {
    setEditName(profileName);
    setEditEmail(profileEmail);
    setEditPhoto(profilePhoto);
    setShowLogout(false);
    setShowEditProfile(true);
  };

  const saveEditProfile = () => {
    setProfileName(editName);
    setProfileEmail(editEmail);
    setProfilePhoto(editPhoto);
    setShowEditProfile(false);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setEditPhoto(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent, startX: number) => {
    const endX = "changedTouches" in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    const diff = startX - endX;
    if (diff > 40 && cardSlide < totalSlides - 1) setCardSlide((p) => p + 1);
    else if (diff < -40 && cardSlide > 0) setCardSlide((p) => p - 1);
  };

  const currentPhoto = profilePhoto ?? imgProfile;

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-6 px-4">
      <div
        className="relative bg-white rounded-[30px] shadow-2xl w-full max-w-[393px] flex flex-col overflow-hidden"
        style={{ fontFamily: "'Inter', sans-serif", height: 852 }}
      >
        <style>{`.phone-scroll::-webkit-scrollbar{display:none}`}</style>
        <div className="phone-scroll flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          {/* ── Header ── */}
          <div className="relative bg-[#8869F5] rounded-b-[20px] pt-10 pb-4 px-6 overflow-hidden">
            <div className="relative flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-white font-extrabold text-xl leading-tight">Hello, {profileName.split(" ")[0]}</h1>
                  <img src={imgEmoji} alt="wave" className="w-5 h-5 object-contain" />
                </div>
                <p className="text-white/80 text-xs mt-1">Semangat atur keuangan hari ini!</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowLogout((v) => !v)}
                  className="w-10 h-10 rounded-full border-2 border-[#8869F5] overflow-hidden focus:outline-none"
                >
                  <img src={currentPhoto} alt="profile" className="w-full h-full object-cover" />
                </button>

                {showLogout && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowLogout(false)} />
                    <div className="absolute right-0 top-12 z-50 w-[220px] bg-white rounded-[10px] border-2 border-[#8b5bc5] shadow-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full border-2 border-[#9B86D9] overflow-hidden shrink-0">
                          <img src={currentPhoto} alt="profile" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-[15px] text-black leading-tight">{profileName}</p>
                          <p className="text-[12px] text-black/50 mt-0.5">{profileEmail}</p>
                        </div>
                      </div>
                      <button
                        onClick={openEditProfile}
                        className="w-full bg-[#8869F5] rounded-[7px] py-2 text-[13px] font-bold text-white hover:bg-[#7558e0] transition-colors mb-2"
                      >
                        Edit Profile
                      </button>
                      <button
                        onClick={() => { setShowLogout(false); onLogout(); }}
                        className="w-full border border-red-500 rounded-[7px] py-2 text-[13px] font-bold text-red-500 hover:bg-red-50 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Balance card carousel */}
            {(() => {
              let startX = 0;
              return (
                <div
                  className="mt-5 overflow-hidden"
                  onTouchStart={(e) => { startX = e.touches[0].clientX; }}
                  onTouchEnd={(e) => handleDragEnd(e, startX)}
                  onMouseDown={(e) => { startX = e.clientX; }}
                  onMouseUp={(e) => handleDragEnd(e, startX)}
                >
                  <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${cardSlide * 100}%)` }}
                  >
                    {/* Slide 1 — Total Saldo */}
                    <div className="min-w-full">
                      <div
                        className="relative rounded-[15px] border border-[#e0d5ff] shadow-md overflow-hidden"
                        style={{
                          backdropFilter: "blur(21px)",
                          background: "radial-gradient(ellipse at 8% 14%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 60%), rgba(255,255,255,0.12)",
                          minHeight: 185,
                        }}
                      >
                        <div className="px-5 pt-5 pb-3 pr-40">
                          <p className="text-white/90 text-[11px] font-medium">Total Saldo</p>
                          <p className="text-white font-bold text-[28px] mt-2 leading-none">Rp 0.00</p>
                          <p className="text-white/70 text-[11px] mt-3">Belum Ada Data Keuangan</p>
                        </div>
                        <div className="mx-5 mb-4 mt-3">
                          <div className="bg-[#eae1fe] rounded-[15px] shadow-sm flex items-center justify-center gap-2 py-3 cursor-pointer">
                            <Plus size={14} className="text-black/70" />
                            <span className="text-[13px] font-semibold text-black/70">Tambah Saldo</span>
                            <ChevronRight size={12} className="text-black/70" />
                          </div>
                        </div>
                        <div className="absolute right-0 top-0 w-44 h-[155px] pointer-events-none">
                          <img src={imgWallet} alt="wallet" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 — Sisa Saldo Pengeluaran */}
                    <div className="min-w-full">
                      <div
                        className="relative rounded-[15px] border border-[#e0d5ff] shadow-md overflow-hidden"
                        style={{
                          backdropFilter: "blur(21px)",
                          background: "radial-gradient(ellipse at 8% 14%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 60%), rgba(255,255,255,0.12)",
                          minHeight: 185,
                        }}
                      >
                        <div className="px-5 pt-5 pb-3 pr-40">
                          <p className="text-white/90 text-[11px] font-medium">Sisa Saldo Pengeluaran</p>
                          <p className="text-white font-bold text-[28px] mt-2 leading-none">Rp 0.00</p>
                          <p className="text-white/70 text-[11px] mt-3">Belum Ada Data Keuangan</p>
                        </div>
                        <div className="mx-5 mb-4 mt-3">
                          <div className="bg-[#eae1fe] rounded-[15px] shadow-sm flex items-center justify-center gap-2 py-3 cursor-pointer">
                            <Shield size={14} className="text-black/70" />
                            <span className="text-[13px] font-semibold text-black/70">Atur Limit</span>
                            <ChevronRight size={12} className="text-black/70" />
                          </div>
                        </div>
                        <div className="absolute right-0 top-0 w-44 h-[155px] pointer-events-none">
                          <img src={imgWallet2} alt="rocket" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCardSlide(i)}
                  className={`h-[5px] rounded-full transition-all duration-300 ${
                    i === cardSlide ? "w-4 bg-[#C2AFFF]" : "w-2.5 bg-[#C0C0C0]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ── Ringkasan Bulan ini ── */}
          <div className="px-5 mt-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[20px] h-[20px] bg-[#EAE2FB] rounded-[4px] flex items-center justify-center">
                <svg viewBox="0 0 12 13.15" fill="none" className="w-3 h-3">
                  <path
                    d="M10.2 1.316H9V.658A.658.658 0 007.8.658v.658H4.2V.658A.658.658 0 003 .658v.658H1.8A1.8 1.8 0 000 3.289v7.893a1.8 1.8 0 001.8 1.973H10.2A1.8 1.8 0 0012 11.182V3.289a1.8 1.8 0 00-1.8-1.973zm.6 9.866a.658.658 0 01-.6.657H1.8a.658.658 0 01-.6-.657V6.578H10.8v4.604zm0-5.92H1.2V3.289a.658.658 0 01.6-.657H3v.657a.658.658 0 001.2 0v-.657H7.8v.657a.658.658 0 001.2 0v-.657H10.2a.658.658 0 01.6.657v1.973z"
                    fill="#8869F5"
                  />
                </svg>
              </div>
              <h2 className="font-bold text-[15px] text-black">Ringkasan Bulan ini</h2>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white rounded-[15px] shadow-[0_0_7px_1px_rgba(115,205,108,0.25)] p-3">
                <div className="w-[17px] h-[17px] bg-[#E4F2E3] rounded-full flex items-center justify-center mb-2">
                  <TrendingUp size={8} className="text-[#73CD6C]" />
                </div>
                <p className="text-[10px] font-medium text-black leading-tight">Batas Pengeluaran</p>
                <p className="text-[#73CD6C] font-extrabold text-[11px] mt-1">Rp 0.00</p>
                <p className="text-black/60 text-[6px] mt-0.5">Total pemasukan</p>
              </div>

              <div className="bg-white rounded-[15px] shadow-[0_0_7px_1px_rgba(239,77,77,0.25)] p-3">
                <div className="w-[17px] h-[17px] bg-[#FFDADA] rounded-full flex items-center justify-center mb-2">
                  <TrendingDown size={8} className="text-[#EF4D4D]" />
                </div>
                <p className="text-[10px] font-medium text-black leading-tight">Pengeluaran</p>
                <p className="text-[#EF4D4D] font-extrabold text-[11px] mt-1">Rp 0.00</p>
                <p className="text-black/60 text-[6px] mt-0.5">Total pengeluaran</p>
              </div>

              <div className="bg-white rounded-[15px] shadow-[0_0_7px_1px_rgba(136,105,245,0.25)] p-3">
                <div className="w-[17px] h-[17px] bg-[#EAE2FB] rounded-full flex items-center justify-center mb-2">
                  <Wallet size={8} className="text-[#8869F5]" />
                </div>
                <p className="text-[10px] font-medium text-black leading-tight">Sisa Budget</p>
                <p className="text-[#8869F5] font-extrabold text-[11px] mt-1">Rp 0.00</p>
                <p className="text-black/60 text-[6px] mt-0.5">Tersisa dari budget</p>
              </div>
            </div>

            {/* Penggunaan Budget */}
            <div className="bg-white rounded-[15px] shadow-[0_0_7px_1px_rgba(136,105,245,0.25)] mt-3 px-4 py-4">
              <div className="flex items-stretch gap-3">
                <div className="flex-1">
                  <p className="text-[13px] font-bold text-black mb-3">Penggunaan Budget</p>
                  <div className="h-[7px] bg-[#E4E4E4] rounded-full w-full">
                    <div className="h-full bg-[#8869F5] rounded-full w-0" />
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="w-[5px] h-[5px] bg-[#8869F5] rounded-full" />
                    <p className="text-[9px] text-black/60">
                      <span className="font-bold">0%</span> digunakan
                    </p>
                  </div>
                </div>

                <div className="w-px bg-[#E4E4E4] self-stretch" />

                <div className="flex flex-col items-center justify-center gap-1 pl-1">
                  <div className="flex items-center gap-0.5">
                    <p className="text-[#8869F5] font-bold text-[22px] leading-none">0</p>
                    <svg viewBox="0 0 8 7.48" fill="none" className="w-2.5 h-2.5 mt-1">
                      <path d={`M1.75 3.272C1.267 3.272 0.854 3.112 0.513 2.793 0.171 2.474 0 2.088 0 1.636 0 1.184 0.171 0.799 0.513 0.479 0.854 0.16 1.267 0 1.75 0c.483 0 .896.16 1.238.479.341.319.512.705.512 1.157 0 .452-.171.838-.512 1.157C3.146 3.112 2.733 3.272 2.25 3.272h-.5zm4.5 4.208c-.483 0-.896-.16-1.237-.479C4.671 6.681 4.5 6.295 4.5 5.843c0-.452.171-.838.513-1.157C5.354 4.367 5.767 4.207 6.25 4.207c.483 0 .896.16 1.238.479C7.829 5.005 8 5.391 8 5.843c0 .452-.171.838-.512 1.157-.342.319-.755.48-1.238.48zm-6.328.295C.21 7.479.213 7.43.35 7.152L6.95.327C7.042.242 7.158.199 7.3.199c.142 0 .258.043.35.128.092.086.138.195.138.327 0 .133-.046.242-.138.328L1.05 7.152C.958 7.238.842 7.28.7 7.28c-.142 0-.258-.043-.35-.128C.258 7.067.213 6.957.213 6.825z`} fill="#8869F5" />
                    </svg>
                  </div>
                  <p className="text-black/60 text-[9px]">Sisa budget</p>
                  <div className="bg-[#EAE2FB] rounded-[5px] px-2 py-0.5 flex items-center gap-1">
                    <Shield size={8} className="text-[#8869F5]" />
                    <span className="text-[#8869F5] font-semibold text-[8px]">Hemat Super</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Catat Instan ── */}
          <div className="px-5 mt-5 pb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[18px] h-[18px] bg-[#EAE2FB] rounded-[4px] flex items-center justify-center">
                <LayoutDashboard size={10} className="text-[#8869F5]" />
              </div>
              <h2 className="font-bold text-[15px] text-black">Catat Instan</h2>
            </div>

            <div className="bg-white rounded-[15px] shadow-[0_0_7px_1px_#ede8ff] p-4">
              <div className="grid grid-cols-4 gap-3">
                {CATEGORIES.map((cat) => {
                  const { label, icon: Icon, color, bg } = cat;
                  return (
                    <button
                      key={label}
                      className="flex flex-col items-center gap-1.5 group"
                      onClick={() => { setSelectedCategory(cat); setShowInputInstan(true); }}
                    >
                      <div className="w-[55px] h-[55px] bg-white rounded-[8px] shadow-[0_0_8px_0_rgba(0,0,0,0.15)] flex items-center justify-center group-active:scale-95 transition-transform">
                        <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center" style={{ backgroundColor: bg }}>
                          <Icon size={13} style={{ color }} />
                        </div>
                      </div>
                      <span className="text-[7px] font-medium text-black text-center leading-tight break-words w-full max-w-[55px]">
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Navigation ── */}
        <div className="bg-white/80 backdrop-blur-sm">
          <div className="relative mx-6 mb-4 mt-2">
            <div className="bg-white rounded-[15px] shadow-[0_0_7px_1px_#ede8ff] h-[49px] flex items-center px-6">
              <button
                className="flex-1 flex flex-col items-center gap-0.5"
                onClick={() => setActiveTab("dashboard")}
              >
                <LayoutDashboard size={15} className={activeTab === "dashboard" ? "text-[#8869F5]" : "text-[#C0C0C0]"} />
                <span className={`text-[8px] font-bold ${activeTab === "dashboard" ? "text-[#8869F5]" : "text-[#C0C0C0]"}`}>
                  Dashboard
                </span>
                {activeTab === "dashboard" && <div className="w-[18px] h-[2px] bg-[#8869F5] rounded-full" />}
              </button>

              <div className="w-14" />

              <button
                className="flex-1 flex flex-col items-center gap-0.5"
                onClick={() => { setActiveTab("recap"); onRecap(); }}
              >
                <FileText size={15} className={activeTab === "recap" ? "text-[#8869F5]" : "text-[#C0C0C0]"} />
                <span className={`text-[8px] font-bold ${activeTab === "recap" ? "text-[#8869F5]" : "text-[#C0C0C0]"}`}>
                  Recap
                </span>
                {activeTab === "recap" && <div className="w-[18px] h-[2px] bg-[#8869F5] rounded-full" />}
              </button>
            </div>

            {/* FAB */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-[13px]">
              <div className="absolute inset-0 -m-[4px] rounded-full bg-white shadow-[0_0_8px_4px_rgba(136,105,245,0.3)]" />
              <button className="relative w-[53px] h-[53px] bg-[#8869F5] rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform" onClick={() => setShowInputPengeluaran(true)}>
                <Plus size={22} className="text-[#E9EBF8]" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Input Instan Overlay ── */}
        {showInputInstan && (
          <div className="absolute inset-0 z-50" style={{ borderRadius: "inherit" }}>
            <div className="absolute inset-0" style={{ borderRadius: "inherit", overflow: "hidden" }}>
              <InputInstan onClose={() => setShowInputInstan(false)} category={selectedCategory} />
            </div>
          </div>
        )}

        {/* ── Input Pengeluaran Overlay ── */}
        {showInputPengeluaran && (
          <div className="absolute inset-0 z-50" style={{ borderRadius: "inherit" }}>
            <div className="absolute inset-0" style={{ borderRadius: "inherit", overflow: "hidden" }}>
              <InputPengeluaran
                onClose={() => setShowInputPengeluaran(false)}
                onRecap={() => {
                  setShowInputPengeluaran(false);
                  onRecap();
                }}
              />
            </div>
          </div>
        )}

        {/* ── Edit Profile Overlay ── */}
        {showEditProfile && (
          <div className="absolute inset-0 z-50 bg-white flex flex-col" style={{ borderRadius: "inherit" }}>
            <div className="bg-[#8869F5] pt-10 pb-6 px-6 flex items-center gap-3">
              <button
                onClick={() => setShowEditProfile(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
              >
                <ArrowLeft size={16} className="text-white" />
              </button>
              <h2 className="text-white font-bold text-[17px]">Edit Profile</h2>
            </div>

            <div className="flex flex-col items-center -mt-10 mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden">
                  <img src={editPhoto ?? imgProfile} alt="profile" className="w-full h-full object-cover" />
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 w-7 h-7 bg-[#8869F5] rounded-full flex items-center justify-center shadow-md border-2 border-white"
                >
                  <Camera size={13} className="text-white" />
                </button>
                {editPhoto && (
                  <button
                    onClick={() => setEditPhoto(null)}
                    className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow border-2 border-white"
                  >
                    <X size={10} className="text-white" />
                  </button>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
              <p className="text-[11px] text-black/40 mt-2">Tap kamera untuk ganti foto</p>
            </div>

            <div className="px-6 flex flex-col gap-4 flex-1">
              <div>
                <label className="text-[11px] font-semibold text-black/60 mb-1 block">Nama Lengkap</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full border border-[#e0d5ff] rounded-[10px] px-4 py-3 text-[13px] text-black focus:outline-none focus:border-[#8869F5] focus:ring-1 focus:ring-[#8869F5]"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-black/60 mb-1 block">Email</label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full border border-[#e0d5ff] rounded-[10px] px-4 py-3 text-[13px] text-black focus:outline-none focus:border-[#8869F5] focus:ring-1 focus:ring-[#8869F5]"
                  placeholder="Masukkan email"
                />
              </div>

              <button
                onClick={saveEditProfile}
                className="w-full bg-[#8869F5] rounded-[12px] py-3.5 text-[14px] font-bold text-white shadow-md hover:bg-[#7558e0] active:scale-95 transition-all mt-2"
              >
                Simpan Perubahan
              </button>

              <button
                onClick={() => setShowEditProfile(false)}
                className="w-full border border-[#e0d5ff] rounded-[12px] py-3 text-[13px] font-semibold text-black/50 hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
