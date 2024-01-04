import React from "react";

export default function S2() {
   return (
      <div>
        <div className="my-16">
            <div className="text-display text-4xl">
               <span>BRIDGE TO SEI</span>
            </div>
         </div>
         <iframe
         title="Bridge"
            id="iframe-widget"
            src="https://changenow.io/embeds/exchange-widget/v2/widget.html?amount=1000&amp;backgroundColor=2B2B35&amp;darkMode=true&amp;from=usdc&amp;horizontal=false&amp;isFiat=false&amp;lang=en-US&amp;link_id=923b690557f5b3&amp;locales=false&amp;logo=false&amp;primaryColor=f90303&amp;to=sei&amp;toTheMoon=false"
            // style="height: 356px; width: 100%; border: none"
            className={"h-[356px] w-full border-none"}
         ></iframe>
      </div>
   );
}
