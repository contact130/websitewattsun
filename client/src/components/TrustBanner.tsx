import { Shield, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "10+",
    label: "Années d'expérience",
    color: "text-[#fcad0d]"
  },
  {
    icon: Users,
    value: "739+",
    label: "Chantiers réalisés",
    color: "text-[#5e8a92]"
  },
  {
    icon: Award,
    value: "4",
    label: "Certifications RGE",
    color: "text-green-500"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Garantie décennale",
    color: "text-blue-500"
  }
];

export default function TrustBanner() {
  return (
    <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className={`mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
