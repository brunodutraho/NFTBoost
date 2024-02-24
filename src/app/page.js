import { CardNFT } from "@/components/card-nft";
import { ContainerGrid } from "@/components/container";
import { TitleSection } from "@/components/title-section";
import ImageNft01 from '@/assets/card-01.jpg'
import { CardCollectors } from "@/components/card-collectors";

import ImgNFT02 from "@/assets/card-02.jpg"

export default function Home() {
  return (
    <>
      <CardCollectors
        image={ImageNft01}
        name="Lorem ipsum"
        value_btc="000"
        percent="+20"
      />
      <CardCollectors
        image={ImgNFT02}
        name="Lorem ipsum"
        value_btc="000"
        percent="+20"
      />
    </>
  );
}
