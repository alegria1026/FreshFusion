import Benefits from "@/app/components/Benefits"
import Carousel from "@/app/components/ProductCarousel"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import UsSummary from "@/app/components/UsSummary"


function Incio() {
    return (
        <main>
            <Header></Header>
            <UsSummary></UsSummary>
            <Benefits></Benefits>
            <Carousel></Carousel>
            <Footer></Footer>
        </main>
    )
}

export default Incio