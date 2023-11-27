import { BussinesGrow } from "../sections/BussinessGrow";
import { Hero } from "../sections/Hero";
import { HowCanWeHelp } from "../sections/HowCanWeHelp";
import { Services } from "../sections/Services";

export function HomePage(){
    return (
        <>
            <Hero />
            <Services limit={3}/>
            <BussinesGrow />
            <HowCanWeHelp />
        </>
    );
}