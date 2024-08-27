import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

export default function CommunitySwiper() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <div className="lg:ml-[300px] lg:mr-[30px] relative">
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        freeMode={true}
        pagination={{ clickable: true }}
        navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper mt-[32px] lg:mt-[80px] mx-[16px] lg:pl-[300px] lg:pr-[17px]"
      >
        <SwiperSlide>
          <div className="card-container h-[550px] flex flex-col justify-between px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
            <h2 className="mb-[24px] text-2xl font-medium">
              Lansing Correctional <br /> Facility
            </h2>
            <Image src="/community1.png" width={344} height={143} alt="img" />
            <p className="mt-[24px] text-base">
              Lansing Correctional Facility (LCF) is the state’s largest and oldest correctional complex for adult male residents. At the close of 2013, LCF had a capacity of 2,405. The complex consists of the Central Unit, which includes an 11-acre maximum-security facility, and a 46-acre medium-security facility.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-container h-[550px] flex flex-col justify-between px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
            <h2 className="mb-[24px] text-2xl font-medium">New Creation</h2>
            <Image src="/community2.png" width={344} height={143} alt="img" />
            <p className="mt-[24px] text-base">
              In 2004, Pam Hanson suffered a sports injury, leaving her wheelchair-bound for over two years. Dependent on prescription pain medication for 12 years, she faced a tough withdrawal. New Creation has since expanded to include nine properties: six housing locations, an apartment building, Pam’s house, and the New Creation Community Center.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-container h-[550px] flex flex-col justify-between px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
            <h2 className="mb-[24px] text-2xl font-medium">
              Johnson County <br /> Department of Corrections
            </h2>
            <Image src="/community3.png" width={344} height={143} alt="img" />
            <p className="mt-[24px] text-base">
              The Johnson County Department of Corrections Adult Residential Center supervises juvenile and adult offenders through effective rehabilitation and recidivism reduction programs. They forge partnerships to bridge the gap between offenders and the community.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-container h-[550px] flex flex-col justify-between px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
            <h2 className="mb-[24px] text-2xl font-medium">
              Transition Center of <br /> Kansas City
            </h2>
            <Image src="/community4.png" width={344} height={143} alt="img" />
            <p className="mt-[24px] text-base">
              The Transition Center of Kansas City (TCKC), located in the Historic West Bottoms, is a newly remodeled transitional living facility. Once a minimum-security prison, it has been transformed into a resource hub for justice-involved individuals. TCKC helps develop and strengthen support networks for a successful reentry journey.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-container h-[550px] flex flex-col justify-between px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
            <h2 className="mb-[24px] text-2xl font-medium">Healing House</h2>
            <Image src="/community5.png" width={344} height={143} alt="img" />
            <p className="mt-[24px] text-base">
              The Transition Center of Kansas City (TCKC), located in the Historic West Bottoms, is a newly remodeled transitional living facility. Once a minimum-security prison, it has been transformed into a resource hub for justice-involved individuals. TCKC helps develop and strengthen support networks for a successful reentry journey.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute left-0 bottom-[-50px] flex space-x-2">
        <button ref={prevRef} className="">
          <Image src='/arrow-left.svg' width={30} height={30} alt='prev' />
        </button>
        <button ref={nextRef} className="">
        <Image src='/arrow-right.svg' width={30} height={30} alt='next' />
        </button>
      </div>
    </div>
  );
}


