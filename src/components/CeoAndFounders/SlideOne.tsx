import logo from "../../assets/OnlyLogoSvg.svg"
export function SlideOne() {
  return (
    <div className="flex items-center justify-between w-full h-full bg-white px-12 gap-12">
      {/* Left side - Headline */}
      <div className="flex-1 relative">
        <h1 className="text-6xl font-bold leading-tight text-foreground max-w-2xl">
          Lived The Chaos.
          <br />
          Solved The Gaps.
          <br />
          Built <span className="absolute top-4 left-28  "><img src={logo} className="oject-cover w-[350px]"></img></span>
        </h1>
       
      </div>
    </div>
  )
}
