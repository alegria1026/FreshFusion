import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import styles from "./page.module.css"

export default function kits() {
  const kit = [
    {
      id: 1,
      title: 'SOBREPESO',
      image: '/kit1.png',
      link: '/infographic/kitsobrepeso'
    },
    {
      id: 2,
      title: 'DIABETES',
      image: '/kit2.png',
      link: '/infographic/balancebox'
    },
    {
      id: 3,
      title: 'DESNUTIRICIÓN',
      image: '/kit3.png',
      link: '/infographic/kitdenutricion'
    }
  ];

  const infunsiones = [
    {
      id: 1,
      title: 'SOBREPESO',
      image: '/infu1.png',
      link: '/infographic/infusobrepeso'
    },
    {
      id: 2,
      title: 'DIABETES',
      image: '/infu2.png',
      link: '/infographic/infudiabetes'
    },
    {
      id: 3,
      title: 'DESNUTIRICIÓN',
      image: '/infu3.png',
      link: '/infographic/infudesnutricion'
    }
  ];
  return (
    <div>
      <h1 className={styles.title}>PRODUCTOS</h1>
      <Menu />
      <Carousel 
        title="KITS" 
        products={kit} 
      />
      <Carousel 
        title="INFUSIONES" 
        products={infunsiones} 
      />
      <Footer />            
    </div>
  );
}