import pricing from "../assets/pricingTark.png";

import {
  FeatureSectionCardBlack,
  FeatureSectionCardWhite,
} from "../components/ProductFeatureDescription";
import { TalkToExpert } from "../components/Partnership";

const CompetetiveCardProps = {
  title: "Competitive\nBenchmark-\ning",
  description: "Use AI to get price insights and track competitor prices automatically",
  ctaLabel: "GET STARTED",
};
const PriceRecomendationCardProps = {
  title: "AI-DRIVEn\nprice suggestion",
  description: "Smart, AI-powered price suggestions data-backed, never guess",
  ctaLabel: "GET STARTED",
  videoSrc: "",
};
const CustomerInsightsCardProps = {
  title: "Customer Insights",
  description: "Discover top selling products and price smarter with customer insights",
  ctaLabel: "GET STARTED",
};


const Pricing = () => {
  return (
    <div className="relative mx-auto my-20 w-full max-w-7xl p-5 flex flex-col gap-20">
      <div className="flex flex-row max-w-5xl w-full mx-auto items-center justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-8xl text-slate-900 font-extrabold">
            n<span className="text-[#38b6ff]">ai</span>cos
          </p>
          <p className="text-4xl font-semibold">Catalog Bhrahm</p>
        </div>
        <img src={pricing} width={400} height={400} className="object-cover rounded-xl" />
      </div>

      <div className="flex flex-col md:flex-row max-w-5xl w-full mx-auto justify-between items-center mt-10 gap-4">
        <div className="flex flex-col gap-4 md:gap-6 items-start w-full md:w-auto">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-black capitalize text-center md:text-left">
           pricing that performs
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center md:text-left capitalize">
                Benchmark, price, and monitor SKUs to ensure a positive contribution
          </p>
        </div>
        <div className="w-full md:w-auto flex justify-center mt-4 md:mt-0">
          <button className="w-full md:w-auto rounded-md bg-[#0ea5e9] px-6 py-2 font-semibold text-white hover:bg-[#38b6ff] transition">
            Book A Demo
          </button>
        </div>
      </div>
      <div className="w-full rounded-xl mx-auto bg-black p-6 sm:p-8 mt-10 max-w-5xl">
        <div className="flex flex-col items-start justify-around gap-4">
          <p className="text-4xl font-bold text-[#38b6ff] capitalize">Decoding Price Through Logic</p>
          <p className="text-2xl font-semibold text-gray-200">
            It's not just numbers It's reasoning backed by data and AI
          </p>
          <div className="mx-auto w-full max-w-7xl flex justify-center"></div>
        </div>
      </div>

      <div></div>
    <div>
        <FeatureSectionCardBlack
          title={CompetetiveCardProps.title}
          description={CompetetiveCardProps.description}
          ctaLabel={CompetetiveCardProps.ctaLabel}
        />
      </div>
     <div>
        <FeatureSectionCardWhite
          title={PriceRecomendationCardProps.title}
          description={PriceRecomendationCardProps.description}
          ctaLabel={PriceRecomendationCardProps.ctaLabel}
        />
      </div>

      

      <div>
        <FeatureSectionCardBlack
          title={CustomerInsightsCardProps.title}
          description={CustomerInsightsCardProps.description}
          ctaLabel={CustomerInsightsCardProps.ctaLabel}
        />
      </div>

      <div>
        <TalkToExpert />
      </div>
    </div>
  );
};

export default Pricing;


