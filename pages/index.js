import styles from "../styles/Home.module.scss";
import HomePage from "../src/components/homepage";
import About from "../src/components/about";
import NavBar from "../src/common/navbar";
import Services from "../src/components/services";
import Testimonials from "../src/components/testimonials";
import Contact from "../src/components/contact";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <footer className={styles.footer}>
        <div className={styles.footer_map}>
          <iframe
            className="gmap_iframe"
            width="100%"
            scrolling="no"
            src="https://maps.google.com/maps?width=620&amp;height=400&amp;hl=en&amp;q=11.477746,-86.128805&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </footer>
    </div>
  );
}
