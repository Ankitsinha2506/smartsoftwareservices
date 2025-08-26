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
        <section className="py-8 bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 px-4">
                Our Developed Software Applications
            </h2>

            {/* Horizontally scrollable categories */}
            <div className="flex gap-3 mb-8 px-2 overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`flex-shrink-0 min-w-[110px] px-5 py-2 rounded-md text-base font-medium border transition
        ${activeTab === cat ? "bg-sky-600 text-white" : "bg-white border-gray-300 text-gray-700"}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>


            {/* Responsive portfolio grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
                {filteredItems.map((item) => (
                    <PortfolioItem key={item.title} title={item.title} image={item.image} />
                ))}
            </div>
        </section>
    );
}

export default PortfolioGrid;
