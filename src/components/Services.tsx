import { motion } from "framer-motion";
import { Card } from "./ui/card";

const services = [
  {
    title: "Hair Styling",
    description: "Professional cutting, coloring, and styling services",
    icon: "✂️",
  },
  {
    title: "Skincare",
    description: "Facials, peels, and rejuvenating treatments",
    icon: "🌸",
  },
  {
    title: "Nail Art",
    description: "Manicures, pedicures, and custom nail designs",
    icon: "💅",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-rose-50 to-white relative flex justify-center">
      {/* Static background elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-rose-700/20 rounded-full" />
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-4">
            Premium beauty services that bring out your inner radiance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <Card className="h-full p-6 bg-white border border-rose-100 hover:border-rose-200 transition-all rounded-xl shadow-sm hover:shadow-md">
                {/* Icon container */}
                <div className="mb-6 w-16 h-16 rounded-xl bg-rose-100/50 flex items-center justify-center text-3xl transition-transform hover:scale-105">
                  <span className="drop-shadow-sm">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                  <div className="w-12 h-1 bg-rose-700/30 rounded-full mt-2" />
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}