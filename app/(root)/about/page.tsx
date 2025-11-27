

import FinalCTA from '@/app/components/about/finalCTA'
import Galery from '@/app/components/about/galery'
import Philosophy from '@/app/components/about/philosophy'
import TechnicalSkills from '@/app/components/about/skills'
import ZigzagTimelineAuto from '@/app/components/about/timeline'
import Values from '@/app/components/about/values'
import CustomerReviews from '@/app/components/about/customerReviews'
import React from 'react'

const About = () => {
  // throw new Error("NOT IMPLEMENTED");
  return (
    <>
      <ZigzagTimelineAuto />
      <Values />
      {/* <CustomerReviews /> */}
      <TechnicalSkills />
      <Galery />
      <Philosophy />
      <FinalCTA />
    </>
  )
}

export default About