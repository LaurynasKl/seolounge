import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Login } from "../sections/Login";

export function RegisterPage(){
    return (
        <>
        <Header />
        <main class="">
            <Login />
        </main>
        <Footer />
        </>
    );
}