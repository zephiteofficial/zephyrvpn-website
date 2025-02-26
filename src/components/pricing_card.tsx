export default function PricingCard(planName:string,planPrice:string, planDesc: string, bandwidth: string, deviceLimit:string){
    return (
        <div className="rounded-xl border-neutral-900 hober:border-muted-primary border-[0.5px] animate-fade-up backdrop-blur-2xl bg-repeat heropattern-topography-neutral-700">
            <div className="rounded-xl bg-black/5 bg-gradient-to-l from-black to-black/50">
                    <div className="rounded-xl group border border-opacity-50 border-neutral-900 shadow-sm bg-inherit hover:bg-opacity-60 hover:bg-gradient-to-t hover:from-neutral-900 hover:to-transparent via-transparent transition-all ease-in-out duration-300">
                        <div className="flex flex-col space-y-1.5 p-6 pb-4">
                            <h3 className="group-hover:pl-2 transition-all ease-in-out duration-300 font-semibold tracking-tight text-xl text-primary">{planName}</h3>
                            <h3 className="tracking-tight text-2xl font-semibold">
                                <div className="flex items-center">
                                    ₹ {planPrice}
                                    <p className="text-lg font-semibold ml-1 mt-1">/ month</p>
                                </div>
                            </h3>
                            <h3 className="tracking-tight text-base font-medium text-muted-foreground">
                                <p className="h-6">{planDesc}</p>
                            </h3>
                        </div>
                        <div className="p-6 pt-0">
                            {planFeatureDescription(`${bandwidth} of Premium Bandwidth`)}
                            {planFeatureDescription(`${deviceLimit}`)}
                            {planFeatureDescription('Unlimited Basic Bandwidth')}
                        </div>
                    </div>
                </div>
            </div>
                
    )
}

function planFeatureDescription(text:string){
    return(
        <div className="flex items-start">
        <div>
            <svg  className="display: inline w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>                                
            </svg>
            <p className="display: inline text-base ml-0 font-light text-secondary-foreground"> {text}</p>
        </div>
        </div>
    )
}