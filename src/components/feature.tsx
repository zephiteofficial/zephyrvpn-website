import {
    IconLock,
    IconDevices,
    IconCurrencyDollar,
    IconServer,
    IconRocket,
    IconDevicesPlus,
    IconMask,
    IconUsers
  } from "@tabler/icons-react";

const features = [
    {
      title: "Bypass Restrictions",
      description: "Break free from network limitations with ZephyrVPN. Access your favorite content, games, and websites regardless of regional or network restrictions.",
      icon: <IconLock  />,
    },
    {
      title: "Multi-Platform Support",
      description: "Enjoy seamless protection across PC, console, and mobile devices with ZephyrVPN. One subscription covers all your gaming platforms with optimized connections.",
      icon: <IconDevices  />,
    },
    {
      title: "Affordable Pricing",
      description: "Get premium protection without the premium price tag. Our flexible plans fit every budget while delivering enterprise-grade performance benefits.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "99% Uptime",
      description: "Our reliable network infrastructure ensures you stay connected at all times. Never worry during your crucial gaming moments.",
      icon: <IconServer  />,
    }
];

const features2 = [
    {
      title: "Low Latency Gaming",
      description: "Dominate your gaming sessions with our optimized servers. Experience minimal ping, reduced packet loss, and the competitive edge you need to win matches.",
      icon: <IconRocket  />,
    },
    {
      title: "Simultaneous Devices",
      description: "Connect multiple devices simultaneously with a single subscription. Protect your gaming PC, mobile, and console all at once without additional charges.",
      icon: <IconDevicesPlus  />,
    },
    {
      title: "Digital Invisibility",
      description: "Cloak your online presence with ZephyrVPN's advanced encryption. Browse and play with complete anonymity, leaving no digital footprints for trackers.",
      icon: <IconMask  />,
    },
    {
      title: "Community First",
      description: "Find solutions in our active user community where fellow gamers share their experiences and troubleshooting tips while waiting for official support responses.",
      icon: <IconUsers  />,
    },
];

  
  export default function Features() {
    return (
      <section className="bg-transparent text-foreground pb-16 px-6">
        <div className="mx-auto max-w-max text-center">
          <h2 className="text-3xl font-bold mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 w-80 h-42 bg-transparent text-left transition duration-300 ease-in-out hover:bg-opacity-50 hover:bg-gradient-to-t hover:from-neutral-900 hover:to-transparent backdrop-blur-md border-x border-b border-opacity-50 border-neutral-900 relative" 
              >
                <div className="mb-4 group-hover:text-primary transition-all ease-in-out duration-300 text-foreground text-3xl">{feature.icon}</div>
                <h3 className="px-4 text-lg group-hover:px-6 transition-all ease-in-out duration-300 font-bold text-primary">{feature.title}</h3>
                <p className="px-4 mt-2 text-sm font-light text-primary-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-max text-center">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {features2.map((features2, index2) => (
              <div
                key={index2}
                className="group p-6 w-80 h-42 bg-transparent text-left transition duration-300 ease-in-out hover:bg-opacity-50 hover:bg-gradient-to-b hover:from-neutral-900 hover:to-transparent backdrop-blur-md border-x border-t border-opacity-50 border-neutral-900 relative" 
              >
                <div className="mb-4 text-foreground group-hover:text-primary transition-all ease-in-out duration-300 text-3xl">{features2.icon}</div>
                <h3 className="px-4 text-lg font-bold text-primary group-hover:px-6 transition-all duration-300 ease-in-out">{features2.title}</h3>
                <p className="px-4 mt-2 text-sm font-light text-primary-foreground">{features2.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  