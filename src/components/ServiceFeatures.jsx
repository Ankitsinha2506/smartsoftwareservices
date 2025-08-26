import React from "react";

const features = [
  {
    icon: (
      // Puzzle piece icon — use your actual SVG/icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-sky-500 mb-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.5 2c-.83 0-1.5.67-1.5 1.5V5H7.5A1.5 1.5 0 0 0 7 8c.67 0 1.33.67 1.33 1.5S7.67 11 7 11v2c.67 0 1.33.67 1.33 1.5S7.67 16 7 16a1.5 1.5 0 0 0 .5 3h2.5v1.5a1.5 1.5 0 0 0 3 0V19h2.5A1.5 1.5 0 0 0 17 16c-.67 0-1.33-.67-1.33-1.5S16.33 13 17 13v-2c-.67 0-1.33-.67-1.33-1.5S16.33 8 17 8a1.5 1.5 0 0 0-.5-3h-2.5V3.5A1.5 1.5 0 0 0 11.5 2z"/>
      </svg>
    ),
    title: "Strategy",
    text: "Agile model to make higher quality software. Manual and Automation testing on every aspect of software applications."
  },
  {
    icon: (
      // Gears icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-sky-500 mb-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.12 2.21A.75.75 0 1 1 8.66 3.12l.33 1.25a7.003 7.003 0 0 1 1.27-.36l.48-1.22a.75.75 0 1 1 1.42.55l-.48 1.23c.42.06.84.15 1.24.26l.48-1.23a.75.75 0 1 1 1.42.54l-.48 1.24a6.98 6.98 0 0 1 1.27.34l.33-1.26a.75.75 0 1 1 1.44-.21l-.34 1.27c.4.15.79.32 1.17.53l.95-.99a.75.75 0 1 1 1.09 1.03l-.95.98a7.15 7.15 0 0 1 .9.93l1.16-.56a.75.75 0 1 1 .7 1.35l-1.14.57c.11.18.21.37.3.57l1.26-.3a.75.75 0 1 1 .33 1.47l-1.25.3c.03.21.06.43.07.65h1.32a.75.75 0 1 1 0 1.5h-1.32c-.01.22-.03.44-.07.66l1.25.28a.75.75 0 1 1-.33 1.47l-1.25-.3a7.44 7.44 0 0 1-.29.57l1.14.56a.75.75 0 1 1-.7 1.36l-1.16-.56a7.26 7.26 0 0 1-.89.94l.95.97a.75.75 0 1 1-1.09 1.04l-.95-.98a7.035 7.035 0 0 1-1.16.54l.33 1.26a.75.75 0 0 1-1.44.21l-.33-1.25a6.89 6.89 0 0 1-1.27.36l-.48 1.21a.75.75 0 1 1-1.42-.54l.48-1.22a7.03 7.03 0 0 1-1.24-.26l-.49 1.22a.75.75 0 0 1-1.42-.55l.49-1.23a7.09 7.09 0 0 1-1.28-.34l-.33 1.25a.75.75 0 1 1-1.44-.21l.33-1.27c-.39-.15-.78-.32-1.17-.52l-.95.99a.75.75 0 0 1-1.09-1.04l.96-.98a7.22 7.22 0 0 1-.9-.93L2.6 14.4a.75.75 0 1 1-.7-1.35l1.15-.56a7.96 7.96 0 0 1-.3-.57l-1.25.3a.75.75 0 1 1-.33-1.47l1.26-.3a7.87 7.87 0 0 1-.07-.65H2.75a.75.75 0 0 1 0-1.5h1.32c.01-.22.03-.44.07-.65l-1.26-.3a.75.75 0 0 1 .33-1.48z"/>
      </svg>
    ),
    title: "Technology",
    text: "MVC Architecture technology which help to rapid Software Application Development. AngularJS and Jquery to make design effective."
  },
  {
    icon: (
      // Lightbulb icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-sky-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 18h6v-2H9v2zm-1-2v2h8v-2a6 6 0 1 0-8 0zm8.43-10.06A8 8 0 1 1 5.57 3.94a1.01 1.01 0 0 1 1.12 1.64A6.008 6.008 0 0 0 12 5a6.008 6.008 0 0 0 5.31 0 1.01 1.01 0 0 1 1.12-1.64z"/>
      </svg>
    ),
    title: "Creativity",
    text: "Creative animation and graphics which leads business growth. Logo and graphics help your business to achieve your goal."
  },
  {
    icon: (
      // Shield icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-sky-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l8 4v3c0 5.25-3.44 10.42-8 13-4.56-2.58-8-7.75-8-13V6l8-4z"/>
      </svg>
    ),
    title: "Security",
    text: "Highly encrypted code that lead secure operation on system is the first priority that SMART SOFTWARE SERVICES offer you."
  },
];

function ServiceFeatures() {
  return (
    <section className="w-full py-14 bg-cover bg-center" style={{ backgroundImage: "url('/images/service-bg.jpg')" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 text-center">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center text-gray-700">
            {f.icon}
            <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
            <p className="text-gray-600 text-base">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceFeatures;
