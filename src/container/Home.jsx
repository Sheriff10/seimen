import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Join from "../components/Join";
import Step from "../components/Step";
import Team from "../components/Team";
import Tokenomics from "../components/Tokenomics";

export default function Home() {
   return (
      <div className="text-gamja">
         <Header />
         <Intro />
         <Step />
         <Tokenomics />
         {/* <Team /> */}
         <Join />
         <Footer />
      </div>
   );
}
