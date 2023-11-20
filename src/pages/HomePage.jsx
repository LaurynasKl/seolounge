import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Services } from "../components/Services";

export function HomePage(){
    return (
        <>
        <Header />
        <main>
            <Services />
            <Services />
        </main>
        <Footer />
        </>
    );
}