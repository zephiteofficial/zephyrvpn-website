
import Features from "../components/feature";
import HeroSection from "../components/hero";

import Stats from "../components/stats";
import RevealOnScroll from "../components/scroll";

export default function Home(){
    return(
        <>
            <div className='bg-background bg-flex w-auto h-auto overflow-y-hidden'>

                <HeroSection/>
                <RevealOnScroll>
                    <div className="my-24">
                        <Stats/>
                    </div>
                </RevealOnScroll>
                
                <RevealOnScroll>
                    <Features />    
                </RevealOnScroll>
                
            </div> 
            
        </>
        )
}

