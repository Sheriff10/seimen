import React, { useState } from "react";
import S1 from "./S1";
import S2 from "./S2";
import S3 from "./S3";

export default function Step() {
   const [display, setDisplay] = useState(<S1 />);
   const [active, setActive] = useState("s1");

   const tabHandler = (component, tab) => {
      setDisplay(component);
      setActive(tab);
   };
   return (
      <div className="wrap flex relative text-center py-24 bg-red text-white" id="step">
         <div className="container">
            <div className="flex flex-col">
               {/* tab sectin */}
               <div className="col-lg-6 mx-auto text-xl">
                  <div className="tab grid grid-cols-3 bg-yellow cursor-pointer">
                     <div
                        className={` ${
                           active === "s1" && "bg-white text-red"
                        }  p-3`}
                        onClick={() => tabHandler(<S1 />, `s1`)}
                     >
                        <span>Step 1</span>
                     </div>
                     <div
                        className={`${
                           active === "s2" && "bg-white text-red"
                        } p-3`}
                        onClick={() => tabHandler(<S2 />, `s2`)}
                     >
                        <span>Step 2</span>
                     </div>
                     <div
                        className={`${
                           active === "s3" && "bg-white text-red"
                        } p-3`}
                        onClick={() => tabHandler(<S3 />, "s3")}
                     >
                        <span>Step 3</span>
                     </div>
                  </div>

                  {/* Display secton */}
                  {display}
               </div>
            </div>
         </div>
      </div>
   );
}
