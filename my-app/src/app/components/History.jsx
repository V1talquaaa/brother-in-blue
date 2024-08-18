import Image from 'next/image';
import React from 'react';

function History() {
  return (
    <section id='history' className='lg:py-[120px]'>
        <div className='container py-[102px]'>
            <Image src='/headerLogo.png' width={371} height={89} alt='logo' className='mr-auto ml-auto' />
            <h2 className='mt-[24px] text-center text-[32px] lg:text-5xl text-mainBlack font-medium'>HISTORY</h2>
            <ul className='mt-[48px] lg:mt-[80px] flex flex-col items-center lg:flex-row gap-[24px] justify-center'>
                <li className='lg:mt-[41px] flex flex-col items-center max-w-[282px]'>
                    <Image src='/history1.png' width={282} height={283} alt='church' className='center'/>
                    <h3 className='mt-[32px] text-2xl text-center font-medium'>Church of the <br /> Resurrection</h3>
                    <p className='mt-[32px] text-center text-base'>Led and sometimes presented the Alpha Course from 2010 to 2020. Estimated total of all courses taught within that timeline was approximately 24-12 week sessions</p>
                    <p className='mt-[12px] text-lg text-center italic font-light'>Leawood, KS</p>
                </li>
                <li className='flex flex-col items-center max-w-[384px]'>
                    <Image src='/history2.png' width={384} height={371} alt='church'/>
                    <h3 className='mt-[32px] text-[32px] text-center font-medium'>St. Francis of Assisi in the Pines</h3>
                    <p className='mt-[32px] text-center text-lg'>Presented and led entire 12-week Alpha Course to several members of the congregation</p>
                    <p className='mt-[12px] text-lg text-center italic font-light'>Stanley, KS
                    </p>
                </li>
                <li className='mt-[41px] flex flex-col items-center max-w-[282px]'>
                    <Image src='/history3.png' width={282} height={283} alt='church'/>
                    <h3 className='mt-[32px] text-2xl text-center font-medium'>Leavenworth Penitentiary </h3>
                    <p className='mt-[32px] text-center text-base'>Attended and prayed for inmates during Holy Spirit Retreats</p>
                    <p className='mt-[12px] text-lg text-center italic font-lighttttt'>Leavenworth, KS</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default History