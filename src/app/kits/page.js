import Carousel from "../components/Carousel";
import Menu from "../components/Menu";

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
      <Menu />
      <br />
      <br />
      <br />
      <br />
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