// PDFViewer.js
"use client";

import { useState, useEffect } from 'react';
import styles from './PDFViewer.module.css'; // Importa el CSS module

const PDFViewer = ({ pdfPath }) => {
  const [windowWidth, setWindowWidth] = useState(0);  // Estado para el ancho de la ventana

  useEffect(() => {
    // Establece el tamaño de la ventana cuando el componente se monta
    const handleResize = () => {
      setWindowWidth(window.innerWidth);  // Actualiza el estado con el ancho de la ventana
    };
    
    handleResize();  // Llama a la función de inmediato para establecer el tamaño inicial
    
    // Añadir el evento de redimensionamiento para que se actualice en el futuro
    window.addEventListener('resize', handleResize);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Función para calcular las dimensiones del PDF
  const calculateDimensions = () => {
    const maxWidth = 800;
    const width = windowWidth > maxWidth ? maxWidth : windowWidth - 40;
    const height = width * 1.4;
    
    return { width, height };
  };

  const { width, height } = calculateDimensions();  // Calcula las dimensiones del PDF
  
  // Si no hay ruta de PDF, mostramos un mensaje de error
  if (!pdfPath) {
    return <div className={styles.errorMessage}>No se ha especificado una ruta de PDF.</div>;
  }
  
  return (
    <div className={styles.pdfContainer}>
      <h1 className={styles.title}>Diga Revista</h1> {/* Título centrado */}
      <object
        data={pdfPath}
        type="application/pdf"
        width={width}
        height={height}
        className={styles.pdfViewer}
      >
        <p>
          Tu navegador no puede mostrar el PDF directamente.{' '}
          <a href={pdfPath} target="_blank" rel="noopener noreferrer">
            Descárgalo aquí
          </a>
        </p>
      </object>
    </div>
  );
};

export default PDFViewer;