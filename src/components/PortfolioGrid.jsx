import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import { portfolioItems } from "../data/portfolioData";

const categories = ["All", "Softwares", "Websites", "Android App"];

function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-6">Our Developed Software Applications</h2>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 rounded-md text-base font-medium border transition 
              ${activeTab === cat ? "bg-sky-600 text-white" : "bg-white border-gray-300 text-gray-700"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto max-w-6xl">
        {filteredItems.map((item) => (
          <PortfolioItem key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
    </section>
    
  );
}

export default PortfolioGrid;
