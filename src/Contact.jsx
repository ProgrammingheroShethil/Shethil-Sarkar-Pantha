import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2jzijbo",
        "template_npzmdhi",
        form.current,
        "qwhT3LIKPuivbfQ4U"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message!");
      });
  };

  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "shethilsarkarpantha@gmail.com",
      link: "mailto:shethilsarkarpantha@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+880 1783-383405",
      link: "tel:+8801783383405",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "ProgrammingheroShethil",
      link: "https://github.com/ProgrammingheroShethil",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Shethil Sarker Pantha",
      link: "https://www.linkedin.com/in/shethil-sarker-pantha-738539243/",
    },
    {
      icon: <FaFacebook />,
      title: "Facebook",
      value: "Shethil Sarker Pantha",
      link: "https://www.facebook.com/shethil.sarker.pantha",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      value: "@shethilsarker",
      link: "https://www.instagram.com/shethilsarker/?hl=en",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4">
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contacts.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-3xl text-blue-400">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2 break-all">
                  {item.value}
                </p>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6">
              Send Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;