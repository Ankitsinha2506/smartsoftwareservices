import { Briefcase, BarChart, Workflow, Users, Globe, Shield } from "lucide-react";

const features = [
  {
    title: "Software Development",
    description:
      "Our managed software development, independent software testing, and professional services span commercial software products, SaaS solutions, and custom applications across enterprise, cloud, mobile, and web development. We assist your business transformation with Microsoft solutions including SharePoint and Azure.",
    icon: Briefcase,
  },
  {
    title: "BI & Performance Management",
    description:
      "The business environment today is more dynamic than ever. SMART Business Intelligence & Performance Management (BIPM) solutions help your enterprise get agile, adaptable, and efficient.",
    icon: BarChart,
  },
  {
    title: "Business Process Services",
    description:
      "Leading companies use our customized BPS solutions to gain an advantage in the marketplace. Save costs immediately while making businesses work smarter and more efficiently.",
    icon: Workflow,
  },
  {
    title: "Consulting",
    description:
      "Businesses need to respond to rapidly changing conditions with innovation and agility. SMART Consulting Services deliver integrated, end-to-end IT-enabled solutions to help your business transform.",
    icon: Users,
  },
  {
    title: "Digital Enterprise",
    description:
      "Digital is about creating value — for your customers, for employees, and for your business. We help enterprises become truly digital-first organizations.",
    icon: Globe,
  },
  {
    title: "Assurance Services",
    description:
      "Reduce software development efforts, lower maintenance costs, and achieve better outcomes with our assurance and quality services.",
    icon: Shield,
  },
];

export default function CoreFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Some Core Features</h2>

        {/* Equal height grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

              {/* equalized description */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
