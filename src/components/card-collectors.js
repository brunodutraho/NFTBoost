import Image from "next/image";

import ImgNFT from "@/assets/card-01.jpg"
import IconVerify from "@/assets/verificado.svg"
import IconETH from "@/assets/icon-eth.svg"

export function CardCollectors({image, name, value_btc, percent}) {
    return (
        <div className="max-w-card-collector bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border-2 border-white border-opacity-5">
            <div className="flex items-center gap-6">
                <strong className="font-semibold">1</strong>
                <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border-2 border-white border-opacity-5">
                            <Image
                                src={image}
                                alt="Image NFT"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <Image
                                src={IconVerify}
                                alt="Icon Verificado"
                                className="absolute -bottom-1 right-0"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 className="font-inter font-semibold text-4">{name}</h4>
                        <p className="flex items-center gap-2 text-sm text-white text-opacity-70">
                            Preço mínimo
                            <spna className="flex items-center gap-2 font-semibold text-sm">
                                <Image
                                    src={IconETH}
                                    alt="Icon Ethereum"
                                />
                                {value_btc} BTC
                            </spna>
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-1  text-right">
                <strong className="text-green-primary font-bold ">{percent}%</strong>
                <spna className="flex items-center gap-2 font-semibold text-sm">
                    <Image
                        src={IconETH}
                        alt="Icon Ethereum"
                    />
                    {value_btc} BTC
                </spna>
            </div>
        </div>
    )
}