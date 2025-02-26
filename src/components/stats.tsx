export default function Stats() {
    return (
        <div className="animate-fade-up bg-repeat text-primary heropattern-topography-green-600/50">
            <div className="bg-gradient-to-r from-black via-transparent to-black">
                <div className="bg-gradient-to-b from-black via-transparent to-black">
                    <div className="bg-gradient-to-l from-black via-transparent to-black">
                        <div className="backdrop-blur-[1px] bg-gradient-to-t from-black via-transparent to-black">
                            <div className=" flex justify-center py-0 mb-20 md:py-16 md:mt-8">
                                <div className="h-64 w-auto grid grid-cols-3 gap-4 md:gap-8">
                                    {Statval("10+", "Servers")}
                                    {Statval("100%", "Safe")}
                                    {Statval("1000+", "Users")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function Statval(val: string, text: string) {
    return (
        <div className="flex text-foreground items-center justify-center">
            <div className="text-center">
                <p className="text-4xl md:text-6xl  font-normal">{val}</p>
                <p className="text-base font-light text-center">{text}</p>
            </div>
        </div>
    )
}