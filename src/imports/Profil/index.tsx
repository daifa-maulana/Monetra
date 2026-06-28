import imgEc2106E9379302B94Bcced1Dd5Bf85B91 from "./9f83dd8858dbce9e805b0001243c2bf8459c87c8.png";
type ProfilProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Profil({ className, property1 = "Default" }: ProfilProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "h-[200px] relative w-[235px]"}>
      <button className={`absolute cursor-pointer ${isVariant2 ? "bg-white block border-2 border-[#8b5bc5] border-solid inset-0 rounded-[10px]" : "contents inset-[0_0_80.5%_83.4%]"}`}>
        {isDefault && (
          <>
            <div className="absolute inset-[0_0_80.5%_83.4%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
                <circle cx="19.5" cy="19.5" id="Ellipse 4" r="18.5" stroke="var(--stroke-0, #9B86D9)" strokeWidth="2" />
              </svg>
            </div>
            <div className="absolute aspect-[118/118] left-[84.26%] right-[0.85%] rounded-[100px] top-[2px]" data-name="ec2106e9379302b94bcced1dd5bf85b9 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                <img alt="" className="absolute left-[-11.86%] max-w-none size-[111.86%] top-0" src={imgEc2106E9379302B94Bcced1Dd5Bf85B91} />
              </div>
            </div>
          </>
        )}
      </button>
      {isVariant2 && (
        <>
          <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold inset-[36.5%_43.4%_54%_8.09%] leading-[normal] text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Muja Karamoy
          </p>
          <p className="[word-break:break-word] absolute font-['SF_Pro:Medium',sans-serif] font-[510] inset-[47.5%_30.64%_44.5%_8.09%] leading-[normal] text-[13px] text-[rgba(0,0,0,0.5)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            kelompok1@gmail.com
          </p>
          <div className="absolute bg-white border border-[red] border-solid inset-[69%_11.49%_15.5%_11.91%] rounded-[7px] shadow-[0px_29px_8px_0px_rgba(0,0,0,0),0px_19px_8px_0px_rgba(0,0,0,0.01),0px_11px_6px_0px_rgba(0,0,0,0.05),0px_5px_5px_0px_rgba(0,0,0,0.09),0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
          <p className="[word-break:break-word] absolute font-['SF_Pro:Bold',sans-serif] font-bold inset-[73%_41.7%_20%_40.43%] leading-[normal] text-[12px] text-[red] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Logout
          </p>
          <div className="absolute contents inset-[11%_75.32%_69.5%_8.09%]">
            <div className="absolute inset-[11%_75.32%_69.5%_8.09%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
                <circle cx="19.5" cy="19.5" id="Ellipse 4" r="18.5" stroke="var(--stroke-0, #9B86D9)" strokeWidth="2" />
              </svg>
            </div>
            <div className="absolute aspect-[118/118] left-[8.94%] right-[76.17%] rounded-[100px] top-[24px]" data-name="ec2106e9379302b94bcced1dd5bf85b9 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                <img alt="" className="absolute left-[-11.86%] max-w-none size-[111.86%] top-0" src={imgEc2106E9379302B94Bcced1Dd5Bf85B91} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}