"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface ImageItem {
  name: string;
  src: string;
}

interface PhoneMockupProps {
  images: ImageItem[];
  setCurrentScreen: (data: string) => void;
}

export function PhoneMockup({ images, setCurrentScreen }: PhoneMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentScreen(images[currentIndex]?.name);
  }, [currentIndex, images, setCurrentScreen]);

  const currentImage = images[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center justify-center bg-linear-to-br w-full  p-4 ">
      <div className="flex flex-row items-center gap-8">
        <button
          onClick={handlePrevious}
          aria-label="Previous image"
          title="Previous"
          className="rounded-full w-12 h-12 p-0 flex items-center justify-center bg-linear-to-br from-slate-700/60 to-slate-900/60 text-white  hover:scale-105 transform transition duration-200 ease-out border border-white/10 backdrop-blur-sm hover:from-slate-600/70 hover:to-slate-900/80 focus:outline-none "
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="relative w-full max-w-sm">
          {/* Phone Case - Outer Frame */}
          <div className="relative aspect-9/16 bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl  p-3 border border-slate-700">
            {/* Camera Notch Area */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-32 h-6 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
              </div>
            </div>

            {/* Screen Display with bezel */}
            <div className="relative w-full h-full bg-black rounded-2xl shadow-inner overflow-hidden border-2 border-slate-800">
              {/* Image Display */}
              <div className="w-full h-full overflow-hidden">
                <img src={currentImage.src || "/placeholder.svg"} alt={currentImage.name} className="object-contain" />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Side Buttons (Volume Buttons) */}
            <div className="absolute left-0 top-1/3 w-1 h-12 bg-slate-700 rounded-r-sm -ml-1"></div>
            <div className="absolute left-0 top-1/2 w-1 h-12 bg-slate-700 rounded-r-sm -ml-1 mt-16"></div>

            {/* Power Button */}
            <div className="absolute right-0 top-1/3 w-1 h-16 bg-slate-600 rounded-l-sm -mr-1"></div>

            {/* Bottom Speaker Grille Pattern */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-slate-700 rounded-full opacity-50"></div>
          </div>

          {/* Image Name Display */}
          {/* <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
            <p className="text-xl text-black font-semimedium">{currentImage.name}</p>
          </div> */}
        </div>
        <button
          onClick={handleNext}
          className="rounded-full w-12 h-12 p-0 flex items-center justify-center bg-linear-to-br from-slate-700/60 to-slate-900/60 text-white  hover:scale-105 transform transition duration-200 ease-out border border-white/10 backdrop-blur-sm hover:from-slate-600/70 hover:to-slate-900/80 focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        {/* Navigation Buttons */}
        <div className="flex gap-6 mt-12"></div>
      </div>
    </div>
  );
}
