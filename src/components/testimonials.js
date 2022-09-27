import styles from "../../styles/Home.module.scss";

export default function Testimonials() {
  return (
    <main id="testimonials" className={styles.main_testimonials}>
      <div className={styles.testimonials_title_container}>
        <h3>What my clients say about me</h3>
      </div>

      <div className={styles.testimonials_cards_container}>
        <div className={styles.card_container_testimonials}>
          <h2>&ldquo;</h2>
          <p>
            I hired Ana to help me apply for Nicaraguan residency. She made the
            process easy,her understanding and knowledge of the system was
            pivotal in making the process as painless as possible.She knew every
            step of the way and her excellent communication skills proved
            invaluable. Ana far exceeded all my expectations. Kevin Malone
          </p>
          <img alt="img" src={"/user1.jpg"} />
        </div>

        <div className={styles.card_container_testimonials}>
          <h2>&ldquo;</h2>
          <p>
            Ana has helped me with every step of my business - with the land
            purchase, registration, business permits, setting up payroll, INSS -
            everything! She makes owning and operating a business in Nicaragua
            so much easier. I recommend her to everyone I meet who is buying
            land or starting a business in Nicaragua. Ali Kearney. Cabañas Suyo
          </p>
          <img alt="img" src={"/user2.png"} />
        </div>

        <div className={styles.card_container_testimonials}>
          <h2>&ldquo;</h2>
          <p></p>
          <img alt="img" src={"/self1.jpg"} />
        </div>
      </div>
    </main>
  );
}
