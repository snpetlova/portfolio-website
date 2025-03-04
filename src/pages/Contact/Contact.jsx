import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import githubWhite from "../../assets/github-icon.png";
import githubBlack from "../../assets/github-icon-black.png";
import behanceWhite from "../../assets/behance-icon-white.png";
import behanceBlack from "../../assets/behance-icon.png";
import linkedinWhite from "../../assets/linkedin-icon.png";
import linkedinBlack from "../../assets/linkedin-icon-black.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => setStatus("Failed to send message. Try again."));
  };
  return (
    <div className="contactContainer">
      <h2 className="contactTitle">Get in touch.</h2>
      <p className="contactDescription">
        Do you fancy saying hi to me or you want to get started with your
        project and you need my help? Feel free to contact me.
      </p>
      {status && (
        <p
          className={`statusMessage ${
            status.includes("successfully") ? "success" : "error"
          }`}
        >
          {status}
        </p>
      )}
      <form onSubmit={handleSubmit} className="contactForm">
        <input
          type="text"
          name="name"
          className="contactFormInput"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="contactFormInput"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          className="contactFormInput"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          className="contactFormMessage"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="contactBtn">
          Send Message
        </button>
      </form>
    </div>
  );
}
