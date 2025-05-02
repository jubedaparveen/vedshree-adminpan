"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation'
// import { useDynamicRouteParams } from "next/dist/server/app-render/dynamic-rendering";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [admin, setAdmin] = useState({});
  // const [OTPVerification, setOTPVerification] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const cookiedata = Cookies.get('vedshree-admin');
    if (cookiedata) router.push('/dashboard');
  }, []);

  
 
  const handleLogin = (e) => {
    e.preventDefault();

    axios.post(`${process.env.NEXT_PUBLIC_URL}admin-penal/admin/login`, e.target)

      .then((response) => {
        console.log(response.data);
        Cookies.set('vedshree-admin', JSON.stringify(response.data));
        router.push('/dashboard');
      })
      .catch((error) => {
        if (error.status === 401) {
          Swal.fire({
            title: "Invalid credentials?",
            text: 'Email or password in incorrect',
            icon: "question"
          });
        }
        console.log('error handle....', error);
      })
  };

  return (
    <div className="  font-[family-name:var(--font-geist-sans)]">
      <div className="bg-[#e0cbb0]/0 h-screen flex items-center justify-center">
        <div className=" md:w-[70%] lg:w-[40%] w-[90%] bg-yellow-50 p-6 rounded-lg shadow-lg">
          <div className="p-6 border border-gray-300 rounded-md">
            <h1 className="text-xl font-semibold mb-10 pb-2 border-b border-gray-300 tracking-widest uppercase text-[#0E2A10]">Login With Vedshree Admin Penal</h1>
            <form method="post" onSubmit={handleLogin}>
              <div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full text-[#0E2A10] p-2 border border-gray-300 rounded-md placeholder:text-gray-300 outline-none " placeholder="Enter your Email"
                    value={admin.email}
                    onChange={(e) => setAdmin({ ...admin, email: e.target.value })} 
                    
                    />
                </div>
                <div className="mb-6 relative">
                  <input
                    type={showPassword === false ? "password" : "text"}
                    name="password"
                    id="password"
                    className="w-full text-[#0E2A10] p-2 border border-gray-300 rounded-md placeholder:text-gray-300 outline-0" placeholder="Enter Password" />
                  <span onClick={() => setShowPassword(!showPassword)} className=" absolute cursor-pointer text-gray-400 hover:text-green-900  right-[20px] bottom-[10px]  ">
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                  </span>
                </div>

                {/* <Link href="/deshboard"> */}
                <div className="mt-10">
                  <button
                    type="submit"
                    id="submit"
                    className="w-full  p-2 bg-[#87a186] text-[#0E2A10] rounded-md hover:bg-[#0E2A10] hover:text-[#e0cbb0] md:uppercase tracking-widest ">Login</button>
                </div>
                {/* </Link> */}

                <div className="text-end">
                  <Link href="/otpverification" className="text-gray-400  text-sm hover:text-green-900 hover:underline ">Forget Password
                  </Link>
                </div>
              </div>
            </form>

            <Link href="/">
              <div className="mt-10">
                <button className="w-full p-2 bg-[#87a186] text-[#0E2A10] rounded-md hover:bg-[#0E2A10] hover:text-[#e0cbb0] md:tracking-widest md:uppercase ">
                  <FcGoogle className="inline-block ml-2 me-2 bg-[#0E2A10] rounded-full  " size={25} /> Login with Google
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}






//grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen