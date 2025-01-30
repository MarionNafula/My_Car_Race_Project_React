const BASE_URL = "http://127.0.0.1:5000";

export const getDrivers = async () => {
    const response = await fetch(`${BASE_URL}/drivers`);
    return response.json();
  };

  export const addDriver = async (driver) => {
    const response = await fetch(`${BASE_URL}/drivers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(driver),
    });
    return response.json();
  };

