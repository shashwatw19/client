import { PhoneMockup } from "./PhoneMockup"
import cat1 from "../assets/cat-1.webp"
import cat2 from "../assets/cat-2.webp"
import cat3 from "../assets/cat-3.webp"
import cat4 from "../assets/cat-4.webp"
import { useState } from "react"
const images = [{
    name : 'catalog',
    src : cat1
},{
    name : 'Pricing',
    src : cat2
},{
    name : 'Fulfilment',
    src : cat3
},{
    name : 'Marketing',
    src : cat4
}]
const screenData : {name : string , description : string}[] = [{
    name : 'catalog',
    description : 'Catalog that clicks, with an all in one catalog manager, a smart AI image creator, and catalogs ready for every platform.'

},
{
    name : 'Pricing',
    description : 'Pricing that performs with competitive price comparison, ai-powered price recommendations, and insights on top selling products'

},
{
    name : 'Fulfilment',
    description : 'Fulfilment that flows, connected to all service providers, let’s you bring your own rate card, and powered by a smart AI assistant for seamless deliveries.'

},
{
    name : 'Marketing',
    description : 'Growth mantra, a simplified crm for customer connect, run custom campaigns, and enable whatsapp order checkout'

},
]
export const ProductPhoneMockup = () => {
    const [currentScreen , setCurrentScreen] = useState<string>('catalog')
  return (
    <div className="max-w-7xl mx-auto w-full h-full flex flex-row gap-2 bg-blue-100 p-2 rounded-lg mb-20" >
        <div className="w-[50%] my-auto h-full">
        {
            screenData
                .filter(sc => sc.name === currentScreen)
                .map(sc => (
                    <div key={sc.name} className="p-4 flex flex-col gap-2 justify-between  h-full">
                        <h3 className=" font-semibold text-6xl text-slate-900 capitalize">{sc.name}</h3>
                        <p className="mt-2 text-xl">{sc.description}</p>
                    </div>
                ))
        }
        </div>
        <div className="w-[50%]">
            <PhoneMockup images={images} setCurrentScreen={setCurrentScreen}/>
        </div>
    </div>
  )
}


