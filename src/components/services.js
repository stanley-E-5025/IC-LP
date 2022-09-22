import styles from "../../styles/Home.module.scss";

export default function Services() {
  return (
    <main id="services" className={styles.main_services}>
      <div className={styles.services_title_container}>
        <h1>Services</h1>
      </div>

      <div className={styles.services_cards_container}>
        <div className={styles.card_container}>
          <img alt="img" src={"/self1.jpg"} />
          <div className={styles.services_card}>
            <h3>Administrative</h3>
            <ul>
              <li>Business Permits and licenses</li>
              <li> Payroll assistance</li>
              <li>DGI and INSS filings</li>
              <li>Property taxes</li>
              <li>Consulting on labor law</li>
              <li>Social Security law</li>
            </ul>
          </div>
        </div>

        <div className={styles.card_container}>
          <img alt="img" src={"/legal2.jpg"} />
          <div className={styles.services_card}>
            <h3>Legal</h3>

            <ul>
              <li> Property title research</li>
              <li> Property registration</li>
              <li>Notary services</li>
              <li>Authentication of documents</li>
              <li>Contract drafting</li>
              <li>Legal formation of corporations</li>

              <li>Consulting services to review documents</li>
            </ul>
          </div>
        </div>

        <div className={styles.card_container}>
          <img alt="img" src={"/admin.jpg"} />
          <div className={styles.services_card}>
            <h3>Personal Services</h3>

            <ul>
              <li>Marriage certificate</li>
              <li> Paying bills</li>
              <li>Vehicle registration</li>
              <li>Translation Services</li>
            </ul>
          </div>
        </div>

        <div className={styles.card_container}>
          <img alt="img" src={"/migra.jpg"} />
          <div className={styles.services_card}>
            <h3>Immigration</h3>
            <ul>
              <li>Residency Applications</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
