import { motion } from "motion/react";
import { Home, TrendingUp, Key, Shield, Users, FileCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Buying",
    description:
      "Expert guidance through every step of finding and purchasing your perfect property.",
  },
  {
    icon: TrendingUp,
    title: "Property Selling",
    description:
      "Maximize your property value with our proven marketing strategies and expert negotiation.",
  },
  {
    icon: Key,
    title: "Property Management",
    description:
      "Comprehensive property management services to protect your investment.",
  },
  {
    icon: Shield,
    title: "Legal Assistance",
    description:
      "Navigate complex real estate laws with our experienced legal professionals.",
  },
  {
    icon: Users,
    title: "Investment Consulting",
    description:
      "Strategic advice to help you build a profitable real estate portfolio.",
  },
  {
    icon: FileCheck,
    title: "Property Valuation",
    description:
      "Accurate property assessments using advanced market analysis and local expertise.",
  },
];

export function RealEstateServices() {
  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 dark:text-amber-500 uppercase tracking-wider text-sm mb-2 block">
            Our Services
          </span>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            From buying to selling, we provide end-to-end real estate services
            tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-850 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-600 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
