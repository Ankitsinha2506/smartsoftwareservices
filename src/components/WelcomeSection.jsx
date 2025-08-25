import React from "react";
import Image from "../assets/images.png"
function WelcomeSection() {
  return (
    <section className="relative w-full min-h-[480px] flex flex-col justify-center bg-gradient-to-br from-black via-gray-800 to-green-900">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center py-10 px-6 md:px-12">
        {/* Left side: text */}
        <div className="md:w-2/3 w-full text-white md:pr-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-7 text-left leading-tight">
            WELCOME TO SMART SOFTWARE
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Smart Software Services thinks outside the square to bring you the latest in Web Application & customised software design and development.
          </p>
          <p className="mb-6 text-lg md:text-xl">
            We specialise in website, product and application development using the latest technology suites at the forefront of innovation.
          </p>
          <p className="mb-0 text-lg md:text-xl">
            Whether you are looking to automate your business, streamline processes or overhaul your digital identity, Digital Minds can provide you with a fully integrated and adapted solution that best suits your needs.
          </p>
        </div>
        {/* Right side: graphic */}
        <div className="md:w-1/3 w-full flex justify-center items-center mt-10 md:mt-0">
          <img
            src={Image}
            alt="Smart Software Technologies"
            className="w-full max-w-md object-contain rounded-lg shadow-xl"
          />
        </div>
      </div>
      {/* Optional background overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black opacity-20"></div>
    </section>
  );
}

export default WelcomeSection;
