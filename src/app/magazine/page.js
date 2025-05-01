"use client";

import Footer from '../components/Footer';
import Menu from '../components/Menu';
import PDFViewer from '../components/PDFViewer';

export default function MagazinePage() {
  return (
    <div className="container">
      <Menu/>
      <PDFViewer pdfPath="/prueba.pdf" />
      <Footer/>
    </div>
  );
}