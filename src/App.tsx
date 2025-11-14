import { GoArrowUpRight } from "react-icons/go";
import { createBrowserRouter,  NavLink, RouterProvider } from "react-router";
import logo from "./assets/naicos-logo.webp";
import { motion } from "motion/react";
import  { useEffect, useState } from "react";
// import OnlyLogo from "./assets/OnlyLogoSvg-cropped.svg";
import loaderGif from "./assets/naicos Loader.gif";
import { BlurIn } from "./components/AnimatedComponents/BlurIn";
import { ContainerScroll } from "./components/AnimatedComponents/ContainerScroll";
import Partnership from "./components/Partnership";
import gifLoader from "../src/assets/naicos Loader.gif"
// import { StickyScroll } from './components/StickyScroll'
import Features from "./components/Features";
// import CeoSection from "./components/CeoSection";
// import { ProductPhoneMockup } from "./components/ProductPhoneMockup";
import { CompanySection } from "./pages/Company";
import MainLayout from "./layout/MainLayout";
import { SlideOne } from "./components/CeoAndFounders/SlideOne";
import {  SlideTwo } from "./components/CeoAndFounders/SlideTwo";

import { OverlappingScrollSlider } from "./components/CeoAndFounders/OverlappingSlideScroll";
import Catalog from "./pages/Catalog";
import Pricing from "./pages/Pricing";
import Fulfillment from "./pages/Fulfillment";
import Growth from "./pages/Growth";
import HeroWithLead from "./pages/Contact";
import TrackShipment from "./pages/TrackShipment";
import LogoWithText from "../src/assets/logo_tag_2.png"
import Products from "./pages/Products";
import BlogCarousel from "./pages/Blogs";
import  { FeaturesTabs } from "./components/FeaturesDropDown";
import { TextGenerateEffect } from "./components/GeneratedText";
// import {  FoundersCarousel, FoundersGrid, FoundersStack } from "./components/FounderAndCeoTest";
// import FoundersGridHover from "./components/CeoAndFounders/FoundersGrid";

import insights from "../src/assets/insights_new.jpg"
//#38b6ff app colour
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/company",
          element: <CompanySection />,
        },
        {
          path: "/catalog",
          element: <Catalog />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/fulfillment",
          element: <Fulfillment />,
        },
        {
          path: "/growth",
          element: <Growth />,
        },
        {
          path: "/contact",
          element: <HeroWithLead />,
        },
        {
          path: "/track-shipment",
          element: <TrackShipment />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/blogs",
          element: <BlogCarousel />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
const slides = [<SlideOne />  ,<SlideTwo />]


export function Home() {
  return (
    <div className="w-full relative max-w-screen ">
      <motion.div
        className=" absolute top-[8%] left-1/5 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-2/5 bg-blue-500 rounded-full filter blur-[120px] opacity-50 z-0"
        initial={{
          scale: 0.4,
        }}
        animate={{
          scale: 1,
        }}
        whileInView={{
          x: ["80px", "-100px", "60px"],
          y: ["-100px", "100px", "-100px"],
          transition: {
            duration: 10,
            repeat: Infinity,
          },
        }}
        transition={{
          duration: 1,
          delay: 0.1,
          type: "spring",
          ease: "easeOut",
          stiffness: 100,
        }}
      />{" "}
      <motion.div
        className="absolute top-[15%] left-4/5 transform -translate-x-1/2 -translate-y-1/2  h-[400px] w-2/5 bg-blue-500 rounded-full filter blur-[120px] opacity-50 z-0"
        initial={{
          scale: 0.4,
        }}
        animate={{
          scale: 1,
        }}
        whileInView={{
          x: ["10px", "-90px", "10px"],
          y: ["-90px", "80px", "-50px"],
          transition: {
            duration: 10,
            repeat: Infinity,
          },
        }}
        transition={{
          duration: 1,
          delay: 0.1,
          type: "spring",
          ease: "easeOut",
          stiffness: 100,
        }}
      />
      <StartingHero />
      <MacbookShowcase />
      {/* <ProductPhoneMockup /> */}
      <Features />
      <FeaturesTabs/>
      {/* <FeaturesMobileScreen /> */}
      {/* <ProductDescription /> */}
      {/* <CeoSection /> */}
      <OverlappingScrollSlider slides={slides} />
      {/* <OverlappingScrollSlider slides={slides1} /> */}
      {/* <OverlappingScrollSlider slides={slides1} /> */}
      <Partnership />
      
      {/* <FoundersGrid/>
      <FoundersCarousel/>
      <FoundersStack/> */}
   
  
    </div>
  );
}
export const Nav = () => {
  const activeNavLinkClassname =
    " px-3 py-1 text-sm sm:text-base flex items-center gap-2 rounded-full bg-linear-to-r from-blue-300 to-blue-500 text-white font-semibold  transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ring-0 focus:outline-none ";
  return (
    <nav className=" m-2 text-gray-900 fixed left-4 sm:left-0 right-4 sm:right-0 top-2 sm:top-0 z-99 rounded-full bg-black/5 md:bg-transparent backdrop-blur-xl md:backdrop-blur-[0]  flex items-center justify-between px-3 py-4 md:px-4 md:py-3 ">
      <span className="text-2xl flex items-center px-4 ">
        <img src={logo} className="w-[100px]" />
        <img src={gifLoader} className="w-10"></img>
      </span>
      <div className="flex items-center justify-center text-lg space-x-3 rounded-3xl backdrop-blur-2xl px-4 py-2  ">
        <NavLink to={"/"} className={({ isActive }) => (isActive ? activeNavLinkClassname : "")}>
          Home
        </NavLink>
        <NavLink to={"/products"} className={({ isActive }) => (isActive ? activeNavLinkClassname : "")}>
          Products
        </NavLink>
        <NavLink to={"/company"} className={({ isActive }) => (isActive ? activeNavLinkClassname : "")}>
          Company
        </NavLink>
        <NavLink to={"/contact"} className={({ isActive }) => (isActive ? activeNavLinkClassname : "")}>
          Contact
        </NavLink>
        <NavLink to={"/blogs"} className={({ isActive }) => (isActive ? activeNavLinkClassname : "")}>
          Blogs
        </NavLink>
        <NavLink to={"/track-shipment"} className={({ isActive }) => (isActive ? activeNavLinkClassname : "")}>
          Track
        </NavLink>
        {/* <NavLink to={"/premium"} className={({ isActive }) => isActive ? activeNavLinkClassname : ""} >
          Plans
        </NavLink>
         */}
        | &nbsp;
        <button className="flex items-center gap-1 text-lg rounded-full pr-1 py-1 hover:text-[#005ee9]">
          <span className="hidden sm:block ">Book a demo</span>
          <GoArrowUpRight className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};
const words = " Discover the Future of Selling."
export const StartingHero = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderScreen(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const [loaderScreen , setLoaderScreen] = useState<boolean>(true)
  
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
     {
      loaderScreen ? <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.5, duration: 0.25, ease: "easeOut" }}
        onAnimationComplete={() => setLoaderScreen(false)}
        className="w-full h-full flex items-center justify-center"
      >
        <img
          src={loaderGif}
          alt="Loading…"
          className="w-40 h-40 md:w-72 md:h-72 object-contain"
          draggable={false}
        />
      </motion.div>: 
       <div className="pt-10 flex flex-col items-center justify-center gap-5 w-full h-full ">
        <BlurIn className="max-w-4xl w-full font-semibold tracking-tight p-2 ">
          <img src={LogoWithText} className="max-w-3xl w-full mx-auto mt-20"/>
        </BlurIn>
        <div className="text-zinc-800 text-center text-3xl sm:text-6xl -mt-10 font-bold tracking-tighter md:text-[3.7rem] ">
           <TextGenerateEffect words={words}/>
        </div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-stone-500 text-center my-2 max-w-2xl text-xl"
        >
          Grow smarter with Agentic Commerce. From catalog creation to order delivery and customer conversations —
          automate every step of your eCommerce journey.
        </motion.span>

        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            type: "spring",
            stiffness: 120,
          }}
          className="mt-2 font-semibold text-gray-700 group p-1 rounded-xl bg-linear-to-b  active:scale-[0.995] from-blue-100/40 to-white/80 px-2 py-2 flex items-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)]"
        >
          <div className="">Get Started For Free</div>
        </motion.button>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm font-semibold text-gray-500 pt-4"
        >
          <p className="text-[#38b6ff] text-xl font-semibold">Powered By Native AI</p>
        </motion.p>
      </div>
     }
    </div>
  );
};


// export const StartingHero = () => {
//   const [loading, setLoading] = useState(true);
//   const [typed, setTyped] = useState("");
//   const fullText = "Discover the Future of Selling";

//   // show loader until logo is ready (or fallback timeout)
//   useEffect(() => {
//     let mounted = true;
//     const img = new Image();
//     img.src = OnlyLogo;
//     const hide = () => {
//       if (!mounted) return;
//       // small delay so loader is visible briefly
//       setTimeout(() => setLoading(false), 450);
//     };
//     img.onload = hide;
//     img.onerror = () => {
//       // fallback if image doesn't load
//       setTimeout(() => setLoading(false), 900);
//     };
//     // safety fallback
//     const t = setTimeout(() => setLoading(false), 1800);
//     return () => {
//       mounted = false;
//       clearTimeout(t);
//     };
//   }, []);

//   // typewriter effect after loader finishes
//   useEffect(() => {
//     if (loading) return;
//     setTyped("");
//     let i = 0;
//     const speed = 40; // ms per character
//     const iv = setInterval(() => {
//       setTyped((prev) => prev + fullText[i]);
//       i += 1;
//       if (i >= fullText.length) clearInterval(iv);
//     }, speed);
//     return () => clearInterval(iv);
//   }, [loading]);

//   return (
//     <>
//       {loading ? (
//         <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white">
//           <img
//             src={loaderGif}
//             alt="Loading…"
//             className="w-40 h-40 md:w-52 md:h-52 object-contain"
//             draggable={false}
//           />
//         </div>
//       ) : (
//         <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
//           {/* subtle decorative blurred blobs (keeps original feel) */}
//           <motion.div
//             className=" absolute top-[8%] left-1/5 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-2/5 bg-blue-500 rounded-full filter blur-[120px] opacity-30 z-0"
//             initial={{ scale: 0.6, opacity: 0 }}
//             animate={{ scale: 1, opacity: 0.3 }}
//             transition={{ duration: 1.1, ease: "easeOut" }}
//             aria-hidden
//           />
//           <motion.div
//             className=" absolute top-[15%] left-4/5 transform -translate-x-1/2 -translate-y-1/2  h-[400px] w-2/5 bg-blue-500 rounded-full filter blur-[120px] opacity-30 z-0"
//             initial={{ scale: 0.6, opacity: 0 }}
//             animate={{ scale: 1, opacity: 0.3 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             aria-hidden
//           />

//           <div className="pt-10 flex flex-col items-center justify-center gap-5 w-full h-full z-10">
//             {/* logo */}
//             <motion.img
//               src={OnlyLogo}
//               alt="naicos"
//               className="w-[160px] md:w-[220px] object-contain select-none"
//               initial={{ opacity: 0, y: -10, scale: 0.96 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
//               draggable={false}
//             />

//             {/* typewriter heading */}
//             <motion.h2
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
//               className="text-zinc-800 text-center text-4xl sm:text-6xl font-bold tracking-tighter md:text-[3.5rem]"
//               aria-live="polite"
//             >
//               <span className="border-r-[2px] border-zinc-800 pr-1 animate-caret">
//                 {typed}
//               </span>
//             </motion.h2>

//             {/* small subtitle */}
//             <motion.span
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.9 }}
//               className="text-stone-500 text-center my-2 max-w-2xl text-lg md:text-xl"
//             >
//               Grow smarter with Agentic Commerce. From catalog creation to order delivery and customer conversations —
//               automate every step of your eCommerce journey.
//             </motion.span>

//             {/* CTA */}
//             <motion.button
//               initial={{ opacity: 0, y: 18, scale: 0.98 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, delay: 1.05, type: "spring", stiffness: 120 }}
//               className="mt-4 font-semibold text-gray-700 group p-2 rounded-xl bg-white/60 backdrop-blur-sm px-4 py-2 flex items-center gap-2 shadow-sm hover:scale-[1.01] transition-transform"
//             >
//               Get Started For Free
//             </motion.button>

//             <motion.p
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 1.25 }}
//               className="text-sm font-semibold text-[#38b6ff] pt-4"
//             >
//               Powered By Native AI
//             </motion.p>
//           </div>

//           {/* caret animation style */}
//           <style>{`
//             @keyframes caret {
//               0% { border-color: rgba(0,0,0,0.9); }
//               50% { border-color: transparent; }
//               100% { border-color: rgba(0,0,0,0.9); }
//             }
//             .animate-caret {
//               animation: caret 1s steps(1) infinite;
//             }
//           `}</style>
//         </div>
//       )}
//     </>
//   );
// };


export const MacbookShowcase = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-zinc-600 mb-10">
              Launching 
              <br />
              <span className="text-4xl md:text-6xl font-bold mt-1 leading-none text-zinc-700">
                The First Agentic Commerce Operating System
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full max-w-5xl mx-auto px-4">
          <img
            src={insights}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-fill h-full aspect-video"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
};
export default App;
