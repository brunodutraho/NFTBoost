import { ContainerGrid } from "../container";
import { AreaText } from "./area-text";
import { CardsHero } from "./cards";



export function SectionHero() {
    return (
        <section className="pt-36 overflow-hidden bg-hero-pattern bg-no-repeat bg-top px-3">
            <ContainerGrid className="flex flex-col items-center text-center px-3">
                
                <AreaText/>

                <CardsHero/>
                <div className="w-full h-2 border-t-2  border-white border-opacity-5 mt-10
                @desktop:mt-36">

                </div>
            </ContainerGrid>
        </section>
    )
}