export default function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="card bg-base-content shadow-md rounded-xl">
      <div className="card-title p-4 border-b border-base-100 flex justify-between items-center">
        {title && (
          <h2 className="text-xl text-base-300 font-semibold p-0.5">{title}</h2>
        )}
        <a href="#" className="text-gray-500 hover:text-gray-700">
          {/* Icono de cerrar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
      </div>
      <div className="card-body p-4 justify-center items-center text-base-100">{children}</div>
    </div>
  );
}
