import ScreenContainer from "@/app/components/layout/ScreenContainer";
const HydronicHeater = () => {
  return (
    <div className="bg-tertianary py-[60px] sm:py-[64px] ">
      <ScreenContainer>
        <div className="flex flex-col gap-[18px] sm:gap-[32px]">
          <div>
            <p className="section-heading font-poppins font-semibold text-white">
              E3000 Hydronic Heater{" "}
            </p>
            <h2 className="section-heading font-NexaABold text-primary">
              Unmatched Performance in Ground Thawing and
              Concrete Curing{" "}
            </h2>
          </div>
          <p className="section-content font-poppins text-white">
            The E3000 Hydronic Heater from Wacker Neuson is
            your premier solution for efficient and
            effective ground thawing and concrete curing
            during the colder months. Designed to handle the
            toughest conditions, this heater ensures that
            your construction projects continue smoothly,
            regardless of freezing temperatures.
          </p>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default HydronicHeater;
