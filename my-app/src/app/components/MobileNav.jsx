import React from "react";
import Image from "next/image";

export const MobileNav = ({ closeMenuBtn }) => {
  return (
    <nav className="fixed py-[40px] top-0 right-0 bg-mainBlack w-[80%] h-screen">
      <div className="container">
      <div className="container flex justify-end">
        <button type="button" onClick={closeMenuBtn} className="inline-block">
          <Image src="/closeMenuIcon.svg" width={24} height={24} alt="close" />
        </button>
      </div>
        <ul className="mt-[48px] lg:mt-0 flex flex-col gap-[32px] lg:flex-row items-center lg:gap-[16px] text-lg text-mainWhite">
          <li>
            <a href="#home" onClick={closeMenuBtn}>Home</a>
          </li>
          <li>
            <a href="#institutions " onClick={closeMenuBtn}>Institutions</a>
          </li>
          <li> 
            <a href="#strategies" onClick={closeMenuBtn}>Strategies</a>
          </li>
          <li>
            <a href="#history" onClick={closeMenuBtn}>History</a>
          </li>
          <li>
            <a href="#events" onClick={closeMenuBtn}>Events</a>
          </li>
          <li>
            <a href="#footer" onClick={closeMenuBtn}>Contacts</a>
          </li>
        </ul>
        <div className="mt-[48px] lg:mt-0 text-base text-mainWhite">
          <p className="mb-[12px] text-center lg:text-left">
            Have any questions?
          </p>
          <a href="mailto:tim@brotherinblue.org" type="email" className="flex justify-center">
            <Image src="/sms-tracking.svg" width={24} height={24} alt="email" />
            <span className="ml-[6px]">tim@brotherinblue.org</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
