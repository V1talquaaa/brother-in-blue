import Image from "next/image";
import React from "react";

function Strategies() {
  return (
    <section id="strategies" className="">
      <Image
        src="/StrategiesSvg.svg"
        width={188}
        height={166}
        alt=""
        className="hidden lg:block absolute right-0"
      />
      <div className="container py-[60px] px-[24px] lg:bg-[#E5EDF4] rounded-[32px]">
        <h3 className=" lg:hidden py-[16px] px-[24px] max-w-[185px] border border-mainBlue rounded-[12px] text-base text-center text-mainBlue mr-auto ml-auto mb-[24px]">
          STRATEGIES
        </h3>
        <h2 className="text-[32px] text-center lg:text-5xl lg:text-left text-mainBlue font-medium">
          Uplifting and Empowering <br /> Approaches
        </h2>
        <div className="mt-[32px] lg:grid lg:grid-cols-4 relative z-10">
          <Image
            src="/heroCircle.svg"
            width={201}
            height={201}
            alt=""
            className="hidden lg:block absolute left-[20%] top-[30%] z-[-1]"
          />
          <h3 className="hidden lg:block py-[16px] px-[24px] max-w-[185px] border border-mainBlue rounded-[12px] text-2xl text-center text-mainBlue h-[65px] col-span-1">
            STRATEGIES
          </h3>
          <Image
            src="/strategiesImg.png"
            width={282}
            height={543}
            alt="img"
            className="hidden lg:block lg:col-span-1"
          />
          <div className="col-span-2">
            <h4 className="text-2xl lg:text-[32px] text-mainBlack font-medium text-center lg:text-left">
              Honor the God-given dignity in all people, no matter what their
              circumstance
            </h4>
            <p className="mt-[24px] text-base lg:text-2xl text-mainBlack text-center lg:text-left">
              Recognizing that everyone bears the image of God, we
              unconditionally respect, love and accept all people. We endeavor
              to teach to the gospel, believing that God offers redemption and
              renewed purpose to each person who are marginalized or
              incarcerated.
            </p>
            <p className="text-sm lg:text-lg mt-[24px] ml-[24px] italic text-center lg:text-right">
              “So God created mankind in his own image, in the image of God he
              created them; male and female he created them”
            </p>
            <p className="text-center lg:text-right italic">(Genesis 1:27)</p>
          </div>
        </div>
        <Image
          src="/strategiesMobImg.png"
          width={443}
          height={588}
          alt="img"
          className="mr-auto ml-auto mt-[60px] lg:hidden lg:col-span-1"
        />
      </div>
    </section>
  );
}

export default Strategies;
