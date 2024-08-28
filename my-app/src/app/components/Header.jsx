import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
<section id='home' className='hidden lg:block pt-[24px] pb-[32px]'>
<div className='container flex items-center justify-between text-mainBlack'>
      <Link href="/">
      <Image src='/headerLogo.png' width={268} height={64} alt='logo'/>
      </Link>
      <ul className='flex items-center gap-[16px] text-lg'>
        {/* <li><a href="#home">Home</a></li> */}
        <li><a href="#institutions">Institutions</a></li>
        <li><a href="#strategies">Strategies</a></li>
        <li><a href="#history">History</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#footer">Contacts</a></li>
      </ul>
      <div className='text-base'>
        <p className='mb-[12px]'>Have any questions?</p>
        <a href="mailto:tim@brotherinblue.org" type='email' className='flex'>
          <Image src='/sms-tracking.svg' width={24} height={24} alt='email'/>
          <span className='ml-[6px]'>tim@brotherinblue.org</span>
        </a>
      </div>
    </div>
</section>
  )
}

export default Header