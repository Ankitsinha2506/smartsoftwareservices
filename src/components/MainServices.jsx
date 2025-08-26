import React from "react";
import { FaHtml5, FaWindows, FaChrome, FaHospitalSymbol, FaAndroid, FaChartBar, FaCode, FaTrophy, FaUsers } from "react-icons/fa";

const services = [
    {
        icon: <FaHtml5 className="text-sky-500 h-20 w-20 mb-4" />,
        title: "Web Design",
        desc: "We have pixel perfect designer who makes website respsnive that can further use on phone, tablet, desktop, laptop or even projector.",
    },
    {
        icon: <FaWindows className="text-sky-500 h-20 w-20 mb-4" />,
        title: "Application Software",
        desc: "Dynamic Web Application help your business growth and save valueable time. Every application software based on performance.",
    },
    {
        icon: <FaChrome className="text-sky-500 h-20 w-20 mb-4" />,
        title: "Website Serving",
        desc: "Our SEO team help your website to display in the top 10 on all modern browsers that definately lead your business ahead on every aspect.",
    },
    {
        icon: <FaHospitalSymbol className="text-sky-500 h-20 w-20 mb-4" />,
        title: "US Healthcare",
        desc: "Medical billers take the codes prepared by the medical coder and submit claims to the insurance company.",
    },
    {
        icon: <FaAndroid className="text-sky-500 h-20 w-20 mb-4" />,
        title: "Android App",
        desc: "SMART Software services provide you a rapid android application development as per your business requirement with quality product.",
    },
    {
        icon: <FaChartBar className="text-sky-500 h-20 w-20 mb-4" />,
        title: "Analytics",
        desc: "We have certified google analyzer team to help you to analyze your application with the help of advance google analyzer application.",
    },
    {
        icon: <FaCode className="text-sky-500 h-20 w-20 mb-4" />,
        title: "Coding",
        desc: "Every line of and each of code tested twisely before application release so that your application can boost and execute quickly.",
    },
    {
        icon: <FaTrophy className="text-sky-500 h-20 w-20 mb-4" />,
        title: "Branding",
        desc: "SMART Software Services provide branding service to brand your business that help to achieve maximum business goal and increase business strategy.",
    },
    {
        icon: <FaUsers className="text-sky-500 h-20 w-20 mb-4" />,
        title: "Marketing",
        desc: "We know every business is not successful without marketing so our team help you to plan business marketing and latest marketing strategies.",
    },
];

function MainServices() {
    return (
        <section className="py-16 bg-white">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-700">
                Main Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 max-w-6xl mx-auto px-4">
                {services.map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                        {React.cloneElement(srv.icon, { size: 40, className: "flex-shrink-0 text-sky-500" })}
                        <div>
                            <h3 className={`text-xl font-semibold mb-2 ${srv.title === "US Healthcare" ? "text-sky-500" : "text-gray-700"}`}>
                                {srv.title}
                            </h3>
                            <p className="text-gray-600 text-base">{srv.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MainServices;
