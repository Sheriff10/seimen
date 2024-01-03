import React from "react";

export default function S1() {
   return (
      <div>
         <div className="my-16">
            <div className="text-display text-4xl">
               <span>SETUP A COMPASS WALLET</span>
            </div>
         </div>
         <div className="btn-wrap">
            <a
               href="https://chromewebstore.google.com/detail/compass-wallet-for-sei/anokgmphncpekkhclmingpimjmcooifb"
               target={"_blank"}
            >
                <button className="text-red bg-white px-8 py-3 text-xl rounded">
               {" "}
               Compass
            </button>            </a>
         </div>
      </div>
   );
}
