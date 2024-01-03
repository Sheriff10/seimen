import React from "react";

export default function S3() {
   return (
      <div>
         <div className="my-16">
            <div className="text-display text-4xl">
               <span>BRIDGE TO SEI</span>
            </div>
         </div>

         <div className="btn-wrap grid grid-cols-1 lg:grid-cols-3 gap-3">
            <button className="text-red bg-white px-8 py-3 text-xl rounded">
               {" "}
               BUY ON AUSTROPORT
            </button>
            <button className="text-red bg-white px-8 py-3 text-xl rounded">
               {" "}
               COINHALL CHART
            </button>
            <button className="text-red bg-white px-8 py-3 text-xl rounded">
               {" "}
               COINGECKO
            </button>
         </div>
      </div>
   );
}
