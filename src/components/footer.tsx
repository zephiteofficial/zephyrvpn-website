
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
export default function Footer(){
    return (
        <footer className="relative text-foreground pt-16 px-6 bg-transparent">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start max-w-[1280px]">

                    <div className="text-lg font-semibold">ZEPHYR</div>
                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold text-base mb-2">Product</h3>
                            <ul className="space-y-1">
                                <li><a href="https://dash.zephyrvpn.com/" className="text-neutral-400 text-base font-light hover:text-foreground duration-300">VPN</a></li>
                                <li><a href="#/plans" className="text-neutral-400 text-base font-light hover:text-foreground duration-300">Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base mb-2">Community</h3>
                            <ul className="space-y-1">
                                <li><a href="https://chat.whatsapp.com/EzpMuTqsept5iMMFBO0nbf" className="text-neutral-400 text-base font-light hover:text-foreground duration-300">WhatsApp</a></li>
                                
                                <li><a href="mailto:support@vp-net.org" className="text-neutral-400 text-base font-light hover:text-foreground duration-300">Email</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base mb-2">Legal</h3>
                            <ul className="space-y-1">
                                <li><a href="#/privacy" className="text-neutral-400 text-base font-light hover:text-foreground duration-300">Privacy</a></li>
                                <li><a href="#/terms" className="text-neutral-400 text-base font-light hover:text-foreground duration-300">Terms</a></li>
                                <li><a href="#/return" className="text-neutral-400 text-base font-light hover:text-foreground duration-300">Refund</a></li>
                            </ul>
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div className="pb-8 pt-16 pr-12 container mx-auto flex flex-col md:flex-row justify-between items-start max-w-[1280px] border-gray-700">
                        <div className="flex space-x-4">
                            
                            <a href="mailto:support@vp-net.org" className="text-gray-400 hover:text-green-400"><FaEnvelope size-4 /></a>
                            <a href="https://chat.whatsapp.com/EzpMuTqsept5iMMFBO0nbf" className="text-gray-400 hover:text-green-400"><FaWhatsapp size-4 /></a>
                        </div>
                        <div className="text-gray-400 text-sm">Copyright &copy; 2025 ZephyrVPN. All Rights Reserved.</div>
                    </div>
                
                

        </footer>
        
    )
}

 