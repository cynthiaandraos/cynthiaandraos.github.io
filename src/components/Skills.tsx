import { motion } from "motion/react";
import { Palette, Image, Layers, Video } from "lucide-react";

const skills = [
  {
    name: "Adobe Photoshop",
    icon: Image,
    color: "from-gray-700 to-gray-500",
  },
  {
    name: "Adobe Illustrator",
    icon: Palette,
    color: "from-gray-600 to-gray-400",
  },
  {
    name: "Figma",
    icon: Layers,
    color: "from-gray-700 to-gray-500",
  },
  {
    name: "Adobe Premiere Pro",
    icon: Video,
    color: "from-gray-600 to-gray-400",
  },
];

export function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900/30 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-white">
            Skills & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-gray-900/20 border border-gray-800/30 hover:border-gray-500 p-8 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-white">{skill.name}</h3>
                
                {/* Animated gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}