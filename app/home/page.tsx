import React from "react";
import { HomeBanner,QuickCostEstimator,HydronicHeater,KeyFeatures } from "@/app/components/home";
const Home: React.FC<any> = () => {
  return (
    <React.Fragment>
      <HomeBanner/>
      <QuickCostEstimator/>
      <HydronicHeater/>
      <KeyFeatures/>
    </React.Fragment>
  );
};
export default Home;
