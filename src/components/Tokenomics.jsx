import React from "react";

export default function Tokenomics() {
   return (
      <div className="py-16 bg-red text-center">
         <div className="heading bg-red text-white text-6xl py-4">
            <span>Tokenomics</span>
         </div>
         <div className="wrap bg-yellow py-4">
            <div className="text-wrap text-4xl col-lg-6 col-md-10 mx-auto text-red">
               <span>
                  Circulating Supply: 517,500,000 <br /> 
                  SEIMEN Total Supply: 690,000,000 Capped
               </span>{" "}
               <br /> <br />
               <span>60% Initial LP</span> <br />
               <span>15% Team (to be vested)</span> <br />
               <span>15% Marketing & Business Development</span> <br />
               <span>10% Community Use TBD</span> <br /> <br /> <br />
               <span>No Presale or Secret Allocations</span>
            </div>
         </div>
      </div>
   );
}
