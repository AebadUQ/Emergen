import Link from "next/link";
import ScreenContainer from "./ScreenContainer";
const oiaLogo = "/assets/icons/oia-logo-white.svg";
const Footer = () => {
  return (
    <div className="bg-background py-[20px]">
      <ScreenContainer>
                <p className="section-content  font-poppins text-white cursor-pointer" >
                  Copyright &copy; 2025 Aebaduq . All rights reserved
                </p>
       
      </ScreenContainer>
    </div>
  );
};
export default Footer;
