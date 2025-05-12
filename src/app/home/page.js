import Benefits from "@/app/components/Benefits"
import Carousel from "@/app/components/Carousel"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import UsSummary from "@/app/components/UsSummary"
import WhatsAppFloat from "../components/WhatsAppFloat"


function Incio() {
    const products = [
        {
            id: 1,
            title: 'KITS SALUDABLES',
            image: '/cat1.png'
        },
        {
            id: 2,
            title: 'INFUSIONES',
            image: '/cat2.png'
        },
        {
            id: 3,
            title: 'PROTEINAS',
            image: '/variasproteinas.png'
        }
    ];
    
    return (
        <main>
            <Header></Header>
            <WhatsAppFloat/>
            <UsSummary></UsSummary>
            <Benefits></Benefits>
            <Carousel 
                title="Categorías" 
                products={products} 
            />
            <Footer></Footer>
        </main>
    )
}

export default Incio