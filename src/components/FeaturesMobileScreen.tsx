import { CardStack } from "./CardStack";
import catalogScreen from "../assets/catalog_white_bg.png";
import pricing from "../assets/pricing_white_bg.png";
import fulfillment from "../assets/fulfillment_white_bg.png";
import growth from "../assets/growth_white_bg.png"
import { useState } from "react";

const screens = [
  { id: "catalogScreen", src: catalogScreen },
  { id: "pricingScreen", src: pricing },
  { id: "fulfillmentScreen", src: fulfillment },
  { id: "growthScreen", src: growth },
];
const Data = [
  {
    id: "catalogScreen",
    title: "CATALOG",
    description: `CATALOG THAT CLICKS, with an all in one catalog manager, AI Powered image & video creation, catalog Syncronized across platforms.`,
  },
  {
    id: "pricingScreen",
    title: "PRICING",
    description: `pricing THAT PERFORMS with competitive benchmarking, AI-powered price recommendations, and insights on top selling products.`,
  },
  {
    id: "fulfillmentScreen",
    title: "FULFIMENT",
    description: `FULFILMENT THAT FLOWS, connected to all service providers, LET'S YOU bring your own rate card, and powered by AI agents for seamless deliveries.`,
  },
  {
    id: "growthScreen",
    title: "GROWTH & MARKETING",
    description: `GROWTH Amplifier, a Simplified CRM for customer connect, upsell, custom campaigns, and order checkout, all enbled through whatsapp`,
  },
];
const FeaturesMobileScreen = () => {
  const [screenData, setScreenData] = useState<string>("");

  return (
    <div className="max-w-5xl w-full mx-auto mt-50 px-4">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left: visual stack (full width on mobile, half on md+) */}
      <div className="w-full md:w-1/2">
      
        <CardStack items={screens} setScreenData={setScreenData} />

      </div>

      {/* Right: details (below on mobile, side-by-side on md+) */}
      <div className="w-full md:w-1/2 flex ">
        {(() => {
        const selectedId = screenData || screens[0].id;
        const item = Data.find((d) => d.id === selectedId);

        return (
          <div className="bg-white w-full rounded-lg p-4 md:p-8 flex flex-col justify-center items-start">
            <div>
            <h3 className="text-xl md:text-5xl text-black font-extrabold">
              {item?.title}
            </h3>
            <p className="mt-4 text-gray-700 text-sm md:text-base font-semibold leading-relaxed capitalize ">
              {item?.description}
            </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
            <button className="w-full md:w-auto px-4 py-2 bg-[#38b6ff] text-white rounded-md  font-semibold transition capitalize">
              Know More
            </button>
            </div>
          </div>
        );
        })()}
      </div>
    </div>
    </div>
  );
};

export default FeaturesMobileScreen;
