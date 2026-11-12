
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";

const assetFiles = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

function asset(filename: string): string {
  const match = Object.entries(assetFiles).find(
    ([path]) =>
      path.split("/").pop()?.toLowerCase() ===
      filename.toLowerCase()
  );

  return match?.[1] ?? "";
}

type GalleryImage = {
  src: string;
  title: string;
};

type SocialProject = {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  cover: string;
  images: GalleryImage[];
};

const projects: SocialProject[] = [
  {
    id: "machewe-firas",
    title: "Machewe Firas",
    category: "RESTAURANT & FOOD",
    subtitle: "Social Media Campaign",
    description:
      "A collection of promotional social media designs showcasing grilled specialties, restaurant offerings, and seasonal campaigns.",
    cover: asset("firas-cover.jpg"),
    images: [
      {
        src: asset("firas-grill-post.png"),
        title: "Grill Promotion",
      },
      {
        src: asset("firas-sandwich-post.png"),
        title: "Sandwich Promotion",
      },
      {
        src: asset("firas-chicken-post.png"),
        title: "Chicken Promotion",
      },
      {
        src: asset("firas-christmas-42.png"),
        title: "Christmas Campaign",
      },
      {
        src: asset("firas-christmas-36.png"),
        title: "Seasonal Promotion",
      },
    ],
  },
  {
    id: "machewe-firas-menu",
    title: "Machewe Firas",
    category: "PRODUCT LAUNCH & PROMOTION",
    subtitle: "New Menu Launch Campaign",
    description:
      "A coordinated series of social media promotions introducing four new menu items, with bold typography, appetizing food imagery, and consistent brand styling.",
    cover: asset("firas-new-menu-cover.png"),
    images: [
      {
        src: asset("firas-chicken-roll-sub.jpeg"),
        title: "Chicken Roll Sub",
      },
      {
        src: asset("firas-kabab-djej.jpeg"),
        title: "Kabab Djej",
      },
      {
        src: asset("firas-hawaii-burger.jpeg"),
        title: "Hawaii Burger",
      },
      {
        src: asset("firas-steak-sub.jpeg"),
        title: "Steak Sub",
      },
    ],
  },
  {
    id: "st-abda",
    title: "St. Abda",
    category: "EVENT & COMMUNITY",
    subtitle: "Jaj 2026 Event Campaign",
    description:
      "A collection of event announcements, concert promotions, schedules, and community celebration designs for St. Abda.",
    cover: asset("st-abda-event-cover.png"),
    images: [
      {
        src: asset("st-abda-event-schedule.jpeg"),
        title: "Event Schedule",
      },
      {
        src: asset("st-abda-myrna-concert.jpeg"),
        title: "Myrna Concert",
      },
      {
        src: asset("st-abda-spiritual-day.jpeg"),
        title: "Spiritual Day",
      },
      {
        src: asset("st-abda-event-update.jpeg"),
        title: "Event Update",
      },
      {
        src: asset("st-abda-walid-kanaan.jpeg"),
        title: "Walid Kanaan",
      },
      {
        src: asset("st-abda-fares-iskandar.jpeg"),
        title: "Fares Iskandar",
      },
      {
        src: asset("st-abda-kermesse.jpeg"),
        title: "Kermesse",
      },
    ],
  },
];

export function SocialMedia() {
  const [selected, setSelected] =
    useState<SocialProject | null>(null);

  const [zoomed, setZoomed] =
    useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!selected) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (zoomed) {
          setZoomed(null);
        } else {
          setSelected(null);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, zoomed]);

  const closeProject = () => {
    setZoomed(null);
    setSelected(null);
  };

  return (
    <>
      <section
        id="social-media"
        className="bg-[#FFF7F2] px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A45D69]">
              Creative Portfolio
            </p>

            <h2
              className="text-4xl italic text-[#850F25] sm:text-6xl"
              style={{
                fontFamily:
                  "'Bodoni Moda', Georgia, serif",
              }}
            >
              Social Media Design
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#704B50]">
              Creative social media campaigns,
              promotional content, and event designs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  setSelected(project);
                  setZoomed(null);
                }}
                className="group overflow-hidden rounded-xl border border-[#E8D2CF] bg-[#F8EEE9] text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#850F25]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={project.cover}
                    alt={`${project.title} - ${project.subtitle}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-3 top-3 rounded-full bg-white p-2 text-[#681523] shadow-sm">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="p-5">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-[#A45D69]">
                    {project.category}
                  </p>

                  <h3
                    className="text-xl text-[#681523]"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#850F25]">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 min-h-[60px] text-xs leading-6 text-[#704B50]">
                    {project.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#850F25]">
                    View Campaign
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {typeof document !== "undefined" &&
        selected &&
        createPortal(
          <div
            className="fixed inset-0 z-[10020] flex items-center justify-center bg-[#210C12]/90 p-0 sm:p-5"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeProject();
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} campaign`}
              className="relative flex h-[100dvh] w-full max-w-6xl flex-col overflow-hidden bg-[#FFF9F0] sm:h-[94dvh] sm:rounded-2xl"
            >
              <button
                type="button"
                onClick={closeProject}
                aria-label="Close campaign"
                className="absolute right-4 top-4 z-30 rounded-full bg-[#681523] p-3 text-white"
              >
                <X size={20} />
              </button>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-12 pt-16 sm:px-10">
                <header className="mb-10 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#A45D69]">
                    {selected.category}
                  </p>

                  <h2
                    className="mt-3 text-4xl text-[#681523] sm:text-6xl"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    {selected.title}
                  </h2>

                  <p className="mt-3 text-sm text-[#850F25]">
                    {selected.subtitle}
                  </p>

                  <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#704B50]">
                    {selected.description}
                  </p>

                  <img
                    src={selected.cover}
                    alt={`${selected.title} campaign cover`}
                    className="mx-auto mt-8 max-h-[420px] w-full rounded-xl object-contain"
                  />
                </header>

                <div className="mx-auto max-w-5xl">
                  <h3
                    className="mb-6 border-b border-[#E8D2CF] pb-4 text-3xl text-[#681523]"
                    style={{
                      fontFamily:
                        "'Bodoni Moda', Georgia, serif",
                    }}
                  >
                    Campaign Gallery
                  </h3>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {selected.images.map((image, index) => (
                      <button
                        key={`${image.src}-${index}`}
                        type="button"
                        onClick={() => setZoomed(image)}
                        className="overflow-hidden rounded-xl border border-[#E8D2CF] bg-white text-left shadow-sm transition-shadow hover:shadow-md"
                      >
                        <div className="flex h-[280px] items-center justify-center bg-[#F7F1EC] p-4 sm:h-[340px]">
                          <img
                            src={image.src}
                            alt={image.title}
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <p className="px-4 py-3 text-center text-sm text-[#681523]">
                          {image.title}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {zoomed && (
              <div
                role="dialog"
                aria-modal="true"
                aria-label={zoomed.title}
                className="absolute inset-0 z-40 flex items-center justify-center bg-[#210C12]/95 p-5"
                onClick={() => setZoomed(null)}
              >
                <button
                  type="button"
                  onClick={() => setZoomed(null)}
                  aria-label="Close enlarged image"
                  className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#681523]"
                >
                  <X size={20} />
                </button>

                <img
                  src={zoomed.src}
                  alt={zoomed.title}
                  className="max-h-[88vh] max-w-full object-contain"
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                />
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}

export default SocialMedia;
