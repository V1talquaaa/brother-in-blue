import Image from "next/image";
import Link from "next/link";
import React from "react";

function Goal() {
  return (
    <section className="pb-[24px] relative">
      <div className="container border-b border-[#E8E8E8] pb-[24px]">
        <Link
          href="#"
          className="mt-[103px] py-[16px] px-[24px] border rounded-[12px] border-mainBlue inline-block text-2xl font-medium text-mainBlue"
        >
          GOAL
        </Link>
        <h2 className="text-right text-5xl font-medium ml-[195px] leading-relaxed">
          To introduce, maintain and expand the <span className="text-mainBlue">Kingdom of God</span> to those who are <br />
          amongst the marginalized, incarcerated and downtrodden
        </h2>
      </div>
      <Image src='/triangleSvg.svg' width={354} height={315} alt="triangle" className="absolute right-[30px] bottom-[-150px]"/>
    </section>
  );
}

export default Goal;
