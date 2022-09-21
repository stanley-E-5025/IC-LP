import styles from "../styles/Home.module.scss";
import NavBar from "../src/common/navbar";
import HomePage from "../src/components/homepage";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <footer className={styles.footer}></footer>
    </div>
  );
}
