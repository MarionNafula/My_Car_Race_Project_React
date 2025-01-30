import { useEffect, useState } from "react";
import { getDrivers } from "../api";
import DriverForm from "../components/DriverForm";

const Drivers = () => {
    const [drivers, setDrivers] = useState([]);
  
    useEffect(() => {
      getDrivers().then(setDrivers);
    }, []);
  
    return (
      <div>
        <h1>Drivers</h1>
        <DriverForm refreshDrivers={() => getDrivers().then(setDrivers)} />
        <ul>
          {drivers.map(driver => (
            <li key={driver.id}>{driver.name} - {driver.team}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Drivers;