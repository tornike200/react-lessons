import Card from "./Card";

export default function CardList({ data }) {
  return (
    <>
      <div className="flex flex-wrap">
        {data.map((item) => {
          return <Card key={item.id} title={item.title} description={item.description} />;
        })}
      </div>
    </>
  );
}
