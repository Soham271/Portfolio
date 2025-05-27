import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (name === "") {
      setErrMsg("Name is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Email is required!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please enter a valid email!");
    } else if (subject === "") {
      setErrMsg("Subject is required!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      try {
        const data = { name, phoneNumber, email, subject, message };
        const response = await axios.post(
          "http://localhost:3004/api/v1/create",
          data,
          { headers: { "Content-Type": "application/json" } }
        );
        console.log("✅ Response:", response.data);
        setSuccessMsg(`Thank you, ${name}! Your message has been sent successfully!`);
        setErrMsg("");
        setName("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      } catch (err) {
        console.error("❌ Axios Error:", err);
        setErrMsg("Failed to send message. Please try again.");
      }
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-gray-700">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Get in Touch" />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <ContactLeft />
          <div className="w-full lg:w-[60%] bg-gray-800 rounded-lg p-6 lg:p-8 shadowOne">
            <form className="flex flex-col gap-6">
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
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={`contactInput ${errMsg === "Name is required!" && "border-orange-500"}`}
                    type="text"
                    aria-label="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-300 uppercase font-medium">
                    Phone Number
                  </label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`contactInput ${errMsg === "Phone number is required!" && "border-orange-500"}`}
                    type="tel"
                    aria-label="Phone number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 uppercase font-medium">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`contactInput ${errMsg.includes("Email") && "border-orange-500"}`}
                  type="email"
                  aria-label="Email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 uppercase font-medium">
                  Subject
                </label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`contactInput ${errMsg === "Subject is required!" && "border-orange-500"}`}
                  type="text"
                  aria-label="Subject"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 uppercase font-medium">
                  Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`contactTextArea ${errMsg === "Message is required!" && "border-orange-500"}`}
                  cols="30"
                  rows="6"
                  aria-label="Message"
                ></textarea>
              </div>
              <button
                onClick={handleSend}
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
