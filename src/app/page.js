import { ContainerGrid } from "@/components/container";
import { TitleSection } from "@/components/title-section";

export default function Home() {
  return (
    <>
      <ContainerGrid className="flex">
          <TitleSection
            title = 'Destaque em Coleções'
            subtitle = 'Coleções notáveis'
          />
      </ContainerGrid>
      
    </>
  );
}
