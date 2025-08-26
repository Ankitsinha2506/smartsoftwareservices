import React from "react";

// Use your actual icon components or SVGs for best accessibility and scalability.
const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-sky-500 mb-4" fill="none" viewBox="0 0 24 24">
        <path d="M7 8h10v2H7V8zm8 4H7v2h8v-2zm-4 4H7v2h4v-2z" />
      </svg>
    ),
    title: "Strategy",
    description:
      "Agile model to make higher quality software. Manual and Automation testing on every aspect of software applications.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-sky-500 mb-4" fill="none" viewBox="0 0 24 24">
        <path d="M13 10V3l4 4-4 3zm-7 7V6h2v11H6zm8 0V6h2v11h-2zm3 2v2H7v-2h10z" />
      </svg>
    ),
    title: "Technology",
    description:
      "MVC Architecture technology which help to rapid Software Application Development. AngularJS and Jquery to make design effective.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-sky-500 mb-4" fill="none" viewBox="0 0 24 24">
        <path d="M8 2v7H2v6h6v7h8V15h6V9h-6V2H8z" />
      </svg>
    ),
    title: "Creativity",
    description:
      "Creative animation and graphics which leads business growth. Logo and graphics help your business to achieve your goal.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-sky-500 mb-4" fill="none" viewBox="0 0 24 24">
        <path d="M12 17.5l6-4.5V6l-6 4.5L6 6v7l6 4.5z" />
      </svg>
    ),
    title: "Security",
    description:
      "Highly encrypted code that lead secure operation on system is the first priority that SMART SOFTWARE SERVICES offer you.",
  },
];

function ServiceHero() {
  return (
    <section
     className="w-full h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/b7/ae/be/b7aebea382c2b4f21bd9fdddbf109cdc.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 text-center">
        {services.map((srv, idx) => (
          <div key={idx} className="flex flex-col items-center text-white">
            {srv.icon}
            {/* <h3 className="text-2xl font-semibold mb-4">{srv.title}</h3>
            <p className="text-white text-base">{srv.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceHero;
