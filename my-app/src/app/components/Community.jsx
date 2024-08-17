import Image from "next/image";
import React from "react";

function Community() {
  return (
    <section className="py-[120px] relative">
        <Image src='/communityDoodeSvg.svg' width={319} height={318} alt="dodes" className="absolute left-0 top-[30%]"/>
      <div className="container">
        <h2 className="text-mainBlue text-5xl font-medium">Current Outreach in Our Community</h2>
        </div>
        <ul className="mt-[80px] grid grid-cols-3 gap-[24px] pl-[300px] pr-[17px]">
          <li className="px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
            <h2 className="mb-[24px] text-2xl font-medium">Lansing Correctional <br /> Facility</h2>
            <Image src="/community1.png" width={344} height={143} alt="img"/>
            <p className="mt-[24px] text-base">
              Lansing Correctional Facility (LCF) is the state’s largest and
              oldest correctional complex for adult male residents. At the close
              of 2013, LCF had a capacity of 2,405. The complex consists of the
              Central Unit, which includes an 11-acre maximum-security facility,
              and a 46-acre medium-security facility.
            </p>
          </li>
          <li className="px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
            <h2 className="mb-[24px] text-2xl font-medium">New Creation</h2>
            <Image src="/community2.png" width={344} height={143} alt="img"/>
            <p className="mt-[24px] text-base">
              In 2004, Pam Hanson suffered a sports injury, leaving her
              wheelchair-bound for over two years. Dependent on prescription
              pain medication for 12 years, she faced a tough withdrawal. New
              Creation has since expanded to include nine properties: six
              housing locations, an apartment building, Pam’s house, and the New
              Creation Community Center.
            </p>
          </li>
          <li className="px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
            <h2 className="mb-[24px] text-2xl font-medium">Johnson County <br /> Department of Corrections</h2>
            <Image src="/community3.png" width={344} height={143} alt="img"/>
            <p className="mt-[24px] text-base">
              The Johnson County Department of Corrections Adult Residential
              Center supervises juvenile and adult offenders through effective
              rehabilitation and recidivism reduction programs. They forge
              partnerships to bridge the gap between offenders and the community
            </p>
          </li>
        </ul>

      <Image src='/communityCircleSvg.svg' width={325} height={326} alt="circle" className="absolute right-0 bottom-[-100px]"/>
    </section>
  );
}

export default Community;
