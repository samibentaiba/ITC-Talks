export function ImageCard({ image, name }: { image: string; name: string }) {
  return <img className="w-full h-full rounded-3xl object-cover" src={image || "/placeholder.svg"} alt={name} />
}

export function DataCard({
  name,
  title,
  description,
}: {
  name: string
  title: string
  description: string
}) {
  return (
    <div className="w-full h-full p-6 sm:p-8 md:p-10 bg-zinc-200 rounded-3xl flex flex-col justify-between items-start">
      <div className="w-full flex flex-col h-28 gap-1">
        <div className="flex justify-between items-center">
          <div className="text-stone-900 text-2xl sm:text-3xl font-semibold font-Syne">{name}</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path
              d="M36 2.64706V33.3529C36 34.055 35.7211 34.7283 35.2247 35.2247C34.7283 35.7211 34.055 36 33.3529 36H2.64706C1.94502 36 1.27173 35.7211 0.775306 35.2247C0.278886 34.7283 0 34.055 0 33.3529L0 2.64706C0 1.94502 0.278886 1.27173 0.775306 0.775306C1.27173 0.278886 1.94502 0 2.64706 0L33.3529 0C34.055 0 34.7283 0.278886 35.2247 0.775306C35.7211 1.27173 36 1.94502 36 2.64706ZM10.5882 13.7647H5.29412V30.7059H10.5882V13.7647ZM11.0647 7.94118C11.0675 7.54072 10.9914 7.14363 10.8407 6.77259C10.69 6.40155 10.4677 6.06383 10.1866 5.77869C9.90535 5.49356 9.57074 5.26661 9.20183 5.1108C8.83292 4.95498 8.43693 4.87336 8.03647 4.87059H7.94118C7.12681 4.87059 6.34579 5.1941 5.76994 5.76994C5.1941 6.34579 4.87059 7.12681 4.87059 7.94118C4.87059 8.75555 5.1941 9.53656 5.76994 10.1124C6.34579 10.6883 7.12681 11.0118 7.94118 11.0118C8.34166 11.0216 8.74016 10.9525 9.11391 10.8083C9.48766 10.664 9.82933 10.4476 10.1194 10.1713C10.4095 9.89499 10.6423 9.56424 10.8045 9.19793C10.9667 8.83163 11.0551 8.43696 11.0647 8.03647V7.94118ZM30.7059 20.4141C30.7059 15.3212 27.4659 13.3412 24.2471 13.3412C23.1932 13.2884 22.1438 13.5129 21.2037 13.9922C20.2637 14.4715 19.4657 15.189 18.8894 16.0729H18.7412V13.7647H13.7647V30.7059H19.0588V21.6953C18.9823 20.7725 19.273 19.8567 19.8678 19.1469C20.4625 18.4372 21.3133 17.9908 22.2353 17.9047H22.4365C24.12 17.9047 25.3694 18.9635 25.3694 21.6318V30.7059H30.6635L30.7059 20.4141Z"
              fill="#1C1A1A"
              fillOpacity="0.6"
            />
          </svg>
        </div>
        <div className="text-stone-900 text-opacity-60 text-lg sm:text-xl font-normal font-Syne">{title}</div>
      </div>
      <div className="text-stone-900 text-opacity-80 text-base sm:text-lg md:text-xl font-medium font-Syne leading-relaxed md:leading-loose">
        {description}
      </div>
    </div>
  )
}

