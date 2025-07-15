import Card from "./UI/Card";

export default function HourStep({
  onSelect,
  onBack,
}: {
  onSelect: (hours: number) => void;
  onBack: () => void;
}) {
  const options = [
    { hours: 1, price: 5000 },
    { hours: 1.5, price: 7000 },
    { hours: 2, price: 8500 },
  ];

  return (
    <Card title="TIEMPO">
      {options.map((opt) => (
        <button
          key={opt.hours}
          className="w-full p-3 border border-gray-200 text-gray-800 rounded-lg mb-2 hover:bg-blue-50"
          onClick={() => onSelect(opt.hours)}
        >
          <div className="flex justify-between">
            <span>
              {opt.hours} hora{opt.hours > 1 ? "s" : ""}
            </span>
            <span>${opt.price}</span>
          </div>
        </button>
      ))}
      <button className="btn btn-soft mt-4" onClick={onBack}>
       ← volver
      </button>
    </Card>
  );
}
