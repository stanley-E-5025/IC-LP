import styles from "../../styles/Home.module.scss";

export default function About() {
  return (
    <main id="about" className={styles.main_about}>
      <div className={styles.about_image_container}>
        <div className={styles.first_div}>
          <img
            src="https://images.unsplash.com/photo-1446038202205-1c96430dbdab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80"
            alt="landscape"
            className={styles.about_second_img}
          />
        </div>
        <div className={styles.second_div}>
          <img src="/face.jpg" alt="me" className={styles.about_first_img} />
        </div>
      </div>

      <div className={styles.about_text_container}>
        <h1>Welcome! My name is Ana.</h1>
        <p>
          I&apos;m Nicaraguan and have been living in the Tola area for over 12
          years. <br />I have a Bachelor&apos;s Degree in Business Administration and
          Postgrad Degree
          <br /> in Corporate Law. I am a passionate advocate for community
          programs and <br />
          empowering others to thrive.
        </p>
        <p>
          <strong>How Can I help you?</strong>
        </p>
        <p>
          I started Integral Consulting in 2016, assisting entrepreneurs and
          property <br />
          owners in the Tola coastal area of Nicaragua since. I provide as
          my clients <br />
          say; &ldquo;Peace of mind&ldquo; to all their business and legal needs
          in Nicaragua.
          <br /> My mission is to provide you services that strategy yourself to
          an effective use of <br />
          your resources so you can focus on your goals living in
          Nicaragua. Honesty,
          <br />
          Reliability and Clear communication are the main values of my
          business.
        </p>

        <span>
          <a href="#services">My services</a>
        </span>
      </div>
    </main>
  );
}
