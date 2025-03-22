"use client";
import styles from "./home.module.css";
import Image from "next/image";
import NavBar from "@/components/nav";
import ProductSlider from "@/components/slider";
import { useState, useEffect } from "react";
import Modal from "@/components/modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <NavBar />
      <div className={styles.mainContainer}>
        <section
          className={styles.header}
          style={{ backgroundImage: `url(/uzor.svg)` }}
        >
          <div className={styles.boxHeaderText}>
            <div className={styles.boxTextPart1}>
              <div className={styles.boxText}>
                <h2>
                  BIM — место, где встречаются вкусы мира, развлечения и
                  незабываемая атмосфера!
                </h2>
                <p>
                  BIM — это не просто кафе или магазин, а пространство для
                  отдыха, общения и ярких впечатлений.
                </p>
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                Стать ПАРТНЕРОМ
              </button>
            </div>
            <div className={styles.boxTextPart2}>
              <div className={styles.iconAndText}>
                <Image src="/flowerIcon.svg" alt="." width={26} height={26} />
                <h3>Окупаемость</h3>
                <p>8-12 месяцев</p>
              </div>
              <div className={styles.iconAndText}>
                <Image src="/flowerIcon.svg" alt="." width={26} height={26} />
                <h3>Сроки открытия</h3>
                <p>1-2 месяца</p>
              </div>
              <div className={styles.iconAndText}>
                <Image src="/flowerIcon.svg" alt="." width={26} height={26} />
                <h3>Рентабельность</h3>
                <p>30%</p>
              </div>
            </div>
          </div>
          <Image
            className={styles.boxHeaderImage}
            src="/headerImage.png"
            alt="."
            width={705}
            height={585}
          />
        </section>
        <div className={styles.boxWrapper}>
          <h1>Почему это выгодно?</h1>
          <div className={styles.boxTwoCards}>
            <div
              className={styles.cardOne}
              style={{ backgroundImage: `url(/uzor.svg)` }}
            >
              <div className={styles.cardContent}>
                <div className={styles.boxCardTexts}>
                  <Image src="/iconTick.svg" alt="." width={60} height={73} />
                  <div className={styles.boxText}>
                    <h3>Больше посетителей</h3>
                    <p>еда + напитки = идеальное сочетание.</p>
                  </div>
                </div>
                <div className={styles.boxCardTexts}>
                  <Image src="/iconTick.svg" alt="." width={60} height={73} />
                  <div className={styles.boxText}>
                    <h3>Больше прибыли</h3>
                    <p>
                      Средний чек увеличивается за счёт разнообразного
                      ассортимента.
                    </p>
                  </div>
                </div>
                <div className={styles.boxCardTexts}>
                  <Image src="/iconTick.svg" alt="." width={60} height={73} />
                  <div className={styles.boxText}>
                    <h3>Готовое решение</h3>
                    <p>
                      Никаких сложностей, мы уже настроили процесс интеграции.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className={styles.boxCardImage}
              src="/Image2.png"
              alt="."
              width={684}
              height={696}
            />
          </div>
        </div>

        <section className={styles.conceptSection}>
          <h2>
            BIM — это не просто магазин,
            <br />а <span className={styles.highlight}>lifestyle</span>
          </h2>

          <div className={styles.featuresContainer}>
            <div className={styles.featureBox}>
              <h3>Атмосфера и вайб</h3>
              <p>
                Каждая точка BIM – это стильное пространство, куда молодежь
                приходит не только за покупками, но и за эмоциями.
              </p>
            </div>

            <div className={styles.featureBox}>
              <h3>Социальный феномен</h3>
              <p>
                BIM стал культовым местом среди{" "}
                <strong>поколения Z и миллениалов,</strong> где рождаются тренды
                и создаётся контент.
              </p>
            </div>

            <div className={styles.featureBox}>
              <h3>Взрывной рост</h3>
              <p>
                За короткий срок открыто 8 филиалов, но это только начало. До
                конца года сеть BIM вырастет{" "}
                <strong>до 50 точек по всему Узбекистану.</strong>
              </p>
            </div>

            <div className={styles.featureBox}>
              <h3>Культовые продукты</h3>
              <p>
                Эксклюзивные напитки <strong>Tropic BIM</strong>,{" "}
                <strong>Milky BIM</strong>, <strong>Bubble BIM</strong>,
                <strong>Blossom BIM</strong>топовые корейские снеки и
                возможность готовить рамен на месте сделали BIM{" "}
                <strong>must-visit</strong> местом.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.gameZoneSection}>
          <h2>Game Зона в наших заведениях и настольные игры</h2>
          <div className={styles.gameImages}>
            <Image
              src="/game_zone_1.png"
              alt="Game Zone"
              width={367}
              height={282}
            />
            <Image
              src="/game_zone_2.png"
              alt="Game Zone"
              width={367}
              height={282}
            />
            <Image
              src="/game_zone_3.png"
              alt="Game Zone"
              width={367}
              height={282}
            />
          </div>
        </section>

        <ProductSlider />

        <section className={styles.partnerSection}>
          <h2>Starsdog</h2>
          <div className={styles.partnerContent}>
            <div className={styles.partnerInfo}>
              <Image
                src="/starsdogLogo.png"
                alt="Starsdog"
                width={380}
                height={78}
              />
              <h3>О партнере</h3>
              <p>
                При открытии филиала BIM в вашем городе, STARDOGS станет
                неотъемлемой частью вашей локации. Дополнительный поток
                клиентов: STARDOGS - известный бренд, любимый миллионами. Это
                привлечёт ещё больше гостей в ваш магазин.
              </p>
            </div>
            <Image
              src="/starsdog.png"
              alt="Starsdog"
              width={684}
              height={696}
            />
          </div>
        </section>

        <section className={styles.locationsSection}>
          <div className={styles.locationsContent}>
            <div className={styles.locationText}>
              <h2>8 точек BIM</h2>
              <p>Так выглядит география сети сейчас</p>
              <div className={styles.buttonWrapper}>
                <a href="#" className={styles.locationButton}>
                  Проверить свой город <img src="/arrow_right_up.svg" alt="#" />
                </a>
              </div>
            </div>
            <div
              className={styles.locationBox}
              style={{ backgroundImage: `url(/uzor.svg)` }}
            >
              <h3>Наши кафе магазины работают в Узбекистане</h3>
            </div>
          </div>
          <div className={styles.map}>
            <Image
              src="/uzbekistanMap.png"
              alt="Map"
              width={1279}
              height={831}
            />
          </div>
        </section>

        <section className={styles.financialSection}>
          <h2>Финансовые условия</h2>
          <div className={styles.financialGrid}>
            <div className={styles.financialItem}>
              <h3>Партнерство от</h3>
              <p className={styles.bigNumber}>10.000$</p>
            </div>
            <div className={styles.financialItem}>
              <h3>Окупаемость</h3>
              <p className={styles.bigNumber}>8-12 месяцев</p>
            </div>
            <div className={styles.financialItem}>
              <h3>Рентабельность</h3>
              <p className={styles.bigNumber}>30%</p>
            </div>
          </div>

          <div className={styles.secondaryGrid}>
            <div className={styles.secondaryItem}>
              <div className={styles.iconContainer}>
                <img src="/flower.svg" alt="" />
              </div>
              <div className={styles.secondaryContent}>
                <h3>Инвестиции от</h3>
                <p>5.000$</p>
              </div>
            </div>
            <div className={styles.secondaryItem}>
              <div className={styles.iconContainer}>
                <img src="/flower.svg" alt="" />
              </div>
              <div className={styles.secondaryContent}>
                <h3>Сроки открытия</h3>
                <p>1-2 месяцев</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.contacts}
          style={{ backgroundImage: `url('/gradientWhite.png')` }}
        >
          <div className={styles.container}>
            <div className={styles.boxcontactscontainerrow}>
              <a href="mailto:tmalikov1@icloud.com" className={styles.boxemail}>
                <h6>Наша почта</h6>
                <h2>tmalikov1@icloud.com</h2>
              </a>
              <a href="tel:+998996788878" className={styles.boxemail}>
                <h6>Мы по номеру..</h6>
                <h2>+998 99-446-44-00</h2>
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <div className={styles.containerColumn}>
          <div className={styles.boxFooterLogo}>
            <Image src="/logoWhite.svg" alt="Логотип" width={143} height={60} />
          </div>
          <div className={styles.boxcenterfooterinfo}>
            <div className={styles.boxfooterinfocolumns}>
              <p>Концепция BIM</p>
              <p>Франшиза в цифрах</p>
              <p>Поддержка</p>
            </div>
            <div className={styles.boxfooterinfocolumns}>
              <p>Как стать партнером</p>
              <p>Анкета</p>
              <p>Политика конфиденциальности</p>
            </div>
            <div className={styles.boxfooterinfocolumns}>
              <p>Контакты</p>
              <p>+998 99-446-44-00</p>
              <div className={styles.boxsocialnetworks}>
                <a href="https://www.tiktok.com/@bim.tashkent?_t=ZS-8usC2eeS9Vx&_r=1">
                  <Image
                    src="/tik-tok.svg"
                    alt="тикток"
                    width={33}
                    height={33}
                  />
                </a>
                <a href="https://www.instagram.com/bim.tashkent?igsh=azZtNjB1ajBsdnh3">
                  <Image
                    src="/insta.svg"
                    alt="Инстаграм"
                    width={33}
                    height={33}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.boxrowallrights}>
            <p>© Bim Inc., 2024 Все права защищены.</p>
            <p>Design & Dev by AbexLab</p>
          </div>
        </div>
      </footer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
