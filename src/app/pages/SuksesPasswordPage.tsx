import SuksesPassword from "@/imports/SuksesPassword/index";

export default function SuksesPasswordPage({ onMulai }: { onMulai: () => void }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[393px]" style={{ height: 852 }}>
        <SuksesPassword onMulai={onMulai} />
      </div>
    </div>
  );
}
