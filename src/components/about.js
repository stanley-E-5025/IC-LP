import styles from "../../styles/Home.module.scss";

export default function About() {
  return (
    <main className={styles.main_about}>
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
        <h1>Welcome! My name is Ana!</h1>
        <p>
          I’m Nicaraguan and have been living in the Tola area for over 12
          years. I have a Bachelor0s Degree in Business Administration and
          Postgrad Degree in Corporate Law. I am a passionate advocate for
          community programs and empowering others to thrive.
        </p>

        <strong>How Can I help you? </strong>

        <p>
          I started Integral Consulting in 2016, assisting entrepreneurs and
          property owners in the Tola coastal area of Nicaragua since then. I
          provide; as my clients said ‘‘Peace of mind’’ to all their business
          and legal needs in Nicaragua. My mission is to provide you services
          that strategy yourself to an effective use of your resources so you
          are allow to focus on your goal living in Nicaragua.{" "}
        </p>
      </div>
    </main>
  );
}
