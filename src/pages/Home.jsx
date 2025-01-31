import React from "react";
import Card from "../components/Card";

const cars = [
  {
    id: 1,
    name: "Ferrari SF90",
    image: "/images/ferrari.jpg",
    description: "A powerful Formula 1 car from Ferrari.",
  },
  {
    id: 2,
    name: "Mercedes W14",
    image: "/images/mercedes.jpg",
    description: "A dominant car used in F1 races.",
  },
  {
    id: 3,
    name: "Red Bull RB19",
    image: "/images/redbull.jpg",
    description: "An aerodynamically advanced race car.",
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Car Race</h1>
      <div className="card-container">
        {cars.map((car) => (
          <Card
            key={car.id}
            image={car.image}
            name={car.name}
            description={car.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
