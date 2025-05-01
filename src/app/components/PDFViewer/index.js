"use client";

import { useState, useEffect } from 'react';
import styles from './PDFViewer.module.css';

const PDFViewer = () => {
  // URL original de Google Drive
  const googleDriveUrl = "https://drive.google.com/file/d/19JikFgYO9_TaOnSnC51AjSDqZnkI2c9j/view?usp=sharing";
  
  // Obtener el ID del archivo de la URL
  const fileId = googleDriveUrl.split('/d/')[1].split('/')[0];
  
  // Crear la URL de visualización para el iframe
  const viewerUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Initialize width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateDimensions = () => {
    const maxWidth = 1000; // Increased max width for better viewing
    const margin = 40;
    const width = Math.min(maxWidth, windowWidth - margin);
    const height = width * (windowWidth > 768 ? 1.4 : 1.2); // Different aspect ratio for mobile
    
    return { width, height };
  };

  const { width, height } = calculateDimensions();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>REVISTA</h1>
      <div className={styles.viewerWrapper}>
        <iframe 
          src={viewerUrl}
          className={styles.viewer}
          frameBorder="0"
          allowFullScreen
          title="PDF Viewer"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

export default PDFViewer;