import Card from "./UI/Card";

export default function CourtStep({
  courts,
  onSelect,
  onBack,
}: {
  courts: string[];
  onSelect: (court: string) => void;
  onBack: () => void;
}) {
  return (
    <Card title="CANCHAS">
      {courts.map((court) => (
        <button
          key={court}
          className="w-full p-3 border border-gray-200 text-gray-800 rounded-lg mb-2 hover:bg-blue-50"
          onClick={() => onSelect(court)}
        >
          {court}
        </button>
      ))}
      <button onClick={onBack} className="w-full p-3 border border-gray-200 text-gray-800 rounded-lg mb-2 hover:bg-blue-50">
        Volver
      </button>
    </Card>
  );
}
