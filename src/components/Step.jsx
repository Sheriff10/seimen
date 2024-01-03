import React from "react";

export default function Step() {
   return (
      <div className="wrap flex relative text-center py-24 bg-red text-white">
         <div className="container">
            <div className="flex flex-col">
               {/* tab sectin */}
               <div className="col-lg-6 mx-auto">
                  <div className="tab grid grid-cols-3 bg-yellow">
                     <div className=" bg-white text-red p-3">
                        <span>Step 1</span>
                     </div>
                     <div className=" bg-yello p-3">
                        <span>Step 2</span>
                     </div>
                     <div className=" bg-yello p-3">
                        <span>Step 3</span>
                     </div>
                  </div>

                  <div className="display my-16">
                     <div className="text-display text-4xl">
                        <span>SETUP A COMPASS WALLET</span>
                     </div>
                  </div>
                  <div className="btn-wrap">
                     <button className="text-red bg-white px-4 py-2 rounded">
                        {" "}
                        Compass
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
