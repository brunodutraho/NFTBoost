import Image from "next/image";
import Link from "next/link";

import { ContainerGrid } from "./container";
import IconHamburguer from "@/assets/menu-hamburguer.svg"

import Logo from '@/assets/logo-nft.svg'

const itemsNav = [
    'Download',
    'NFTs',
    'Rank',
    'FAQ',
]

export function Header() {
    return (
        <header className="absolute top-0 left-0 w-full py-6 @laptop:py-5">
            <ContainerGrid className="flex items-center justify-between">
                <Image
                    src={Logo}
                    alt="Logo NFTBoost"
                    className="max-w-logo-nft-mobile"
                />
                <div className="hidden @laptop:flex flex-1 max-w-nav-header items-center justify-between">
                    <nav className="flex gap-12 items-center justify-between ">
                        {
                            itemsNav.map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="font-medium font-inter hover:text-blue-primary transition-all ease-linear"
                                >
                                    {item}
                                </Link>
                            ))
                        }
                    </nav>
                    <button className="bg-blue-primary py-button px-6 rounded-full hover:bg-blue-800 transition-all ease-linear text-base/ font-medium font-inter">Conectar carteira</button>
                </div>
                <button className="w-10 h-10 flex items-center justify-center border border-white border-opacity-5 bg-white bg-opacity-5 rounded 
                @laptop:hidden">
                    <Image
                        src={IconHamburguer}
                        alt="Icon Menu Mobile"

                    />

                </button>
            </ContainerGrid>
        </header>
    )
}