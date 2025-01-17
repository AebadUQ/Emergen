"use client";
import ScreenContainer from "@/app/components/layout/ScreenContainer";
const HomeBanner = () => {
  return (
    <div className="relative h-[700px] w-full overflow-hidden sm:h-[767px] lg:h-[1024px] ">
      <img
        src="/assets/images/home-banner.png"
        alt="banner-heading"
        className="h-full w-full object-cover"
      />

      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center">
        <ScreenContainer style="max-w-[1300px]">
          <div className="flex h-full w-full flex-col gap-[18px] sm:gap-[32px]">
            <div>
              <h1 className="banner-heading font-NextBold text-center text-white">
                ENHANCE YOUR WINTER CONSTRUCTION PROJECTS
                WITH OUR ADVANCED HEATING SOLUTIONS
              </h1>
              <p className="banner-content text-center font-poppins text-white">
                Reliable, Powerful, and Eco-friendly Heating
                Solutions
              </p>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-[18px] sm:flex-row sm:gap-[32px]">
              <button className="btn-content bg-primary px-[74px] py-[12px] font-poppins font-semibold text-white transition-transform duration-300 hover:scale-105 ">
                Get a Quote
              </button>
              <button className="btn-content border border-white bg-transparent px-[74px] py-[12px] font-poppins font-semibold text-white transition-transform duration-300 hover:scale-105 ">
                Learn More
              </button>
            </div>
          </div>
        </ScreenContainer>
      </div>
      <div className="absolute inset-0"></div>
    </div>
  );
};

export default HomeBanner;
