import { Button } from "@/components/ui/button";
import Image from "next/image";
import v2 from "../../../public/v2.png";
import Link from "next/link";

const Satisfaction = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-100">
        {/* Conteneur avec largeur limitée */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        
            <div className="flex-1 md:w-[400px] h-[300px] md:h-[350px] rounded-lg overflow-hidden">
                <Image
                    src={v2}
                    alt="nettoyage voiture"
                   
                    className="object-cover w-full h-full"
                    style={{
                        clipPath: "ellipse(75% 50% at 50% 50%)",
                    }}
                />
            </div>

            <div className="flex-1 text-center md:text-left">
                {/* Titre avec taille de texte ajustée */}
                <h2 className="text-2xl  font-bold text-green-500 mb-4">
                    Satisfaction de nos Clients
                </h2>
                
                {/* Paragraphe avec taille ajustée */}
                <p className="text-base  mb-6">
                    Chez SMS Services, la satisfaction de nos clients est au cœur de
                    nos priorités. Grâce à notre engagement pour des services de
                    qualité et respectueux de l'environnement, nous avons gagné la
                    confiance de milliers de clients.
                </p>

                {/* Bouton avec taille texte améliorée */}
                <Link href={"#mes-avis"}>
                    <Button  className="text-white  px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-200">
                        En savoir plus
                    </Button>
                </Link>
            </div>

            
        </div>
    </section>
  );
};

export default Satisfaction;