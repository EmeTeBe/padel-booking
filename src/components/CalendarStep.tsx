import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale"; // Soporte para español
import "react-day-picker/dist/style.css";
import { useState } from "react";
import Card from "./UI/Card";

type CalendarStepProps = {
  onDateSelect: (date: Date) => void;
  onBack: () => void;
};

export default function CalendarStep({ onDateSelect }: CalendarStepProps) {
  const today = new Date();
  const currentMonth = new Date(today.getFullYear(), today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  // Deshabilita días pasados y domingos
  // 0 = Domingo
  const isDayDisabled = (day: Date) => {
    const isSunday = day.getDay() === 0;

    // Comparamos solo la parte de la fecha, sin la hora
    const startOfToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const startOfDay = new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate()
    );

    const isBeforeToday = startOfDay < startOfToday;

    return isBeforeToday || isSunday;
  };

  return (
    <Card title="FECHA">
      <DayPicker
        mode="single"
        captionLayout="label"
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
        classNames={{
          caption: "text-lg font-semibold",
          day: "p-1 hover:transform hover:scale-150 transition-transform font-semibold",
        }}
      />
    </Card>
  );
}
