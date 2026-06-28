import KodeOtp from "@/imports/KodeOtp/index";

export default function KodeOtpPage({ onVerifikasi }: { onVerifikasi: () => void }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[393px]" style={{ height: 852 }}>
        <KodeOtp onVerifikasi={onVerifikasi} />
      </div>
    </div>
  );
}
