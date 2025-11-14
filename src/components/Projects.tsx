import { motion } from "motion/react";
import houseOfBeauty from "figma:asset/dff9deed159c10ff39a7986d339e36135ec2a8dc.png";
import jouyLogo from "figma:asset/6107f87a0c932a3ae898809e94b332eb6ca45fe5.png";
import myFitness from "figma:asset/14c3aa15315c95a218e92e58a564a27862051855.png";

const projects = [
  {
    id: 1,
    title: "House of Beauty",
    category: "Logo Design & Branding",
    image: houseOfBeauty,
  },
  {
    id: 2,
    title: "مونة إم جوي",
    category: "Logo Design & Branding",
    image: jouyLogo,
  },
  {
    id: 3,
    title: "MY Fitness by Myriam",
    category: "Logo Design & Brand Identity",
    image: myFitness,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 text-white">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-900/20 border border-gray-800/30 hover:border-gray-500/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <p className="text-gray-400 mb-2">{project.category}</p>
                  <h3 className="text-2xl text-white">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}