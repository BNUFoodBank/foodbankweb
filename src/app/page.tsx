import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/components/Navigation/Navbar";
import Underline from "@/components/Home/Underline";
import HomeImage from "@/components/Home/HomeImage";
import Map from "@/components/Maps/GoogleMap";
import Footer from "@/components/Navigation/Footer";


export default function page() {
    return (
        <>
        <div>
            <Navbar/>
            <Underline/>
            <HomeImage/>
            <Map/>
            <Underline/>
        </div>
        </>
    )
}
