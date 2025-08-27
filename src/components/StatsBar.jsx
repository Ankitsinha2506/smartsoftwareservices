import React, { useEffect, useState } from "react";
import { FaSmile, FaThumbsUp, FaProjectDiagram, FaDollarSign } from "react-icons/fa";

function StatsBar() {
  // Stats data
  const statsData = [
    { value: 573, suffix: "+", label: "Happy Clients", icon: <FaSmile />, color: "from-green-400 to-emerald-500" },
    { value: 92, suffix: "%", label: "Positive Feedback", icon: <FaThumbsUp />, color: "from-blue-400 to-sky-500" },
    { value: 146, suffix: "+", label: "Projects Completed", icon: <FaProjectDiagram />, color: "from-purple-400 to-indigo-500" },
    { value: 28, suffix: "/hr", label: "Average Cost", icon: <FaDollarSign />, color: "from-yellow-400 to-amber-500" },
  ];

  // State to store animated counts
  const [counts, setCounts] = useState(statsData.map(() => 0));

  // Animate numbers from 0 to target
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < statsData[index].value ? count + Math.ceil(statsData[index].value / 50) : statsData[index].value
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 flex justify-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-40 h-40 bg-green-500/10 rounded-full top-10 left-10 blur-3xl"></div>
        <div className="absolute w-56 h-56 bg-blue-500/10 rounded-full bottom-10 right-16 blur-3xl"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-10 z-10">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-md border border-gray-700 hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${stat.color} text-white text-2xl mb-4`}
            >
              {stat.icon}
            </div>
            <span className="text-3xl md:text-4xl font-bold text-white">
              {counts[idx]}
              {stat.suffix}
            </span>
            <span className="mt-2 text-base md:text-lg text-gray-300">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
