
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import domina from "../assets/domina-transparent.png";
import goldenMark from "../assets/golden-mark-transparent.png";
import houseOfBeauty from "../assets/house-of-beauty-transparent.png";
import jouy from "../assets/jouy-transparent.png";
import myFitness from "../assets/my-fitness-transparent.png";
import manymoda from "../assets/manymoda-transparent.png";
import oMarket from "../assets/o-market-transparent.png";
import aurelleLogo from "../assets/aurelle-logo-transparent.png";
import oliviaLogo from "../assets/oliv-ia-logo-transparent.png";
import snackElKhal from "../assets/snack-el-khal-logo.png";
import littleBloomLogo from "../assets/little-bloom-logo-transparent-background.png";

type Project = {
  title: string;
  category: string;
  cover: string;
};

const projects: Project[] = [
  {
    title: "Golden Mark",
    category: "Logo Design",
    cover: goldenMark,
  },
  {
    title: "MY Fitness by Myriam",
    category: "Logo Design",
    cover: myFitness,
  },
  {
    title: "House of Beauty",
    category: "Logo Design",
    cover: houseOfBeauty,
  },
  {
    title: "Little Bloom – Baby Collection",
    category: "Logo Design",
    cover: littleBloomLogo,
  },
  {
    title: "Aurelle Skincare",
    category: "Logo Design",
    cover: aurelleLogo,
  },
  {
    title: "Snack الخال",
    category: "Logo Design",
    cover: snackElKhal,
  },
  {
    title: "Domina Real Estate",
    category: "Logo Design",
    cover: domina,
  },
  {
    title: "مونة إم جوي",
    category: "Logo Design",
    cover: jouy,
  },
  {
    title: "Manymoda",
    category: "Logo Design",
    cover: manymoda,
  },
  {
    title: "O-Market",
    category: "Logo Design",
    cover: oMarket,
  },
  {
    title: "OLIV-IA",
    category: "Logo Design",
    cover: oliviaLogo,
  },
];

const COPYRIGHT = "© Cynthia Andraos";

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="logo-design"
      className="scroll-mt-24 bg-[#FFF7F2] px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 32 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: "easeOut",
          }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
            06 /
          </p>

          <h2
            className="text-4xl italic text-[#850F25] sm:text-5xl md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Logo Design
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#704B50]">
            A selection of original logo designs
            created for businesses and personal brands,
            combining distinctive typography,
            memorable symbols, and thoughtful
            visual concepts.
          </p>
        </motion.div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion
                  ? 0
                  : (index % 3) * 0.09,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -5 }
              }
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* LOGO IMAGE */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7EDE8]">
                <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-7">
                  <img
                    src={project.cover}
                    alt={`${project.title} logo`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    onContextMenu={(event) =>
                      event.preventDefault()
                    }
                    className="block h-full w-full select-none object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                  />
                </div>

                {/* CONSISTENT WATERMARK */}
                <span
                  data-portfolio-watermark="true"
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-md bg-[#210C12]/45 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/90"
                >
                  {COPYRIGHT}
                </span>
              </div>

              {/* PROJECT INFORMATION */}
              <div className="flex w-full flex-1 flex-col bg-white p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#A45D69]">
                  {project.category}
                </p>

                <h3
                  className="text-2xl text-[#681523]"
                  style={{
                    fontFamily:
                      "'Bodoni Moda', Georgia, serif",
                  }}
                >
                  {project.title}
                </h3>

                <p className="mt-auto flex items-center gap-2 pt-5 text-xs font-medium uppercase tracking-widest text-[#A45D69]">
                  Original Logo Concept
                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                  />
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
