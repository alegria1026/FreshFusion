'use client';

import styles from './Benefits.module.css';
import { HeartIcon, SparklesIcon, ClockIcon, ArrowPathIcon } from '@heroicons/react/24/solid'

function Benefits() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Beneficios</h2>

      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <HeartIcon className={styles.icon} />
          </div>
          <h3 className={styles.subtitle}>Saludables</h3>
          <p className={styles.cardText}>
            Ingredientes frescos y de alta calidad.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <SparklesIcon className={styles.icon} />
          </div>
          <h3 className={styles.subtitle}>Deliciosos</h3>
          <p className={styles.cardText}>
            Sabores diseñados para todos los paladares.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <ClockIcon className={styles.icon} />
          </div>
          <h3 className={styles.subtitle}>Convenientes</h3>
          <p className={styles.cardText}>
            Listos para llevar y comer al instante.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <ArrowPathIcon className={styles.icon} />
          </div>
          <h3 className={styles.subtitle}>Sostenibles</h3>
          <p className={styles.cardText}>
           Empaque 100% reutilizable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;