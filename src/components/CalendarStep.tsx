import { useState } from "react";
import DatePicker from "react-datepicker";
import { es } from "date-fns/locale"; // Soporte para español

import "react-datepicker/dist/react-datepicker.css";

type CalendarProps = {
  onDateSelect: (date: Date) => void;
};

export default function Calendar({ onDateSelect }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Elegí fecha y hora
      </h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          if (date) onDateSelect(date);
        }}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="Pp" // Nuevo formato estándar (ej: "15/07/2024, 14:30")
        minDate={new Date()}
        locale={es} // Español (fijarse si tengo que instalar date-fns)
        className="input input-bordered w-full"
        placeholderText="Selecciona una fecha"
      />
    </div>
  );
}
