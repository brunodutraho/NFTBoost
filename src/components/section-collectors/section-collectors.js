import { ContainerGrid } from "../container";
import { TitleSection } from "../title-section";
import { CardsSectionCollectors } from "./cards-section-collectors";

export function SectionCollectors({title, subtitle, data}) {
    return (
        <section className="py-10 @desktop:pt-20 @desktop:pb-28">
            <ContainerGrid>
                <TitleSection
                    subtitle={subtitle}
                    title={title}
                />
                
                <CardsSectionCollectors data={data}/>
                
            </ContainerGrid>
        </section>
    )
}