'use client';

import { useState, useRef } from 'react';
import styles from './ProductCarousel.module.css';

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState(0);
  const [endTouch, setEndTouch] = useState(0);

  const products = [
    {
      id: 1,
      title: 'Kits de comida saludable',
      image: '/images/food-kit.jpg',
      link: '/productos/kits-comida-saludable',
    },
    {
      id: 2,
      title: 'Yogurt natural con fruta',
      image: '/images/yogurt.jpg',
      link: '/productos/yogurt-natural',
    },
    {
      id: 3,
      title: 'Chips de verduras',
      image: '/images/veggie-chips.jpg',
      link: '/productos/chips-verduras',
    },
    {
      id: 4,
      title: 'Hummus de garbanzo',
      image: '/images/hummus.jpg',
      link: '/productos/hummus-garbanzo',
    },
    {
      id: 5,
      title: 'Ensaladas preparadas',
      image: '/images/salad.jpg',
      link: '/productos/ensaladas',
    },
  ];

  const totalSlides = products.length;

  const handleTouchStart = (e) => {
    setStartTouch(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndTouch(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startTouch - endTouch > 100) {
      nextSlide();
    } else if (endTouch - startTouch > 100) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Destacados de Producto</h2>

      <div
        className={styles.carouselContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.carouselTrack}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={styles.slide}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.3s ease',
              }}
            >
              <a href={product.link} className={styles.productLink}>
                <div className={styles.imageContainer}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                  />
                </div>
                <h3 className={styles.productTitle}>{product.title}</h3>
              </a>
            </div>
          ))}
        </div>

        <button
          className={styles.arrowButton + ' ' + styles.leftArrow}
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <button
          className={styles.arrowButton + ' ' + styles.rightArrow}
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>

      <a href="/productos" className={styles.viewMoreBtn}>
        Ver más
      </a>
    </section>
  );
}

export default ProductCarousel;
