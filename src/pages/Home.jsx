import React from "react";
import Card from "../components/Card";

const cars = [
  {
    id: 1,
    name: "Ferrari SF90",
    image: "/assets/black-4340959_640.jpg",
    description: "A powerful Formula 1 car from Ferrari.",
  },
  {
    id: 2,
    name: "Mercedes W14",
    image: "/assets/purple-4384879_640.jpg",
    description: "A dominant car used in F1 races.",
  },
  {
    id: 3,
    name: "Red Bull RB19",
    image: "/assets/race-car-7275811_640.jpg",
    description: "An aerodynamically advanced race car.",
  },
  {
    id: 4,
    name: "Green Bull RB19",
    image: "/assets/race-car-7624025_640.jpg",
    description: "The ultimate race car.",
  },
  {
    id: 5,
    name: "Porche 911",
    image: "/assets/race-track-7185981_640.jpg",
    description: "The legendary Porsche 911.",
  },
  {
    id: 6,
    name: "McLaren MCL35",
    image: "/assets/race-car-7611837_640.jpg",
    description: "Fast and furious.",
  },
  {
    id: 7,
    name: "Aston Martin AMR21",
    image: "/assets/concept-car-7639258_640.jpg",
    description: "Speeding into the future.",
  },
  {
    id: 8,
    name: "NASCAR Racer",
    image: "/assets/ai-generated-8517349_640.png",
    description: "Le mans and more.",
  },
  {id: 9,
    name: "QS Pull Back Car",
    image: "/assets/ai-generated-8625993_640.png",
    description: "The ultimate race car.",
  },
  {
    id: 10,
    name: "AUDi Spot RSQ",
    image: "/assets/ai-generated-8626109_640.png",
    description: "A breakdown of all car racers.",
  },
  {
    id: 11,
    name: "Silver Bull RB19",
    image: "/assets/car-racing-4394450_640.jpg",
    description: "A brilliant race car.",
  },
  {
    id: 12,
    name: "Blue Bull RB19",
    image: "/assets/car-racing-6555355_640.jpg",
    description: "The car of the future.",
  }
];

const Home = () => {
  return (
    <div className="home p-6 text-center">
      {/* Project Description Section */}
      <section className="mb-8 p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-xl font-bold text-gray-800  text-center"> Welcome to Car Race!</h1>
        <p className="text-lg text-gray-600 mt-4">
          This is your ultimate racing hub where you can explore the 
          most advanced race cars, circuits, and drivers in the world of motorsports.   
          Track your favorite teams, explore legendary circuits, and stay updated with real-time race stats!
        </p>
      </section>

      {/* Car Cards Section */}
      <h2 className="text-2xl font-semibold text-gray-700 my-6  text-center"> Featured Race Cars</h2>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
