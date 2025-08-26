import React from "react";

function StatsSection() {
  const stats = [
    { value: "97.5%", label: "Positive feedback", color: "text-gray-700" },
    { value: "1000", label: "Projects completed", color: "text-sky-500" },
    { value: "$28", label: "Average cost per hour", color: "text-sky-500" },
    { value: "98.5", label: "CSAT Index", color: "text-sky-500" },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <h2 className="text-center text-2xl md:text-3xl font-medium mb-10">
        Our <span className="font-bold">passion</span> for what we do transfers into our <span className="font-bold">services</span>
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-40 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[120px]">
            <span className={`text-5xl md:text-6xl font-semibold ${stat.color}`}>{stat.value}</span>
            <span className="text-gray-600 mt-2 text-lg">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
