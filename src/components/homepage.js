import styles from "../../styles/Home.module.scss";
export default function HomePage() {
  return (
    <main id="home"className={styles.main}>

      <div className={styles.home_page_container}>
        <div className={styles.home_page_intro}>
          <p>
            Business and Legal Solutions
            <br />
            for Tola coast investors
          </p>
        </div>

        <div className={styles.home_page_learn_more}>
          <p>

            <a href="#about">Learn more</a>
          </p>
        </div>
      </div>
    </main>
  );
}
