import React from "react";

const features = [
  {
    image: "https://i.pinimg.com/736x/26/90/04/2690044a5f8a0f9b1c377c17ac89dbbb.jpg", // Replace with your actual path
    title: "Top Skilled Team",
    desc: "We are skilled in ASP.NET, MVC Architecture, Android Application Development, Web Application Development, Logo Designing, SEO, Hosting and Graphics Designing.",
  },
  {
    image: "https://i.pinimg.com/736x/9a/37/60/9a3760eba3fd26d3ceeb0f27579bbaca.jpg",
    title: "Better Customer Support",
    desc: `SMART Software Services offer you awesome support 24/7. We always think "Customer is King" at every phase of software Application Development.`,
  },
  {
    image: "https://i.pinimg.com/736x/99/f4/41/99f441b928302b6597d5dd53423cb8ae.jpg",
    title: "Beautiful Office Space",
    desc: "Company has multiple office locations in pune and every office is awesome for working in company or meeting with clients.",
  },
];

function ThreeColumnFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={f.image}
              alt={f.title}
              className="w-full h-56 object-cover rounded-md mb-6 shadow"
            />
            <h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">{f.title}</h3>
            <p className="text-gray-600 text-center text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThreeColumnFeatures;
