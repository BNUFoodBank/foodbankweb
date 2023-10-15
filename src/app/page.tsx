import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/components/Navigation/Navbar";
import HomeImage from "@/components/Home/HomeImage";
import Map from "@/components/Home/Map";
import Underline from "@/components/Home/Underline";
import Database from "@/components/Home/Database";
import Footer from "@/components/Navigation/Footer";


export default function Home() {
    return (

        <div>
            <Navbar/>
            <Underline/>
            <HomeImage/>
            <Map/>
            <Underline/>
            <Database/>
            <Underline/>
            <Footer />
        </div>

    )
}
