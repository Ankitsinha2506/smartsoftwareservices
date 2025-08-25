import React from "react";

function EmployeeTestimonials() {
  const testimonials = [
    {
      text:
        "Great Company. It’s the great I.T company that I choose happily. I gave my requirements and the management team help me to provide high quality website and android app as well. This company will remain best for me forever.",
      company: "Hello Temp",
      name: "Amol Narawade",
      border: "border-gray-300"
    },
    {
      text:
        "Hi! I usually don’t risk to work with middle scale company but when I shared SRS with SMART Software I feel that I've choosen right LLC's. Really great employees and supportive management staff. Want to suggest you. Keep staying awesome.",
      company: "LoyCart",
      name: "Sandip Nag",
      border: "border-sky-400"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl text-gray-700 text-center font-semibold mb-8">
        What employees are saying
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`border rounded-lg p-7 bg-white shadow-sm ${t.border}`}
          >
            <p className="italic text-lg text-gray-800 mb-6">&ldquo;{t.text}&rdquo;</p>
            <div className="font-bold text-gray-900">{t.company}&nbsp;
              <span className="font-normal text-gray-600">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EmployeeTestimonials;
