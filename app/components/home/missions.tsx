import React from 'react'
import ButtonCTA from '../buttons/buttonCTA'
import InfoBlock from '../utils/InfoBlock'

function Missions () {
  return (
<section className="relative py-20 px-6 text-white overflow-visible">

  <div className="container mx-auto px-4 md:px-6 relative">

    {/* 🔥 Section Mission Text */}
    <div className="mt-3 max-w-3xl">
      <InfoBlock
        title="Ma mission"
        text={
          <>
            À travers l’orchestration, la composition et le travail artistique, 
            mon objectif est de créer des expériences qui <strong>élèvent</strong>, 
            qui <strong>rassemblent</strong> et qui <strong>réenchantent</strong> 
            le quotidien.
            <br /><br />
            J’explore l’imaginaire nordique pour apporter un souffle 
            de beauté, d’évasion et de profondeur dans un monde qui en a besoin.
          </>
        }
      />
    </div>
  </div>
</section>
  )
}

export default Missions
