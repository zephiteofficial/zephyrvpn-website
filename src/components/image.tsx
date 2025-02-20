'use client'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BorderBeam } from './ui/border-beam'


export default function Image() {
   const ref = useRef(null)
   const inView = useInView(ref, { once: true, margin: '-100px' })
return (
    <section
        className="relative mx-auto mt-32 max-w-7xl px-7 text-center md:px-8 sm:px-1 "
    >
        <div
            ref={ref}
            className="animate-fade-up relative mt-32 opacity-0  [CSSPerspective:2000px] after:absolute after:inset-0]"
        >
            <div
                className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
            inView ? 'before:animate-image-glow' : ''
         }`}
            >
                <BorderBeam
                    size={200}
                    duration={12}
                    delay={11}
                    colorFrom="#c7ffb9"
                    colorTo="#52ff14"
                />

                <img
                    src="src\components\assets\hero-dark.png"
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
    </section>
)
}