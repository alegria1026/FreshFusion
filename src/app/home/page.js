import Benefits from "@/app/components/Benefits"
import Carousel from "@/app/components/ProductCarousel"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import UsSummary from "@/app/components/UsSummary"


function Incio() {
    const products = [
        {
            id: 1,
            title: 'KITS SALUDABLES',
            image: '/cat1.webp'
        },
        {
            id: 2,
            title: 'INFUSIONES',
            image: '/cat2.jpg'
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