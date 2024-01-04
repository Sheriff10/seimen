import React from "react";
import { useInView } from "react-intersection-observer";

export default function Tokenomics() {
   const [ref1, inView1] = useInView({ threshold: 0.3 });
   const [ref2, inView2] = useInView({ threshold: 0.3 });
   const [ref3, inView3] = useInView({ threshold: 0.3 });

   return (
      <div className="py-16 bg-red text-center" id="tokenomics">
         <div className="heading bg-red text-white text-6xl py-4">
            <span>Tokenomics</span>
         </div>
         <div className="wrap bg-yellow py-4">
            <div className="text-wrap text-4xl col-lg-6 col-md-10 mx-auto text-red">
               <div
                  ref={ref1}
                  className={`${inView1 ? "fade-in-right" : "fade-out"}`}
               >
                  <span>
                     Circulating Supply: 517,500,000 <br />
                     SEIMEN Total Supply: 690,000,000 Capped
                  </span>{" "}
               </div>
               <br /> <br />
               <div
                  ref={ref2}
                  className={`${inView2 ? "fade-in-left" : "fade-out"}`}
               >
                  <span>60% Initial LP</span> <br />
                  <span>15% Team (to be vested)</span> <br />
                  <span>15% Marketing & Business Development</span> <br />
                  <span>10% Community Use TBD</span> <br /> <br /> <br />
               </div>
               <span ref={ref3}
                  className={`${inView3 ? "fade-in" : "fade-out"}`}>No Presale or Secret Allocations</span>
            </div>
         </div>
      </div>
   );
}
