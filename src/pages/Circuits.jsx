import CircuitForm from "../components/CircuitForm";
import CircuitList from "../components/CircuitList";
import { getCircuits } from "../api";
import { useState, useEffect } from "react";

const Circuits = () => {
  const [circuits, setCircuits] = useState([]);

  useEffect(() => {
    getCircuits().then(setCircuits);
  }, []);

  return (
    <div>
      <h1>Circuits</h1>
      <CircuitForm refreshCircuits={() => getCircuits().then(setCircuits)} />
      <CircuitList />
    </div>
  );
};

export default Circuits;