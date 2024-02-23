import Image from "next/image";
import { ContainerGrid } from "./container";

import Logo from '@/assets/logo-nft.svg'


export function Header() {
    return (
        <header>
            <ContainerGrid>
                <Image
                    src={Logo}
                    alt="Logo NFTBoost"
                />
            </ContainerGrid>
        </header>
    )
}