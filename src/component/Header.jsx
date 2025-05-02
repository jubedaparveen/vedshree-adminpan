'use client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaSignalMessenger } from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";




const Header = () => {

const router = useRouter();

 const handlelogout = () => {
  Cookies.remove('vedshree-admin');
  router.push('/');
 };

 useEffect(()=>{
  const cookiedata = Cookies.get('vedshree-admin');
  if(!cookiedata) router.push('/');
},[]);

  return (
    <div className='bg-[#0E2A10] w-[calc(100%-.01rem)] '>
      <div className='flex justify-between gap-10 items-center'>
        <div className='hidden md:block basis-1/2 p-4'>
          <div className=' flex items-center border border-[#0E2A10]/30 bg-[#87a186] rounded-full p-2'>
            <FaSearch className='text-[#0E2A10] ' />
            <input type="text" placeholder='Search' className='w-full bg-[#87a186] text-white outline-none pl-2 placeholder:text-[#0E2A10] ' />
          </div>
        </div>
        <div className='basis-1/2 md:pl-0 p-4 md:pr-4'>
          <div className='flex justify-end items-center gap-6'>
            <div className='relative p-1'>
              <div className='text-[#e0cbb0] text-sm '>
                <button>
                  <FaSignalMessenger size={20} className='text-[#e0cbb0] text-2xl' />
                </button>
                <div className='w-4 h-4 absolute top-0 left-5 flex items-center justify-center  text-[#0E2A10]   font-black text-sm  rounded-full bg-orange-300   '>1</div>
              </div>
            </div>
            <div className='relative hover:text-[#0E2A10] hover:border-[#e0cbb0] rounded-full p-1'>
              <div className='text-[#e0cbb0] text-sm '>
                <button>
                  <IoNotifications className='text-[#e0cbb0] text-2xl' />
                </button>
                <div className='w-4 h-4 absolute top-0 left-5 flex items-center justify-center  text-[#0E2A10]   font-black text-sm  rounded-full bg-orange-300   '>1</div>
              </div>
            </div>
            <div className='flex justify-end items-center gap-4'>
              <div className='text-[#e0cbb0] text-sm'>Admin</div>
              <div className='w-10 h-10 rounded-full bg-[#e0cbb0]'></div>
            </div>
            <div className=' gap-4' >
              <div className='text-[#e0cbb0] text-sm w-8 h-8 rounded-full border flex justify-center items-center hover:text-[#0E2A10] hover:bg-[#e0cbb0]'onClick={handlelogout}><HiLogout size={20}/></div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-[#2e8233]/40 pl-4 py-2'>Deshboard</div>
    </div>
  )
}

export default Header;