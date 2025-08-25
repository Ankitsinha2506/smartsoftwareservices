import React from "react";
import BannerPortfolioItem from "./BannerPortfolioItem";
import { facebookBannerItems } from "../data/bannerPortfolioData";

function BannerPortfolioGrid() {
  return (
    <section className="py-10 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Facebook banners and Post</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto max-w-6xl">
        {facebookBannerItems.map((item, idx) => (
          <BannerPortfolioItem key={idx} title={item.title} image={item.image} />
        ))}
      </div>
    </section>
  );
}

export default BannerPortfolioGrid;
