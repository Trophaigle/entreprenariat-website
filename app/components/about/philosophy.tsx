import React from "react";
import InfoBlock from "../utils/InfoBlock";


export default function Philosophy() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-center">
      <div className="max-w-4xl mx-auto">
        <InfoBlock
          title="Mon approche artistique"
          text={
            <>
              Je traite chaque chant nordique avec <strong>respect et authenticité</strong>, en adaptant 
              les harmonies et instruments pour faire ressortir <strong>l’âme de chaque mélodie</strong>.
              Mon objectif est de créer une orchestration qui soit à la fois fidèle à la tradition 
              et adaptée aux interprètes contemporains. (revoir ce texte)
            </>
          }
        />
      </div>
    </section>
  );
}