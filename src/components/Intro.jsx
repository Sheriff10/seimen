import React from "react";
import { useInView } from "react-intersection-observer";

export default function Intro() {
   const [ref, inView] = useInView({ threshold: 0.3 });
   return (
      <>
         <div className="intro  flex items-center justify-between flex-col text-center">
            {/* Img and text */}
            <div className="col-12 m-0">
               <div className="wrap py-4">
                  <div className="text-wrap text-cneter r  text-white transform translate-y-[20px]">
                     <span className="text-6xl">
                        <span>WE</span> <span>ARE</span>
                     </span>
                  </div>
                  <div className="img-wrap flex flex-col items-center">
                     <div className="flex flex-wrap items-center">
                        <img
                           src="/asset/seiman.png"
                           alt="Seiman"
                           className=" hidden lg:block img-wrap w-[200px]  h-[200px] intro-img2"
                        />
                        <img
                           src="/asset/seiman2.png"
                           alt="Seiman"
                           className="img-wrap  w-[300px] intro-img2"
                        />
                        <img
                           src="/asset/seiman3.png"
                           alt="Seiman"
                           className="  hidden lg:block img-wrap w-[200px]  h-[200px]  intro-img2"
                        />
                     </div>
                     <img
                        src="/asset/logo.png"
                        alt="Seiman"
                        className="img-wrap w-[400px] transform translate-y-[-70px] intro-img1"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div
            ref={ref}
            className={`text-wrap text-4xl text-center col-12 text-white p-2`}
         >
            <div className="col-lg-6 mx-auto bg-red rounded-2xl p-3 py-5 ">
               <span className={`${inView ? "fade-in" : "fade-out"}`}>
                  <span className="font-extrabold">Seimen: MEN OF SEI</span>{" "}
                  <br />
                  We impregnate the unbelievers of SEI <br /> - The fastest
                  place to swim to the moon!
               </span>
            </div>
         </div>
      </>
   );
}
