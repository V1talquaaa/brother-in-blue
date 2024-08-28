// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Image from 'next/image';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { FreeMode, Pagination, Navigation } from 'swiper/modules';

// export default function HistorySwiper() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       const isMobileView = window.innerWidth <= 640;
//       setIsMobile(isMobileView);
//     };

//     handleResize(); // Check on mount
//     window.addEventListener('resize', handleResize); // Check on resize

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const isMiddleSlide = (index) => {
//     const slidesPerView = 3;
//     const middleIndex = Math.floor(slidesPerView / 2);
//     return index === activeIndex + middleIndex;
//   };

//   return (
//     <div className="">
//       <Swiper
//         spaceBetween={24}
//         freeMode={!isMobile} // Disable freeMode on mobile
//         navigation={!isMobile ? { clickable: true } : false} // Disable navigation on mobile
//         pagination={isMobile ? { clickable: true } : false} // Show pagination on mobile only
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//         modules={[FreeMode, Pagination, Navigation]}
//         className="mySwiper mt-[32px] lg:mt-[80px] mx-[16px] lg:pl-[300px] lg:pr-[17px]"
//         breakpoints={{
//           640: {
//             slidesPerView: 1, // Show only one slide on mobile
//             spaceBetween: 0, // Adjust space between slides on mobile
//           },
//           768: {
//             slidesPerView: 3, // Show 3 slides on larger screens
//             spaceBetween: 24,
//           },
//         }}
//       >
//         {[
//           {
//             image: '/history1.png',
//             title: 'Church of the Resurrection',
//             description:
//               'Led and sometimes presented the Alpha Course from 2010 to 2020. Estimated total of all courses taught within that timeline was approximately 24-12 week sessions',
//             location: 'Leawood, KS',
//           },
//           {
//             image: '/history2.png',
//             title: 'St. Francis of Assisi in the Pines',
//             description:
//               'Presented and led entire 12-week Alpha Course to several members of the congregation',
//             location: 'Stanley, KS',
//           },
//           {
//             image: '/history3.png',
//             title: 'Leavenworth Penitentiary',
//             description:
//               'Attended and prayed for inmates during Holy Spirit Retreats',
//             location: 'Leavenworth, KS',
//           },
//           {
//             image: '/history4.png',
//             title: 'St. Mary Magdalene Episcopal Church',
//             description:
//               'Organized and hosted the Alpha Course for the congregation of the church. Sessions were a mixture of the Alpha videos and oral presentations',
//             location: 'Belton, MO',
//           },
//           {
//             image: '/history5.png',
//             title: 'First United Methodist Church',
//             description:
//               'Presented Holy Spirit Retreat sessions to members of the congregation',
//             location: 'Jefferson, IA',
//           },
//           {
//             image: '/history6.png',
//             title: 'New Creations (not-for-profit)',
//             description:
//               'Currently leading Alpha Course in this faith-based facility that helps overcome substance abuse addictions',
//             location: 'Olathe, KS',
//           },
//           {
//             image: '/history7.png',
//             title: 'Transition Center of Kansas City',
//             description:
//               'Currently leading men in the center on a Christian walk. Tools included, but not limited to, watching The Chosen, teaching the Alpha Course and other general presentations and videos',
//             location: 'Bottoms, MO',
//           },
//           {
//             image: '/history8.png',
//             title: 'Lansing Prison',
//             description:
//               'Currently leading the Alpha Course in Cell Block B since 2022. Hosted and presented during Holy Spirit Retreat weekend on several occasions.',
//             location: 'Lansing, KS',
//           },
//           {
//             image: '/history9.png',
//             title: 'Healing House (not-for-profit)',
//             description:
//               'Currently leading the Alpha Course in Cell Block B since 2022. Hosted and presented during Holy Spirit Retreat weekend on several occasions.',
//             location: 'Lansing, KS',
//           },
//           {
//             image: '/history10.png',
//             title: 'Johnson County Detention Center',
//             description:
//               'Currently leading men in the center on a Christian walk. Tools included, but not limited to, watching The Chosen, teaching the Alpha Course and other general presentations and videos',
//             location: 'Gardner, KS',
//           },
//         ].map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className={`history-slide h-[700px] flex flex-col items-center justify-center text-center transition-transform duration-300 ${
//                 !isMobile && isMiddleSlide(index) ? 'scale-[1.3]' : 'scale-[1]'
//               }`}
//               style={{
//                 maxWidth: '282px',
//                 transformOrigin: 'center',
//                 padding: !isMobile && isMiddleSlide(index) ? '8px' : '0',
//               }}
//             >
//               <Image
//                 src={slide.image}
//                 width={282}
//                 height={283}
//                 alt={slide.title}
//                 className="object-contain"
//               />
//               <h3 className="mt-[16px] text-2xl font-medium leading-tight">
//                 {slide.title}
//               </h3>
//               <p className="mt-[8px] text-base leading-snug">
//                 {slide.description}
//               </p>
//               <p className="mt-[8px] text-lg italic font-light leading-tight">
//                 {slide.location}
//               </p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function HistorySwiper() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 640;
      setIsMobile(isMobileView);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Check on resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMiddleSlide = (index) => {
    const slidesPerView = 3;
    const middleIndex = Math.floor(slidesPerView / 2);
    return index === activeIndex + middleIndex;
  };

  return (
    <div className="">
      <Swiper
        spaceBetween={24}
        freeMode={!isMobile} // Disable freeMode on mobile
        navigation={!isMobile ? { clickable: true } : false} // Disable navigation on mobile
        pagination={isMobile ? { clickable: true } : false} // Show pagination on mobile only
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper mt-[32px] lg:mt-[80px] mx-[16px] lg:pl-[300px] lg:pr-[17px]"
        breakpoints={{
          640: {
            slidesPerView: 1, // Show only one slide on mobile
            spaceBetween: 0, // Adjust space between slides on mobile
          },
          768: {
            slidesPerView: 3, // Show 3 slides on larger screens
            spaceBetween: 24,
          },
        }}
      >
        {[
          {
            image: '/history1.png',
            title: 'Church of the Resurrection',
            description:
              'Led and sometimes presented the Alpha Course from 2010 to 2020. Estimated total of all courses taught within that timeline was approximately 24-12 week sessions',
            location: 'Leawood, KS',
          },
          {
            image: '/history2.png',
            title: 'St. Francis of Assisi in the Pines',
            description:
              'Presented and led entire 12-week Alpha Course to several members of the congregation',
            location: 'Stanley, KS',
          },
          {
            image: '/history3.png',
            title: 'Leavenworth Penitentiary',
            description:
              'Attended and prayed for inmates during Holy Spirit Retreats',
            location: 'Leavenworth, KS',
          },
          {
            image: '/history4.png',
            title: 'St. Mary Magdalene Episcopal Church',
            description:
              'Organized and hosted the Alpha Course for the congregation of the church. Sessions were a mixture of the Alpha videos and oral presentations',
            location: 'Belton, MO',
          },
          {
            image: '/history5.png',
            title: 'First United Methodist Church',
            description:
              'Presented Holy Spirit Retreat sessions to members of the congregation',
            location: 'Jefferson, IA',
          },
          {
            image: '/history6.png',
            title: 'New Creations (not-for-profit)',
            description:
              'Currently leading Alpha Course in this faith-based facility that helps overcome substance abuse addictions',
            location: 'Olathe, KS',
          },
          {
            image: '/history7.png',
            title: 'Transition Center of Kansas City',
            description:
              'Currently leading men in the center on a Christian walk. Tools included, but not limited to, watching The Chosen, teaching the Alpha Course and other general presentations and videos',
            location: 'Bottoms, MO',
          },
          {
            image: '/history8.png',
            title: 'Lansing Prison',
            description:
              'Currently leading the Alpha Course in Cell Block B since 2022. Hosted and presented during Holy Spirit Retreat weekend on several occasions.',
            location: 'Lansing, KS',
          },
          {
            image: '/history9.png',
            title: 'Healing House (not-for-profit)',
            description:
              'Currently leading the Alpha Course in Cell Block B since 2022. Hosted and presented during Holy Spirit Retreat weekend on several occasions.',
            location: 'Lansing, KS',
          },
          {
            image: '/history10.png',
            title: 'Johnson County Detention Center',
            description:
              'Currently leading men in the center on a Christian walk. Tools included, but not limited to, watching The Chosen, teaching the Alpha Course and other general presentations and videos',
            location: 'Gardner, KS',
          },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`history-slide h-[700px] flex flex-col items-center justify-center text-center transition-transform duration-300 ${
                !isMobile && isMiddleSlide(index) ? 'scale-[1.3]' : 'scale-[1]'
              }`}
              style={{
                maxWidth: !isMobile ? '282px' : '100%', // Full width on mobile, max width on desktop
                width: !isMobile ? 'auto' : '100%', // Ensure full width on mobile
                transformOrigin: 'center',
                padding: !isMobile && isMiddleSlide(index) ? '8px' : '0',
              }}
            >
              <Image
                src={slide.image}
                width={282}
                height={283}
                alt={slide.title}
                className="object-contain"
              />
              <h3 className="mt-[16px] text-2xl font-medium leading-tight">
                {slide.title}
              </h3>
              <p className="mt-[8px] text-base leading-snug">
                {slide.description}
              </p>
              <p className="mt-[8px] text-lg italic font-light leading-tight">
                {slide.location}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}