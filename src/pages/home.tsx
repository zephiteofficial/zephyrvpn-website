
import Features from "../components/feature";
import CallToActionSection from "../components/cta-animation";

import Stats from "../components/stats";
import RevealOnScroll from "../components/scroll";

export default function Home(){
    return(
        <>
            <div className='bg-background bg-flex w-auto h-auto overflow-y-hidden'>

                <CallToActionSection/>
                <RevealOnScroll>
                <Stats/>
                </RevealOnScroll>
                
                <RevealOnScroll>
                    <Features />    
                </RevealOnScroll>
                
            </div> 
            
        </>
        )
}

