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
            title="Orchestrating the Soul of Your Polyphonic Music"
            text="Orchestration and polyphonic choral arrangements inspired by Nordic music traditions.
            Independent arranger and orchestrator based in France.
            Tailored scores for small and large ensembles."
          />
          <p className="text-gray-300 mt-4 text-sm mb-4">
           Fast Response · Free Quote · No Obligation
          </p>
          <ButtonCTA label="Get a Free Quote" href="/service"/>
        </div>

        {/* Image section */}
        <div className="md:w-1/2 z-0">
          <img
            src="https://swedesinthestates.com/wp-content/uploads/2019/12/lucia-1502589_1280.jpg"
            alt="Hero Image"
            className="object-right rounded-xl shadow-lg"
          />
        </div>
    </div>
  </section>

  );
}

export default Hero
