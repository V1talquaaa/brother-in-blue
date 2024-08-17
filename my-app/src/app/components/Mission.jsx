import React from 'react';
import Image from 'next/image';

function Mission() {
  return (
    <section className=''>
        <div className='container pt-[56px] pb-[140px] bg-[#E5EDF4] rounded-[32px]'>
        <Image src='/headerLogo.png' width={428} height={77} alt='logo' className='mr-auto ml-auto'/>
        <h2 className='text-center text-5xl font-medium'>MISSION & EVENTS</h2>
        <ul className='mt-[32px] grid grid-cols-3 grid-rows-3 gap-y-[48px]'>
            <li className='px-[24px] py-[12px] border-r-[1px] border-[#E8E8E8] bg-mainWhite'>
                <div className='flex justify-between text-lg'>
                    <span>2005</span>
                    <span>Bay St. Louis, LA</span>
                </div>
                <p className='text-2xl text-center'>Katrina Hurricane Disaster</p>
            </li>
            <li className='px-[24px] py-[12px] border-r-[1px] border-[#E8E8E8] bg-mainWhite'>
                <div className='flex justify-between text-lg'>
                    <span>2006</span>
                    <span>New Orleans, LA</span>
                </div>
                <p className='text-2xl text-center'>Katrina Hurricane Disaster</p>
            </li>
            <li className='px-[24px] py-[12px] border-r-[1px] border-[#E8E8E8] bg-mainWhite'>
                <div className='flex justify-between text-lg'>
                    <span>2010</span>
                    <span>Arcahaie, Haiti</span>
                </div>
                <p className='text-2xl text-center'>Haiti Earthquake Disaster</p>
            </li>
            <li className='px-[24px] py-[12px] border-r-[1px] border-[#E8E8E8] bg-mainWhite'>
                <div className='flex justify-between text-lg'>
                    <span>2013</span>
                    <span>Rome, Italy</span>
                </div>
                <p className='text-2xl text-center'>Visit The Vatican</p>
            </li>
            <li className='px-[24px] py-[12px] border-r-[1px] border-[#E8E8E8] bg-mainWhite'>
                <div className='flex justify-between text-lg'>
                    <span>2014</span>
                    <span>Jerusalem, Israel</span>
                </div>
                <p className='text-2xl text-center'>Pilgrimage to Israel</p>
            </li>
            <li className='px-[24px] py-[12px] border-r-[1px] border-[#E8E8E8] bg-mainWhite'>
                <div className='flex justify-between text-lg'>
                    <span>2015</span>
                    <span>Santiago, Cuba</span>
                </div>
                <p className='text-2xl text-center'>Launch Alpha Course in Cuba</p>
            </li>
            <li className='px-[24px] py-[12px] border-r-[1px] border-[#E8E8E8] bg-mainWhite'>
                <div className='flex justify-between text-lg'>
                    <span>2017</span>
                    <span>Holguin, Cuba</span>
                </div>
                <p className='text-2xl text-center'>Reinforce Alpha Course in Cuba</p>
            </li>
            <li className='px-[24px] py-[12px] border-r-[1px] border-[#E8E8E8] bg-mainWhite'>
                <div className='flex justify-between text-lg'>
                    <span>2022</span>
                    <span>Ft. Lauderdale, FL</span>
                </div>
                <p className='text-2xl text-center'>National Alpha Conference</p>
            </li>
            <li className='px-[24px] py-[12px] border-r-[1px] border-[#E8E8E8] bg-mainWhite'>
                <div className='flex justify-between text-lg'>
                    <span>2023</span>
                    <span>London, England</span>
                </div>
                <p className='text-2xl text-center'>International Alpha Conference</p>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default Mission