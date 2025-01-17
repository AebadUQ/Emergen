import ScreenContainer from "@/app/components/layout/ScreenContainer";

const KeyFeatures = () => {
  return (
    <div className="relative bg-tertianary  ">
      <div className=" flex h-[785px] w-full justify-center bg-background sm:h-[756px] sm:w-[67.33%] md:h-[500px] lg:h-[628px] "></div>
      <div className="absolute top-[64px] h-full  w-full">
        <ScreenContainer>
          <div className="flex flex-col items-center justify-between gap-[32px] md:flex-row">
            <div className="flex flex-col gap-[18px] sm:gap-[32px]">
              <h2 className="section-heading font-NexaABold text-primary">
                Key Features
              </h2>
              <ul className="section-content list-disc space-y-2 pl-5 font-poppins text-white">
                <li>
                  Thaws up to 6,000 sq ft. or cures up to
                  18,000 sq ft.
                </li>
                <li>
                  Environmentally friendly with low
                  emissions and reduced fuel consumption.
                </li>
                <li>
                  Easy to operate with user-friendly
                  controls and automatic temperature
                  regulation.
                </li>
                <li>
                  Capable of operating with external
                  temperatures down to -30°C.
                </li>
              </ul>
            </div>
            <div className="h-[320px] w-full  max-w-[680px] sm:h-[308px] md:h-[372px] lg:h-[500px]">
              <img
                src="/assets/images/key-feature-img.png"
                alt="key-feature"
                className="object-fit h-full w-full"
              />
            </div>
          </div>
        </ScreenContainer>
      </div>
      <div className="w-full border-b-[4px] border-t-[4px] border-primary">
        <img
          src="/assets/images/construction-banner.png"
          alt="construction-banner"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default KeyFeatures;
