
export function SlideOne() {
  return (
    <div className="flex items-center justify-between w-full h-full bg-white px-12 gap-12">
      {/* Left side - Headline */}
      <div className="flex-1">
        <h1 className="text-6xl font-bold leading-tight text-foreground max-w-2xl">
          Build By The <span className="text-[#38b6ff]">Team</span> Who's Been There
        </h1>
       
      </div>

      {/* Right side - Image card */}
      {/* <div className="flex-1 flex justify-end">
        <div className="rounded-2xl overflow-hidden shadow-lg w-96 h-96 bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center">
          <img src="/founders-team-professional.jpg" alt="Placeholder" className="w-full h-full object-cover" />
        </div>
      </div> */}
    </div>
  )
}
