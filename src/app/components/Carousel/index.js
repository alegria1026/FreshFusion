'use client';
import { useState } from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image';

function Carousel({ 
  title = "PRODUCTOS DESTACADOS", 
  products = [] 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState(0);
  const [endTouch, setEndTouch] = useState(0);

  const totalSlides = products.length;
  const visibleSlides = 3;

  const handleTouchStart = (e) => {
    setStartTouch(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndTouch(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (Math.abs(startTouch - endTouch) > 50) {
      if (startTouch > endTouch) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= totalSlides - visibleSlides + 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - visibleSlides : prevIndex - 1
    );
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div
        className={styles.carouselContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className={`${styles.arrowButton} ${styles.leftArrow}`}
          onClick={prevSlide}
          aria-label="Anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={styles.iconArrow}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className={styles.carouselTrack}>
          {products.map((product, index) => (
            <div
              key={product.id || index}
              className={styles.slide}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                minWidth: `${100 / visibleSlides}%`,
              }}
            >
              <a href={product.link} className={styles.productLink}>
                <div className={styles.imageContainer}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className={styles.productImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.textOverlay}>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrowButton} ${styles.rightArrow}`}
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={styles.iconArrow}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Carousel;