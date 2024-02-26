import Image from "next/image";
import { ContainerGrid } from "../container";

import IconBoost from "@/assets/icon-boost.svg"
import SmallNft01 from "@/assets/nft-small-01.png"
import SmallNft02 from "@/assets/nft-small-02.png"
import GooglePlay from "@/assets/google-play.svg"
import AppStory from "@/assets/app-story.svg"
import { CardsHero } from "./cards";
import Link from "next/link";

export function SectionHero() {
    return (
        <section className="pt-36 overflow-hidden bg-hero-pattern bg-no-repeat bg-top ">
            <ContainerGrid className="flex flex-col items-center text-center ">
                <h3 className="flex items-center gap-1 text-xs mb-3 font-inter
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
                            className="w-11 @tablet:w-14"
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
                <div className="flex flex-col items-center justify-center mb-12
                
                @tablet:flex-row @tablet:gap-6 @tablet:mb-16
                @laptop:mb-20

                ">
                    <Link href="https://play.google.com/" target="_blank">
                        <Image
                        src={GooglePlay}
                        alt="Google Play"
                        className="mb-4 @tablet:mb-0"
                    />
                    </Link>
                    
                    <Link href="https://www.apple.com/br/app-store/" target="_blank">
                        <Image
                        src={AppStory}
                        alt="App Story"
                    />
                    </Link>
                    
                </div>
                <CardsHero/>
                <div className="w-full h-2 border-t-2  border-white border-opacity-5 mt-10
                @desktop:mt-36">

                </div>
            </ContainerGrid>
        </section>
    )
}