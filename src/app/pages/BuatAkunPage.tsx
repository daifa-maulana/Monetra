import BuatAkun from "@/imports/BuatAkun/index";

export default function BuatAkunPage({ onDaftar, onMasuk }: { onDaftar: () => void; onMasuk: () => void }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[393px]" style={{ height: 852 }}>
        <BuatAkun onDaftar={onDaftar} onMasuk={onMasuk} />
      </div>
    </div>
  );
}
