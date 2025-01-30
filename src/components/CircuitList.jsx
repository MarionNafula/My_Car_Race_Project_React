import { useEffect, useState } from "react";
import { getCircuits } from "../api";

const CircuitList = () => {
  const [circuits, setCircuits] = useState([]);

  useEffect(() => {
    getCircuits().then(setCircuits);
  }, []);

  return (
    <div>
      <h2>Circuits</h2>
      <ul>
        {circuits.map(circuit => (
          <li key={circuit.id}>{circuit.name} - {circuit.location} ({circuit.length} km)</li>
        ))}
      </ul>
    </div>
  );
};

export default CircuitList;