import React, { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar"; // ✅ Import SearchBar

const cars = [
  {
    id: 1,
    name: "Ferrari SF90",
    image: "src/assets/black-4340959_640.jpg",
    description: "A powerful Formula 1 car from Ferrari.",
  },
  {
    id: 2,
    name: "Mercedes W14",
    image: "src/assets/purple-4384879_640.jpg",
    description: "A dominant car used in F1 races.",
  },
  {
    id: 3,
    name: "Red Bull RB19",
    image: "src/assets/race-car-7275811_640.jpg",
    description: "An aerodynamically advanced race car.",
  },
  {
    id: 4,
    name: "Green Bull RB19",
    image: "src/assets/race-car-7624025_640.jpg",
    description: "An aerodynamically advanced race car.",
  }
];

const Home = () => {
  const [filteredCars, setFilteredCars] = useState(cars);

  // ✅ Function to handle search filtering
  const handleSearch = (query) => {
    const results = cars.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(results);
  };

  return (
    <div className="home p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Welcome to Car Race</h1>

      {/* ✅ SearchBar Component */}
      <div className="flex justify-center mb-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* ✅ Card Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <Card key={car.id} image={car.image} name={car.name} description={car.description} />
          ))
        ) : (
          <p className="text-center text-gray-500">No cars found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
