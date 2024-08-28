import Image from 'next/image';
import React from 'react';
import HistorySwiper from './HistorySwiper';

function History() {
  return (
    <section id='history' className=''>
        <div className='container py-[102px]'>
            <Image src='/headerLogo.png' width={371} height={89} alt='logo' className='mr-auto ml-auto' />
            <h2 className='mt-[24px] text-center text-[32px] lg:text-5xl text-mainBlack font-medium'>HISTORY</h2>
            <HistorySwiper />
        </div>
    </section>
  )
}

export default History