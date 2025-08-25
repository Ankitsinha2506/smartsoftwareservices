import React from "react";

function PortfolioItem({ title, image }) {
  return (
    <div className="portfolio-item relative h-52 rounded-md overflow-hidden shadow-md group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <span className="text-white text-lg font-semibold text-center px-2">{title}</span>
      </div>
    </div>
  );
}

export default PortfolioItem;
