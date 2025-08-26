import React from "react";

const features = [
  {
    image: "https://in.pinterest.com/pin/361625045099630938/", // Replace with your actual path
    title: "Top Skilled Team",
    desc: "We are skilled in ASP.NET, MVC Architecture, Android Application Development, Web Application Development, Logo Designing, SEO, Hosting and Graphics Designing.",
  },
  {
    image: "/images/support.jpg",
    title: "Better Customer Support",
    desc: `SMART Software Services offer you awesome support 24/7. We always think "Customer is King" at every phase of software Application Development.`,
  },
  {
    image: "/images/office.jpg",
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
