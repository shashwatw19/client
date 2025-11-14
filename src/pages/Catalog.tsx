
import {
  FeatureHeroSection,
  FeatureSectionCardBlack,
  FeatureSectionCardWhite,
} from "../components/ProductFeatureDescription";
import { TalkToExpert } from "../components/Partnership";
import onlyLogo from "../assets/OnlyLogoSvg-cropped.svg"
import catalogScreen from "../assets/prodcut_cat_new.jpeg"
import flipCartlogo from "../assets/flipkartlogo.png"
import myntraLogo from "../assets/MyntraLogo.png"
import shopifyLogo from "../assets/shopify.jpg"
import amazon from "../assets/amazonlogo.jpg"
import meesho from "../assets/meeshologo.png"
import wooCom from "../assets/woocomlogo.jpg"
import ajio from "../assets/ajiologo.jpg"
import nykaa from "../assets/nyka.jpg"
import snapdeal from "../assets/snapdeal.png"
import magento from "../assets/magentologo.png"
import tataNew from "../assets/tatalogo.webp"


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
  const logos = [
              flipCartlogo,
              myntraLogo,
              shopifyLogo,
              amazon,
              meesho,
              wooCom,
              ajio,
              nykaa,
              snapdeal,
              magento,
              tataNew,
            ];

  return (
    <div className="relative mx-auto my-25 w-full max-w-7xl p-5 flex flex-col gap-20">
      <div className="flex flex-col md:flex-row max-w-5xl w-full mx-auto items-center justify-around">
        <div className="flex flex-col gap-4">
         <img src={onlyLogo} className=""/>
         <p className="text-5xl font-semibold mt-5">Catalog Bhrahm</p> 
        </div>
        <img src={catalogScreen} width={300} height={300} className="object-contain rounded-xl p-4" />
      </div>

      <div className="w-full max-w-5xl mx-auto bg-black rounded-xl p-6 md:p-8 shadow-2xl mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Catalog that clicks
            </p>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-300">
              Create, transform, enrich and publish catalogs 90% faster with 100% consistency.
            </p>
            <div className="mt-4 inline-flex items-center gap-3">
              {/* <span className="inline-block bg-white/10 text-white/90 text-xs px-3 py-1 rounded-full">
                New
              </span> */}
              <span className="text-sm text-gray-400">AI powered image & data optimization</span>
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button
              aria-label="Book a demo"
              className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white  bg-[#38b6ff] "
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
      <div className="w-full rounded-xl mx-auto bg-white mt-10 max-w-5xl">
        <div className="flex flex-col items-start justify-around gap-4">
          <p className="text-5xl font-bold text-black capitalize">Multiple Channel Integration</p>
          <p className="text-xl font-base text-gray-600">
            Our AI systems creates and transforms your catalog for different online channels
          </p>
          <div className="mx-auto w-full max-w-7xl flex justify-start">
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center justify-items-center py-4">
              {logos.map((src, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center bg-white rounded-lg p-2 w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20"
                >
                  <img src={src} alt={`logo-${idx}`} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
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


