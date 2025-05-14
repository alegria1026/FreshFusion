import Menu from "@/app/components/Menu";
import Infographic from "@/app/components/Infographic";
import Footer from "@/app/components/Footer";

export default function infusobrepeso () {
    return (
        <div>
            <Menu />
            <Infographic
                imagenPath="/is.png"
                altText="Infografía sobre alimentación saludable"
            />
            <Footer />
        </div>
      );
}
