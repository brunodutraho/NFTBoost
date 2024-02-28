'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

import IconBoost from "@/assets/icon-boost.svg"
import SmallNft01 from "@/assets/nft-small-01.png"
import SmallNft02 from "@/assets/nft-small-02.png"
import GooglePlay from "@/assets/google-play.svg"
import AppStory from "@/assets/app-story.svg"

export function AreaText() {

    const areaTextRef = useRef(null);
    const googleRef = useRef(null);
    const appleRef = useRef(null);
    const circleRef = useRef(null);
    const textPrimaryRef = useRef(null)

    useEffect(() => {
        const areaText = areaTextRef.current;
        const google = googleRef.current;
        const apple = appleRef.current;
        const circle = circleRef.current;
        const textPrimary = textPrimaryRef.current;

        const tl = gsap.timeline()

        tl.fromTo(areaText, {
            opacity: 0,
            y: 20,

        }, {
            y: 0,
            opacity: 1,
            duration: 1,
        }, "start").fromTo(google, {
            opacity: 0,
            x: -30,
        }, {
            opacity: 1,
            duration: 1,
            x: 0,
        }, ">-0.5").fromTo(apple, {
            opacity: 0,
            x: 30,
        }, {
            opacity: 1,
            duration: 1,
            x: 0,
        }, ">-1").fromTo(circle, {
            opacity: 0,
            xPercent: 90,
        }, {
            opacity: 1,
            duration: 1,
            xPercent: 0,
        }, "start+=0.5").fromTo(textPrimary, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
        }, "start+=1")
    }, []);

    return (
        <>
            <div ref={areaTextRef} className="flex flex-col items-center px-3 opacity-0">

                <h3 ref={textPrimaryRef} className="flex items-center gap-1 text-xs mb-3 font-inter opacity-0
                @mobileMini:gap-2
                @mobileMini:text-sm
                @tablet:text-base

                ">
                    <Image
                        src={IconBoost}
                        alt="Icon Boost"
                        
                    />
                    <span>Adentre um reino de possibilidades infinitas</span>
                </h3>
                <h1 className="text-center font-poppins text-4xl/normal font-semibold mb-4 max-w-96
                
                @mobileMini:text-5xl/normal
                @tablet:max-w-full
                @tablet:text-6xl/normal
                @laptop:text-7xl/normal
                ">
                    Explore um Universo
                    <div className="inline-block w-28 rounded-full align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5
                    
                    @tablet:w-32
                    
                    ">
                        <Image
                            src={SmallNft01}
                            alt="Small NFT 1"
                            className="w-11 @tablet:w-14 opacity-0"
                            ref={circleRef}
                        />
                    </div>
                    Digital de
                    <Image
                        src={SmallNft02}
                        alt="Small NFT 2"
                        className="inline-block w-20  mx-2 align-middle @tablet:w-24"
                    />
                    Colecionáveis Únicos!
                </h1>
                <p className="max-w-80 text-sm/5 text-center font-inter mb-6
                @tablet:max-w-p-section-hero @tablet:text-base/normal

                @laptop:text-xl/normal @laptop:mb-9
                
                ">
                    Adentre um reino de possibilidades infinitas e mergulhe nas coleções de NFT, onde a arte, a cultura e a inovação se unem para criar experiências verdadeiramente exclusivas.
                </p>

            </div>

            <div className="flex flex-col items-center justify-center mb-12
                
                @tablet:flex-row @tablet:gap-6 @tablet:mb-16
                @laptop:mb-20

                ">
                <Link ref={googleRef} href="https://play.google.com/" target="_blank" className="opacity-0">
                    <Image
                        src={GooglePlay}
                        alt="Google Play"
                        className="mb-4 @tablet:mb-0"
                    />
                </Link>

                <Link ref={appleRef} href="https://www.apple.com/br/app-store/" target="_blank" className="opacity-0">
                    <Image
                        src={AppStory}
                        alt="App Story"
                    />
                </Link>

            </div>
        </>
    )
}