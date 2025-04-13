"use client";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/nav";
import ProductSlider from "@/components/slider";
import { useState, useEffect } from "react";
import Modal from "@/components/modal";
<<<<<<< HEAD
import YandexMetrika from "@/components/YandexMetrika";
=======
import { useLanguage } from "@/context/languageContext";
import YandexMetrika from "@/components/YandexMetrika"; 
>>>>>>> 4aefbd5 (fix)

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { translate } = useLanguage();
  return (
    <>
      <NavBar />
      <YandexMetrika />
      <div className={styles.mainContainer}>
        <section
          id="partners"
          className={styles.header}
          style={{ backgroundImage: `url(/uzor.svg)` }}>
          <div className={styles.boxHeaderText}>
            <div className={styles.boxTextPart1}>
              <div className={styles.boxText}>
                <h2>
                  {translate("atmosphere")}
                </h2>
                <p>
                  {translate("impressions")}
                </p>
              </div>
              <button onClick={() => setIsModalOpen(true)}>
                {translate("Стать ПАРТНЕРОМ")}
              </button>
            </div>
            <div className={styles.boxTextPart2}>
              <div className={styles.iconAndText}>
                <Image src="/flowerIcon.svg" alt="." width={26} height={26} />
                <h3>{translate("Окупаемость")}</h3>
                <p>{translate("8-12 месяцев")}</p>
              </div>
              <div className={styles.iconAndText}>
                <Image src="/flowerIcon.svg" alt="." width={26} height={26} />
                <h3>{translate("Сроки открытия")}</h3>
                <p>{translate("1-2 месяца")}</p>
              </div>
              <div className={styles.iconAndText}>
                <Image src="/flowerIcon.svg" alt="." width={26} height={26} />
                <h3>{translate("Рентабельность")}</h3>
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
        <div id="concept" className={styles.boxWrapper}>
          <h1>{translate("Почему это выгодно?")}</h1>
          <div className={styles.boxTwoCards}>
            <div
              className={styles.cardOne}
              style={{ backgroundImage: `url(/uzor.svg)` }}>
              <div className={styles.cardContent}>
                <div className={styles.boxCardTexts}>
                  <Image src="/iconTick.svg" alt="." width={60} height={73} />
                  <div className={styles.boxText}>
                    <h3>{translate("Больше посетителей")}</h3>
                    <p>{translate("еда + напитки = идеальное сочетание.")}</p>
                  </div>
                </div>
                <div className={styles.boxCardTexts}>
                  <Image src="/iconTick.svg" alt="." width={60} height={73} />
                  <div className={styles.boxText}>
                    <h3>{translate("Больше прибыли")}</h3>
                    <p>
                      {translate("Средний чек увеличивается за счёт разнообразного ассортимента.")}
                    </p>
                  </div>
                </div>
                <div className={styles.boxCardTexts}>
                  <Image src="/iconTick.svg" alt="." width={60} height={73} />
                  <div className={styles.boxText}>
                    <h3>{translate("Готовое решение")}</h3>
                    <p>
                      {translate("Никаких сложностей, мы уже настроили процесс интеграции.")}
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
            {translate("BIM — это не просто магазин, а")} <span className={styles.highlight}> lifestyle</span>
          </h2>

          <div className={styles.featuresContainer}>
            <div className={styles.featureBox}>
              <h3>{translate("Атмосфера и вайб")}</h3>
              <p>
                {translate("Каждая точка BIM – это стильное пространство, куда молодежь приходит не только за покупками, но и за эмоциями.")}
              </p>
            </div>

            <div className={styles.featureBox}>
              <h3>{translate("Социальный феномен")}</h3>
              <p>
                {translate("BIM стал культовым местом среди")}{" "}
                <strong>{translate("поколения Z и миллениалов,")}</strong>{" "}{translate("где рождаются тренды и создаётся контент.")}
              </p>
            </div>

            <div className={styles.featureBox}>
              <h3>{translate("Взрывной рост")}</h3>
              <p>
                {translate("За короткий срок открыто 8 филиалов, но это только начало. До конца года сеть BIM вырастет")}
                <strong>{translate("до 50 точек по всему Узбекистану.")}</strong>
              </p>
            </div>

            <div className={styles.featureBox}>
              <h3>{translate("Культовые продукты")}</h3>
              <p>
                {translate("Эксклюзивные напитки")} <strong>Tropic BIM</strong>,{" "}
                <strong>Milky BIM</strong>, <strong>Bubble BIM</strong>,
                <strong>Blossom BIM</strong>{" "}{translate("топовые корейские снеки и возможность готовить рамен на месте сделали BIM")}{" "}
                <strong>must-visit</strong> {translate("местом.")}
              </p>
            </div>
          </div>
        </section>

        <section className={styles.gameZoneSection}>
          <h2>{translate("Game Зона в наших заведениях и настольные игры")}</h2>
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
              <h3>{translate("О партнере")}</h3>
              <p>
                {translate("STARDOGS")}
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
              <h2>{translate("8 точек BIM")}</h2>
              <p>{translate("Так выглядит география сети сейчас")}</p>
              <div className={styles.buttonWrapper}>
                <a href="#" className={styles.locationButton}>
                  {translate("Проверить свой город")} <img src="/arrow_right_up.svg" alt="#" />
                </a>
              </div>
            </div>
            <div
              className={styles.locationBox}
              style={{ backgroundImage: `url(/uzor.svg)` }}
            >
              <h3>{translate("Наши кафе магазины работают в Узбекистане")}</h3>
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

        <section id="numbers" className={styles.financialSection}>
          <h2>{translate("Финансовые условия")}</h2>
          <div className={styles.financialGrid}>
            <div className={styles.financialItem}>
              <h3>{translate("Партнерство от")}</h3>
              <p className={styles.bigNumber}>10.000$</p>
            </div>
            <div className={styles.financialItem}>
              <h3>{translate("Окупаемость")}</h3>
              <p className={styles.bigNumber}>{translate("8-12 месяцев")}</p>
            </div>
            <div className={styles.financialItem}>
              <h3>{translate("Рентабельность")}</h3>
              <p className={styles.bigNumber}>30%</p>
            </div>
          </div>

          <div className={styles.secondaryGrid}>
            <div className={styles.secondaryItem}>
              <div className={styles.iconContainer}>
                <img src="/flower.svg" alt="" />
              </div>
              <div className={styles.secondaryContent}>
                <h3>{translate("Инвестиции от")}</h3>
                <p>5.000$</p>
              </div>
            </div>
            <div className={styles.secondaryItem}>
              <div className={styles.iconContainer}>
                <img src="/flower.svg" alt="" />
              </div>
              <div className={styles.secondaryContent}>
                <h3>{translate("Сроки открытия")}</h3>
                <p>{translate("1-2 месяца")}</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacts"
          className={styles.contacts}
          style={{ backgroundImage: `url('/gradientWhite.png')` }}
        >
          <div className={styles.container}>
            <div className={styles.boxcontactscontainerrow}>
              <a href="mailto:tmalikov1@icloud.com" className={styles.boxemail}>
                <h6>{translate("Наша почта")}</h6>
                <h2>tmalikov1@icloud.com</h2>
              </a>
<<<<<<< HEAD
              <a href="tel:+998910990009" className={styles.boxemail}>
                <h6>Мы по номеру..</h6>
=======
              <a href="tel:+998996788878" className={styles.boxemail}>
                <h6>{translate("Мы по номеру.")}.</h6>
>>>>>>> 4aefbd5 (fix)
                <h2>+998 91 099-00-09 </h2>
              </a>
              <a href="tel:+998996788878" className={styles.boxemail}>
                <h6>Наши контакты</h6>
                <h2 style={{ fontSize: '20px' }}>WhatsApp: +7 910 492-68-29</h2>
                <h2 style={{ fontSize: '20px' }}>
                  Telegram: <a href="https://t.me/EkatIv1309">@EkatIv1309</a>
                </h2>
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <div className={styles.containerColumn}>
          <Link href="/" className={styles.boxFooterLogo}>
            <Image src="/logoWhite.svg" alt="Логотип" width={143} height={60} />
          </Link>
          <div className={styles.boxcenterfooterinfo}>
            <div className={styles.boxfooterinfocolumns}>
              <a href="#concept">{translate("Концепция BIM")}</a>
              <a href="#numbers">{translate("Цифры")}</a>
            </div>
            <div className={styles.boxfooterinfocolumns}>
              <a href="#partners">{translate("Как стать партнером")}</a>
              <button onClick={() => setIsModalOpen(true)}>{translate("Связаться с нами")}</button>
            </div>
            <div className={styles.boxfooterinfocolumns}>
              <p>{translate("Контакты")}</p>
              <p>+998 91 099-00-09 </p>
              <div className={styles.boxsocialnetworks}>
                <a href="https://www.tiktok.com/@bim.tashkent?_t=ZS-8usC2eeS9Vx&_r=1">
                  <Image
                    src="/tik-tok.svg"
                    alt="тикток"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://www.instagram.com/bim.tashkent?igsh=azZtNjB1ajBsdnh3">
                  <Image
                    src="/insta.svg"
                    alt="Инстаграм"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.boxrowallrights}>
            <p>© Bim Inc., 2024 {translate("Все права защищены.")}</p>
            <p>Design & Dev by AbexLab</p>
          </div>
        </div>
      </footer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
