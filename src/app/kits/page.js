import Carousel from "../components/Carousel";
import Menu from "../components/Menu";
import styles from "./page.module.css"

export default function kits() {
  const kit = [
    {
      id: 1,
      title: 'KITS DIABETES',
      image: '/diabetes-kit.jpg',
      link: '/productos/diabetes'
    },
    {
      id: 2,
      title: 'COMIDA ORGÁNICA',
      image: '/organic-food.jpg',
      link: '/productos/organicos'
    },
    {
      id: 3,
      title: 'SNACKS SALUDABLES',
      image: '/healthy-snacks.jpg',
      link: '/productos/snacks'
    }
  ];

  const infunsiones = [
    {
      id: 1,
      title: 'KITS DIABETES',
      image: '/diabetes-kit.jpg',
      link: '/productos/diabetes'
    },
    {
      id: 2,
      title: 'COMIDA ORGÁNICA',
      image: '/organic-food.jpg',
      link: '/productos/organicos'
    },
    {
      id: 3,
      title: 'SNACKS SALUDABLES',
      image: '/healthy-snacks.jpg',
      link: '/productos/snacks'
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
        products={kit} 
      />            
    </div>
  );
}