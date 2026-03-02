import emailjs from "@emailjs/browser";


const ContactsInfo = () => {
  return (
    <div className="section contacts section_" id="section-contacts">
      <div className="content">
        <div className="title">
          <div className="title_inner">Contacts</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-android-phone-portrait" />
            </div>
            <div className="name">Phone</div>
            <p>+61 42 107 6292</p>
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
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="group-val">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="group-val ct-gr">
              <textarea
                name="message"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn fill" data-text="Send Message">
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
