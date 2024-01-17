import React from "react";
import { useInView } from "react-intersection-observer";

export default function Tokenomics() {
   const [ref1, inView1] = useInView({ threshold: 0.3 });
   const [ref2, inView2] = useInView({ threshold: 0.3 });
   const [ref3, inView3] = useInView({ threshold: 0.3 });

   return (
      <div className="py-16 text-center tk" id="tokenomics">
         <div className="heading text-white text-6xl py-4">
            <span>Tokenomics</span>
         </div>
         <div className="wrap py-4 p-2">
            <div className="text-wrap text-4xl bg-red col-lg-6 col-md-10 mx-auto text-white p-3 py-5 rounded-2xl">
               <div
                  ref={ref1}
                  className={`${inView1 ? "fade-in-right" : "fade-out"} break-words`}
               >
                  <span>CA: <span className="  text-rose-700 text-md">sei1sfm7432ag7jvegr03xl74fkjv5kevd3qetngnxupl8dcq6k736msf3nxum</span> </span> <br /> <br />
                  <span>
                     Circulating Supply: 690,000,000 <br />
                     SEIMEN Total Supply: 414,000,000 Capped
                  </span>{" "}
               </div>
               <br /> <br />
               <div
                  ref={ref2}
                  className={`${inView2 ? "fade-in-left" : "fade-out"}`}
               >
                  <span>60% Initial LP</span> <br/>
                  <span>6.9% Team (to be vested)</span> <br />
                  <span>10% airdrop once $100m mcap</span> <br />
                  <span>13.1% marketing</span> <br />
                  <span>10% Community Use TBD</span> <br /> <br /> <br />
               </div>
               <span
                  ref={ref3}
                  className={`${inView3 ? "fade-in" : "fade-out"}`}
               >
                  No Presale or Secret Allocations
               </span>
            </div>
         </div>
      </div>
   );
}
