import Image from 'next/image'
import React from 'react'

function Council() {
  return (
    <section className='pb-[120px]'>
        <div className='container'>
            <Image src='/headerLogo.png' width={428} height={77} alt='logo' className='mr-auto ml-auto'/>
            <h2 className='text-center text-5xl font-medium'>BOARD OF DIRECTOR POSITIONS</h2>
            <h3 className='mt-[24px] text-center text-[32px] font-medium'>GENERAL COUNCIL</h3>
            <ul className='mt-[56px] text-center text-2xl'>
                <li>Healing House 2009 - 2019</li>
                <li>Alpha Lighthouse 2021 - 2024</li>
                <li>New Creation 2024</li>
            </ul>
            <div className='mt-[56px] flex justify-between items-center mr-0'>
            <Image src='/council2.png' width={486} height={299} alt='pray'/>
                <Image src='/council1.png' width={690} height={299} alt='chain'/>
                
            </div>
        </div>
    </section>
  )
}

export default Council