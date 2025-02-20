
import Features from "../components/feature";
import HeroSection from "../components/hero";
import Image from "../components/image";
import Stats from "../components/stats";

export default function Home(){
    return(
        <>
            <div className='bg-background'>
                <HeroSection/>
                <Stats/>
                <Features />
                <Image />
            </div> 
            
        </>
        )
}