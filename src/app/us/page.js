import UsIntroduction from "../components/UsIntroduction"
import Menu from "../components/Menu"
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function us() {
    return (
        <div>
            <Menu />
            <WhatsAppFloat />
            <UsIntroduction />
            <MissionVision />
            <Footer />
        </div>
    );
}