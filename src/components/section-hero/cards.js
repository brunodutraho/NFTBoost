import Image from "next/image";

import CardLeft from "@/assets/card-imgs-left.png"
import CardRight from "@/assets/card-imgs-right.png"

export function CardsHero() {
    return (
        <div className="relative w-area-cards-mobile h-area-cards-mobile 
        @laptop:w-full @laptop:h-area-cards-leptop
        ">
            <Image
                src={CardLeft}
                alt="Cards NFT Left"
                className="absolute top-0 left-8 w-1/2 z-10 @desktop:w-auto @desktop:h-auto @desktop:left-0"
                quality={100}
            />
            <Image
                src={CardRight}
                alt="Cards NFT Right"
                className="absolute top-0 right-8 w-1/2 @desktop:w-auto @desktop:h-auto @desktop:right-0"
                quality={100}
            />
        </div>
    )
}