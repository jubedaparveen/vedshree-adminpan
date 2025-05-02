'use client'
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'


const OTPVerification = () => {
  const [admin, setAdmin] = useState({});
  const [ifOtpGenrate, setIfOtpGenrate] = useState(false);
  const [otpBtuText, setOtpBtuText] = useState("Genrate OTP");

  const handleGenrateOtp = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}admin-penal/forget-password/genrate-otp`,
        { email: admin.email }
      )
      .then((response) => {
        console.log(response.data);
        setIfOtpGenrate(true);

        let counter = 120;

        setOtpBtuText(`Regenrate OTP in ${counter--}s`);

        const interval = setInterval(() => {
          setOtpBtuText(`Regenrate OTP in ${counter--}s`);

          if (counter < 0) {
            clearInterval(interval);
            setIfOtpGenrate(false);
            setOtpBtuText("Genrate OTP");
          }
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleVerifyOtp = () => { };

  return (
    <div>
      <div className="bg-[#e0cbb0]/0 h-screen flex items-center justify-center">
        <div className=" md:w-[70%] lg:w-[40%] w-[90%] bg-yellow-50 p-6 rounded-lg shadow-lg">
          <div className="p-6 border border-gray-300 rounded-md">
            <h2 className="text-xl font-semibold mb-10 pb-2 border-b border-gray-300 tracking-widest uppercase text-[#0E2A10]">OTP Verification </h2>
            <from>
              <div className="mb-6">
                <input
                  name="email"
                  type="email"
                  id="email"
                  value={admin.email}
                  onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
                  className="w-full text-[#0E2A10] p-2 border border-gray-300 rounded-md placeholder:text-gray-300 outline-none " placeholder="Email" />
              </div>

              <div className={`${(ifOtpGenrate) ? 'block' : 'hidden'} mb-6 w-full text-[#0E2A10] p-2 border border-gray-300 rounded-md placeholder:text-gray-300 outline-none  placeholder="Enter OTP`}>
                <input
                  name="otp"
                  type="number"
                  id="otp"
                  onChange={(e) => {
                    setAdmin({ ...admin, otp: e.target.value });
                  }}
                  min={0}
                  className='w-full' placeholder='Enter OTP' />
              </div>


              <div className="mt-10 w-full p-2 bg-[#87a186] text-[#0E2A10] rounded-md hover:bg-[#0E2A10] hover:text-[#e0cbb0] md:uppercase tracking-widest">

                {ifOtpGenrate ?
                  (<Link href="/forgetpasswprd">
                    <button
                      onClick={handleVerifyOtp}
                      type="button"
                      className={`${ifOtpGenrate ? "block" : "hidden"}
                    w-full`}> Verify OTP </button>
                  </Link>)
                  :
                  (
                    <button
                      disabled={ifOtpGenrate}
                      onClick={handleGenrateOtp}
                      className="w-full ">
                      {otpBtuText}
                    </button>)}
              </div>
            </from>

            <button className="mt-4 w-full text-sm bg-[#87a186]  mb-8 px-4 rounded-lg py-2  tracking-widest uppercase text-[#0E2A10] hover:bg-[#0E2A10] hover:text-[#e0cbb0]">Resend OTP </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OTPVerification