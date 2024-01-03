import React from "react";

export default function Intro() {
   return (
      <>
         <div className="intro bg-red py-24 flex items-center justify-between flex-col text-center">
            {/* Img and text */}
            <div className="col-12 m-0">
               <div className="wrap py-4">
                  <div className="text-wrap text-cneter  text-white transform translate-y-[20px]">
                     <span className="text-6xl">WE ARE</span>
                  </div>
                  <div className="img-wrap flex flex-col items-center">
                     <img
                        src="/asset/seiman.png"
                        alt="Seiman"
                        className="img-wrap w-[300px]"
                     />
                     <img
                        src="/asset/logo.png"
                        alt="Seiman"
                        className="img-wrap w-[400px] transform translate-y-[-70px]"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="text-wrap text-4xl text-center bg-yellow col-12 text-red p-16">
            <span>
               SEIMEN is the main brand coin of SEI Network: <br />
               Onboard Users. Maximize Memes. Strengthen SEI.
            </span>
         </div>
      </>
   );
}