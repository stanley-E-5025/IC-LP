import styles from "../../styles/Home.module.scss";


export default function NavBar() {


  // margin 6 , margin-top 13 px on navbar options font roboto  ,  brand name roboto 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light position-absolute top-0  d-flex w-100 bg-transparent">
        <div className="container-fluid">
          <div className={styles.nav_logo_container}>
            <a className="navbar-brand" href="#">
              Integral Consulting
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
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
