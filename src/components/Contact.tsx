
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
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
      `mailto:designer.rc@outlook.com?subject=${subject}&body=${body}`;
  };

  const inputStyle =
    "w-full rounded-xl border border-white/25 " +
    "bg-white/10 px-5 py-4 text-white " +
    "placeholder:text-white/60 " +
    "focus:border-white focus:outline-none " +
    "transition-colors";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#681523] px-6 py-24 text-white"
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full border border-white/15" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full border border-white/15" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#F0C9CB]">
            HAVE A PROJECT IN MIND?
          </p>

          <h2
            className="text-5xl md:text-7xl"
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

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="mb-6 text-4xl"
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
              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail size={24} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="mb-1 text-sm text-white/60">
                    Email
                  </p>
                  <a
                    href="mailto:designer.rc@outlook.com"
                    className="break-all text-lg hover:text-[#F0C9CB]"
                  >
                    designer.rc@outlook.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone size={24} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="mb-1 text-sm text-white/60">
                    Phone
                  </p>
                  <a
                    href="tel:+96176355977"
                    className="text-lg hover:text-[#F0C9CB]"
                  >
                    +961 76 355 977
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
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
              </div>
            </div>

            <div className="mt-12">
              <a
                href="mailto:designer.rc@outlook.com"
                className="inline-flex items-center gap-3 rounded-full bg-[#FFF7F2] px-7 py-4 font-medium text-[#681523] transition-colors hover:bg-[#F0C9CB]"
              >
                Email Me
                <ArrowUpRight size={19} />
              </a>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/20 bg-white/5 p-6 md:p-9"
          >
            <h3
              className="mb-7 text-3xl"
              style={{
                fontFamily: "'Bodoni Moda', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Send a <span className="italic">Message</span>
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={inputStyle}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className={inputStyle}
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className={inputStyle}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className={`${inputStyle} resize-none`}
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#FFF7F2] px-7 py-4 font-medium text-[#681523] transition-colors hover:bg-[#F0C9CB]"
              >
                <Send size={19} />
                Prepare Email
              </button>

              <p className="text-center text-xs leading-relaxed text-white/60">
                This opens your email app with the
                message ready to send.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-white/20 pt-10 text-center">
          <p
            className="text-2xl italic text-[#F0C9CB] md:text-3xl"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
            }}
          >
            Let's create something beautiful together.
          </p>
        </div>
      </div>
    </section>
  );
}
