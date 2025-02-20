import PricingCard from "./pricing_card";
const Pricing = ()=> {
    tiers: [
        {
            name: "Lite"
        }
    ]
    return(
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 mt-40">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-semibold leading-7 text-primary">Pricing</h1>
                <p className="mt-2 text-4xl tracking-tight text-primary-foreground sm:text-5xl pb-10">Pricing Plans that fit your needs</p>
            </div>
            <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-center">
                {PricingCard('Lite','69', 'Dip your toes into greatness', '5 GB', '1 Simultaneous Device')}
                {PricingCard('Basic','139', 'Elevate your Experience', '40 GB', '2 Simultaneous Devices')}
                {PricingCard('Standard','279', 'For the ambitious achievers', '120 GB', '4 Simultaneous Devices')}
                {PricingCard('Plus','449', 'Unleash the Ultimate potential', '300 GB', '6 Simultaneous Device')}

                </div>
            </div>
            

    );
}

export default Pricing