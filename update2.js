const fs = require('fs');
let content = fs.readFileSync('src/imports/RecapTahunan4/index.tsx', 'utf8');

content = content.replace('export default function RecapTahunan() {', 
\export default function RecapTahunan4({
  year = 2026,
  monthlyTotals = Array(12).fill(0),
  totalPemasukan = 0,
  onMonthClick,
}: {
  year?: number;
  monthlyTotals?: number[];
  totalPemasukan?: number;
  onMonthClick?: (month: number) => void;
}) {
  const formatRp = (n) => \\\Rp \\\\\\;
  const ARROW_TOPS = [713, 757, 801, 845, 889, 933, 977, 1021, 1065, 1109, 1153, 1197];
\);

content = content.replace(
  '<div className=\"bg-[#fdfdff] overflow-clip relative rounded-[30px] size-full\" data-name=\"Recap Tahunan 4\">',
  '<RecapDataContext.Provider value={{ year, monthlyTotals, totalPemasukan, onMonthClick }}>\\n      <div className=\"bg-[#fdfdff] overflow-clip relative rounded-[30px] size-full\" data-name=\"Recap Tahunan 4\">'
);

content = content.replace(
  '      <Group49 />\\n    </div>\\n  );\\n}',
  '      <Group49 />\\n      {ARROW_TOPS.map((top, idx) => (\\n        <button key={idx} onClick={() => onMonthClick?.(idx + 1)} style={{ position: \"absolute\", left: 320, top: top - 5, width: 40, height: 30, background: \"transparent\", border: \"none\", cursor: \"pointer\", zIndex: 100 }} />\\n      ))}\\n    </div>\\n    </RecapDataContext.Provider>\\n  );\\n}'
);

const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
for (let i = 0; i < months.length; i++) {
  const m = months[i];
  const searchPattern = new RegExp(m + '</p>\\\\s*</div>\\\\s*<div[^>]*>\\\\s*<p className=\"leading-\\\\[normal\\\\]\">Rp 0</p>', 'g');
  content = content.replace(searchPattern, (match) => match.replace('Rp 0</p>', '{formatRp(monthlyTotals[' + i + '])}</p>'));
}

fs.writeFileSync('src/imports/RecapTahunan4/index.tsx', content);