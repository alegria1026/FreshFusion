import Menu from "@/app/components/Menu";
import Infographic from "../../components/Infographic";
import Footer from "@/app/components/Footer";

export default function balacebox () {
    return (
        <div>
            <Menu />
            <Infographic 
            imagenPath="/balance.png"
            altText="Infografía sobre alimentación saludable"
            />
            <Footer />
        </div>
      );
}
