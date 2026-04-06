"use client";

import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

const ContactsInfo = () => {
  const [from_name, setFromName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailContent = {
    from_name,
    email,
    title,
    message,
  };

  const submitInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    emailjs
      .send(
        "service_4k6zmce",
        "template_1zbgna8",
        emailContent,
        "WWYO6LLp_c_HB7zMU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setSuccess(true);
          // clear form
          setFromName("");
          setEmail("");
          setTitle("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setSending(false);
          // you can show a UI error here
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  // Create a portal toast appended to document.body when `success` becomes true.
  useEffect(() => {
    if (!success) return;
    const node = document.createElement("div");
    node.id = "contact-success-portal";
    Object.assign(node.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      background: "#e6ffed",
      color: "#0b6b2d",
      padding: "12px 16px",
      borderRadius: "6px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
      zIndex: "2147483647",
      fontFamily: "inherit",
    });
    node.textContent = "Message sent — thanks!";
    document.body.appendChild(node);
    const t = window.setTimeout(() => {
      node.remove();
      // reset success flag so UI inside component can hide too
      setSuccess(false);
    }, 4000);
    return () => {
      clearTimeout(t);
      node.remove();
    };
  }, [success]);

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
          <form id="cform" method="post" onSubmit={submitInfo}>
            <div className="group-val">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={from_name}
                onChange={(e) => setFromName(e.target.value)}
                required
              />
            </div>
            <div className="group-val">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="group-val ct-gr">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="group-val ct-gr">
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn fill"
              data-text="Send Message"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
          {success && (
            <div className="alert-success" style={{ display: "block" }}>
              <p>
                Thanks, your message is sent successfully. I will contact you
                shortly!
              </p>
            </div>
          )}
          {/* Toast rendered via portal to document.body when success=true */}
        </div>
      </div>
    </div>
  );
};
export default ContactsInfo;
