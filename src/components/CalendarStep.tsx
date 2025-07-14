import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale"; // Soporte para español
import "react-day-picker/dist/style.css";
import { useState } from "react";
import Card from "./UI/Card";

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
    <Card title="FECHA">
      <DayPicker
        mode="single"
        captionLayout="label"
        className="rounded-lg shadow-md p-4 mb-4 fade-in text-gray-950"
        selected={selectedDate}
        onSelect={(date) => {
          setSelectedDate(date);
          if (date) onDateSelect(date);
        }}
        defaultMonth={currentMonth}
        disabled={isDayDisabled}
        hideNavigation
        navLayout="around"
        locale={es}
        numberOfMonths={1}
        required
        modifiersClassNames={{
          selected: "bg-primary text-white font-bold",
          today: "border-2 border-secondary font-bold",
          disabled: "text-gray-400 cursor-not-allowed",
          day: "hover:bg-green-50 rounded-full",
        }}
      />
      <button onClick={onBack} className="btn btn-soft mt-4">
        ← Volver
      </button>
    </Card>
  );
}
