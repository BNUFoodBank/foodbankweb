import Navbar from "@/components/Navigation/Navbar";
import GrayBox from '@/components/Home/GrayBox';
import HomeContent from "@/components/Home/HomeContent";
import Footer from "@/components/Navigation/Footer";
import Grid from "@/components/Home/Grid";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <HomeContent/>
            <GrayBox/>
            <Grid />
            <Footer />
        </main>
    )
}
