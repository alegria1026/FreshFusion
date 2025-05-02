import Menu from "@/app/components/Menu";
import Infographic from "../../components/Infographic";
import Footer from "@/app/components/Footer";

export default function kitdenutricion () {
    return (
        <div>
            <Menu />
            <Infographic 
            imagenPath="/desnutricion.png"
            altText="Infografía sobre alimentación saludable"
            />
            <Footer />
        </div>
      );
}