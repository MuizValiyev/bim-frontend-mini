import styles from './nav.module.css';
import Image from "next/image";

export default function nav() {
  return (
    <header className={styles.header}>
      <div className={styles.headercontainer}>
        <div className={styles.logo}>
          <img src='/logo.svg' alt="BIM" />
        </div>
        <nav className={styles.mainnav}>
          <ul>
            <li>
              <a href="#about">О  нас </a>
            </li>
            <li>
              <a href="#franchise">Франшиза</a>
            </li>
            <li>
              <a href="#geography">Геонрафия</a>
            </li>
            <li>
              <a href="#conditions">Условия</a>
            </li>
            <li>
              <a href="#steps">Этапы</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className={styles.navLinks}>
          <Image
            src="/globus.svg" alt="." width={44} height={44}
          />
          <button className={styles.primarybutton}>Связаться с нами</button>
        </div>
      </div>
    </header>
  )
}