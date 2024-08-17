import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="pt-[150px] pb-[63px]">
      <div className="container">
        <address className="text-center">
          Tim A. Ehinger - 7320 West 158th Street
        </address>
        <address className="text-center">- Overland Park, KS 66223 </address>
        <div className="mt-[32px] flex items-center justify-between text-mainBlack">
          <Link href="/">
            <Image src="/headerLogo.png" width={268} height={64} alt="logo" />
          </Link>
          <ul className="flex items-center gap-[16px] text-lg">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Institutions</a>
            </li>
            <li>
              <a href="#">Strategies</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
          <div className="text-base">
            <p className="mb-[12px]">Have any questions?</p>
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
