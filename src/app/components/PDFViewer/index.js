"use client";

import { useState, useEffect } from 'react';

const PDFViewer = ({ pdfPath }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateDimensions = () => {
    const maxWidth = 800;
    const width = windowWidth > maxWidth ? maxWidth : windowWidth - 40;
    const height = width * 1.4;
    
    return { width, height };
  };
  
  const { width, height } = calculateDimensions();
  
  if (!pdfPath) {
    return <div className="error-message">No se ha especificado una ruta de PDF.</div>;
  }
  
  return (
    <div className="pdf-container">
      <object
        data={pdfPath}
        type="application/pdf"
        width={width}
        height={height}
        className="pdf-viewer"
      >
        <p>
          Tu navegador no puede mostrar el PDF directamente.{' '}
          <a href={pdfPath} target="_blank" rel="noopener noreferrer">
            Descárgalo aquí
          </a>
        </p>
      </object>
      
      <style jsx>{`
        .pdf-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 7rem;
          margin-bottom: 2rem;
        }
        
        .pdf-viewer {
          border: 1px solid #ccc;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .controls {
          margin-top: 15px;
          display: flex;
          justify-content: center;
        }
        
        .error-message {
          padding: 20px;
          text-align: center;
          color: #d32f2f;
          background-color: #ffebee;
          border-radius: 4px;
          margin: 20px 0;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
};

export default PDFViewer;