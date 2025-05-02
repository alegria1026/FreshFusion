'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ProductCarousel.module.css';

function ProductCarousel({ title = "CATEGORÍA", products = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      
      <div className={styles.carouselContainer} ref={carouselRef}>
        {/* Flechas solo visibles en móvil con 2+ productos */}
        {isMobile && products.length > 1 && (
          <>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Contenido del carrusel */}
        <div className={styles.carouselContent}>
          {products.map((product, index) => (
            <div 
              key={product.id || index}
              className={styles.productCard}
              style={{ 
                transform: isMobile ? `translateX(${-currentIndex * 100}%)` : 'none',
                flex: isMobile ? '0 0 100%' : '0 0 calc(50% - 20px)',
                minWidth: isMobile ? '100%' : 'calc(50% - 20px)'
              }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={styles.productImage}
                  sizes={isMobile ? "100vw" : "50vw"}
                />
                <h3 className={styles.productTitle}>{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;