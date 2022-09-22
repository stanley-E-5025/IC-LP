import styles from "../styles/Home.module.scss";
import HomePage from "../src/components/homepage";
import About from "../src/components/about";
import NavBar from "../src/common/navbar";
import Services from "../src/components/services";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <About />
      <Services />
      <footer className={styles.footer}></footer>
    </div>
  );
}
