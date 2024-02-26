'use client'

import { CardCollectors } from "../card-collectors"

export function CardsSectionCollectors({ data }) {
    return (
        <>
<div className="grid grid-cols-1 items-center @tablet:grid-cols-2 gap-x-4 @laptop:grid-cols-2 @desktop:gap-x-9 gap-y-4"> 
        {
            data.map(({position, image, name, value_btc, percent }, index) => (
                

                    < CardCollectors 
                        key={index}
                        position={index + 1}
                        image={image}
                        name={name}
                        value_btc={value_btc}
                        percent={percent}
                    />
                
            ))

        }</div>
        </>

        
    )
}