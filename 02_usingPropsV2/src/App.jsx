import Card from "./components/Card";
import CardList from "./components/CardList";

const data = [
  { id: "1", title: "card one", description: "card one description" },
  { id: "2", title: "card two", description: "card two description" },
  { id: "3", title: "card three", description: "card three description" },
];

export default function App() {
  return (
    <>
      <CardList data={data} />
    </>
  );
}
