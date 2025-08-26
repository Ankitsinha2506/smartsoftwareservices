import React, { useState } from "react";

const timelineData = [
  {
    year: "2013",
    cards: [
      {
        title: "Our Birth",
        content:
          "SMART SOFTWARE SERVICES started with website development in year of 2013 and continuously growing in its market share and employment as well. The company started with 5 individuals and now it's having 30+ satisfied employees and management staff.",
      },
      {
        title: "",
        content:
          "The company started with web application development from HTML and made some websites using web application development tools now its has certified .NET developer and Android developers.",
      },
    ],
  },
  {
    year: "2015",
    cards: [
      {
        title: "One Year Later",
        content:
          "After making some web development applications, company started with dynamic web applications and software using .NET and Android app technology. It has certified .NET and android developers who takes care of every line of code.",
      },
      {
        title: "Primary Skills",
        content:
          "For making responsive website we use HTML5, CSS3, JQuery, Bootstrap and ASP.NET. For Android applications we use JDK, Java Servlet and advanced android development tools. Company has graphics designers and SEO specialists.",
      },
    ],
  },
  // Add cards for other years as needed...
  {
    year: "2017",
    cards: [
      {
        title: "Halfway Between the Gutter and the Stars",
        content:
          "The main achievement of the company is reputed clients and its own software applications which are currently in market operating very effectively.",
      },
      {
        title: "",
        content:
          "Certified Developers, Testers, Designers and management team which always think “Customer is King” and work for clients.",
      },
    ],
  },
  {
    year: "2019",
    cards: [
      { title: "2019 Card 1", content: "Content for 2019 Card 1..." },
      { title: "2019 Card 2", content: "Content for 2019 Card 2..." },
    ],
  },
  {
    year: "2021",
    cards: [
      { title: "2021 Card 1", content: "Content for 2021 Card 1..." },
      { title: "2021 Card 2", content: "Content for 2021 Card 2..." },
    ],
  },
  {
    year: "2023",
    cards: [
      { title: "2023 Card 1", content: "Content for 2023 Card 1..." },
      { title: "2023 Card 2", content: "Content for 2023 Card 2..." },
    ],
  },
  {
    year: "2025",
    cards: [
      { title: "2025 Card 1", content: "Content for 2025 Card 1..." },
      { title: "2025 Card 2", content: "Content for 2025 Card 2..." },
    ],
  },
];

function TimelineHistory() {
  const [selectedYear, setSelectedYear] = useState(timelineData[0].year);
  const active = timelineData.find(item => item.year === selectedYear);

  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-700">Our History</h2>

      <div className="flex items-center justify-between max-w-4xl mx-auto mb-12 px-1">
        {timelineData.map((item, idx) => (
          <button
            key={item.year}
            onClick={() => setSelectedYear(item.year)}
            className="flex-1 flex flex-col items-center relative focus:outline-none"
            type="button"
          >
            <div
              className={`rounded-full flex items-center justify-center w-20 h-20 font-semibold text-lg z-10
                ${selectedYear === item.year
                  ? "bg-sky-500 text-white scale-110"
                  : "border-2 border-sky-500 text-sky-600 bg-white transition-transform duration-200"}
                hover:bg-sky-500 hover:text-white hover:scale-110 cursor-pointer transition-all duration-300`}
            >
              {item.year}
            </div>
            {idx < timelineData.length - 1 && (
              <div
                className="absolute top-1/2 right-0 w-full h-0.5 bg-sky-100 z-0"
                style={{ left: "50%", marginLeft: "40px" }}
              ></div>
            )}
          </button>
        ))}
      </div>

      {/* Two cards for selected year */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {active.cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-sky-100 shadow-sm rounded-md p-6 flex flex-col"
          >
            {card.title && (
              <h3 className="text-2xl font-semibold mb-3 text-gray-700">{card.title}</h3>
            )}
            <p className="text-gray-600">{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TimelineHistory;
