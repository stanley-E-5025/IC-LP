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
          <p>I highly recommend Ana if you are looking to purchase property in Nicaragua. Her clear communication,responsiveness and honesty made the process easy and stress free for me. As an expat living in Nicaragua I find very valuable the fact that she understands both cultures very well.Lauren D</p>
          <img alt="img" src="https://images.unsplash.com/photo-1601562219653-0f16522227b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" />
        </div>
      </div>
    </main>
  );
}
