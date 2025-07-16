import Card from "./UI/Card";

export default function CourtStep({
  courts,
  onSelect,
  selectedCourt,
  onBack,
  onNext,
}: {
  courts: string[];
  onSelect: (court: string) => void;
  selectedCourt: string | undefined;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <Card title="CANCHAS">
      <div className="flex flex-col gap-2 w-full">
        {courts.map((court) => {
          const isSelected = selectedCourt === court;
          return (
            <button
              key={court}
              className={`btn text-base-300 rounded-lg mb-2 hover:bg-info ${
                isSelected ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => onSelect(court)}
            >
              {court}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between w-full">
        <button onClick={onBack} className="btn btn-soft mt-4">
          ← Volver
        </button>
        <button
          onClick={onNext}
          className="btn btn-soft mt-4"
          disabled={!selectedCourt}
        >
          Siguiente →
        </button>
      </div>
    </Card>
  );
}
