'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { MobileNav } from './MobileNav';

export const HeaderMobile = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuBtnClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
        <header className='absolute z-10 top-[24px] w-full lg:hidden'>
            <div className="container">
                <div className='flex justify-between items-center rounded-[16px]'>
                <Link href="/" className='text-white'>
                 <Image src='/headerLogo.png' width={268} height={64} alt='logo'/>
                 </Link>
                <button type='button' onClick={menuBtnClick}>
                    <Image src="/iconMenuMob.svg" width={32} height={32} alt='menu'/>
                </button>

                </div>
            </div>
            {menuOpen && <MobileNav closeMenuBtn={menuBtnClick}/>}
        </header>
  )
}