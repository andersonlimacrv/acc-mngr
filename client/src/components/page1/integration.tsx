import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiVuedotjs, SiNodedotjs, SiPython, SiGo } from "react-icons/si";

const integrations = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiVuedotjs, name: "Vue" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPython, name: "Python" },
  { icon: SiGo, name: "Go" }
];

export function Integration() {
  return (
    <section className="py-24 relative border-b border-border">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Integrates everywhere.</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
          {integrations.map((Integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 hover:text-primary transition-all duration-300"
            >
              <Integration.icon className="w-10 h-10 md:w-12 md:h-12" />
              <span className="font-mono text-xs">{Integration.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
