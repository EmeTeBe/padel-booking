import Card from "./UI/Card";

type Option = {
  hours: number;
  price: number;
};

export default function HourStep({
  onSelect,
  onBack,
  onNext,
  selectedHours,
}: {
  onSelect: (hours: number) => void;
  onBack: () => void;
  onNext: () => void;
  selectedHours: number | undefined;
}) {
  const options: Option[] = [
    { hours: 1, price: 5000 },
    { hours: 1.5, price: 7000 },
    { hours: 2, price: 8500 },
  ];

  return (
    <Card title="TIEMPO">
      <div className="flex flex-col gap-2 w-full">
        {options.map((opt) => {
          const isSelected = selectedHours === opt.hours;
          return (
            <button
              key={opt.hours}
              className={`btn text-base-300 rounded-lg mb-2 hover:bg-info ${
                isSelected ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => onSelect(opt.hours)}
            >
              <div className="flex justify-between w-full">
                <span>
                  {opt.hours} hora{opt.hours > 1 ? "s" : ""}
                </span>
                <span>${opt.price}</span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex justify-between w-full">
        <button className="btn btn-soft mt-4" onClick={onBack}>
          ← volver
        </button>
        <button
          className="btn btn-soft mt-4"
          onClick={onNext}
          disabled={!selectedHours}
        >
          Siguiente →
        </button>
      </div>
    </Card>
  );
}
