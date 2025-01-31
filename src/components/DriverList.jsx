import React, { useEffect, useState } from "react";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/drivers") // Adjust API endpoint as needed
      .then((response) => response.json())
      .then((data) => setDrivers(data))
      .catch((error) => console.error("Error fetching drivers:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Driver List</h2>
      <ul className="space-y-3">
        {drivers.map((driver) => (
          <li key={driver.id} className="border p-2 rounded-lg shadow">
            <p className="text-lg font-semibold">{driver.name}</p>
            <p>Team: {driver.team}</p>
            <p>Nationality: {driver.nationality}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;
