import useReservation from "./hooks/useReservation";
import HourStep from "./components/HourStep";
import CourtStep from "./components/CourtStep";
import CalendarStep from "./components/CalendarStep";

function App() {
  const { step, reservation, updateDate, setReservation, nextStep, prevStep } =
    useReservation();

  return (
    <div className="max-w-md mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Club Demo</h1>
        <p className="text-gray-600">Calle Demo 1234 ★★★★★</p>
      </header>

      {step === "calendar" && (
        <CalendarStep
          onDateSelect={(date) => {
            updateDate(date);
          }}
          onBack={() => {}} // no hay back desde el primer paso
          onNext={nextStep}
        />
      )}

      {step === "hours" && (
        <HourStep
          onSelect={(hours) => {
            setReservation({ ...reservation, hours });
          }}
          onBack={prevStep}
          onNext={nextStep}
          selectedHours={reservation.hours}
        />
      )}

      {step === "courts" && (
        <CourtStep
          courts={["Cancha 1", "Cancha 2"]}
          onSelect={(court) => {
            setReservation({ ...reservation, court });
          }}
          onBack={prevStep}
          selectedCourt={reservation.court}
          onNext={nextStep}
        />
      )}
    </div>
  );
}
export default App;
