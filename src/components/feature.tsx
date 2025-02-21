import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconCloudStorm,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

const features = [
    {
      title: "Built for developers",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online." ,
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: <IconCurrencyDollar  />,
    },
    {
      title: "100% Uptime",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: <IconCloud />,
    }
]
const features2 = [
    {
      title: "Low Latency Gaming",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Bypass Restrictions",
      description: "Bypass network restrictions effortlessly and access the online world without limitations with VPNet.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Blazing Speeds",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: <IconCloudStorm />,
    },
    {
      title: "24/7 Support",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: <IconHelp />,
    },
  ];
  
  export default function Features() {
    return (
      <section className="bg-transparent text-foreground py-16 px-6">
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
  