import Image from "next/image";
import { ContainerGrid } from "./container";
import Logo from "@/assets/logo-nft.svg"
import Link from "next/link";

const footerNav = [
    {
        titleMenu: 'NFT Boost®',
        items: ['Download', 'NFTs', 'Rank', 'FAQ'],
    },

    {
        titleMenu: 'Links importantes',
        items: ['About us', 'Questions', 'Press', 'Contact us', 'Legal'],
    },
]

export function Footer() {
    return (
        <footer className="gap-8 py-10">

            <ContainerGrid className="flex flex-col items-center justify-center @laptop:flex-row @laptop:justify-between @laptop:pt-20 @laptop:pb-20">


                <div className="text-center mb-10 max-w-80 
                
                @laptop:mb-0 @laptop:text-left

                ">
                    <Image
                        src={Logo}
                        alt="Logo NFT"
                        className="m-auto @laptop:m-0 "
                    />
                    <p className="mb-6 mt-4 text-lg text-white text-opacity-70 ">

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </p>

                    <button className="w-full bg-blue-primary py-button px-6 rounded-full hover:bg-blue-800 transition-all ease-linear text-base/ font-medium font-inter 

                    @laptop:w-auto"
                    >
                        Conectar carteira
                    </button>
                </div>

                <div className="flex flex-col space-y-10 items-center justify-center
                @laptop:flex-row @laptop:space-y-0 @laptop:space-x-20 @laptop:items-start 
                ">
                    {
                        footerNav.map(({ titleMenu, items }) => (
                            <div key={`Menu-${titleMenu}`} >
                                <strong className="block text-lx mb-4
                                
                                ">
                                    {titleMenu}
                                </strong>
                                <ul>
                                    {
                                        items.map((item, index) => (

                                            <li key={index} className="flex flex-col items-center justify-center
                                            @laptop:items-start
                                            ">
                                                <Link href="#" className="text-lg text-white text-opacity-70">{item}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }

                </div>
            </ContainerGrid>
        </footer>
    )
}