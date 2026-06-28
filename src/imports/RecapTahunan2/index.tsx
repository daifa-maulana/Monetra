import { useState } from 'react';
import svgPaths from './svg-we4zx2xl8u';

export default function RecapTahunan({ onConfirm }: { onConfirm?: () => void }) {
  const [selectedYear, setSelectedYear] = useState(2026);
  const years = [2021, 2022, 2023, 2024, 2025, 2026];
  const currentYearIndex = years.indexOf(selectedYear);

  const handlePrevYear = () => {
    if (currentYearIndex > 0) setSelectedYear(years[currentYearIndex - 1]);
  };
  const handleNextYear = () => {
    if (currentYearIndex < years.length - 1) setSelectedYear(years[currentYearIndex + 1]);
  };

  return (
    <div className="bg-[#fdfdff] min-h-screen w-full max-w-md mx-auto p-6 relative">
      {/* Header */}
      <div className="flex items-center justify-center mb-8 relative">
        <h1 className="text-[#8869F5] font-bold text-sm">Pilih Tahun</h1>
      </div>

      {/* Year Selector Card */}
      <div className="bg-white rounded-[20px] shadow-[0px_0px_10px_1px_#eae1fe] p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePrevYear}
            disabled={currentYearIndex === 0}
            className="p-2 disabled:opacity-30"
          >
            <svg className="w-3 h-4" fill="none" viewBox="0 0 10 17">
              <path d={svgPaths.p256b9080} fill="#8869F5" />
            </svg>
          </button>

          <div className="text-[#855dff] font-bold text-sm">{selectedYear}</div>

          <button
            onClick={handleNextYear}
            disabled={currentYearIndex === years.length - 1}
            className="p-2 disabled:opacity-30"
          >
            <svg className="w-3 h-4" fill="none" viewBox="0 0 10 17">
              <path d={svgPaths.p38abe600} fill="#8869F5" />
            </svg>
          </button>
        </div>

        <div className="border-t border-[#979797]/50 mb-6"></div>

        {/* Year Grid — klik tahun langsung konfirmasi */}
        <div className="grid grid-cols-3 gap-4">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year);
                onConfirm?.();
              }}
              className={`py-2 px-4 rounded-md text-xs font-semibold transition-colors ${
                year === selectedYear
                  ? 'bg-[#8869F5] text-white'
                  : 'bg-white text-black hover:bg-gray-50'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-[#f3f0fe] rounded-[20px] p-4 mb-24">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 15 15">
              <g clipPath="url(#clip0_1_93)">
                <path d={svgPaths.p10438280} fill="#7459D0" />
              </g>
              <defs>
                <clipPath id="clip0_1_93">
                  <rect fill="white" height="15" width="15" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <h3 className="text-[#7459d0] text-[10px] font-semibold mb-2">Tips</h3>
            <p className="text-[#5b5b5b] text-[10px] font-medium leading-relaxed">
              Pilih tahun untuk melihat ringkasan keuanganmu pada tahun tersebut.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-6">
        <div className="bg-white rounded-[15px] shadow-[0px_0px_7px_1px_#ede8ff] py-3 px-6 flex items-center justify-between relative">
          <button className="flex flex-col items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 14 15">
              <path d={svgPaths.p5c0c040} fill="#C0C0C0" />
            </svg>
            <span className="text-[#c0c0c0] text-[8px] font-bold">Dashboard</span>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 -top-6">
            <div className="bg-white rounded-full p-1 shadow-[0px_0px_4px_0px_rgba(180,159,255,1)]">
              <div className="bg-[#8869F5] rounded-full w-[53px] h-[53px] flex items-center justify-center">
                <svg className="w-[19px] h-[19px]" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3fecd000} fill="#E9EBF8" />
                </svg>
              </div>
            </div>
          </div>

          <button className="flex flex-col items-center gap-1">
            <div className="relative">
              <svg className="w-4 h-4" viewBox="0 0 14 15">
                <path d={svgPaths.p289ce400} stroke="#8869F5" strokeLinecap="square" strokeWidth="2" fill="none" />
                <path d={svgPaths.p30e0cab2} stroke="#8869F5" strokeWidth="2" fill="none" />
              </svg>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#8869F5] rounded-full"></div>
            </div>
            <span className="text-[#8869f5] text-[8px] font-bold">Recap</span>
          </button>
        </div>
      </div>
    </div>
  );
}
