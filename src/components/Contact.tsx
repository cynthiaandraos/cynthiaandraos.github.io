
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export function Contact() {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [recipient, setRecipient] = useState(
    "designer.rc@outlook.com"
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || "Portfolio Inquiry"
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `${formData.message}`
    );

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const inputStyle =
    "block w-full min-w-0 rounded-xl border border-white/25 " +
    "bg-white/10 px-4 py-3.5 text-base text-white sm:px-5 sm:py-4 " +
    "placeholder:text-white/60 " +
    "focus:border-white focus:outline-none focus:ring-2 focus:ring-white/25 " +
    "transition-colors";

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  const reveal = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 36,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#681523] px-4 py-12 text-white sm:px-6 sm:py-24"
    >
      {/* DECORATIVE CIRCLES */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full border border-white/15" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full border border-white/15" />

      <div className="relative mx-auto w-full max-w-7xl min-w-0">

        {/* SECTION HEADING */}
        <motion.div
          variants={reveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease: smoothEase,
          }}
          className="mb-9 text-center sm:mb-16"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-[#F0C9CB] sm:mb-4 sm:text-xs sm:tracking-[0.35em]">
            HAVE A PROJECT IN MIND?
          </p>

          <motion.h2
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.1,
              ease: smoothEase,
            }}
            className="text-[clamp(2.3rem,9vw,3rem)] leading-tight sm:text-5xl md:text-7xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
              fontWeight: 400,
            }}
          >
            Let's Create{" "}
            <span className="italic text-[#F0C9CB]">
              Together
            </span>
          </motion.h2>

          <motion.p
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 14 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.18,
              ease: smoothEase,
            }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:mt-6 sm:text-base sm:leading-relaxed"
          >
            Have an idea or a creative project?
            I'd love to hear about it.
            Let's turn your vision into something beautiful.
          </motion.p>
        </motion.div>

        {/* CONTACT GRID */}
        <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">

          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{
              opacity: reduceMotion ? 1 : 0,
              x: reduceMotion ? 0 : -38,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease: smoothEase,
            }}
          >
            <h3
              className="mb-5 text-3xl sm:mb-6 sm:text-4xl"
              style={{
                fontFamily:
                  "'Bodoni Moda', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Get in <span className="italic">Touch</span>
            </h3>

            <p className="mb-7 max-w-md text-sm leading-7 text-white/75 sm:mb-10 sm:text-base sm:leading-relaxed">
              Whether you're looking for a new brand identity,
              logo design, or creative content, I'd love to
              collaborate with you.
            </p>

            <div className="space-y-5 sm:space-y-7">

              {/* DESIGN EMAIL */}
              <motion.div
                variants={reveal}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                }}
                className="flex min-w-0 items-center gap-3 sm:gap-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-white/20 sm:h-14 sm:w-14">
                  <Mail
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs text-white/60 sm:text-sm">
                    Design Email
                  </p>

                  <a
                    href="mailto:designer.rc@outlook.com"
                    className="break-all text-sm hover:text-[#F0C9CB] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
                  >
                    designer.rc@outlook.com
                  </a>
                </div>
              </motion.div>

              {/* PERSONAL EMAIL */}
              <motion.div
                variants={reveal}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : 0.08,
                }}
                className="flex min-w-0 items-center gap-3 sm:gap-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-white/20 sm:h-14 sm:w-14">
                  <Mail
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs text-white/60 sm:text-sm">
                    Personal Email
                  </p>

                  <a
                    href="mailto:cynthiamelky49@gmail.com"
                    className="break-all text-sm hover:text-[#F0C9CB] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
                  >
                    cynthiamelky49@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* PHONE */}
              <motion.div
                variants={reveal}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : 0.12,
                }}
                className="flex min-w-0 items-center gap-3 sm:gap-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-white/20 sm:h-14 sm:w-14">
                  <Phone
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs text-white/60 sm:text-sm">
                    Phone
                  </p>

                  <a
                    href="tel:+96176355977"
                    className="text-sm hover:text-[#F0C9CB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
                  >
                    +961 76 355 977
                  </a>
                </div>
              </motion.div>

              {/* LOCATION */}
              <motion.div
                variants={reveal}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : 0.16,
                }}
                className="flex min-w-0 items-center gap-3 sm:gap-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-white/20 sm:h-14 sm:w-14">
                  <MapPin
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs text-white/60 sm:text-sm">
                    Location
                  </p>

                  <p className="text-base sm:text-lg">
                    Byblos, Lebanon
                  </p>
                </div>
              </motion.div>
            </div>

            {/* SOCIAL MEDIA */}
            <motion.div
              variants={reveal}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
              }}
              className="mt-8 sm:mt-10"
            >
              <p className="mb-4 text-sm text-white/70">
                Find me on social media
              </p>

              <div className="flex items-center justify-center gap-4">
                <motion.a
                  href="https://www.instagram.com/rcd.esign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RC Designer Instagram"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -4, scale: 1.08 }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.95 }
                  }
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F0C9CB] hover:text-[#681523] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Instagram size={22} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/cynthia-melky-3206ab3a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -4, scale: 1.08 }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.95 }
                  }
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F0C9CB] hover:text-[#681523] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Linkedin size={22} />
                </motion.a>
              </div>
            </motion.div>

            {/* EMAIL BUTTON */}
            <motion.div
              variants={reveal}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
              }}
              className="mt-8 sm:mt-10"
            >
              <motion.a
                href="mailto:designer.rc@outlook.com"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, scale: 1.04 }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : { scale: 0.97 }
                }
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#FFF7F2] px-7 py-4 font-medium text-[#681523] transition-colors hover:bg-[#F0C9CB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Email Me
                <ArrowUpRight size={19} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{
              opacity: reduceMotion ? 1 : 0,
              x: reduceMotion ? 0 : 38,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.1,
              ease: smoothEase,
            }}
            className="min-w-0 rounded-3xl border border-white/20 bg-white/5 p-4 sm:p-6 md:p-9"
          >
            <h3
              className="mb-6 text-2xl sm:mb-7 sm:text-3xl"
              style={{
                fontFamily:
                  "'Bodoni Moda', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Send a <span className="italic">Message</span>
            </h3>

            <form
              onSubmit={handleSubmit}
              className="min-w-0 space-y-4 sm:space-y-5"
            >
              {/* NAME */}
              <motion.div
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  y: reduceMotion ? 0 : 22,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.08,
                  ease: smoothEase,
                }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  aria-label="Your Name"
                  autoComplete="name"
                  required
                  className={inputStyle}
                />
              </motion.div>

              {/* EMAIL */}
              <motion.div
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  y: reduceMotion ? 0 : 22,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.14,
                  ease: smoothEase,
                }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  aria-label="Your Email"
                  autoComplete="email"
                  required
                  className={inputStyle}
                />
              </motion.div>

              {/* SUBJECT */}
              <motion.div
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  y: reduceMotion ? 0 : 22,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.2,
                  ease: smoothEase,
                }}
              >
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  aria-label="Subject"
                  required
                  className={inputStyle}
                />
              </motion.div>

              {/* MESSAGE */}
              <motion.div
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  y: reduceMotion ? 0 : 22,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.26,
                  ease: smoothEase,
                }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  aria-label="Your Message"
                  required
                  rows={5}
                  className={`${inputStyle} resize-none`}
                />
              </motion.div>

              {/* EMAIL RECIPIENT */}
              <div>
                <label
                  htmlFor="contact-recipient"
                  className="mb-2 block text-sm text-white/80"
                >
                  Send your message to
                </label>

                <select
                  id="contact-recipient"
                  value={recipient}
                  onChange={(e) =>
                    setRecipient(e.target.value)
                  }
                  className="block min-h-12 w-full min-w-0 rounded-xl border border-white/25 bg-[#681523] px-4 py-3.5 text-base text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/25 sm:px-5 sm:py-4"
                >
                  <option value="designer.rc@outlook.com">
                    Design Email
                  </option>
                  <option value="cynthiamelky49@gmail.com">
                    Personal Email
                  </option>
                </select>
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.02 }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : { scale: 0.97 }
                }
                className="flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#FFF7F2] px-7 py-4 font-medium text-[#681523] transition-colors hover:bg-[#F0C9CB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Send size={19} />
                Prepare Email
              </motion.button>

              <p className="text-center text-xs leading-relaxed text-white/60">
                This opens your email app with the
                message ready to send. Please click Send
                in your email app to complete your message.
              </p>
            </form>
          </motion.div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          variants={reveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease: smoothEase,
          }}
          className="mt-12 border-t border-white/20 pt-8 text-center sm:mt-20 sm:pt-10"
        >
          <p
            className="text-lg italic leading-relaxed text-[#F0C9CB] sm:text-2xl md:text-3xl"
            style={{
              fontFamily:
                "'Bodoni Moda', Georgia, serif",
            }}
          >
            Let's create something beautiful together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
