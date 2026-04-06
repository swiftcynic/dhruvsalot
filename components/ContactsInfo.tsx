"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

const ContactsInfo = () => {
  const [from_name, setFromName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const emailContent = {
    from_name,
    email,
    title,
    message,
  };

  const submitInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

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
          toast.success("Message sent successfully!", { position: "top-center" });
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
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  // Create a portal toast appended to document.body when `success` becomes true.

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
            <p>North Parramatta, New South Wales, Australia, 2142</p>
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
          
        </div>
      </div>
    </div>
  );
};
export default ContactsInfo;
