"use client";
import styles from "./home.module.css";
import Image from "next/image";
import NavBar from "@/components/nav";


export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.mainContainer}>
        <section className={styles.header} style={{ backgroundImage: `url(/uzor.svg)` }}>
          <div className={styles.boxHeaderText}>
            <div className={styles.boxTextPart1}>
              <div className={styles.boxText}>
                <h2>
                  BIM — место, где встречаются вкусы мира, развлечения и незабываемая атмосфера!
                </h2>
                <p>BIM — это не просто кафе или магазин, а пространство для отдыха, общения и ярких впечатлений.</p>
              </div>
              <a href="#">
                Стать ПАРТНЕРОМ
              </a>
            </div>
            <div className={styles.boxTextPart2}>
              <div className={styles.iconAndText}>
                <Image
                  src="/flowericon.svg"
                  alt="."
                  width={26}
                  height={26}
                />
                <h3>Окупаемость</h3>
                <p>8-18 месяцев</p>
              </div>
              <div className={styles.iconAndText}>
                <Image
                  src="/flowericon.svg"
                  alt="."
                  width={26}
                  height={26}
                />
                <h3>Сроки открытия</h3>
                <p>1-2 месяца</p>
              </div>
              <div className={styles.iconAndText}>
                <Image
                  src="/flowericon.svg"
                  alt="."
                  width={26}
                  height={26}
                />
                <h3>Рентабельность</h3>
                <p>30%</p>
              </div>
            </div>
          </div>
          <Image
            src="/headerImage.png"
            alt="."
            width={705}
            height={585}
            style={{ marginBottom: 110 }}
          />
        </section>
        <div className={styles.boxWrapper}>
          <h1>Почему это выгодно?</h1>
          <div className={styles.boxTwoCards}>
            <div className={styles.cardOne} style={{ backgroundImage: `url(/uzor.svg)` }}>
              <div className={styles.cardContent}>
                <div className={styles.boxCardTexts}>
                  <Image
                    src="/iconTick.svg"
                    alt="."
                    width={60}
                    height={73}
                  />
                  <div className={styles.boxText}>
                    <h3>Больше посетителей</h3>
                    <p>еда + напитки = идеальное сочетание.</p>
                  </div>
                </div>
                <div className={styles.boxCardTexts}>
                  <Image
                    src="/iconTick.svg"
                    alt="."
                    width={60}
                    height={73}
                  />
                  <div className={styles.boxText}>
                    <h3>Больше прибыли</h3>
                    <p>Средний чек увеличивается за счёт разнообразного ассортимента.</p>
                  </div>
                </div>
                <div className={styles.boxCardTexts}>
                  <Image
                    src="/iconTick.svg"
                    alt="."
                    width={60}
                    height={73}
                  />
                  <div className={styles.boxText}>
                    <h3>Готовое решение</h3>
                    <p>Никаких сложностей, мы уже настроили процесс интеграции.</p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/Image2.png"
              alt="."
              width={684}
              height={696}
            />
          </div>
        </div>
      </div>
    </>
  );
}
