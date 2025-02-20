const features = [
    {
      title: "Built for developers",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online." ,
      icon: "<code_icon />",
    },
    {
      title: "Ease of use",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: "<ease_icon />",
    },
    {
      title: "Pricing like no other",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: "<pricing_icon />",
    },
    {
      title: "100% Uptime",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: "<uptime_icon />",
    }
]
const features2 = [
    {
      title: "Low Latency Gaming",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: "<gaming_icon />",
    },
    {
      title: "Bypass Restrictions",
      description: "Bypass network restrictions effortlessly and access the online world without limitations with VPNet.",
      icon: "<restriction_icon />",
    },
    {
      title: "Blazing Speeds",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: "<speed_icon />",
    },
    {
      title: "24/7 Support",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: "<support_icon />",
    },
  ];
  
  export default function Features() {
    return (
      <section className="bg-background text-white py-12 px-6">
        <div className="mx-auto max-w-max text-center">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 w-80 h-40 bg-background text-left transition duration-300 ease-in-out hover:bg-opacity-50 hover:bg-gradient-to-t hover:from-neutral-900 hover:to-transparent backdrop-blur-md border-x border-b border-opacity-50 border-gray-700 relative" 
              >
                {/*<div className="mb-4 text-green-400 text-3xl">{feature.icon}</div>*/}
                <h3 className="px-4 text-lg font-bold text-primary">{feature.title}</h3>
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
                className="p-6 w-80 h-40 bg-background text-left transition duration-300 ease-in-out hover:bg-opacity-50 hover:bg-gradient-to-b hover:from-neutral-900 hover:to-transparent backdrop-blur-md border-x border-t border-opacity-50 border-gray-700 relative" 
              >
                {/*<div className="mb-4 text-green-400 text-3xl">{feature.icon}</div>*/}
                <h3 className="px-4 text-lg font-bold text-primary">{features2.title}</h3>
                <p className="px-4 mt-2 text-sm font-light text-primary-foreground">{features2.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  