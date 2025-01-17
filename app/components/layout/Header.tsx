"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScreenContainer from "./ScreenContainer";

const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "#" },
    { id: 3, name: "Services", link: "#" },
    { id: 4, name: "Project", link: "#" },
    { id: 5, name: "Contact Us", link: "#" },
  ];

  return (
    <section className="absolute z-[9999] flex w-full justify-center bg-transparent text-textprimary">
<div className="w-full border-b" style={{ background: 'linear-gradient(to bottom, black, transparent)' }}>
<ScreenContainer style="max-w-[1300px] ">
          <nav className="flex justify-between ">
            <div className="border-color-white  w-[28%]  border-0 sm:border-r">
              <img
                src="/assets/images/nav-logo.svg"
                alt="emergen-logo"
                className="h-[100px] w-full  object-contain"
              />
            </div>
            <div className="hidden  w-full items-center justify-end gap-[32px] lg:flex">
              {navLinks?.map((value: any) => (
                <Link href={value.link} key={value.id}>
                  <span className={`nav-item font-poppins text-white hover:font-bold ${pathname==`${value.link}` ?'font-bold':''}`}>
                    {value.name}
                  </span>
                </Link>
              ))}
              <button className="btn-content bg-primary px-[16px] py-[12px] font-poppins font-semibold text-white transition-transform duration-300 hover:scale-105 ">
                Schedule a Consultation
              </button>
            </div>
            <div>
            <div className="flex items-center lg:hidden h-full">
            <img
                src="/assets/icons/menu.png"
                alt="menu-icon"
                className="h-[32px] w-full  object-contain"
              />
            </div>
            </div>
          </nav>
        </ScreenContainer>
      </div>
    </section>
  );
};

export default Header;
