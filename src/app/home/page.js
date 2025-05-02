import Benefits from "@/app/components/Benefits"
import Carousel from "@/app/components/ProductCarousel"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import UsSummary from "@/app/components/UsSummary"


function Incio() {
    const products = [
        {
            id: 1,
            title: 'KIT DIABETES',
            image: '/diabetes-kit.jpg' // Ruta desde public/
        },
        {
            id: 2,
            title: 'SNACKS SALUDABLES',
            image: '/healthy-snacks.jpg'
        }
    ];
        
    return (
        <main>
            <Header></Header>
            <UsSummary></UsSummary>
            <Benefits></Benefits>
            <Carousel products={products}></Carousel>
            <Footer></Footer>
        </main>
    )
}

export default Incio