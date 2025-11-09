import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import logo from "../assets/naicos-logo.webp";
import { BiLogoGmail } from "react-icons/bi";
import gifLoader from "../assets/naicos Loader.gif";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div className="relative max-w-7xl mx-auto w-full  mt-10 px-5 py-5 rounded-2xl flex flex-col items-center space-between ">
      <div className="container flex items-start justify-center flex-wrap mx-auto ">
        <BrandSection />
        <div className="flex items-start sm:justify-center flex-wrap gap-10 my-10 sm:my-0">
          <Footer1 />
          <Footer2 />
        </div>
        <TrackOrder />
      </div>{" "}
      <div className="font-semibold text-sm text-zinc-800 text-center mt-5">©2025. Naicos All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
function BrandSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <img src={logo} loading="lazy" alt="Naicos Logo" />
        <img src={gifLoader} loading="lazy" className="w-20"></img>
      </div>
      <p className="max-w-sm text-sm  text-zinc-500 ">
        Grow smarter with Agentic Commerce. From catalog creation to order delivery and customer conversations automate
        every step of your eCommerce journey.
      </p>
      {/* Social Links */}
      <div className="flex gap-4 ">
        <SocialLink href="#" icon={<BiLogoGmail className="w-6 h-6 text-slate-900" />} label="Email" />
        <SocialLink href="#" icon={<BsTwitter className="w-6 h-6 text-slate-900" />} label="Twitter" />{" "}
        <SocialLink href="#" icon={<BsLinkedin className="w-6 h-6 text-slate-900" />} label="LinkedIn" />
        <SocialLink href="#" icon={<BsYoutube className="w-6 h-6 text-slate-900" />} label="YouTube" />
      </div>
    </div>
  );
}
function TrackOrder() {
  return (
    <div className="flex flex-col gap-2 px-4 w-full max-w-sm">
      <h1 className="text-lg font-semibold text-zinc-500">Track Order</h1>
      <input
        type="text"
        placeholder="Enter AWB (e.g. 123-45678901)"
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full "
      />
      <button className="px-4 py-2 text-white rounded-md bg-[#38b6ff] transition-colors text-sm font-semibold">
        Track Order
      </button>
    </div>
  );
}
function Footer1() {
  return (
    <div className="px-4 w-[120px] sm:w-fit text-zinc-500 ">
      <h1 className="font-semibold text-xl mb-3 ">Links</h1>
      <Link to="/products">
        <span className="block text-sm">Products</span>
      </Link>
      <Link to="/company">
        <span className="block text-sm">Company</span>
      </Link>
      <Link to="/contact">
        <span className="block text-sm">Contact</span>
      </Link>
      <Link to="/blogs">
        <span className="block text-sm">Blogs</span>
      </Link>
    </div>
  );
}

function Footer2() {
  return (
    <div className="px-4   w-[180px]  text-zinc-500  sm:w-fit">
      <h1 className="font-semibold text-xl mb-3 ">Legal</h1>
      <span className="block text-sm">Privacy Policy</span>
      <span className="block text-sm">Refund & Cancellation Policy</span>
      <span className="block text-sm">Terms & Conditions</span>
    </div>
  );
}

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    aria-label={label}
    className="text-sky-300  hover:text-sky-900 transition p-2 hover:bg-sky-300 rounded-full"
  >
    {icon}
  </a>
);
