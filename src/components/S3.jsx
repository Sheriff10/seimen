import React from "react";

export default function S3() {
   return (
      <div>
         <div className="my-16">
            <div className="text-display text-4xl">
               <span>BUY SEIMAN</span>
            </div>
         </div>

         <div className="btn-wrap grid grid-cols-1 lg:grid-cols-3 gap-3">
            <a
               href="https://app.astroport.fi/swap?from=usei&to=factory/sei1kpv8szkqdtnyul72uyj65mj5al6n5anfa5qa4m/SEIMEN"
               target={"_blank"}
            >
               <button className="text-red bg-white px-8 py-3 text-xl rounded">
                  {" "}
                  BUY ON ASTROPORT
               </button>
            </a>
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
