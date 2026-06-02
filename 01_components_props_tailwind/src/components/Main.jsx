import Card from "./Card";

export default function Main() {
  const name = "Tornike";

  return (
    <>
      <h2>hello {name}</h2>

      <p style={pStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, omnis.</p>

      <h3 className="text-amber-500 text-4xl font-bold">this is tailwind test</h3>

      <Card title={"card 1"} description={"this is firs card description"} />
      <Card title={"card 2"} description={"this is second card description"} />
      <Card title={"card 3"} description={"this is third card description"} />
    </>
  );
}

const pStyle = { color: "red", fontSize: "22px", fontFamily: "sans-serif" };
