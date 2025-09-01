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
        title: "First Projects",
        content:
          "The company started with web application development from HTML and made some websites using web application development tools. Later, it expanded into .NET and Android development.",
      },
    ],
  },
  {
    year: "2015",
    cards: [
      {
        title: "Dynamic Growth",
        content:
          "After building static websites, the company moved into dynamic applications using .NET and Android. Certified developers began handling enterprise-grade projects.",
      },
      {
        title: "Primary Skills",
        content:
          "Responsive web applications with HTML5, CSS3, JQuery, Bootstrap, and ASP.NET. Mobile solutions with Java, JDK, and advanced Android tools.",
      },
    ],
  },
  {
    year: "2017",
    cards: [
      {
        title: "Market Recognition",
        content:
          "The company built its reputation with reputed clients and launched its own software applications running effectively in the market.",
      },
      {
        title: "Team Expansion",
        content:
          "Certified Developers, Testers, Designers, and Management united under one vision: ‘Customer is King’.",
      },
    ],
  },
  {
    year: "2019",
    cards: [
      {
        title: "Cloud Adoption",
        content:
          "We expanded into cloud technologies with AWS and Azure, offering DevOps and scalable solutions for enterprises.",
      },
      {
        title: "Healthcare Domain",
        content:
          "Started delivering IT solutions for healthcare clients including **medical billing** and **medical coding** services.",
      },
    ],
  },
  {
    year: "2021",
    cards: [
      {
        title: "Data & AI Journey",
        content:
          "Launched services in **Big Data, Data Analytics, and Data Science** to help clients make smarter decisions.",
      },
      {
        title: "CRM & Enterprise Solutions",
        content:
          "Introduced **Salesforce development** and Microsoft services for enterprise-level solutions.",
      },
    ],
  },
  {
    year: "2023",
    cards: [
      {
        title: "Next-Gen AI",
        content:
          "Adopted **Generative AI (AI Gen)** for automating workflows, chatbots, and smart enterprise solutions.",
      },
      {
        title: "Diversification",
        content:
          "Expanded into advanced **Java technologies, .NET Core**, and **cross-platform app development**.",
      },
    ],
  },
  {
    year: "2025",
    cards: [
      {
        title: "Innovating with Osisoft & IoT",
        content:
          "Delivering **industrial IoT solutions with Osisoft PI Systems**, integrating real-time operational data with analytics and AI.",
      },
      {
        title: "Digital Marketing Excellence",
        content:
          "Building **DV360 (Google Marketing Platform)** expertise to help businesses with advanced programmatic advertising.",
      },
    ],
  },
];

function TimelineHistory() {
  const [selectedYear, setSelectedYear] = useState(timelineData[0].year);
  const active = timelineData.find((item) => item.year === selectedYear);

  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-700">
        Our History
      </h2>

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
                ${
                  selectedYear === item.year
                    ? "bg-sky-500 text-white scale-110"
                    : "border-2 border-sky-500 text-sky-600 bg-white transition-transform duration-200"
                }
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
              <h3 className="text-2xl font-semibold mb-3 text-gray-700">
                {card.title}
              </h3>
            )}
            <p className="text-gray-600">{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TimelineHistory;
