"use client";
import ScreenContainer from "@/app/components/layout/ScreenContainer";
import { useState } from "react";

// Define the form data type explicitly
type FormData = {
  area: string;
  frostDepth: string;
  duration: string;
  powerAvailability: boolean;
  deliveryPickup: boolean;
  insulatedTarps: boolean;
  setupGroundThaw: boolean;
  totalCost: number;
};

const QuickCostEstimator = () => {
  const [formData, setFormData] = useState<FormData>({
    area: "",
    frostDepth: "",
    duration: "",
    powerAvailability: false,
    deliveryPickup: false,
    insulatedTarps: false,
    setupGroundThaw: false,
    totalCost: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBooleanChange = (name: keyof FormData) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: !prevData[name as keyof FormData],
    }));
  };

  const calculateCost = () => {
    const areaDimensions = formData.area.split("x");
    const areaInFeet =
      parseFloat(areaDimensions[0]) * parseFloat(areaDimensions[1]);
    const baseCost = 575 * parseFloat(formData.duration); 
    let additionalCost = 0;
    if (formData.deliveryPickup) additionalCost += 100;
    if (formData.powerAvailability) additionalCost += 50;
    if (formData.insulatedTarps) additionalCost += 75;
    if (formData.setupGroundThaw) additionalCost += 150;

    const calculatedCost = baseCost + additionalCost;
    setFormData((prevData) => ({
      ...prevData,
      totalCost: calculatedCost,
    }));
  };

  return (
    <div className="bg-background py-[60px] md:py-[80px] lg:py-[100px]">
      <ScreenContainer>
        <div className="flex flex-col gap-[18px] sm:gap-[32px]">
          <div>
            <p className="section-label font-poppins font-semibold text-white">
              Estimate Your Project Costs
            </p>
            <h2 className="section-heading font-NexaABold text-primary">
              Quick Cost Estimator
            </h2>
          </div>
          <p className="section-content font-poppins text-white">
            Use our simple calculator to estimate the cost
            of renting the E3000 Hydronic Heater for your
            specific project needs. Enter your project
            details below to receive an instant preliminary
            quote.
          </p>
          <div className="flex flex-col gap-[18px] sm:flex-row sm:gap-[32px]">
            {/* Area to be Thawed */}
            <div className="relative z-0 w-full">
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                id="floating_standard"
                className="section-content peer z-20 block w-full appearance-none border-0 bg-white px-[16px] pb-[8px] pt-[12px] font-poppins text-sm font-normal text-secondary focus:border-[1px] focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="pointer-events-none absolute top-3 z-10 ml-[16px] origin-[0] -translate-y-6 scale-75 transform bg-transparent px-[6px] text-sm text-secondary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-secondary peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-primary"
              >
                Area to be Thawed (in feet, e.g., 60x30)
              </label>
            </div>
            {/* Frost Depth */}
            <div className="relative z-0 w-full">
              <input
                type="text"
                name="frostDepth"
                value={formData.frostDepth}
                onChange={handleChange}
                id="floating_standard"
                className="section-content peer z-20 block w-full appearance-none border-0 bg-white px-[16px] pb-[8px] pt-[12px] font-poppins text-sm font-normal text-secondary focus:border-[1px] focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="pointer-events-none absolute top-3 z-10 ml-[16px] origin-[0] -translate-y-6 scale-75 transform bg-transparent px-[6px] text-sm text-secondary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-secondary peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-primary"
              >
                Frost Depth (inches)
              </label>
            </div>
            {/* Duration */}
            <div className="relative z-0 w-full">
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                id="floating_standard"
                className="section-content peer z-20 block w-full appearance-none border-0 bg-white px-[16px] pb-[8px] pt-[12px] font-poppins text-sm font-normal text-secondary focus:border-[1px] focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="pointer-events-none absolute top-3 z-10 ml-[16px] origin-[0] -translate-y-6 scale-75 transform bg-transparent px-[6px] text-sm text-secondary duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-secondary peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-primary"
              >
                Duration (Days)
              </label>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 gap-x-[32px] sm:grid-cols-2">
            <div className="border-color-white flex items-center justify-between border-b py-[16px]">
              <p className="section-content font-poppins text-primary">
                Delivery/Pickup
              </p>
              <div className="flex gap-[16px]">
                <button
                  className={`border-color-white section-content cursor-pointer border-[1px] p-[12px] font-poppins text-white ${!formData.deliveryPickup && "bg-primary"}`}
                  onClick={() => handleBooleanChange("deliveryPickup")}
                >
                  No
                </button>
                <button
                  className={`section-content cursor-pointer p-[12px] font-poppins text-white ${formData.deliveryPickup && "bg-primary"}`}
                  onClick={() => handleBooleanChange("deliveryPickup")}
                >
                  Yes
                </button>
              </div>
            </div>
            <div className="border-color-white flex items-center justify-between border-b py-[16px]">
              <p className="section-content font-poppins text-primary">
                Power Availability
              </p>
              <div className="flex gap-[16px]">
                <button
                  className={`border-color-white section-content cursor-pointer border-[1px] p-[12px] font-poppins text-white ${!formData.powerAvailability && "bg-primary"}`}
                  onClick={() => handleBooleanChange("powerAvailability")}
                >
                  No
                </button>
                <button
                  className={`section-content cursor-pointer p-[12px] font-poppins text-white ${formData.powerAvailability && "bg-primary"}`}
                  onClick={() => handleBooleanChange("powerAvailability")}
                >
                  Yes
                </button>
              </div>
            </div>
            <div className="border-color-white flex items-center justify-between border-b py-[16px] sm:border-0 ">
              <p className="section-content font-poppins text-primary">
                Insulated Tarps
              </p>
              <div className="flex gap-[16px]">
                <button
                  className={`border-color-white section-content cursor-pointer border-[1px] p-[12px] font-poppins text-white ${!formData.insulatedTarps && "bg-primary"}`}
                  onClick={() => handleBooleanChange("insulatedTarps")}
                >
                  No
                </button>
                <button
                  className={`section-content cursor-pointer p-[12px] font-poppins text-white ${formData.insulatedTarps && "bg-primary"}`}
                  onClick={() => handleBooleanChange("insulatedTarps")}
                >
                  Yes
                </button>
              </div>
            </div>
            <div className="border-color-white flex items-center justify-between border-b py-[16px] sm:border-0 ">
              <p className="section-content font-poppins text-primary">
                Setup of Ground Thaw Equipment
              </p>
              <div className="flex gap-[16px]">
                <button
                  className={`border-color-white section-content cursor-pointer border-[1px] p-[12px] font-poppins text-white ${!formData.setupGroundThaw && "bg-primary"}`}
                  onClick={() => handleBooleanChange("setupGroundThaw")}
                >
                  No
                </button>
                <button
                  className={`section-content cursor-pointer p-[12px] font-poppins text-white ${formData.setupGroundThaw && "bg-primary"}`}
                  onClick={() => handleBooleanChange("setupGroundThaw")}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>

          <p className="section-heading font-NexaABold text-center text-primary">
            ${formData.totalCost}
          </p>
          <div className="flex items-center justify-center">
            <button
              className="section-content cursor-pointer bg-primary px-[16px] py-[12px] font-poppins text-white"
              onClick={calculateCost}
            >
              Calculate Cost
            </button>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default QuickCostEstimator;
