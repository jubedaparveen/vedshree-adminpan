import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Sidebar from "@/component/Sidebar";

export default function DeshboardLayout({ children }) {
     return (
          <>
               <div className="h-screen flex ">
                    <div className=" md:w-[calc(100%-79%)] lg-[20%] w-[8%] sm:w-[8%] bg-[#0E2A10] text-white md:p-4 sm:p-4 p-2">
                         <div className=" md:border sm:border-0 border-gray-700/50 rounded-lg">
                              <Sidebar />
                         </div>
                    </div>
                    <div className=" md:w-[85%] w-[92%] lg-[80%]  bg-[#87a186] border-l border-gray-800/50 overflow-y-auto h-[calc(100%-.1rem)]">
                         <div>
                              <Header />
                         </div>
                         {/* <div className="mt-[4.1rem] fixed w-[92%] md:w-[75%] z-10 top-0">
                              <h3 className="text-sm bg-[#0E2A10] text-[#87a186] px-10 py-2 border-t border-gray-700/50 tracking-widest uppercase ">Dashboard</h3>
                         </div> */}
                         <div className="mt-[6.6rem]">
                              {children}
                         </div>
                    </div>
               </div>
          </>
     );
}