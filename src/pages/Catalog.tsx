import catalog from "../assets/catalogbhram.png";
import {
  FeatureHeroSection,
  FeatureSectionCardBlack,
  FeatureSectionCardWhite,
} from "../components/ProductFeatureDescription";
import { TalkToExpert } from "../components/Partnership";

const CatalogCardProps = {
  title: "ONE CATALOG MANY PLATFORMS",
  description: "One dashboard to manage, update, and control your catalogs.",
  ctaLabel: "GET STARTED",
};
const SmartImagerCardProps = {
  title: "SMART\nIMAGERY",
  description: "Optmize your catalog for any platform with AI- Amazon, Flipcart, Meesho, and More",
  ctaLabel: "GET STARTED",
  videoSrc: "",
};
const MultiChannelCardProps = {
  title: "MULTI CHANNEL SYNDICATION",
  description: "One dashboard to manage, update, and control your catalogs.",
  ctaLabel: "GET STARTED",
};


const Catalog = () => {
  return (
    <div className="relative mx-auto my-20 w-full max-w-7xl p-5 flex flex-col gap-20">
      <div className="flex flex-row max-w-5xl w-full mx-auto items-center justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-8xl text-slate-900 font-extrabold">
            n<span className="text-[#38b6ff]">ai</span>cos
          </p>
          <p className="text-4xl font-semibold">Catalog Bhrahm</p>
        </div>
        <img src={catalog} width={400} height={400} className="object-cover rounded-xl" />
      </div>

      <div className="flex flex-col md:flex-row max-w-5xl w-full mx-auto justify-between items-center mt-10 gap-4">
        <div className="flex flex-col gap-4 md:gap-6 items-start w-full md:w-auto">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-black capitalize text-center md:text-left">
            catalog that clicks
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center md:text-left">
            Create, Transform, Enrich and Publish Catalogs 90% Faster and 100% Consistent
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
          <p className="text-4xl font-bold text-[#38b6ff] capitalize">Multiple Channel Integration</p>
          <p className="text-2xl font-semibold text-gray-200">
            Our AI systems creates and transforms your catalog for different online channels
          </p>
          <div className="mx-auto w-full max-w-7xl flex justify-center"></div>
        </div>
      </div>

      <div></div>

      <div>
        <FeatureHeroSection />
      </div>

      <div>
        <FeatureSectionCardWhite
          title={CatalogCardProps.title}
          description={CatalogCardProps.description}
          ctaLabel={CatalogCardProps.ctaLabel}
        />
      </div>

      <div>
        <FeatureSectionCardBlack
          title={SmartImagerCardProps.title}
          description={SmartImagerCardProps.description}
          ctaLabel={SmartImagerCardProps.ctaLabel}
        />
      </div>

      <div>
        <FeatureSectionCardWhite
          title={MultiChannelCardProps.title}
          description={MultiChannelCardProps.description}
          ctaLabel={MultiChannelCardProps.ctaLabel}
        />
      </div>

      <div>
        <TalkToExpert />
      </div>
    </div>
  );
};

export default Catalog;


