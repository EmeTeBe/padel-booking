// App.tsx
import useReservation from "./hooks/useReservation";
import HourStep from "./components/HourStep";
import CourtStep from "./components/CourtStep";

function App() {
  const { step, reservation, setReservation, nextStep, prevStep } =
    useReservation();

  return (
    <div className="max-w-md mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Club Demo</h1>
        <p className="text-gray-600">Calle Demo 1234 ★★★★★</p>
      </header>

      {step === "hours" && (
        <HourStep
          onSelect={(hours) => {
            setReservation({ ...reservation, hours });
            nextStep();
          }}
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
      {/* Add other steps like CalendarStep and TimeSlotsStep here */}
    </div>
  );
}
export default App;
