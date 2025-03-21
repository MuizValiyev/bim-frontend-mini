import styles from './nav.module.css';
import Image from "next/image";
import { useState } from 'react';

export default function nav() {
  const [isModalOpenAdaptive, setIsModalOpenAdaptive] = useState(false);


  const openModal = () => {
    setIsModalOpenAdaptive(!isModalOpenAdaptive);
  };
  return (
    <header className={isModalOpenAdaptive ? styles.headerModalOpen : styles.header}>
    <div className={`${styles.headerContainer} ${styles.container}`}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="BIM" />
      </div>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <a href="#about">Концепция</a>
          </li>
          <li>
            <a href="#concept">Цифры</a>
          </li>
          <li>
            <a href="#franchisee">Поддержка</a>
          </li>
          <li>
            <a href="#bim-not-only">Как стать партнером</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>
      <div className={styles.burgerandbutton}>
        <img
          onClick={openModal}
          src='/burger.svg'
          alt="Бургер"
        />
        <button
          className={`${styles.button} ${styles.primaryButton}`}
          // onClick={openModalWithImage}
          >
          Связаться с нами
        </button>
      </div>
    </div>
    {isModalOpenAdaptive && (
      <div className={styles.boxModalAdaptive}>
        <div className={styles.boxrowbtns}>
          <a href="#about" className={styles.onebtn}>
            Концепция
          </a>
          <a href="#concept" className={styles.onebtn}>
            Цифры
          </a>
          <a href="#franchisee" className={styles.onebtn}>
            Поддержка
          </a>
          <a href="#bim-not-only" className={styles.onebtn}>
            Как стать партнером
          </a>
          <a href="#contacts" className={styles.onebtn}>
            Контакты
          </a>
        </div>
      </div>
    )}
  </header>
  )
}