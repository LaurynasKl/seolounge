import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Services } from "../components/Services";

export function DemoPage(){
    return (
        <>
        <Header />
        <main>
            <Services />
        </main>
        <Footer />
        </>
    );
}