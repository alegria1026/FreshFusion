"use client";

import WhatsAppFloat from '../components/WhatsAppFloat';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import PDFViewer from '../components/PDFViewer';

export default function MagazinePage() {
  return (
    <div className="container">
      <Menu />
      <WhatsAppFloat />
      <PDFViewer />
      <Footer/>
    </div>
  );
}