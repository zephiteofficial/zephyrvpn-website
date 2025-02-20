
import Features from "../components/feature";
import HeroSection from "../components/hero";

export default function Home(){
    return(
        <>
            <div className='bg-background'>
                <HeroSection/>
                <div>
                            <Features />
                            
                </div>
            </div> 
        </>
        )
}