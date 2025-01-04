import { Button } from "@/components/ui/button";
import Link from "next/link";

import Image from "next/image";
import banner from '../../../public/voiture-ban1.png'

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-60px)] flex items-center justify-center bg-gray-100">
      {/* Image d'Arrière-Plan */}
      <div className="absolute inset-0">
        <Image
          
          src={banner}
          alt="Voiture écologique"
          layout="fill" // Fait en sorte que l'image occupe tout l'espace
          objectFit="cover" // Ajuste l'image pour couvrir l'élément
          quality={100} // Améliore la qualité
        />
      </div>

      {/* Contenu de la Section Hero */}
      <HeroInfo />
    </section>
  );
};

export default Hero;



const HeroInfo = () => {
  return (
    <div className="relative  text-center  max-w- px-1">
      <h1 className="text-3xl font-bold mb-8 text-white ">
       Lavage automobile écologique et pressing haut de gamme à votre service.
      
      </h1>
        
      <div className="flex justify-center space-x-4">
        <Link href="/rdv" >
          <Button
            variant={"outline"}
            className="transition duration-200 hover:bg-green-100"
          >
            Rendez-vous
          </Button>
        </Link>
      </div>
      
    </div>
  );
};