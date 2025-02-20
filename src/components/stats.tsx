export default function Stats(){
    return(
        <div className="my-48 bg-repeat text-primary heropattern-circuitboard-green-600 ">
            <div className="bg-black/5 bg-gradient-to-r from-black via-transparent to-black">
                <div className="backdrop-blur-[1px] bg-gradient-to-b from-black via-transparent to-black">
                    <div className=" flex justify-center">
                        <div className="h-64 max-w-[1280px] min-w-[1280px] grid grid-cols-3 gap-8">
                            {Statval("3000", "Users")}
                            {Statval("3000", "Users")}
                            {Statval("3000", "Users")}
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        
    )
}

function Statval(val:string, text:string){
    return(
        <div className="flex text-foreground items-center justify-center">
            <div className="text-center">
                <p className="text-6xl font-normal">{val}</p>
                <p className="text-lg font-normal">{text}</p>

            </div>
                    

        </div>


    )
}