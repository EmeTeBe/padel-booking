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
            nextStep();
          }}
          onBack={() => {}} // no hay back desde el primer paso
        />
      )}

      {step === "hours" && (
        <HourStep
          onSelect={(hours) => {
            setReservation({ ...reservation, hours });
            nextStep();
          }}
          onBack={prevStep}
        />
      )}

      {step === "courts" && (
        <CourtStep
          courts={["Cancha 1", "Cancha 2", "Cancha 3"]}
          onSelect={(court) => {
            setReservation({ ...reservation, court });
            nextStep();
          }}
          onBack={prevStep}
        />
      )}
    </div>
  );
}
export default App;
