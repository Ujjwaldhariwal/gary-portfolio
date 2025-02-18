import { motion } from "framer-motion";

// Metrics data
const metrics = [
  { id: 1, title: "Projects Delivered", value: 85 },
  { id: 2, title: "Uptime SLA", value: 99.9 },
  { id: 3, title: "Cost Optimization", value: 40 },
  { id: 4, title: "Automation Coverage", value: 75 },
];

export default function MetricsDashboard() {
  return (
    <section className="relative z-10 py-16 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="border border-cyan-500/30 rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm"
            >
              <div className="flex justify-between items-center">
                <div className="text-cyan-400 font-mono text-sm">{metric.title}</div>
                <div className="text-green-400">{metric.value.toFixed(2)}%</div>
              </div>
              <div className="mt-2 bg-slate-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
