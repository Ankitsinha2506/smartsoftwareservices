import React from "react";

function BannerPortfolioItem({ title, image }) {
  return (
    <div className="banner-item relative h-44 rounded-md shadow-md overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <span className="text-white text-base font-semibold text-center px-2">{title}</span>
      </div>
    </div>
  );
}

export default BannerPortfolioItem;
