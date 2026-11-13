
import { motion } from "motion/react";
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

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  return (
    <section
      id="logo-design"
      data-local-watermarks="true"
      className="scroll-mt-24 bg-[#FFF7F2] px-4 py-12 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.85,
            ease: smoothEase,
          }}
          className="mb-9 text-center sm:mb-14"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A45D69] sm:mb-4">
            06 /
          </p>

          <h2
            className="text-[clamp(2.6rem,10vw,3rem)] italic text-[#850F25] sm:text-5xl md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 700,
            }}
          >
            Logo Design
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#704B50] sm:mt-6 sm:text-base sm:leading-relaxed">
            A selection of original logo designs
            created for businesses and personal brands,
            combining distinctive typography,
            memorable symbols, and thoughtful
            visual concepts.
          </p>
        </motion.div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">

          {projects.map((project, index) => {
            const isMyFitness =
              project.title === "MY Fitness by Myriam";

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.75,
                  delay: (index % 3) * 0.12,
                  ease: smoothEase,
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3,
                  },
                }}
                whileTap={{
                  scale: 0.985,
                }}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#E8D2CF] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >

                {/* LOGO IMAGE */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7EDE8]">

                  <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-7">

                    <motion.img
                      src={project.cover}
                      alt={`${project.title} logo`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      onContextMenu={(event) =>
                        event.preventDefault()
                      }
                      initial={{
                        opacity: 0,
                        scale: isMyFitness ? 1.22 : 1.04,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: isMyFitness ? 1.3 : 1,
                      }}
                      whileHover={{
                        scale: isMyFitness ? 1.38 : 1.035,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.8,
                        delay:
                          (index % 3) * 0.08 + 0.1,
                        ease: smoothEase,
                      }}
                      className="block h-full w-full select-none object-contain object-center"
                    />

                  </div>

                  {/* COPYRIGHT WATERMARK */}
                  <span
                    data-portfolio-watermark="true"
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-md bg-[#210C12]/45 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/90"
                  >
                    {COPYRIGHT}
                  </span>

                </div>

                {/* PROJECT INFORMATION */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.65,
                    delay:
                      (index % 3) * 0.08 + 0.15,
                    ease: smoothEase,
                  }}
                  className="flex w-full flex-1 flex-col bg-white p-4 sm:p-6"
                >

                  <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-[#A45D69] sm:text-xs">
                    {project.category}
                  </p>

                  <h3
                    className="text-xl leading-snug text-[#681523] sm:text-2xl"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-auto flex items-center gap-2 pt-4 text-[11px] font-medium uppercase tracking-widest text-[#A45D69] sm:pt-5 sm:text-xs">
                    Original Logo Concept

                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                    />
                  </p>

                </motion.div>

              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
