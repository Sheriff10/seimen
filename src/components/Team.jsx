import React from "react";

export default function Team() {
   const imgFunc = (teamName, teamPicture) => {
      return { teamName, teamPicture };
   };
   const teamArr = [
      imgFunc("Cofounder - Alex wife", "/asset/t2.png"),
      imgFunc("FOunder - ALEX", "/asset/t1.png"),
      imgFunc("Lover - Semen", "/asset/t3.png"),
   ];
   return (
      <div className="text-center bg-red">
         <div className="heading mb-5 text-6xl text-white">
            <span>TEAM</span>
         </div>
         <div className="wrap  py-16 px-4">
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
               {teamArr.map((i, index) => (
                  <div className="wrap bg-yellow py-3">
                     <div className="img-wrap flex justify-center">
                        <img
                           src={i.teamPicture}
                           alt="Team"
                           className="w-[150px]"
                        />
                     </div>
                     <div className="text-wrap text-xl font-bold">
                        <span>{i.teamName}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
