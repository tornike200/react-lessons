import Header from "./components/Header";

export default function App() {
  const name = "Tornike";

  return (
    <>
      <Header />

      <h1> {name} </h1>

      <h2>hello react</h2>
      <h2>Lorem ipsum dolor sit amet.</h2>

      <p style={pStyles}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat praesentium molestiae
        doloremque saepe repellendus illum sint error commodi dolores asperiores? Aspernatur aliquam
        quis magni nostrum, voluptates possimus dolor. Tenetur, amet.
      </p>
    </>
  );
}

const pStyles = { color: "green", fontSize: "22px" };
