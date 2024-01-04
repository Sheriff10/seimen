import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Join() {
   return (
      <div className=" text-center text-white py-4">
         
         <div className="text-wrap py-32">
            <div className="img-wrap">
               <img src="/asset/footer.png" alt="Seimen" className="mx-auto" />
            </div>
            <span className="text-6xl">JOIN US</span> <br />
            <div className="text-rap">
            <TypeAnimation
               sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "NOW!!!",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "AND BUY SEIMEN",
                  1000,
                  " LET' SWIM TO THE MOON",
                  1000,
                  "AND GET HATERS PREGNANT",
                  1000,
               ]}
               wrapper="span"
               speed={50}
               className="text-8xl"
               // style={{ fontSize: "100px", display: "inline-block" }}
               repeat={Infinity}
            />
         </div>
         </div>
         <div className="btn-wrap">
            <button className="text-red bg-white px-4 py-2 rounded">
               {" "}
               BUY NOW
            </button>
         </div>
      </div>
   );
}
