
import catalog from "../assets/catalog_white_bg.png"
import pricing from "../assets/pricing_white_bg.png"
import growth from "../assets/growth_white_bg.png"
import fulfillment from "../assets/fulfillment_white_bg.png"
import { TalkToExpert } from "../components/Partnership"
import { Link } from "react-router"
const Products = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <h1 className="uppercase   w-full text-center text-6xl font-extrabold text-black mt-30 mb-20">
               <span className="text-[#38b6ff]">A Navtive</span> AI powered platform
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center mx-auto mt-10">
            <div className="flex flex-col gap-5 items-center">
                <img src={catalog} alt="catalog" className="w-full max-w-[450px] h-[450px] object-contain" />
                <Link to={"/catalog"}>
                    <button
                    aria-label="Know more about catalog"
                    className="uppercase bg-linear-to-r from-[#38b6ff] to-[#0ea5ff] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#38b6ff]/30 inline-flex items-center gap-2"
                >
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                </Link>
            </div>
           <div className="flex flex-col gap-5 items-center">
                <img src={pricing} alt="catalog" className="w-full max-w-[450px] h-[450px] object-contain" />
                 <Link to={"/pricing"}>
                    <button
                    aria-label="Know more about catalog"
                    className="uppercase bg-linear-to-r from-[#38b6ff] to-[#0ea5ff] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#38b6ff]/30 inline-flex items-center gap-2"
                >
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                </Link>
            </div>
            <div className="flex flex-col gap-5 items-center">
                <img src={fulfillment} alt="catalog" className="w-full max-w-[450px] h-[450px] object-contain" />
                 <Link to={"/fulfillment"}>
                    <button
                    aria-label="Know more about catalog"
                    className="uppercase bg-linear-to-r from-[#38b6ff] to-[#0ea5ff] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#38b6ff]/30 inline-flex items-center gap-2"
                >
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                </Link>
            </div>
            <div className="flex flex-col gap-5 items-center">
                <img src={growth} alt="catalog" className="w-full max-w-[450px] h-[450px] object-contain" />
                 <Link to={"/growth"}>
                    <button
                    aria-label="Know more about catalog"
                    className="uppercase bg-linear-to-r from-[#38b6ff] to-[#0ea5ff] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform duration-200 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#38b6ff]/30 inline-flex items-center gap-2"
                >
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                </Link>
            </div>
        </div>

        <TalkToExpert/>
    </div>
  )

}

export default Products