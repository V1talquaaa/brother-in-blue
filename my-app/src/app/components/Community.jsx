'use client';

import Image from "next/image";
import React from "react";
import CommunitySwiper from "./CommunitySwiper";


function Community() {
  
  return (
    <section id="institutions" className="py-[80px] lg:py-[120px] relative">
      <Image
        src="/communityDoodeSvg.svg"
        width={319}
        height={318}
        alt="dodes"
        className="hidden lg:block absolute left-0 top-[30%]"
      />
      <div className="container">
        <h2 className="text-mainBlue text-[32px] lg:text-5xl font-medium">
          Current Outreach in Our Community
        </h2>
      </div>
      <div className="container">
      <CommunitySwiper />
      </div>
      <Image
        src="/communityCircleSvg.svg"
        width={325}
        height={326}
        alt="circle"
        className="absolute right-0 bottom-[-100px]"
      />
    </section>
  );
}

export default Community;
