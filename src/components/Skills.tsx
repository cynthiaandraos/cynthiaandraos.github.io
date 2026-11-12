
import { motion, useReducedMotion } from "motion/react";
import { Image, PenTool, Layers, Video, BookOpen, Scissors, Gem, Instagram, Package, Printer, Sparkles } from "lucide-react";

const skills = [
  { name: "Adobe Photoshop", icon: Image },
  { name: "Adobe Illustrator", icon: PenTool },
  { name: "Figma", icon: Layers },
  { name: "Adobe Premiere Pro", icon: Video },
  { name: "Adobe InDesign", icon: BookOpen },
  { name: "CapCut", icon: Scissors },
];
const services = [
  { title: "Brand Identity", description: "Creating cohesive visual identities that give brands a distinctive personality.", icon: Gem },
  { title: "Logo Design", description: "Designing memorable logos that communicate a brand's character.", icon: PenTool },
  { title: "Social Media Design", description: "Creating engaging visual content for digital platforms.", icon: Instagram },
  { title: "Packaging Design", description: "Developing packaging visuals that make products stand out.", icon: Package },
  { title: "Print Design", description: "Designing posters, brochures, and other printed materials.", icon: Printer },
  { title: "Creative Design", description: "Turning creative concepts into meaningful visual experiences.", icon: Sparkles },
];
export function Skills() {
  const reduceMotion = useReducedMotion();
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 35 }, visible: { opacity: 1, y: 0 } };
  return (
    <>
      <section id="skills" className="scroll-mt-24 bg-[#FFF7F2] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A45D69]">CREATIVE TOOLKIT</p>
            <h2 className="text-5xl italic text-[#850F25] md:text-7xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 700 }}>My Skills</h2>
            <p className="mx-auto mt-5 max-w-xl text-[#704B50]">The creative tools I use to bring ideas to life.</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {skills.map((skill, index) => { const Icon = skill.icon; return (
              <motion.div key={skill.name} initial={{ opacity: 0, y: reduceMotion ? 0 : 35, scale: reduceMotion ? 1 : 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut" }} whileHover={reduceMotion ? undefined : { y: -8, scale: 1.03 }} className="group flex flex-col items-center rounded-2xl border border-[#E8D2CF] bg-white px-3 py-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F6E6E1] text-[#850F25] transition-colors group-hover:bg-[#850F25] group-hover:text-white"><Icon size={30} strokeWidth={1.5} /></div>
                <h3 className="text-sm font-medium text-[#681523]">{skill.name}</h3>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>
      <section id="services" className="scroll-mt-24 bg-[#FFF7F2] px-6 pb-8 pt-16">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A45D69]">WHAT I DO</p>
            <h2 className="text-5xl italic text-[#850F25] md:text-7xl" style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 700 }}>My Services</h2>
            <p className="mx-auto mt-5 max-w-xl text-[#704B50]">Thoughtful design solutions that bring creative ideas and brands to life.</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {services.map((service, index) => { const Icon = service.icon; return (
              <motion.div key={service.title} initial={{ opacity: 0, y: reduceMotion ? 0 : 35, scale: reduceMotion ? 1 : 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut" }} whileHover={reduceMotion ? undefined : { y: -8, scale: 1.03 }} className="group flex h-full flex-col items-center rounded-2xl border border-[#E8D2CF] bg-white px-3 py-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F6E6E1] text-[#850F25] transition-colors group-hover:bg-[#850F25] group-hover:text-white"><Icon size={30} strokeWidth={1.5} /></div>
                <h3 className="text-sm font-medium text-[#681523]">{service.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#704B50]">{service.description}</p>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>
    </>
  );
}
