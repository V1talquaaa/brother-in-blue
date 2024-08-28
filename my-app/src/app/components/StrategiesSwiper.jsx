'use client';
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function StrategiesSwiper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This will only run on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper
      navigation={!isMobile}
      pagination={isMobile ? { clickable: true } : false}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="container">
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <h4 className="text-2xl lg:text-[32px] text-mainBlack font-medium text-center lg:text-left">
            Treasure God’s Word
          </h4>
          <p className="mt-[24px] text-base lg:text-2xl text-mainBlack text-center lg:text-left">
            We center our lives and our ministry around the belief that,
            through the Gospel, God changes lives. As we immerse ourselves in
            God’s Word, we also provide the Gospel message to the marginalized
            and incarcerated people around the world in a way that helps them
            understand it and apply it to their lives.
          </p>
          <p className="text-sm lg:text-lg mt-[24px] ml-[24px] italic text-center lg:text-right">
            “All Scripture is God-breathed and is useful for teaching,
            rebuking, correcting and training in righteousness, so that the
            servant of God may be thoroughly equipped for every good work”
          </p>
          <p className="text-center lg:text-right italic">(2 Timothy 3:16–17)</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <h4 className="text-2xl lg:text-[32px] text-mainBlack font-medium text-center lg:text-left">
            Serve with Relentless Perseverance
          </h4>
          <p className="mt-[24px] text-base lg:text-2xl text-mainBlack text-center lg:text-left">
            Serve prisons, transition centers, community centers, and all of
            those organizations whose residents battle with addiction. We seek
            to serve as many of these institutions in and around the Kansas
            City area as possible. We utilize several different tools such as
            the A.A. 12-step program, the Alpha Course, Bible studies and
            other various publications and videos that inspire and relate how
            the love of God changes lives.
          </p>
          <p className="text-sm lg:text-lg mt-[24px] ml-[24px] italic text-center lg:text-right">
            “Then the righteous will answer him, . . . ‘When did we see you
            sick or in prison and go to visit you?’ The King will reply,
            ‘Truly I tell you, whatever you did for one of the least of these
            brothers and sisters of mine, you did for me’”
          </p>
          <p className="text-center lg:text-right italic">(Matthew 25:37–40)</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <h4 className="text-2xl lg:text-[32px] text-mainBlack font-medium text-center lg:text-left">
            Fulfill our Mission with Excellence and Urgency
          </h4>
          <p className="mt-[24px] text-base lg:text-2xl text-mainBlack text-center lg:text-left">
            Because we are aware of the great need for God’s love in dark
            places throughout the greater Kansas City area we aim to
            accomplish all our endeavors with excellence and with intentional
            urgency.
          </p>
          <p className="text-sm lg:text-lg mt-[24px] ml-[24px] italic text-center lg:text-right">
            “Whatever you do, work at it with all your heart, as working for
            the Lord, not for human masters, since you know that you will
            receive an inheritance from the Lord as a reward. It is the Lord
            Christ you are serving”
          </p>
          <p className="text-center lg:text-right italic">(Colossians 3:23–24)</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container">
          <h4 className="text-2xl lg:text-[32px] text-mainBlack font-medium text-center lg:text-left">
            Pray Continually
          </h4>
          <p className="mt-[24px] text-base lg:text-2xl text-mainBlack text-center lg:text-left">
            Because we believe that prayer is powerful, we regularly bring our
            praises, laments and requests to God. In this ministry we will
            practice the spiritual discipline of prayer.
          </p>
          <p className="text-sm lg:text-lg mt-[24px] ml-[24px] italic text-center lg:text-right">
            “Rejoice always, pray continually, give thanks in all
            circumstances; for this is God’s will for you in Christ Jesus”
          </p>
          <p className="text-center lg:text-right italic">(1 Thessalonians 5:16)</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}