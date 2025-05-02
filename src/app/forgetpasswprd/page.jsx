'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { HiEye, HiEyeOff } from "react-icons/hi";

const ForgetPassword = () => {
     const [showPassword, setShowPassword] = useState(false);
     return (
       <div>
         <div className="bg-[#e0cbb0]/0 h-screen flex items-center justify-center">
           <div className=" md:w-[70%] lg:w-[40%] w-[90%] bg-yellow-50 p-6 rounded-lg shadow-lg">
             <div className="p-6 border border-gray-300 rounded-md">
               <h2 className="text-xl font-semibold mb-10 pb-2 border-b border-gray-300 tracking-widest uppercase text-[#0E2A10]">Reset Password</h2>

               <from>
                 <div className="mb-6">
                   <input type="text" name='newpassword' id="newpassword" className="w-full text-[#0E2A10] p-2 border border-gray-300 rounded-md placeholder:text-gray-300 outline-none " placeholder="Reset Password" />
                 </div>

                 <div className="mb-6 relative">
                   <input
                   name="confirmpassword"
                   type={showPassword === false ? "password" : "text"} id="confirmpassword"
                   className="w-full text-[#0E2A10] p-2 border border-gray-300 rounded-md placeholder:text-gray-300 outline-0" placeholder="Rewrite Password" />

                   <span onClick={() => setShowPassword(!showPassword)} className=" absolute cursor-pointer text-gray-400 hover:text-green-900  right-[20px] bottom-[10px]  ">
                     {showPassword ? <HiEyeOff /> : <HiEye />}
                   </span>

                 </div>
   
                 <Link href="/">
                   <div className="mt-10">
                     <button className="w-full p-2 bg-[#87a186] text-[#0E2A10] rounded-md hover:bg-[#0E2A10] hover:text-[#e0cbb0] md:uppercase tracking-widest ">Update Password </button>
                   </div>
                 </Link>
               </from>
             </div>
           </div>
         </div>
       </div>
     )
}

export default ForgetPassword