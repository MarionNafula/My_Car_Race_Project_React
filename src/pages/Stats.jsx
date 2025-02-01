import React from "react";

const Stat = () => {
  return (
    <div className="stat p-6 text-center">
      {/* Project Information Section */}
      <section className="mb-8 p-6 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">About Car Race</h1>
        <p className="text-lg text-gray-600 mt-4">
          Welcome to <strong>Car Race</strong>, your ultimate hub for motorsports excitement! 🚗💨  
          This platform is designed for racing enthusiasts to explore in-depth statistics on drivers, circuits, and racing history.  
          Whether you're a fan of Formula 1, rally racing, or endurance racing, we provide real-time stats, track records, and  
          performance analytics of your favorite racers and teams.  
        </p>
      </section>

      {/* Stats Overview Section */}
      <section className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 my-4 text-center">Racing Stats Overview</h2>
        <p className="text-lg text-gray-600">
          Track live race statistics, analyze historical performance, and compare drivers with real-time data insights.  
          Stay updated with leaderboards, lap times, and race winners from major racing championships worldwide.
        </p>
      </section>
    </div>
  );
};

export default Stat;
