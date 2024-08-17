import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="container flex">
        <div className="mr-[24px]">
          <Link href='#' className="mt-[103px] py-[16px] px-[24px] border rounded-[12px] border-mainBlue inline-block text-2xl font-medium text-mainBlue">MISSION</Link>
          <h1 className="mt-[24px] text-[80px] text-mainBlue font-medium">Make Jesus Known</h1>
          <p className="text-2xl text-mainBlack">
            “Therefore, go and make disciples of all nations, baptizing them in
            the name of the Father and of the Son and of the Holy Spirit, and
            teaching them to obey everything I have commanded you.” <br />
            </p>
            <p className="text-lg italic text-right">Matthew 28:19</p>
          <div className="relative">
            <Image src='/heroDodes.svg' width={247} height={246} alt="dodes" className="absolute -bottom-[150px] left-[170px]"/>
          </div>
        </div>
        <div className="min-w-[690px] relative z-10">
          <Image src="/heroLarge.png" width={690} height={784} alt="christ" className="z-10"/>
          <Image src="/heroSmall.png" width={204} height={248} alt="bible" className="absolute right-0 bottom-0" />
            <Image src='/heroCircle.svg' width={201} height={201} alt="circle" className="absolute -left-[50px] top-[392px] z-[-1]"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
