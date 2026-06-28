const MONTHS = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

const DAYS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

type ExpenseCalendarProps = {
  month: Date;
  selectedDate: Date | null;
  onMonthChange: (month: Date) => void;
  onSelect: (date: Date) => void;
};

export function formatExpenseDate(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function ExpenseCalendar({
  month,
  selectedDate,
  onMonthChange,
  onSelect,
}: ExpenseCalendarProps) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const daysInPreviousMonth = new Date(year, monthIndex, 0).getDate();

  const dates = Array.from({ length: 42 }, (_, index) => {
    const day = index - firstDay + 1;
    if (day < 1) return { date: new Date(year, monthIndex - 1, daysInPreviousMonth + day), current: false };
    if (day > daysInMonth) return { date: new Date(year, monthIndex + 1, day - daysInMonth), current: false };
    return { date: new Date(year, monthIndex, day), current: true };
  });

  const isSelected = (date: Date) =>
    selectedDate?.getFullYear() === date.getFullYear() &&
    selectedDate?.getMonth() === date.getMonth() &&
    selectedDate?.getDate() === date.getDate();

  const moveMonth = (offset: number) =>
    onMonthChange(new Date(year, monthIndex + offset, 1));

  return (
    <div
      className="absolute z-[60] bg-white"
      style={{
        top: 454,
        left: 20,
        width: 353,
        height: 340,
        borderRadius: 20,
        padding: "18px 16px 14px",
        boxShadow: "0 0 9px rgba(136,105,245,0.22)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="flex items-center justify-between" style={{ height: 28, padding: "0 3px", marginBottom: 11 }}>
        <button type="button" aria-label="Bulan sebelumnya" onClick={() => moveMonth(-1)} style={{ width: 30, height: 30 }}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8 2 L2 8 L8 14" stroke="#8869F5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <strong style={{ color: "#8869F5", fontSize: 13, fontWeight: 700 }}>
          {MONTHS[monthIndex]} {year}
        </strong>
        <button type="button" aria-label="Bulan berikutnya" onClick={() => moveMonth(1)} style={{ width: 30, height: 30, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M2 2 L8 8 L2 14" stroke="#8869F5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7" style={{ marginBottom: 4 }}>
        {DAYS.map((day, index) => (
          <div key={day} className="flex items-center justify-center" style={{ height: 23, fontSize: 9, color: index === 0 ? "#ff2f3d" : "#444" }}>
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {dates.map(({ date, current }, index) => {
          const sunday = index % 7 === 0;
          const selected = isSelected(date);
          return (
            <button
              type="button"
              key={date.toISOString()}
              onClick={() => onSelect(date)}
              className="flex items-center justify-center"
              style={{
                height: 41,
                border: "none",
                borderRadius: "50%",
                background: selected ? "#8869F5" : "transparent",
                color: selected ? "#fff" : !current ? "#929292" : sunday ? "#ff2f3d" : "#111",
                fontSize: 13,
                fontWeight: current ? 590 : 500,
                cursor: "pointer",
              }}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
