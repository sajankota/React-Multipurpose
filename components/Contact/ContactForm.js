import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import GoogleMap from "./GoogleMap";
import Link from "next/link";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <span className="sub-title">Contact with us</span>
            <h2>
              Have Any Questions? <br />
              Le&apos;s Talk!
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={contact.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          value={contact.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Subject</label>
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          value={contact.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          name="number"
                          className="form-control"
                          value={contact.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Message...</label>
                        <textarea
                          name="text"
                          cols="30"
                          rows="6"
                          className="form-control"
                          value={contact.text}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkme"
                        />
                        <label className="form-check-label" htmlFor="checkme">
                          Accept{" "}
                          <Link href="/terms-conditions">
                            <a>Terms of Services</a>
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                          </Link>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <button
                        type="submit"
                        className="btn-style-one red-light-color"
                      >
                        Send Message <i className="bx bx-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
