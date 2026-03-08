import { motion } from "motion/react";
import { Award, Building, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Building,
    value: "500+",
    label: "Properties Sold",
    color: "from-blue-900 to-blue-700",
  },
  {
    icon: Users,
    value: "1,200+",
    label: "Happy Clients",
    color: "from-amber-600 to-amber-500",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years of Excellence",
    color: "from-blue-900 to-blue-700",
  },
  {
    icon: TrendingUp,
    value: "$2.5B+",
    label: "Total Sales Volume",
    color: "from-amber-600 to-amber-500",
  },
];

export function RealEstateStats() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 dark:from-gray-950 dark:via-blue-950 dark:to-gray-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 uppercase tracking-wider text-sm mb-2 block">
            Our Achievements
          </span>
          <h2 className="text-white mb-4">Trusted By Thousands</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our numbers speak for themselves - a legacy of excellence in real
            estate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-xl`}
              >
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                <div className="text-5xl mb-2 text-amber-400">{stat.value}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
