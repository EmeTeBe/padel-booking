import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale"; // Soporte para español
import "react-day-picker/dist/style.css";
import { useState } from "react";

type CalendarStepProps = {
  onDateSelect: (date: Date) => void;
  onBack: () => void;
};

export default function CalendarStep({
  onDateSelect,
  onBack,
}: CalendarStepProps) {
  const today = new Date();
  const currentMonth = new Date(today.getFullYear(), today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  // Deshabilita días pasados y domingos

  // 0 = Domingo
  const isDayDisabled = (day: Date) => day < today || day.getDay() === 0;

  return (
    <div className="space-y-4">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={(date) => {
          setSelectedDate(date);
          if (date) onDateSelect(date);
        }}
        defaultMonth={currentMonth}
        disabled={isDayDisabled}
        modifiersClassNames={{
          selected: "bg-primary text-white",
          disabled: "text-gray-400 cursor-not-allowed",
        }}
        locale={es}
      />
      <button onClick={onBack} className="btn btn-outline mt-4">
        ← Volver
      </button>
    </div>
  );
}
