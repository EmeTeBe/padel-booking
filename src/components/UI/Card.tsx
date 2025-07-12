export default function Card({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 fade-in">
      {title && <h2 className="text-xl text-gray-800 font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  );
}