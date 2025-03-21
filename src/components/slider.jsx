"use client";
import { useState } from "react";
import styles from "../app/home.module.css";
import Image from "next/image";

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [    
    {
      id: 1,
      image: "/bubble_tea.png",
      title: "Bubble Tea и напитки",
      description: "В BIM Street Cafe вас ждут освежающие напитки — идеально подходят для жаркой погоды! 🌞🍹",
    },
    {
      id: 2,
      image: "/product_1.png",
      title: "Кук си",
      description: "Кук си — это холодный корейский суп с лапшой и овощами. Освежает и утоляет жажду в жаркую погоду! 😎",
    },

    {
      id: 3,
      image: "/ramen.png",
      title: "Рамен",
      description: "У BIM большой ассортимент вкусных и необычных раменов, которые обязательно стоит попробовать! 🍜",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.productsSection}>
      <h2>Наши продукты</h2>
      <div className={styles.productSlider}>
        <div className={styles.productSlideWrapper}>
          <div
            className={styles.productSlides}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {products.map((product, index) => (
              <div className={styles.productSlide} key={product.id}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={566}
                  height={375}
                  className={styles.productImage}
                />
                <div className={styles.productInfo}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className={styles.boxslidebarButtonsAndDots}>
                    <div className={styles.productNavDots}>
                      {products.map((_, index) => (
                        <span
                          key={index}
                          className={
                            currentSlide === index
                              ? styles.activeDot
                              : styles.dot
                          }
                          onClick={() => goToSlide(index)}
                        />
                      ))}
                    </div>
                    <div className={styles.boxslidebarButtons}>
                    <button
                      className={styles.sliderButton}
                      onClick={prevSlide}
                      aria-label="Предыдущий слайд"
                    >
                      <Image
                        src="/arrow_left.svg"
                        alt="Previous"
                        width={24}
                        height={24}
                      />
                    </button>
                    <button
                      className={styles.sliderButton}
                      onClick={nextSlide}
                      aria-label="Следующий слайд"
                    >
                      <Image
                        src="/arrow_right.svg"
                        alt="Next"
                        width={24}
                        height={24}
                      />
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
