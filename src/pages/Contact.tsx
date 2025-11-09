import React, { useState } from "react";
import { TalkToExpert } from "../components/Partnership";

type HeroWithLeadProps = {
  title?: string;
  highlight?: string;
  description?: string;
  ctaLabel?: string;
  onCta?: () => void;
  children?: React.ReactNode;
  className?: string;
};

export const HeroWithLead: React.FC<HeroWithLeadProps> = ({
  title = "POWER GROWTH WITH INDIA'S FIRST",
  highlight = "NATIVE AI",
  description = "naicos helps you go live faster and run leaner by automating listings, pricing, fulfilment, and customer engagement all in one intelligent system.",
  ctaLabel = "START YOUR JOURNEY",
  onCta,
  children = <SignUpForm />,
}) => {
  return (
    <>
      <section className={`w-full flex justify-center max-w-6xl mx-auto px-4 py-12`}>
        <div className="w-full max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* LEFT: headline / copy / CTA */}
            <div className="flex flex-col justify-center gap-8 px-2 md:px-6">
              <h2 className="font-bold text-black leading-tight text-5xl">
                <span className="block">{title}</span>
                <span className="block">
                  <span className="text-[#38b6ff]">{highlight}</span>{" "}
                  <span className="text-black">COMMERCE PLATFORM.</span>
                </span>
              </h2>

              <p className="text-slate-800 text-base md:text-lg max-w-xl">{description}</p>

              <div>
                <button
                  onClick={onCta}
                  className="mt-2 inline-block bg-[#38b6ff] text-white font-semibold rounded-md px-8 py-4 shadow-md hover:brightness-95 transition"
                  aria-label={ctaLabel}
                >
                  {ctaLabel}
                </button>
              </div>
            </div>

            {/* RIGHT: reserved lead form area (visible border, keeps space) */}
            <div className="px-2 md:px-6 flex ">{children}</div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl w-full mx-auto px-4 py-12">
        <TalkToExpert />
      </div>
    </>
  );
};

export default HeroWithLead;

export const SignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className=" flex items-start justify-center  bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-md p-6"
        aria-label="Sign up"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Connect With Us</h2>
        {/* <p className="text-sm text-gray-600 mb-6">
          Login to aceternity if you can because we don't have a login flow yet
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col text-sm">
            <span className="mb-2 text-gray-700">First name</span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Tyler"
              required
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="mb-2 text-gray-700">Last name</span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Durden"
              required
            />
          </label>
        </div>

        <label className="flex flex-col text-sm mt-4">
          <span className="mb-2 text-gray-700">Email Address</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="projectmayhem@fc.com"
            required
          />
        </label>

        <label className="flex flex-col text-sm mt-4">
          <span className="mb-2 text-gray-700">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="How can we help you?"
            rows={5}
          />
        </label>

        <button
          type="submit"
          className="mt-6 w-full bg-black text-white font-semibold rounded-lg py-3 hover:brightness-95 transition"
        >
          SEND
        </button>
      </form>
    </div>
  );
};
