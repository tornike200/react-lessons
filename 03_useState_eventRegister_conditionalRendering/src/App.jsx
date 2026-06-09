import { useState } from "react";
import InfoModal from "./components/InfoModal";

export default function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handleDecrease() {
    setCount((prev) => prev - 1);
  }

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleInfoModal() {
    setShowModal((prev) => !prev);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4 p-4">
        <h2 className="uppercase text-3xl font-bold">The count is: {count}</h2>

        <div className="flex gap-3 text-xl">
          <button className="p-2 bg-amber-300" onClick={handleDecrease}>
            decrease
          </button>
          <button className="p-2 bg-green-500" onClick={handleIncrease}>
            increase
          </button>
          <button className="p-2 bg-gray-300" onClick={handleReset}>
            reset
          </button>
        </div>
      </div>

      <button
        className="p-3 bg-red-500 rounded m-3 absolute top-2 right-2 w-32.5"
        onClick={handleInfoModal}
      >
        {showModal ? "hide modal" : "show modal"}
      </button>

      {showModal && <InfoModal />}
    </>
  );
}
