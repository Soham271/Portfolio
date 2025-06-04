import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import axios from "axios";

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

    // Validations
    if (!name) return setErrMsg("Name is required!");
    if (!phoneNumber) return setErrMsg("Phone number is required!");
    if (!email) return setErrMsg("Email is required!");
    if (!emailValidation(email))
      return setErrMsg("Please enter a valid email!");
    if (!subject) return setErrMsg("Subject is required!");
    if (!message) return setErrMsg("Message is required!");

    // Send data
    try {
      const response = await axios.post(
        "http://localhost:3004/api/v1/create",
        form,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response:", response.data);
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
    } catch (err) {
      console.error("Axios Error:", err);
      setErrMsg("Failed to send message. Please try again.");
      setSuccessMsg("");
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b border-gray-700">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Get in Touch" />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <ContactLeft />
          <div className="w-full lg:w-[60%] bg-gray-800 rounded-lg p-6 lg:p-8 shadowOne">
            <form className="flex flex-col gap-6" onSubmit={handleSend}>
              {errMsg && (
                <p className="py-3 bg-gray-700 text-orange-500 text-center text-base font-medium rounded-lg shadowOne animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gray-700 text-green-500 text-center text-base font-medium rounded-lg shadowOne animate-bounce">
                  {successMsg}
                </p>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-300 uppercase font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`contactInput ${
                      errMsg === "Name is required!" && "border-orange-500"
                    }`}
                    aria-label="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-300 uppercase font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className={`contactInput ${
                      errMsg === "Phone number is required!" &&
                      "border-orange-500"
                    }`}
                    aria-label="Phone number"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 uppercase font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`contactInput ${
                    errMsg.includes("Email") && "border-orange-500"
                  }`}
                  aria-label="Email address"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 uppercase font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`contactInput ${
                    errMsg === "Subject is required!" && "border-orange-500"
                  }`}
                  aria-label="Subject"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 uppercase font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`contactTextArea ${
                    errMsg === "Message is required!" && "border-orange-500"
                  }`}
                  rows="6"
                  aria-label="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                aria-label="Send message"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
