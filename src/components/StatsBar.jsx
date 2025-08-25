import React from "react";

function StatsBar() {
  // Example stats, can be passed as props or fetched
  const stats = [
    { value: "573", label: "Happy clients" },
    { value: "92%", label: "Positive feedback", color: "text-sky-500" },
    { value: "146", label: "Projects completed" },
    { value: "$28", label: "Average cost per hour", color: "text-sky-500" },
  ];

  return (
    <div className="w-full bg-gray-100 py-10 flex justify-center">
      <div className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className={`text-4xl font-semibold ${stat.color || "text-gray-900"}`}>
              {stat.value}
            </span>
            <span className="mt-2 text-lg text-gray-700 text-center">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
