import { ContainerGrid } from "./container";
import GooglePlay from "@/assets/google-play.svg"
import AppStory from "@/assets/app-story.svg"
import Link from "next/link";
import Image from "next/image";

export function SectionBanner() {
    return (
        <section className="pt-20 @desktop:pt-28 px-3">
            <ContainerGrid className="py-16 bg-banner-mobile bg-cover bg-no-repeat bg-center w-full object-cover rounded-xl h-area-grid-banner-mobile-fold 
            @mobileMini:h-area-grid-banner-mobile 
            @tablet:h-area-grid-banner @tablet:bg-banner 
            @desktop:py-20"
            >

                <div className="flex flex-col w-full items-center justify-center text-center">
                    <h2 className="text-4xl @tablet:text-title-banner-tablet @desktop:text-title-banner font-poppins text-center @laptop:w-area-banner font-semibold mb-4">Abra as Portas para a Próxima Revolução Digital!</h2>
                    <p className="text-base @tablet:text-lg @desktop:text-xl text-center mb-6">Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo Digital. Sua Oportunidade, Sua História</p>
                </div>
                <div className="flex flex-col @tablet:flex-row @tablet:gap-x-6 items-center justify-center">
                <Link href="https://play.google.com/" target="_blank">
                        <Image
                        src={GooglePlay}
                        alt="Google Play"
                        className="w-40 mb-4 @tablet:mb-0 @tablet:w-full"
                    />
                    </Link>
                    
                    <Link href="https://www.apple.com/br/app-store/" target="_blank">
                        <Image
                        src={AppStory}
                        alt="App Story"
                        className="w-36 @tablet:w-full"
                    />
                    </Link>
                    
                </div>
            </ContainerGrid>
        </section>
    )
}