"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCheck } from "react-icons/fa";
import services from "../../../services_list";

const Services = () => {
  // Vérification si la liste des services est vide
  if (!services || services.length === 0) {
    return <p>Chargement des services...</p>;
  }

  return (
    <section className="p-8 flex flex-col justify-center items-center">
      {/* Grille pour afficher les cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className="border border-gray-300 shadow-md flex flex-col justify-between h-full min-h-[300px] max-h-[350px] rounded-lg"
          >
            {/* En-tête */}
            <CardHeader className="bg-green-500 text-white p-4 flex flex-col items-center">
              <CardTitle className="text-center">{service.category}</CardTitle>
              {service.duration && (
                <CardDescription className="text-blac">{service.duration}</CardDescription>
              )}
            </CardHeader>

            {/* Contenu */}
            <CardContent className="p-4 flex-grow">
              <ul className="space-y-2">
                {service.description.map((desc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    {desc}
                  </li>
                ))}
              </ul>
            </CardContent>

            {/* Pied de page */}
            <CardFooter className="bg-green-500 text-white p-4">
              <div className="grid grid-cols-3 gap-4 w-full">
                {service.options.map((option, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2 border rounded-md"
                  >
                    <span className="text-xl">{option.icon}</span>
                    <span className="text-sm mt-2 font-bold">{option.price}</span>
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
