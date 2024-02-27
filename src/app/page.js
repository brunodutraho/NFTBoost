import { SectionHero } from "@/components/section-hero";
import { SectionCarrousel } from "@/components/section-carrousel/section-carrousel";


//Carroussel
import Thumb01 from '@/assets/card-01.jpg'
import Thumb02 from '@/assets/card-02.jpg'
import Thumb03 from '@/assets/card-03.jpg'
import Thumb04 from '@/assets/card-04.jpg'
import Thumb05 from '@/assets/card-05.jpg'
import Thumb06 from '@/assets/card-06.jpg'
import Thumb07 from '@/assets/card-07.jpg'
import Thumb08 from '@/assets/card-08.jpg'
import Thumb09 from '@/assets/card-09.jpg'
import Thumb10 from '@/assets/card-10.jpg'
import Thumb11 from '@/assets/card-11.jpg'
import Thumb12 from '@/assets/card-12.jpg'
import { SectionCollectors } from "@/components/section-collectors/section-collectors";


const featuredCollections = [
  {
    name: 'Cat #221',
    thumbnail: Thumb01,
    value: '0.0721',
    value_brl: '602,02',
  },

  {
    name: 'Snike #2331 ',
    thumbnail: Thumb02,
    value: '0.0721',
    value_brl: '602,02',
  },

  {
    name: 'Skull Hatter #2311',
    thumbnail: Thumb03,
    value: '0.0721',
    value_brl: '602,02',
  },

  {
    name: 'Nox #2611',
    thumbnail: Thumb04,
    value: '0.0721',
    value_brl: '602,02',
  },
  {
    name: 'Dragon Cannon #4401',
    thumbnail: Thumb08,
    value: '0.0721',
    value_brl: '602,02',
  },

]

const monthCollections = [

  {
    name: 'Crazy Monkey #131',
    thumbnail: Thumb05,
    value: '0.0721',
    value_brl: '602,02',
  },
  {
    name: 'Alien Shooter #2211',
    thumbnail: Thumb06,
    value: '0.0721',
    value_brl: '602,02',
  },
  {
    name: 'Yordlee #1221',
    thumbnail: Thumb07,
    value: '0.0721',
    value_brl: '602,02',
  },
  {
    name: 'Dragon Cannon #4401',
    thumbnail: Thumb08,
    value: '0.0721',
    value_brl: '602,02',
  },
  {
    name: 'Sailor Skull #4431',
    thumbnail: Thumb12,
    value: '0.0721',
    value_brl: '602,02',
  },
]

const featuredMonth = [

  {
    name: 'Borex #171',
    thumbnail: Thumb09,
    value: '0.0721',
    value_brl: '602,02',
  },
  {
    name: 'Durtre #2391',
    thumbnail: Thumb10,
    value: '0.0721',
    value_brl: '602,02',
  },
  {
    name: 'Hatter #321',
    thumbnail: Thumb11,
    value: '0.0721',
    value_brl: '602,02',
  },
  {
    name: 'Sailor Skull #4431',
    thumbnail: Thumb12,
    value: '0.0721',
    value_brl: '602,02',
  },
  {
    name: 'Nox #2611',
    thumbnail: Thumb04,
    value: '0.0721',
    value_brl: '602,02',
  },
]

//Cards Collectors
import ThumbCollectors01 from '@/assets/small/small-collector-01.svg'
import ThumbCollectors02 from '@/assets/small/small-collector-02.svg'
import ThumbCollectors03 from '@/assets/small/small-collector-03.svg'
import ThumbCollectors04 from '@/assets/small/small-collector-04.svg'
import ThumbCollectors05 from '@/assets/small/small-collector-05.svg'
import ThumbCollectors06 from '@/assets/small/small-collector-06.svg'
import ThumbCollectors07 from '@/assets/small/small-collector-07.svg'
import ThumbCollectors08 from '@/assets/small/small-collector-08.svg'
import { SectionBanner } from "@/components/section-banner";
import { SectionQuestions } from "@/components/section-questions";

const mainCollectors = [
  {
    image:ThumbCollectors01,
    name: 'Lorem Ipsum',
    value_btc: '0.721',
    percent: '+20',
  },
  {
    image:ThumbCollectors02,
    name: 'Lorem Ipsum',
    value_btc: '0.721',
    percent: '+20',
  },
  {
    image:ThumbCollectors03,
    name: 'Lorem Ipsum',
    value_btc: '0.721',
    percent: '+20',
  },
  {
    image:ThumbCollectors04,
    name: 'Lorem Ipsum',
    value_btc: '0.721',
    percent: '+20',
  },
  {
    image:ThumbCollectors05,
    name: 'Lorem Ipsum',
    value_btc: '0.721',
    percent: '+20',
  },
  {
    image:ThumbCollectors06,
    name: 'Lorem Ipsum',
    value_btc: '0.721',
    percent: '+20',
  },
  {
    image:ThumbCollectors07,
    name: 'Lorem Ipsum',
    value_btc: '0.721',
    percent: '+20',
  },
  {
    image:ThumbCollectors08,
    name: 'Lorem Ipsum',
    value_btc: '0.721',
    percent: '+20',
  },
]

export default function Home() {
  return (
    <>
      <SectionHero />

      <SectionCarrousel
        subtitle="Destaque em Coleções"
        title="Coleções notáveis"
        data={featuredCollections}
      />

      <hr className="max-w-grid h-2 border-t  border-white border-opacity-5 mt-10 mx-auto @desktop:mt-28"/>

      <SectionCarrousel
        subtitle="Seleção Mensal"
        title="Destaque do Mês"
        data={monthCollections}
      />
      <hr className="max-w-grid h-2 border-t border-white border-opacity-5 mt-10 mx-auto @desktop:mt-28"/>

      <SectionCollectors
        subtitle="Colecionadores em Foco"
        title="Principais colecionadores"
        data={mainCollectors}
      />

      <SectionCarrousel
        subtitle="Em Tendências"
        title="Tendência"
        data={featuredMonth}
      />

      <SectionBanner/>

      <SectionQuestions/>
      
    </>
  );
}
