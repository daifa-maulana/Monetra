import SuksesScreen from "@/imports/SuksesScreen/index";

export default function SuksesDaftarPage({ onMulai }: { onMulai: () => void }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[393px]" style={{ height: 852 }}>
        <SuksesScreen onMulai={onMulai} />
      </div>
    </div>
  );
}
