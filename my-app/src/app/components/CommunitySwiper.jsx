import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

export default function CommunitySwiper() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      spaceBetween={24}
      freeMode={true}
      pagination={isMobile ? { clickable: true } : false}
      navigation={!isMobile ? { clickable: true } : false}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper container mt-[32px] lg:mt-[80px] mx-[16px] lg:pr-[17px]"
      slidesPerView={isMobile ? 1 : 3}
    >
      <SwiperSlide>
        <div className="h-[550px] flex flex-col justify-between px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
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
        <div className="h-[550px] flex flex-col justify-between px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
          <h2 className="mb-[24px] text-2xl font-medium">New Creation</h2>
          <Image src="/community2.png" width={344} height={143} alt="img" />
          <p className="mt-[24px] text-base">
            In 2004, Pam Hanson suffered a sports injury, leaving her wheelchair-bound for over two years. Dependent on prescription pain medication for 12 years, she faced a tough withdrawal. New Creation has since expanded to include nine properties: six housing locations, an apartment building, Pam’s house, and the New Creation Community Center.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[550px] flex flex-col justify-between px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
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
        <div className="h-[550px] flex flex-col justify-between px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
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
        <div className="h-[550px] flex flex-col justify-between px-[24px] pt-[24px] pb-[50px] rounded-2xl bg-[#E5EDF4]">
          <h2 className="mb-[24px] text-2xl font-medium">Healing House</h2>
          <Image src="/community5.png" width={344} height={143} alt="img" />
          <p className="mt-[24px] text-base">
            The Transition Center of Kansas City (TCKC), located in the Historic West Bottoms, is a newly remodeled transitional living facility. Once a minimum-security prison, it has been transformed into a resource hub for justice-involved individuals. TCKC helps develop and strengthen support networks for a successful reentry journey.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
