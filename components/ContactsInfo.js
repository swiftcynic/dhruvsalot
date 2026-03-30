"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";


const ContactsInfo = () => {

  const [from_name, setFromName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailContent = {
    from_name,
    email,
    title,
    message
  };

  const submitInfo = (e) => {
    e.preventDefault();
    emailjs
      .send("service_4k6zmce", "template_1zbgna8", emailContent, "WWYO6LLp_c_HB7zMU")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      window.location.reload();
  }

  return (
    <div className="section contacts section_" id="section-contacts">
      <div className="content">
        <div className="title">
          <div className="title_inner">Contact Me</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-android-phone-portrait" />
            </div>
            <div className="name">Phone</div>
            <p>+61 (04) 2107 6292</p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Email</div>
            <p>
              <a href="mailto:dhruv.salot@outlook.com">
                dhruv.salot@outlook.com
              </a>
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-location" />
            </div>
            <div className="name">Address</div>
            <p>Rosehill, New South Wales, Australia, 2142</p>
          </div>
        </div>
        <div className="contact_form">
          <form id="cform" method="post">
            <div className="group-val">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setFromName(e.target.value)}
                required
              />
            </div>
            <div className="group-val">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="group-val ct-gr">
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="group-val ct-gr">
              <textarea
                name="message"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn fill"
              data-text="Send Message"
              onClick={submitInfo}
            >
              Send Message
            </button>
          </form>
          <div className="alert-success">
            <p>
              Thanks, your message is sent successfully. We will contact you
              shortly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactsInfo;
