"use client";

import ButtonCTA from "../buttons/buttonCTA";
import InfoBlock from "../utils/InfoBlock";

// from https://tailwindflex.com/@manon-daniel/hero-section   tailwindcss example (hero, button, navbar ...)
// https://tailwindflex.com/@gbenga-adegoke/hero-section-13 a voir aussi celui la plutot

function Hero () {
  return (
    <section className="relative py-20 px-4 text-white overflow-visible 
    bg-[radial-gradient(ellipse_at_60%_50%,rgba(178,124,140,0.4)_0%,transparent_45%)]">

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Text section */}
        <div className="md:w-1/2 mb-10 md:mb-0 z-20 md:mr-10">
          <InfoBlock
            title="Donnez à vos voix l’harmonie qu’elles méritent."
            text="Service d'orchestration de chant polyphoniques Nordiques pour petits ou grands ensembles. Service sur mesure"
          />
          <p className="text-gray-300 mt-4 text-sm mb-4">
          Réponse rapide · Devis gratuit · Sans engagement
          </p>
          <ButtonCTA label="Obtenir un devis gratuit" href="/service"/>
        </div>

        {/* Image section */}
        <div className="md:w-1/2 z-0">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/63/f8/bb/big-ben.jpg?w=900&h=500&s=1&pcx=1033&pcy=310&pchk=v1_bf93e1170e1f1f8d4cea"
            alt="Hero Image"
            className="object-right rounded-xl shadow-lg"
          />
        </div>
    </div>
  </section>

  );
}

export default Hero
