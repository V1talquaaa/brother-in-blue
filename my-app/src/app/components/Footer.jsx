import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer id="footer" className="pt-[100px] lg:pt-[150px] pb-[63px]">
      <div className="container">
        <address className="text-center">
          Tim A. Ehinger - 7320 West 158th Street
        </address>
        <address className="text-center">- Overland Park, KS 66223 </address>
        <div className="mt-[32px] flex flex-col lg:flex-row items-center justify-between text-mainBlack">
          <Link href="/">
            <Image src="/headerLogo.png" width={268} height={64} alt="logo" />
          </Link>
          <ul className="mt-[48px] lg:mt-0 flex flex-col gap-[32px] lg:flex-row items-center lg:gap-[16px] text-lg">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#institutions">Institutions</a>
            </li>
            <li>
              <a href="#strategies">Strategies</a>
            </li>
            <li>
              <a href="#history">History</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#footer">Contacts</a>
            </li>
          </ul>
          <div className="mt-[48px] lg:mt-0 text-base">
            <p className="mb-[12px] text-center lg:text-left">Have any questions?</p>
            <a
              href="mailto:tim@brotherinblue.org"
              type="email"
              className="flex"
            >
              <Image
                src="/sms-tracking.svg"
                width={24}
                height={24}
                alt="email"
              />
              <span className="ml-[6px]">tim@brotherinblue.org</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
