export default function Card({ title, description }) {
  return (
    <>
      <div className="m-3 p-3 bg-amber-400 text-red-500 max-w-35 rounded">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="font-thin">{description}</p>
        <button className="px-1.5 border rounded">details</button>
      </div>
    </>
  );
}
