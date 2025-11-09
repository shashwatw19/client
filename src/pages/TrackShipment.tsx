import React, { useState } from "react";
import { TalkToExpert } from "../components/Partnership";

type TrackShipmentProps = {
  onSubmit?: (type: "AWB" | "NoMAWB", id: string) => void;
};

export default function TrackShipment({ onSubmit }: TrackShipmentProps) {
  const [type, setType] = useState<"AWB" | "NoMAWB">("AWB");
  const [id, setId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id.trim()) return;
    onSubmit?.(type, id.trim());
    // clear or keep as needed
  };

  return (
    <div className="max-w-4xl w-full mx-auto mt-20">
      <div className="w-full flex items-start md:items-center justify-center bg-gray-50 py-8 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8 md:p-10"
          aria-label="Track shipment"
          role="search"
        >
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            TRACK YOUR SHIPMENT
          </h2>

          <fieldset className="mb-5">
            <legend className="sr-only">Select tracking type</legend>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center">
              <label
                className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 w-full sm:w-auto hover:bg-gray-50 transition"
                aria-label="Track by AWB"
              >
                <input
                  type="radio"
                  name="track-type"
                  value="AWB"
                  checked={type === "AWB"}
                  onChange={() => setType("AWB")}
                  className="w-4 h-4 accent-[#0ea5e9] focus:ring-2 focus:ring-offset-2 focus:ring-[#0ea5e9]"
                />
                <span className="text-sm sm:text-base text-gray-800">AWB</span>
              </label>

              <label
                className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 w-full sm:w-auto hover:bg-gray-50 transition"
                aria-label="Track by NoMAWB"
              >
                <input
                  type="radio"
                  name="track-type"
                  value="NoMAWB"
                  checked={type === "NoMAWB"}
                  onChange={() => setType("NoMAWB")}
                  className="w-4 h-4 accent-[#0ea5e9] focus:ring-2 focus:ring-offset-2 focus:ring-[#0ea5e9]"
                />
                <span className="text-sm sm:text-base text-gray-800">
                  NoMAWB No / LR No
                </span>
              </label>
            </div>
          </fieldset>

          <div className="mb-5">
            <label htmlFor="shipment-id" className="sr-only">
              Shipment ID
            </label>
            <div className="relative">
              <input
                id="shipment-id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder={type === "AWB" ? "Enter AWB (e.g. 123-45678901)" : "Enter NoMAWB / LR No"}
                className="block w-full border border-gray-200 rounded-lg px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition shadow-sm"
                aria-label="Shipment ID"
                aria-required="true"
                inputMode="text"
                autoComplete="off"
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Enter the shipment identifier and tap Submit. Example formats are shown in the placeholder.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto flex-1 sm:flex-none px-5 py-3 rounded-lg text-white font-semibold text-base uppercase shadow-md hover:brightness-95 transition bg-gradient-to-r from-[#06a7e8] to-[#38b6ff] focus:outline-none focus:ring-4 focus:ring-[#bfeeff] active:scale-98"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <TalkToExpert />
    </div>
  );
}