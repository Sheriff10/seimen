import React from "react";

export default function Footer() {
   const iconFunc = (img, link) => {
      return { img, link };
   };
   const iconArr = [
      iconFunc("/asset/twitter.png", "https://twitter.com/Seimen69"),
      iconFunc("/asset/discord.png", "#"),
      iconFunc("/asset/telegram.png", "https://t.co/CpyZoxu7Yn"),
   ];
   return (
      <div className="wrap py-4 bg-red px-3" id="footer">
         <div className="flex justify-between items-center">
            <div className="icon-wrap flex gap-3">
               {iconArr.map((i, index) => (
                  <a href="" target={"_blank"} key={index}>
                     <img src={i.img} alt={i.link} />
                  </a>
               ))}
            </div>
            <div className="text-wrap text-white">
               <span>All Copyright reserved @seimen2023</span>
            </div>
         </div>
      </div>
   );
}
