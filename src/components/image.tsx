'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BorderBeam } from './ui/border-beam'


export default function Image() {
   const ref = useRef(null)
   const inView = useInView(ref, { once: true, margin: '-100px' })
return (
    <div
        className="relative mx-auto mt-36 max-w-7xl text-center md:px-8 sm:px-1"
    >
        <div
            ref={ref}
            className="animate-fade-up relative opacity-0  [CSSPerspective:2000px] after:absolute after:inset-0]"
        >
            <div
                className={`group border-4 border-gray-800 rounded-[16px] bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
            inView ? 'before:animate-image-glow' : ''
         }`}
            >
                <BorderBeam
                    size={128}
                    colorFrom='#'
                />
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-neutral-300 via-transparent to-transparent opacity-40 rounded-tl-[16px] group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-transparent group-hover:via-transparent"></div>
                
                    <img
                        src="/hero-dark.png"
                        alt="Hero Image"
                        className="relative hidden size-full rounded-[inherit] border-0 object-contain dark:block"
                    />
                    <img
                        src="/hero-light.png"
                        alt="Hero Image"
                        className="relative block size-full rounded-[inherit]  border object-contain dark:hidden"
                    />
                

                
            </div>
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
    </div>
)
}