import { Button } from "@/components/ui/button";

import Hero from "./_sections/Hero";
import Apropos from "./_sections/Apropos";
import Services from "./_sections/Services";
import Satisfaction from "./_sections/Satisfaction";
import Avis from "./_sections/Avis";


const  LandingPage = () => {
  return (
    <div className="justify-center items-center w-full">
       <Hero />
       <Apropos />
       <Services />
       <Satisfaction />
       <Avis />
    </div>
  );
}

export default LandingPage