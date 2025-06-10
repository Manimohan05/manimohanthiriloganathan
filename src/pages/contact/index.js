import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    variant: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_8m9dprk",
        "template_d6jk5jn",
        templateParams,
        "Qobbk7nopLVJXnDil"
      )
      .then(
        () => {
          setAlert({
            show: true,
            variant: "success",
            message: "Message sent successfully!",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setAlert({
            show: true,
            variant: "danger",
            message: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <Container>
        <h2 className="section_title text-center mb-5">Contact Me</h2>
        <Row className="contact_container justify-content-center">
          <Col md={5} className="mb-4">
            <div className="contact_card">
              <h5 className="contact-content">Email</h5>
              <p className="contact-content">manimohan517@gmail.com</p>
              <a
                href="mailto:manimohan517@gmail.com"
                className="contact_button"
              >
                Send Email
              </a>
            </div>

            <div className="contact_card">
              <h5 className="contact-content">LinkedIn</h5>
              <p className="contact-content">Manimohan Thiriloganathan</p>
              <a
                href="https://www.linkedin.com/in/tmanimohan"
                className="contact_button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </div>

            <div className="contact_card">
              <h5 className="contact-content">WhatsApp</h5>
              <p className="contact-content">+94 77 178 1833</p>
              <a
                href="https://api.whatsapp.com/send?phone=94771781833&text=Hello, more information!"
                className="contact_button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Now
              </a>
            </div>
          </Col>

          <Col md={7}>
            {alert.show && (
              <Alert
                variant={alert.variant}
                onClose={() => setAlert({ ...alert, show: false })}
                dismissible
              >
                {alert.message}
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="contact_form">
              <div className="contact_form-div mb-4">
                <label htmlFor="name" className="contact_form-tag">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact_form-input"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="contact_form-div mb-4">
                <label htmlFor="email" className="contact_form-tag">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact_form-input"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="contact_form-div mb-4">
                <label htmlFor="message" className="contact_form-tag">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact_form-input"
                  placeholder="Your Message"
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="button button--flex">
                Send Message
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
