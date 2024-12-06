'use client'
import React from 'react'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import Logo from '@/app/assets/logp.png'
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  function ShowOption() {
    setIsOpen(!isOpen)
  }

  return (
    <div className='sticky top-0'>
      <header className='relative w-full h-auto p-[1.5rem_1rem_1.5rem_1rem] bg-[#0a0908] shadow-sm shadow-[#251e16]'>
        <nav className='h-[2.25rem] mx-[1.6875rem] flex justify-between'>
          <div className='mt-[-28px]'>

               <Image src={Logo} alt='My Logo' className='h-[95px] w-[95px] '/>
          </div>

          {isOpen == true ? (
            <div>
              <ul className='absolute p-[40px] top-[100px] left-0 w-full h-screen backdrop-blur-md bg-black/10 flex flex-col items-center justify-center gap-[1.875rem]'>
                <IoClose className='absolute top-0 right-0 mr-[40px] mt-[30px] cursor-pointer' size={35} onClick={ShowOption} />
                <Link href='/'><li className='text-[1.125rem] text-[#d8e5fb] font-semibold tracking-[.0563rem] hover:text-[#5170ab]'>Home</li></Link>
                <Link href='#about'><li className='text-[1.125rem] text-[#d8e5fb] font-semibold tracking-[.0563rem] hover:text-[#5170ab]'>About</li></Link>
                <Link href='#portfolio'><li className='text-[1.125rem] text-[#d8e5fb] font-semibold tracking-[.0563rem] hover:text-[#5170ab]'>Portfolio</li></Link>
                <Link href='#services'><li className='text-[1.125rem] text-[#d8e5fb] font-semibold tracking-[.0563rem] hover:text-[#5170ab]'>Services</li></Link>
                <Link href='#testimonials'><li className='text-[1.125rem] text-[#d8e5fb] font-semibold tracking-[.0563rem] hover:text-[#5170ab]'>Testimonials</li></Link>
                <Link href='#contact'><li className='text-[1.125rem] text-[#d8e5fb] font-semibold tracking-[.0563rem] hover:text-[#5170ab]'>Contact</li></Link>
              </ul>
            </div>

          ) : (
            <ul className='hidden lg:h-full lg:flex lg:items-center lg:gap-[1.875rem] '>
              <Link href='/'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#5170ab]'>Home</li></Link>
              <Link href='/#about'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#5170ab]'>About</li></Link>
              <Link href='#portfolio'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#5170ab]'>Portfolio</li></Link>
              <Link href='#services'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#5170ab]'>Services</li></Link>
              <Link href='#testimonials'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#5170ab]'>Testimonials</li></Link>
              <Link href='#contact'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#5170ab]'>Contact</li></Link>
            </ul>
          )}

          <IoMenu size={35} color='white' className='lg:hidden cursor-pointer' onClick={ShowOption} />

        </nav>
      </header>
    </div>
  )
}

export default Navbar