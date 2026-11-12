
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

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#681523] px-4 py-16 text-white sm:px-6 sm:py-24"
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full border border-white/15" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full border border-white/15" />

      <div className="relative mx-auto w-full max-w-7xl min-w-0">

        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#F0C9CB]">
            HAVE A PROJECT IN MIND?
          </p>

          <h2
            className="text-4xl leading-tight sm:text-5xl md:text-7xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
              fontWeight: 400,
            }}
          >
            Let's Create{" "}
            <span className="italic text-[#F0C9CB]">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/80">
            Have an idea or a creative project?
            I'd love to hear about it.
            Let's turn your vision into something beautiful.
          </p>
        </motion.div>

        <div className="grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Contact information */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
            }}
          >
            <h3
              className="mb-6 text-3xl sm:text-4xl"
              style={{
                fontFamily: "'Bodoni Moda', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Get in <span className="italic">Touch</span>
            </h3>

            <p className="mb-10 max-w-md leading-relaxed text-white/75">
              Whether you're looking for a new brand identity,
              logo design, or creative content, I'd love to
              collaborate with you.
            </p>

            <div className="space-y-7">

              {/* Design email */}
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex min-w-0 items-center gap-3 sm:gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-14 sm:w-14">
                  <Mail size={24} strokeWidth={1.5} />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-sm text-white/60">
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

              {/* Personal email */}
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex min-w-0 items-center gap-3 sm:gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-14 sm:w-14">
                  <Mail size={24} strokeWidth={1.5} />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-sm text-white/60">
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

              {/* Phone */}
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex min-w-0 items-center gap-3 sm:gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-14 sm:w-14">
                  <Phone size={24} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="mb-1 text-sm text-white/60">
                    Phone
                  </p>
                  <a
                    href="tel:+96176355977"
                    className="text-base hover:text-[#F0C9CB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
                  >
                    +961 76 355 977
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex min-w-0 items-center gap-3 sm:gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-14 sm:w-14">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="mb-1 text-sm text-white/60">
                    Location
                  </p>
                  <p className="text-lg">
                    Byblos, Lebanon
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social media */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-10"
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
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#F0C9CB] hover:text-[#681523] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Linkedin size={22} />
                </motion.a>
              </div>
            </motion.div>

            {/* Email button */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-10"
            >
              <motion.a
                href="mailto:designer.rc@outlook.com"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, scale: 1.04 }
                }
                className="inline-flex items-center gap-3 rounded-full bg-[#FFF7F2] px-7 py-4 font-medium text-[#681523] transition-colors hover:bg-[#F0C9CB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Email Me
                <ArrowUpRight size={19} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="min-w-0 rounded-3xl border border-white/20 bg-white/5 p-4 sm:p-6 md:p-9"
          >
            <h3
              className="mb-7 text-2xl sm:text-3xl"
              style={{
                fontFamily: "'Bodoni Moda', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Send a <span className="italic">Message</span>
            </h3>

            <form
              onSubmit={handleSubmit}
              className="min-w-0 space-y-5"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                aria-label="Your Name"
                required
                className={inputStyle}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                aria-label="Your Email"
                required
                className={inputStyle}
              />

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

              {/* Choose email recipient */}
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
                  className="block w-full min-w-0 rounded-xl border border-white/25 bg-[#681523] px-4 py-3.5 text-base text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/25 sm:px-5 sm:py-4"
                >
                  <option value="designer.rc@outlook.com">
                    Design Email
                  </option>
                  <option value="cynthiamelky49@gmail.com">
                    Personal Email
                  </option>
                </select>
              </div>

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
                    : { scale: 0.98 }
                }
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#FFF7F2] px-7 py-4 font-medium text-[#681523] transition-colors hover:bg-[#F0C9CB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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

        {/* Bottom statement */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-16 border-t border-white/20 pt-10 text-center sm:mt-20"
        >
          <p
            className="text-xl italic text-[#F0C9CB] sm:text-2xl md:text-3xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
            }}
          >
            Let's create something beautiful together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
