export function FoundersCombined() {
  const founders = [
    {
      name: "Sarah Chen",
      title: "Co-founder & CEO",
      background: "from-blue-400 to-blue-600",
    },
    {
      name: "Marcus Rodriguez",
      title: "Co-founder & CTO",
      background: "from-purple-400 to-purple-600",
    },
    {
      name: "Elena Vasquez",
      title: "Co-founder & COO",
      background: "from-emerald-400 to-emerald-600",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white px-12 gap-16">
      {/* Headline */}
      <div className="text-center max-w-3xl">
        <h2 className="text-6xl font-bold text-foreground mb-6">
          Built by Founders
          <br />
          Who've Done This Before
        </h2>
        <p className="text-xl text-slate-600">Combined 40+ years of experience scaling companies from zero to $100M+</p>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
        {founders.map((founder) => (
          <div key={founder.name} className="text-center">
            <div
              className={`w-40 h-40 rounded-full mx-auto mb-6 bg-linear-to-br ${founder.background} flex items-center justify-center shadow-lg mb-6`}
            >
              <img
                src={`/.jpg?height=160&width=160&query=${founder.name.toLowerCase().replace(" ", "-")}`}
                alt={founder.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{founder.name}</h3>
            <p className="text-slate-600">{founder.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
