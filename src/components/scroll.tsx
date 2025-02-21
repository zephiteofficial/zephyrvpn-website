import { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null); // Explicitly define the ref type

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });

        if (ref.current) {  // Ensure ref.current is not null before observing
            scrollObserver.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);

    const classes = `transition-opacity duration-300 
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

export default RevealOnScroll;
