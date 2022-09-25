import { useState } from "react";
import Router from "next/router";

import styles from "../../styles/Home.module.scss";

export default function Contact() {
  const [form, setForm] = useState({
    email: "integralconsultingnica@gmail.com",
    subject: "",
    message: "",
    name: "",
  });

  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Router.push(
      `mailto:${form.email}?subject=${form.subject}&body=${form.message}`
    );
  };

  return (
    <main id="contact" className={styles.main_contact}>
      <div className={styles.contact_container}>
        <img alt="img" src={"/contact1.jpg"} />

        <div className={styles.contact_content_container}>
          <div className={styles.contact_info_contaner}>
            <h1>Contact Ana</h1>
            <span className={styles.custom_span2}>
              <strong>BY EMAIL</strong>
            </span>
            <p>integralconsultingnica@gmail.com</p>
            <span>
              <strong>ON SOCIAL</strong>
            </span>

            <div className={styles.contact_icons}>
              <a href="https://api.whatsapp.com/send?phone=50588101491&text=">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <span>
              <strong>BY FORM</strong>
            </span>
            <p>
              Use the contact form to send me
              <br /> a message. I&apos;ll get back to you
              <br />
              within 24 business hours.
            </p>

            <span className={styles.custom_span}>
              <strong>HOURS</strong>
            </span>
            <p>Mon-Fri, 8am-4pm GMT-6</p>
          </div>

          <div className={styles.contact_form_container}>
            <form onSubmit={handleSubmit} className={styles.contact_form}>
              <input
                onChange={handleInputChange}
                placeholder="your name"
                name="name"
                maxLength={50}
                required={true}
              />
              <input
                onChange={handleInputChange}
                placeholder="subject"
                name="subject"
                maxLength={100}
                required={true}
              />
              <textarea
                onChange={handleInputChange}
                placeholder="message"
                name="message"
                maxLength={500}
                required={true}
              />

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
