
export function About() {
  return (
    <section
      id="about"
      className="bg-[#FFF7F2] px-6 py-24 text-[#681523]"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#A45D69]">
          01 / ABOUT ME
        </p>

        <h2
          className="mb-10 text-5xl leading-tight md:text-7xl"
          style={{
            fontFamily: "'Bodoni Moda', Georgia, serif",
            fontWeight: 400
          }}
        >
          A little about me.
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xl leading-relaxed md:text-2xl">
              I'm Cynthia Andraos, a graphic designer
              passionate about turning creative ideas
              into meaningful visual experiences.
            </p>
          </div>

          <div>
            <p className="mb-8 leading-8 text-[#704B50]">
              I enjoy creating distinctive visual identities,
              memorable branding, thoughtful packaging,
              and engaging social media designs.
              My goal is to combine creativity and
              clear communication in every project.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Brand Identity",
                "Packaging",
                "Social Media",
                "Print Design",
                "Visual Storytelling"
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D9B4B9] px-5 py-3 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="#projects"
              className="mt-10 inline-block bg-[#850F25] px-7 py-4 text-sm font-medium text-white hover:bg-[#65101E]"
            >
              EXPLORE MY WORK →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

