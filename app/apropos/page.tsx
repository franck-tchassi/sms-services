import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">À propos de SMS Services</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Notre Histoire</h2>
        <p className="text-gray-700">
          SMS Services a été fondée avec une vision simple mais ambitieuse : révolutionner le secteur du lavage automobile en offrant des services à la fois efficaces et respectueux de l'environnement. 
          Depuis nos débuts, nous avons toujours été animés par le désir de proposer des solutions innovantes pour les propriétaires de véhicules soucieux de l'impact écologique de leurs choix. 
          Aujourd'hui, nous sommes fiers d'être un leader dans le domaine du lavage automobile écologique.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Notre Mission</h2>
        <p className=" text-gray-700">
          Chez SMS Services, notre mission est claire : offrir un service de lavage automobile de haute qualité tout en minimisant notre empreinte écologique. 
          Nous croyons fermement qu'il est possible de prendre soin de votre véhicule sans compromettre la santé de notre planète. 
          C'est pourquoi nous utilisons des produits biodégradables et des méthodes de lavage sans eau, afin de préserver les ressources naturelles et de réduire la pollution liée au lavage traditionnel des véhicules.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Nos Valeurs</h2>
        <ul className="list-disc pl-6  text-gray-700">
          <li><strong>Respect de l'environnement :</strong> Nous mettons un point d'honneur à utiliser des techniques de lavage qui préservent l'eau et les ressources naturelles.</li>
          <li><strong>Innovation :</strong> Nous recherchons constamment des solutions novatrices pour rendre le lavage automobile plus écologique et plus pratique pour nos clients.</li>
          <li><strong>Qualité :</strong> Chaque lavage est réalisé avec un soin particulier pour garantir un résultat impeccable et satisfaire nos clients.</li>
          <li><strong>Engagement :</strong> Nous nous engageons à fournir un service de haute qualité tout en ayant un impact positif sur notre planète.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pourquoi Choisir SMS Services ?</h2>
        <p className=" text-gray-700">
          Choisir SMS Services, c'est opter pour une entreprise qui place l'écologie au cœur de son activité. Nos services sont conçus pour offrir une expérience de lavage rapide, efficace et respectueuse de l'environnement. 
          Que vous soyez un particulier ou une entreprise, nous avons la solution adaptée à vos besoins. Nous offrons des prestations à domicile, en entreprise, et même sur les lieux de travail pour un lavage sans contrainte.
        </p>
        <p className="mt-4  text-gray-700">
          En plus de notre engagement pour l'environnement, nous garantissons une qualité de service irréprochable, avec des équipes professionnelles formées aux dernières techniques de lavage écologique.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Rejoignez-nous dans notre Mission</h2>
        <p className=" text-gray-700">
          Nous croyons qu'un avenir plus propre et plus vert commence par de petites actions. Rejoignez-nous dans notre mission de rendre le lavage automobile plus écologique et contribuez à la préservation de notre planète pour les générations futures. 
          Ensemble, nous pouvons faire la différence, un lavage à la fois.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
