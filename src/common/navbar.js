import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.scss";

export default function NavBar() {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 100) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light position-fixed top-0  d-flex w-100 ${
          header === "header2" ? "bg-light" : "bg-transparent text-dark"
        }`}
      >
        <div className="container-fluid">
          <div className={styles.nav_logo_container}>
            <a className="navbar-brand" href="#">
              <span
                className={
                  header === "header2"
                    ? styles.navbar_text_logo_scroll
                    : styles.navbar_text_logo
                }
              >
                Integral Consulting
              </span>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul
              className={
                header === "header2"
                  ? styles.header_options_container_scroll
                  : styles.header_options_container
              }
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
