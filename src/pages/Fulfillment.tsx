
import fulfillment from "../assets/fulfillment.png"

import {
  FeatureSectionCardBlack,
  FeatureSectionCardWhite,
} from "../components/ProductFeatureDescription";
import { TalkToExpert } from "../components/Partnership";

const ErpCardProps = {
  title: "Integrated\n3Pl\nERP",
  description: "Manage B2B and B2C orders, routing and ship[ing from one central system",
  ctaLabel: "GET STARTED",
};
const AgentsCardProps = {
  title: "Intelligent\nAgents",
  description: "From fraud checks to order holds, agents handle it all for seamless operations",
  ctaLabel: "GET STARTED",
  videoSrc: "",
};
const SmartCardProps = {
  title: "Smart Order\n Routing",
  description: "Automatic order routing and verification for optimal delivery performance",
  ctaLabel: "GET STARTED",
};
const InventoryCardProps = {
  title: "Inventory\n Visibility",
  description: "Monitor inventory across channels and warehouse to ensure availablity",
  ctaLabel: "GET STARTED",
};
const TrackingCardProps = {
  title: "NDR\nRTO AND\n SLA Tracking",
  description: "Monitor returns, failed deliveries, and services levels in real time to prevent revenue loss",
  ctaLabel: "GET STARTED",
};


const Fulfillment = () => {
  return (
    <div className="relative mx-auto my-20 w-full max-w-7xl p-5 flex flex-col gap-20">
      <div className="flex flex-row max-w-5xl w-full mx-auto items-center justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-8xl text-slate-900 font-extrabold">
            n<span className="text-[#38b6ff]">ai</span>cos
          </p>
          <p className="text-4xl font-semibold">Fulfillment Pravah</p>
        </div>
        <img src={fulfillment} width={200}  className="object-fill rounded-xl" />
      </div>

      <div className="flex flex-col md:flex-row max-w-5xl w-full mx-auto justify-between items-center mt-10 gap-4">
        <div className="flex flex-col gap-4 md:gap-6 items-start w-full md:w-auto">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-black capitalize text-center md:text-left">
           fulfillment that performs
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center md:text-left capitalize">
               Automatic fraud checks, order verification and smart routing to boost profits
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
          <p className="text-4xl font-bold text-[#38b6ff] capitalize">Multiple delivery partners</p>
          <p className="text-2xl font-semibold text-gray-200">
            30,000+ pincodes , economy and express services being made available from the best in class national players . A single platform for your B2C and B2B needs
          </p>
          <div className="mx-auto w-full max-w-7xl flex justify-center"></div>
        </div>
      </div>

      <div></div>
    <div>
        <FeatureSectionCardBlack
          title={ErpCardProps.title}
          description={ErpCardProps.description}
          ctaLabel={ErpCardProps.ctaLabel}
        />
      </div>
     <div>
        <FeatureSectionCardWhite
          title={AgentsCardProps.title}
          description={AgentsCardProps.description}
          ctaLabel={AgentsCardProps.ctaLabel}
        />
      </div>

      

      <div>
        <FeatureSectionCardBlack
          title={SmartCardProps.title}
          description={SmartCardProps.description}
          ctaLabel={SmartCardProps.ctaLabel}
        />
      </div>
      <div>
        <FeatureSectionCardWhite
          title={InventoryCardProps.title}
          description={InventoryCardProps.description}
          ctaLabel={InventoryCardProps.ctaLabel}
        />
      </div>

      

      <div>
        <FeatureSectionCardBlack
          title={TrackingCardProps.title}
          description={TrackingCardProps.description}
          ctaLabel={TrackingCardProps.ctaLabel}
        />
      </div>

      <div>
        <TalkToExpert />
      </div>
    </div>
  );
};

export default Fulfillment;


