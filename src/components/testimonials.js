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
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño visual antes de insertar el texto final.
          </p>
          <img alt="img" src={"/self1.jpg"} />
        </div>

        <div className={styles.card_container_testimonials}>
          <h2>&ldquo;</h2>
          <p>
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño visual antes de insertar el texto final.
          </p>
          <img alt="img" src={"/self1.jpg"} />
        </div>

        <div className={styles.card_container_testimonials}>
          <h2>&ldquo;</h2>
          <p>
            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
            en demostraciones de tipografías o de borradores de diseño para
            probar el diseño visual antes de insertar el texto final.
          </p>
          <img alt="img" src={"/self1.jpg"} />
        </div>
      </div>
    </main>
  );
}
