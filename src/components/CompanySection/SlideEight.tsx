import { Quote } from "lucide-react";
import vineet from "../../assets/vineet.webp";

export function SlideEight() {
  return (
    <div className="flex items-center justify-between w-full h-full bg-white px-12 gap-12">
      {/* Left side - Image card (reversed) */}
      <div className="flex-1 flex justify-start">
        <div className="rounded-2xl overflow-hidden shadow-lg w-80 h-80 bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center shrink-0">
          <img src={vineet} alt="Placeholder" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right side - Testimonial */}
      <div className="flex-1">
        <div className="bg-slate-50 p-10 rounded-xl border border-slate-200">
          <Quote className="w-12 h-12 text-slate-400 mb-6" />
          <p className="text-2xl font-light text-foreground italic mb-8">
                A no-nonsence thought leader with a proven ability to design systems to scale from 'zero to one'
          </p>
          <div>
            <p className="font-semibold text-foreground text-lg">Sudheendra B N</p>
            <p className="text-slate-600">Head of Business - Unified Seller Platform</p>
          </div>
        </div>
      </div>
    </div>
  );
}
