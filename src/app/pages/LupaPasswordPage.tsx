import LupaPassword from "@/imports/LupaPassword/index";

export default function LupaPasswordPage({ onKirimKode }: { onKirimKode: () => void }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[393px]" style={{ height: 852 }}>
        <LupaPassword onKirimKode={onKirimKode} />
      </div>
    </div>
  );
}
