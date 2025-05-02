'use client';
import Image from 'next/image';
import styles from './Infographic.module.css';

function infographic({ 
  imagenPath = "/infografia.jpg", // Ruta por defecto
  altText = "Infografía informativa",
  maxWidth = 1000 // Ancho máximo en px
}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper} style={{ maxWidth: `${maxWidth}px` }}>
        <Image
          src={imagenPath}
          alt={altText}
          width={1200} // Ancho intrínseco de la imagen
          height={1800} // Alto intrínseco (ajustar según tu imagen)
          className={styles.infografiaImage}
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
    </div>
  );
}

export default infographic;