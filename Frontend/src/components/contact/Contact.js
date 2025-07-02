import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

import emailjs from "@emailjs/browser";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const { name, phoneNumber, email, subject, message } = form;

    if (!name) return setErrMsg("Name is required!");
    if (!phoneNumber) return setErrMsg("Phone number is required!");
    if (!email) return setErrMsg("Email is required!");
    if (!emailValidation(email))
      return setErrMsg("Please enter a valid email!");
    if (!subject) return setErrMsg("Subject is required!");
    if (!message) return setErrMsg("Message is required!");

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        phone: phoneNumber,
        subject,
        message,
      };

      const result = await emailjs.send(
        "service_511dutx",
        "template_ealfrph",
        templateParams,
        "h8k_BVsdLvnc0_mqI"
      );

      console.log("EmailJS success:", result.text);
      setSuccessMsg(
        `Thank you, ${name}! Your message has been sent successfully!`
      );
      setErrMsg("");
      setForm({
        name: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrMsg("Failed to send message. Please try again.");
      setSuccessMsg("");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          className="flex justify-center items-center text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Title
              title="CONTACT"
              des="Get in Touch"
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x"
            />
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <ContactLeft />
          <motion.div
            className="w-full lg:w-[60%] bg-gray-800/50 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-gray-700/50 shadow-lg shadow-purple-500/20 hover:border-purple-500/50 transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="flex flex-col gap-6" onSubmit={handleSend}>
              {errMsg && (
                <motion.p
                  className="py-3 bg-gray-700/50 backdrop-blur-md text-orange-500 text-center text-base font-medium rounded-lg border border-orange-500/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {errMsg}
                </motion.p>
              )}
              {successMsg && (
                <motion.p
                  className="py-3 bg-gray-700/50 backdrop-blur-md text-green-500 text-center text-base font-medium rounded-lg border border-green-500/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {successMsg}
                </motion.p>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 uppercase font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full p-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300 ${
                      errMsg === "Name is required!" && "border-orange-500"
                    }`}
                    aria-label="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 uppercase font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className={`w-full p-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300 ${
                      errMsg === "Phone number is required!" &&
                      "border-orange-500"
                    }`}
                    aria-label="Phone number"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300 ${
                    errMsg.includes("Email") && "border-orange-500"
                  }`}
                  aria-label="Email address"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300 ${
                    errMsg === "Subject is required!" && "border-orange-500"
                  }`}
                  aria-label="Subject"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none ${
                    errMsg === "Message is required!" && "border-orange-500"
                  }`}
                  rows="6"
                  aria-label="Message"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Send message"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #2563eb);
        }
      `}</style>
    </section>
  );
};

export default Contact;
