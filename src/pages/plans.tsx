import Pricing from '../components/pricing';
const Plans = () => {
    return (
        <div className="bg-transparent mt-32 flex w-screen  items-center text-primary-foreground heropattern-circuitboard-neutral-400 overflow-y-hidden">                        
            <div className="bg-gradient-to-r from-black/60 via-black/20 to-back/60">
                <div className="bg-gradient-to-b from-black via-black/20 to-back">
                    <div className="bg-gradient-to-l from-black/60 via-black/20 to-back/60">
                        <div className="bg-gradient-to-t from-black via-black/20 to-back">
                            <div className='h-[1600px] md:h-[1024px] lg:h-[768px] w-screen pt-32 px-8 backdrop-blur-xs'>
                                <Pricing />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Plans
