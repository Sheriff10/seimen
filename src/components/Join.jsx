import React from "react";

export default function Join() {
   return (
      <div className="bg-red text-center text-white py-4">
         <div className="text-wrap py-32">
            <span className="text-6xl">JOIN US</span> <br />
            <span className="text-8xl">TODAY!!!</span>
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
