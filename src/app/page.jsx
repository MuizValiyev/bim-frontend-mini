"use client";
import styles from "./home.module.css";
import Image from "next/image";
import NavBar from "@/components/nav";
import ProductSlider from "@/components/slider";

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

        <section className={styles.conceptSection}>
          <h2>BIM — это не просто магазин,<br />а <span className={styles.highlight}>lifestyle</span></h2>

          <div className={styles.featuresContainer}>
            <div className={styles.featureBox}>
              <h3>Атмосфера и вайб</h3>
              <p>Каждая точка BIM – это стильное пространство, куда молодежь приходит не только за покупками, но и за эмоциями.</p>
            </div>

            <div className={styles.featureBox}>
              <h3>Социальный феномен</h3>
              <p>BIM стал культовым местом среди <strong>поколения Z и миллениалов,</strong> где рождаются тренды и создаётся контент.</p>
            </div>

            <div className={styles.featureBox}>
              <h3>Взрывной рост</h3>
              <p>За короткий срок открыто 8 филиалов, но это только начало. До конца года сеть BIM вырастет <strong>до 50 точек по всему Узбекистану.</strong></p>
            </div>

            <div className={styles.featureBox}>
              <h3>Культовые продукты</h3>
              <p>Эксклюзивные напитки <strong>Bubble BIM</strong>, <strong>Shake BIM</strong>, <strong>Mojito BIM</strong>, топовые корейские снеки и возможность готовить рамен на месте сделали BIM <strong>must-visit</strong> местом.</p>
            </div>
          </div>
        </section>

        <section className={styles.gameZoneSection}>
          <h2>Game Зона в наших заведениях</h2>
          <p>и настольные игры</p>
          <div className={styles.gameImages}>
            <Image src="/game_zone_1.png" alt="Game Zone" width={367} height={282} />
            <Image src="/game_zone_2.png" alt="Game Zone" width={367} height={282} />
            <Image src="/game_zone_3.png" alt="Game Zone" width={367} height={282} />
          </div>
        </section>

        <ProductSlider />


        <section className={styles.partnerSection}>
          <h2>Starsdog</h2>
          <div className={styles.partnerContent}>
            <div className={styles.partnerInfo}>
              <Image src="/starsdogLogo.png" alt="Starsdog" width={380} height={78} />
              <h3>О партнере</h3>
              <p>Под брендом Starsdog BIM в январе открыл STARSDOGS в Москве (работает в Лубянском проезде). Компания также планирует развивать новый формат на фуд-кортах торговых центров и в стрит-ритейле. По словам Дяди, большинство точек позиционируются как островная концепция. Он привык работать с площадью около 20 кв. м, а в идеале — вообще с 2–3 кв. м, как это делается на международных рынках.</p>
            </div>
            <Image src="/starsdog.png" alt="Starsdog" width={684} height={696} />
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
            <div className={styles.locationBox} style={{ backgroundImage: `url(/uzor.svg)` }}>
              <h3>Наши кафе магазины работают в Узбекистане</h3>
            </div>
          </div>
          <div className={styles.map}>
            <Image src="/uzbekistanMap.png" alt="Map" width={1279} height={831} />
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
                <h3>Инвистиции от</h3>
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
            <div className={styles.secondaryItem}>
              <div className={styles.iconContainer}>
                <img src="/flower.svg" alt="" />
              </div>
              <div className={styles.secondaryContent}>
                <h3>Оборот</h3>
                <p>5 млн с первого месяца</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <p className={styles.email}>Support@example.com</p>
          <p className={styles.phone}>+998 97 111 99 75</p>
        </section>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Image src="/logo.svg" alt="BIM Logo" width={120} height={50} />
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>О ВIM</h4>
              <a href="#">Философия</a>
              <a href="#">Команда</a>
              <a href="#">Партнерам</a>
              <a href="#">Контакты</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Каталог</h4>
              <a href="#">Франшиза</a>
              <a href="#">Доставка</a>
              <a href="#">Магазины</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Вакансии</h4>
              <a href="#">Вакансии</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Медиа</h4>
              <a href="#">Блог</a>
              <a href="#">Рецепты</a>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a href="#"><Image src="/instagram.svg" alt="Instagram" width={24} height={24} /></a>
            <a href="#"><Image src="/telegram.svg" alt="Telegram" width={24} height={24} /></a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2022–2023 ООО «ВИМ»</p>
        </div>
      </footer>
    </>
  );
}