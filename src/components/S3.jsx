import React from "react";

export default function S3() {
   return (
      <div>
         <div className="my-16">
            <div className="text-display text-4xl">
               <span>BUY SEIMEN</span>
            </div>
         </div>

         <div className="btn-wrap grid grid-cols-1 lg:grid-cols-3 gap-3">
            <a
               href="https://app.astroport.fi/swap?from=usei&to=sei1sfm7432ag7jvegr03xl74fkjv5kevd3qetngnxupl8dcq6k736msf3nxum"
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
            <a
               href="https://www.coingecko.com/en/coins/seimen"
               target={"_blank"}
            >
               <button className="text-red bg-white px-8 py-3 text-xl rounded">
                  {" "}
                  COINGECKO
               </button>
            </a>
         </div>
      </div>
   );
}
