import styles from "../../styles/Home.module.scss";

export default function Contact() {
  function HandleSubmit(e) {
    e.preventDefault();

    alert("?");
  }
  return (
    <main id="contact" className={styles.main_contact}>
      <div className={styles.contact_container}>
        <img alt="img" src={"/contact1.jpg"} />

        <div className={styles.contact_content_container}>
          <div className={styles.contact_info_contaner}>
            <h1>Contact Ana</h1>
            <span>
              <strong>BY EMAIL</strong>
            </span>
            <p>integralconsultingnica@gmail.com</p>
            <span>
              <strong>ON SOCIAL</strong>
            </span>

            <div className={styles.contact_icons}>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <span>
              <strong>BY FORM</strong>
            </span>
            <p>
              Use the contoct form to send me
              <br /> a messoge. I&apos;ll get back to you
              <br />
              within 24 business hours.
            </p>

            <span>
              <strong>TIME</strong>
            </span>
            <p>Central Standard Time CST</p>
          </div>

          <div className={styles.contact_form_container}>
            <form className={styles.contact_form}>
              <input placeholder="your name" />
              <input placeholder="Email" />
              <input placeholder="subject" />
              <input placeholder="message" />
              <button onClick={HandleSubmit}>send</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
