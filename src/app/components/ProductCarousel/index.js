'use client';

import { useState } from 'react';
import styles from './ProductCarousel.module.css';

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState(0);
  const [endTouch, setEndTouch] = useState(0);

  const products = [
    {
      id: 1,
      title: 'Kits de comida saludable',
      subtitle: 'Nuestra opción más saludable',
      image: '/images/meat-veggies.jpg',
      link: '/productos/meat-veggies',
    },
    {
      id: 2,
      title: 'Yogurt natural con fruta',
      subtitle: 'Refrescante y natural',
      image: '/images/yogurt.jpg',
      link: '/productos/yogurt',
    },
    {
      id: 3,
      title: 'Chips de verduras',
      subtitle: 'Crujientes y deliciosos',
      image: '/images/veggie-chips.jpg',
      link: '/productos/chips-verduras',
    },
    {
      id: 4,
      title: 'Hummus de garbanzo',
      subtitle: 'El sabor perfecto',
      image: '/images/hummus.jpg',
      link: '/productos/hummus',
    },
  ];

  const totalSlides = products.length;
  const visibleSlides = 3; // Mostrar 3 productos a la vez

  // Función para manejar el inicio del toque
  const handleTouchStart = (e) => {
    setStartTouch(e.targetTouches[0].clientX);
  };

  // Función para manejar el movimiento del toque
  const handleTouchMove = (e) => {
    setEndTouch(e.targetTouches[0].clientX);
  };

  // Función para manejar el fin del toque y detectar la dirección
  const handleTouchEnd = () => {
    if (Math.abs(startTouch - endTouch) > 50) {
      if (startTouch > endTouch) {
        nextSlide(); // Deslizar hacia la izquierda (avanzar)
      } else {
        prevSlide(); // Deslizar hacia la derecha (retroceder)
      }
    }
  };

  // Lógica para ir al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Lógica para ir al slide anterior
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
        {/* Botón para ir al slide anterior */}
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

        {/* Carrusel de productos */}
        <div className={styles.carouselTrack}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={styles.slide}
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
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
                  <div className={styles.textOverlay}>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <p className={styles.productSubtitle}>{product.subtitle}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Botón para ir al siguiente slide */}
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

      <a href="/productos" className={styles.viewMoreBtn}>
        Ver más
      </a>
    </section>
  );
}

export default ProductCarousel;
