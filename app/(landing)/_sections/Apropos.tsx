import { Button } from "@/components/ui/button";
import Image from "next/image";
import aboutImage from "../../../public/v3.png"; // Chemin de l'image
import Link from "next/link";

const Apropos = () => {
  return (
    <section className="p-8 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        
        {/* Texte */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold  mb-2">
            À PROPOS DE NOUS
          </h2>

          <h3 className="text-xl font-bold  mb-6 text-green-500 ">
            Une passion pour votre véhicule et la planète
          </h3>

          <p className="text-base  leading-relaxed">
            Chez SMS Services, nous croyons que prendre soin de votre véhicule
            ne devrait jamais se faire au détriment de l'environnement. Depuis
            notre création, nous avons à cœur de proposer des services de lavage
            automobile écologiques et innovants, alliant qualité, efficacité et
            respect de notre planète.
          </p>

          <p className="text-base  mb-6 leading-relaxed">
            Notre mission ? Rendre vos trajets plus agréables en vous offrant un
            véhicule propre, tout en contribuant à un avenir durable.
          </p>
          <Link href={"/apropos"}>
            <Button className="text-white  px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-200">
                En savoir plus
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 w-full md:w-[400px] h-[300px] md:h-[350px] rounded-lg overflow-hidden">
          <Image
            src={aboutImage}
            alt="À propos de nous"
            className="object-cover w-full h-full"
            style={{
              clipPath: "ellipse(75% 50% at 50% 50%)",
            }}
            width={500}
            height={500}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Apropos;