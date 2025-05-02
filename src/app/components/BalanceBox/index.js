"use client"

import { useState, useEffect } from 'react';
import styles from './BalanceBox.module.css';

export default function BalanceBox() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Solo ejecutar en el cliente
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.balanceBox}>
        <div className={styles.header}>
          <div className={styles.banner}>
            <p className={styles.intro}>Todo lo que debes saber de nuestro</p>
          </div>
          <h1 className={styles.title}>BALANCE BOX</h1>
          <h2 className={styles.subtitle}>ESPECIALMENTE DISEÑADO PARA<br />PERSONAS CON DIABETES TIPO II</h2>
        </div>

        <div className={styles.section}>
          <h3 className={styles.question}>¿QUÉ ES LA DIABETES MELLITUS TIPO II?</h3>
          <p className={styles.description}>
            Es una enfermedad crónica caracterizada por la resistencia 
            a la insulina o la incapacidad del cuerpo para usarla 
            adecuadamente. Esto produce niveles elevados de glucosa 
            en sangre.
          </p>
          <p className={styles.description}>
            Las causas generales pueden ser factores genéticos, 
            obesidad, inactividad física y dietas poco saludables.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.benefitsTitle}>Beneficios del Kit "Balance Box" para personas<br />con diabetes mellitus tipo II</h3>
          <p className={styles.benefitsDescription}>
            Este kit contiene alimentos cuidadosamente seleccionados para 
            ayudar a controlar la glucosa en sangre y mejorar la salud general.
          </p>
        </div>

        <div className={styles.foodItems}>
          <div className={styles.foodItem}>
            <div className={styles.foodHeader} style={{ backgroundColor: '#90BE6D' }}>
              <h4>APIO</h4>
            </div>
            <div className={styles.foodContent}>
              <div className={styles.foodInfo}>
                <p className={styles.foodProperties}>
                  <span className={styles.foodLabel}>Propiedades:</span> Bajo en calorías, alto en fibra y antioxidantes.
                </p>
                <p className={styles.foodBenefit}>
                  <span className={styles.foodLabel}>Beneficio principal:</span> Ayuda a mantener la glucosa estable y favorece la hidratación.
                </p>
              </div>
              <div className={styles.foodImageContainer}>
                <img 
                  src="/api/placeholder/60/60"
                  alt="Apio"
                  className={styles.foodImage}
                />
              </div>
            </div>
          </div>

          <div className={styles.foodItem}>
            <div className={styles.foodHeader} style={{ backgroundColor: '#F9844A' }}>
              <h4>ZANAHORIA</h4>
            </div>
            <div className={styles.foodContent}>
              <div className={styles.foodInfo}>
                <p className={styles.foodProperties}>
                  <span className={styles.foodLabel}>Propiedades:</span> Rica en betacaroteno, fibra y vitaminas.
                </p>
                <p className={styles.foodBenefit}>
                  <span className={styles.foodLabel}>Beneficio principal:</span> Su índice glucémico moderado y su fibra mejoran el control glucémico.
                </p>
              </div>
              <div className={styles.foodImageContainer}>
                <img 
                  src="/api/placeholder/60/60"
                  alt="Zanahoria"
                  className={styles.foodImage}
                />
              </div>
            </div>
          </div>

          <div className={styles.foodItem}>
            <div className={styles.foodHeader} style={{ backgroundColor: '#4D194D' }}>
              <h4>ARÁNDANOS DESHIDRATADOS</h4>
            </div>
            <div className={styles.foodContent}>
              <div className={styles.foodInfo}>
                <p className={styles.foodProperties}>
                  <span className={styles.foodLabel}>Propiedades:</span> Contienen antioxidantes que ayudan a reparar la inflamación.
                </p>
                <p className={styles.foodBenefit}>
                  <span className={styles.foodLabel}>Beneficio principal:</span> Mejorar la salud cardiovascular y el metabolismo.
                </p>
              </div>
              <div className={styles.foodImageContainer}>
                <img 
                  src="/api/placeholder/60/60"
                  alt="Arándanos"
                  className={styles.foodImage}
                />
              </div>
            </div>
          </div>

          <div className={styles.foodItem}>
            <div className={styles.foodHeader} style={{ backgroundColor: '#4F772D' }}>
              <h4>PEPINO</h4>
            </div>
            <div className={styles.foodContent}>
              <div className={styles.foodInfo}>
                <p className={styles.foodProperties}>
                  <span className={styles.foodLabel}>Propiedades:</span> Alto contenido de agua, bajo índice glucémico.
                </p>
                <p className={styles.foodBenefit}>
                  <span className={styles.foodLabel}>Beneficio principal:</span> Ayuda a mantener niveles de glucosa estables y a reducir complicaciones asociadas a diabetes.
                </p>
              </div>
              <div className={styles.foodImageContainer}>
                <img 
                  src="/api/placeholder/60/60"
                  alt="Pepino"
                  className={styles.foodImage}
                />
              </div>
            </div>
          </div>

          <div className={styles.foodItem}>
            <div className={styles.foodHeader} style={{ backgroundColor: '#C9B18C' }}>
              <h4>JÍCAMA</h4>
            </div>
            <div className={styles.foodContent}>
              <div className={styles.foodInfo}>
                <p className={styles.foodProperties}>
                  <span className={styles.foodLabel}>Propiedades:</span> Rica en fibra y agua, contiene inulina (fibra prebiótica).
                </p>
                <p className={styles.foodBenefit}>
                  <span className={styles.foodLabel}>Beneficio principal:</span> Promueve la salud intestinal y controla el azúcar en sangre.
                </p>
              </div>
              <div className={styles.foodImageContainer}>
                <img 
                  src="/api/placeholder/60/60"
                  alt="Jícama"
                  className={styles.foodImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}