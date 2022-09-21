import styles from "../styles/Home.module.scss";
import HomePage from "../src/components/homepage";
import About from "../src/components/about";
import NavBar from "../src/common/navbar";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <HomePage />
      <About />
      <footer className={styles.footer}></footer>
    </div>
  );
}
