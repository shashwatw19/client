import { Link } from 'react-router'
export type FeatureDescriptionType = {
    id : string,
    title : string,
    description : string[],
    imgSrc : string,
    aligned : string
}
const FeatureDescription = ({
    id = "",
    title = "",
    description = [],
    imgSrc = "",
    aligned = "right"
} : FeatureDescriptionType) => {
  return (
    <div className={`max-w-5xl mx-auto px-6 py-8  flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 ${aligned === 'left' ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-1/2 flex flex-col justify-center h-[400px] gap-6 text-center md:text-left order-2 md:order-0">
        <div className='flex flex-col gap-5 '>
          <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 capitalize">
            {title}
          </h2>
        <ul className="text-sm sm:text-base text-gray-700 leading-relaxed list-disc list-inside space-y-2">
            {description?.map((desc, idx) => (
                <li key={idx}>{desc}</li>
            ))}
        </ul>
        </div>
       
        <div className="mt-2 w-auto md:w-full ">
          <Link to={`/${id}`}>
          <button className="w-full  bg-[#38b6ff] text-white font-semibold rounded-md px-3 py-2 text-base sm:text-lg  ">
            Know More
          </button></Link>
        </div>
      </div>

    <div className="w-1/2 ">
      <div className={`flex flex-row items-center justify-center ${aligned == "right" ? "md:justify-end" : "md:justify-start"}`} >
        <img
        src={imgSrc}
        alt={title}
        loading="lazy"
        className="max-h-[360px] sm:max-h-[420px] md:max-h-[400px] object-contain rounded-lg "
      />
      </div>
    </div>
    </div>
  )
}

export default FeatureDescription