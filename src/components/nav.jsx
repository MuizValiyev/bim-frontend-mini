import styles from "./nav.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function nav() {
  const [isModalOpenAdaptive, setIsModalOpenAdaptive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalWithImage = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpenAdaptive(!isModalOpenAdaptive);
  };
  return (
    <header
      className={isModalOpenAdaptive ? styles.headerModalOpen : styles.header}
    >
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
          <img onClick={openModal} src="/burger.svg" alt="Бургер" />
          <button
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={openModalWithImage}
          >
            Связаться с нами
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Связаться с BIM</h2>
            <div className={styles.boxinputs}>
              <input type="name" placeholder="Ф.И.О" />
              <input type="name" placeholder="Номер" />
              <input type="name" placeholder="Почта" />
              <input type="name" placeholder="Город" />
              <textarea
                name="format"
                placeholder="Напишите формат франшизы"
              ></textarea>
              <button className={`${styles.button} ${styles.primaryButton}`}>
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpenAdaptive && (
        <div className={styles.boxModalAdaptive}>
          <div className={styles.boxrowbtns}>
            <a href="#about" className={styles.onebtn}>
              О нас
            </a>
            <a href="#franchisee" className={styles.onebtn}>
              Франшиза
            </a>
            <a href="#concept" className={styles.onebtn}>
              Геонрафия
            </a>
            <a href="#bim-not-only" className={styles.onebtn}>
              Условия
            </a>
            <a href="#contacts" className={styles.onebtn}>
              Этапы
            </a>
            <a href="#contacts" className={styles.onebtn}>
              Контакты
            </a>
            <button
              className={`${styles.button} ${styles.primaryButton}`}
              onClick={openModalWithImage}
            >
              Связаться с нами
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
