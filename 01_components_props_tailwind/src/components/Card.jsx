export default function Card({ title, description }) {
  return (
    <>
      <div className="m-3 bg-amber-200 p-3 w-fit">
        <h2>{title}</h2>

        <p>{description}</p>

        <button>submit</button>
      </div>
    </>
  );
}
