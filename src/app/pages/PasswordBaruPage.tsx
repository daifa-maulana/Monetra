import PasswordBaru from "@/imports/PasswordBaru/index";

export default function PasswordBaruPage({ onSimpan }: { onSimpan: () => void }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[393px]" style={{ height: 852 }}>
        <PasswordBaru onSimpan={onSimpan} />
      </div>
    </div>
  );
}
