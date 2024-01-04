import React from "react";

export default function Intro() {
   return (
      <>
         <div className="intro bg-red py-24 flex items-center justify-between flex-col text-center">
            {/* Img and text */}
            <div className="col-12 m-0">
               <div className="wrap py-4">
                  <div className="text-wrap text-cneter r  text-white transform translate-y-[20px]">
                     <span className="text-6xl"><span>WE</span> <span>ARE</span></span>
                  </div>
                  <div className="img-wrap flex flex-col items-center">
                     <img
                        src="/asset/seiman.png"
                        alt="Seiman"
                        className="img-wrap w-[300px] intro-img2"
                     />
                     <img
                        src="/asset/logo.png"
                        alt="Seiman"
                        className="img-wrap w-[400px] transform translate-y-[-70px] intro-img1"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="text-wrap text-4xl text-center bg-yellow col-12 text-red p-16">
            <span>
               <span className="font-extrabold">Seimen: MEN OF SEI</span> <br />
               We impregnate the unbelievers of SEI <br /> - The fastest place
               to swim to the moon!
            </span>
         </div>
      </>
   );
}
