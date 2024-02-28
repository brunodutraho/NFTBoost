'use client'

import { useEffect, useRef } from "react";
import { CardCollectors } from "../card-collectors"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function CardsSectionCollectors({ data }) {
    const areaSlideRef = useRef(null)

    useEffect(() => {
        const areaSlide = areaSlideRef.current;

        gsap.fromTo(areaSlide, {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 2,
            scrollTrigger: {
                trigger: areaSlide,
                start: 'top-=400 center-=300',

            }
        })
    }, [])

    return (
        <>
<div ref={areaSlideRef} className="grid grid-cols-1 items-center @tablet:grid-cols-2 gap-x-4 @laptop:grid-cols-2 @desktop:gap-x-9 gap-y-4"> 
        {
            data.map(({position, image, name, value_btc, percent }, index) => (
                

                    < CardCollectors 
                        key={index}
                        position={index + 1}
                        image={image}
                        name={name}
                        value_btc={value_btc}
                        percent={percent}
                    />
                
            ))

        }</div>
        </>

        
    )
}