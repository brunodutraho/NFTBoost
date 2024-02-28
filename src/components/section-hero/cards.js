'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";

import CardLeft from "@/assets/card-imgs-left.png"
import CardRight from "@/assets/card-imgs-right.png"
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);




export function CardsHero() {

    const areaCardsRef = useRef(null);
    const cardLeftRef = useRef(null);
    const cardRightRef = useRef(null);



    useEffect(() => {
        const areaCards = areaCardsRef.current;
        const cardLeft = cardLeftRef.current;
        const cardRight = cardRightRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: areaCards,
                start: '400 center',
                end: '500 top',
                scrub: true,
            }
        });

        tl.to(cardLeft, {
            opacity: 1,
            left: 0,
            duration: 1,
        }, 0).to(cardRight, {
            opacity: 1,
            right: 0,
            duration: 1,
        }, 0)


    }, []);

    return (
        <div className="relative w-area-cards-mobile h-area-cards-mobile 
        @laptop:w-full @laptop:h-area-cards-leptop
        ">
            <Image
                src={CardLeft}
                alt="Cards NFT Left"
                className="absolute top-0 left-8 w-1/2 z-10 @desktop:w-auto @desktop:h-full @desktop:left-[6%]"
                quality={100}
                ref={cardLeftRef}
            />
            <Image
                src={CardRight}
                alt="Cards NFT Right"
                className="absolute top-0 right-8 w-1/2 @desktop:w-auto @desktop:h-full @desktop:right-[6%]"
                quality={100}
                ref={cardRightRef}
            />
        </div>
    )
}