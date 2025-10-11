export default function PathToMastery() {
  const paths = [
    {
      bgColor: "#DEFFCA",
      image: "assets/progarm02.jpg",
      title: "ELC Programs",
      titleColor: "#3D9C02",
      description: "Access everything with an affordable quarterly, half-yearly or yearly membership.",
      buttonText: "Explore ELC Programs",
      buttonColor: "#3D9C02"
    },
    {
      bgColor: "#E2DAFF",
      image: "assets/program03.png",
      title: "One Specific Program",
      titleColor: "#001839",
      description: "Join only what you wanna proceed with for specific programs and opportunities.",
      buttonText: "Explore Program",
      buttonColor: "#001839"
    }
  ]

  return (
    <section>
      <div className="my-15">
        <h3 className="text-[#000C40] text-[32px] sm:text-[39px] lg:text-[45px] xl:text-[52px] font-bold text-center mb-10">
          Choose Your Path To Mastery
        </h3>
        <div className="flex flex-wrap box-center gap-7">
          {paths.map((path, index) => (
            <div
              key={index}
              className="bg-[#DEFFCA] w-75 sm:w-131 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 sm:gap-0 px-4 py-7 sm:p-4 rounded-[10px]"
              style={{ backgroundColor: path.bgColor }}
            >
              <img 
                className="w-45 h-60 mx-auto rounded-[10px]" 
                src={path.image} 
                alt={path.title}
              />
              <div className="sm:w-[55%] space-y-4 text-center sm:text-left">
                <h6 
                  className="font-bold text-[22px]"
                  style={{ color: path.titleColor }}
                >
                  {path.title}
                </h6>
                <p className="font-medium text-[#00000099]">{path.description}</p>
                <a 
                  href="#"
                  className="bg-[#3D9C02] mx-auto sm:mx-0 text-white text-sm font-medium flex box-center rounded-full w-45 h-8"
                  style={{ backgroundColor: path.buttonColor }}
                >
                  {path.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}