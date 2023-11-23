import { BussinesGrow } from "../sections/BussinessGrow";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { HowCanWeHelp } from "../sections/HowCanWeHelp";
import { Services } from "../sections/Services";

export function HomePage(){
    return (
        <>
        <Header />
        <main>
            <Hero />
            <Services limit={3}/>
            <BussinesGrow />
            <HowCanWeHelp />
        </main>
        <Footer />
        </>
    );
}