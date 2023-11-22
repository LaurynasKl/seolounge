import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Register } from "../sections/Register";

export function RegisterPage(){
    return (
        <>
        <Header />
        <main className="">
            <Register />
        </main>
        <Footer />
        </>
    );
}