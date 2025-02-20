
const Home = () => {
    return (
    <div className='bg-background flex flex-col flex-1'>
      <div id="home" className="w-screen h-auto flex flex-col flex-1 items-center justify-center text-foreground">
            <div className="text-center w-full mb-32">
                <h1 className="text-5xl font-semibold mb-4">Zephyr</h1>
                <p className="text-xl mb-8 font-light text-muted-foreground">The One-Stop VPN for all college students.</p>
                <div className="flex justify-center gap-4">
                    <button className="bg-primary text-background font-semibold px-6 py-3 rounded-md transition-all duration-100 hover:bg-green-700 active:bg-muted-primary hover:outline-none">
                        Get Started
                    </button>
                    <button className="outline outline-2 font-base outline-accent text-primary-foreground px-6 py-3 rounded-md transition-all duration-100 hover:bg-primary active:bg-muted-primary hover:text-background hover:font-semibold hover:outline-none">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Home
