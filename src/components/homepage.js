import styles from "../../styles/Home.module.scss";
export default function HomePage() {
  return (
    <main className={styles.main}>

      <div className={styles.home_page_container}>
        <div className={styles.home_page_intro}>
          <p>
            Business and Legal Consulting
            <br />
            for Tola coast investors
          </p>
        </div>

        <div className={styles.home_page_learn_more}>
          <p>Learn more</p>
        </div>
      </div>
    </main>
  );
}
