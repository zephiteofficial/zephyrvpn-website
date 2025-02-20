import Nav from "../components/nav";
const About = () => {
    return (
    <div className="bg-background flex flex-col flex-1 min-h-screen max-h-screen overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center text-foreground">
        <div className="flex w-full max-w-4xl px-4">
          <div className="flex flex-col items-start justify-center flex-1 mb-40">
            <h1 className="text-6xl font-semibold mb-4">About</h1>
          </div>
          <div className="flex items-center justify-center mb-40 mx-48">
            <div className="h-[500px] w-[2px] bg-primary-foreground rounded-xs"></div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-lg font-light overflow-hidden text-justify mb-36 pl-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

          </div>
        </div>
      </div>
    </div>
    );
}

export default About
