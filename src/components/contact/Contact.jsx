import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import message_sent from "../../assets/animations/message_sent.json";
import error from "../../assets/animations/error.json";
import contact_us from "../../assets/animations/contact_us.json";
import "./contact.css";
export default function Contact() {
  const form = useRef(null);
  const [formFeedback, setFormFeedback] = useState({
    isSending: false,
    isSuccessful: false,
    isError: false,
    error: "",
  });
  const handleSendEmail = async (e) => {
    e.preventDefault();
    setFormFeedback((prev) => {
      const _formFeedback = { ...prev };
      _formFeedback.isSending = true;
      return _formFeedback;
    });
    try {
      await emailjs.sendForm(
        "Service ID",
        "Template ID",
        form.current,
        "Public ID"
      );
      setFormFeedback((prev) => {
        const _formFeedback = { ...prev };
        _formFeedback.isSuccessful = true;
        return _formFeedback;
      });
      setTimeout(() => {
        setFormFeedback((prev) => {
          const _formFeedback = { ...prev };
          _formFeedback.isSuccessful = false;
          return _formFeedback;
        });
      }, 3000);
    } catch (error) {
      setFormFeedback((prev) => {
        const _formFeedback = { ...prev };
        _formFeedback.isError = true;
        return _formFeedback;
      });
      setTimeout(() => {
        setFormFeedback((prev) => {
          const _formFeedback = { ...prev };
          _formFeedback.isError = false;
          return _formFeedback;
        });
      }, 3000);
    } finally {
      setFormFeedback((prev) => {
        const _formFeedback = { ...prev };
        _formFeedback.isSending = false;
        return _formFeedback;
      });
      form.current.reset();
    }
  };
  return (
    <section id="contact" className="contact">
      <h1 className="title">
        <span className="icon-envelope" />
        Contact me
      </h1>
      <p className="sub-title">
        Let’s connect! Feel free to reach out, I’m always open to new
        opportunities and conversations
      </p>
      <div className="flex contact-wrapper">
        <form ref={form} className="left-section" onSubmit={handleSendEmail}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" autoComplete="off" required />
          </div>
          <button className="submit" disabled={formFeedback.isSending}>
            {formFeedback.isSending ? "Sending" : "Send"}
          </button>
          {formFeedback.isSuccessful && (
            <div className="form-feedback">
              <Lottie
                loop={false}
                className="contact-animation"
                animationData={message_sent}
              />
              Your message has been sent successfully
            </div>
          )}
          {formFeedback.isError && (
            <div className="form-feedback">
              <Lottie
                loop={false}
                className="contact-animation"
                animationData={error}
              />
              Something went wrong, please try again later
            </div>
          )}
        </form>
        <div className="right-section animation">
          <Lottie
            loop={false}
            className="animation-contact-us"
            animationData={contact_us}
          />
        </div>
      </div>
    </section>
  );
}
