import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.", {
        className: "custom-toast",
        progressClassName: "custom-toast-progress",
      });
      return;
    }

    toast.success("Message sent successfully!", {
      className: "custom-toast",
      progressClassName: "custom-toast-progress",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastClassName="custom-toast"
        progressClassName="custom-toast-progress"
      />
      <div className="contact-card">
        <h2 className="contact-title">Let's get in touch!</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Full Name</label>
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Message</label>
            <textarea
              name="message"
              className="textarea"
              placeholder="Drop your thoughts here!"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn special">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
