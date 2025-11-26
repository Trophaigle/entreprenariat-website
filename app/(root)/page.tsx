
import Hero from "../components/home/hero";
import Missions from "../components/home/missions";

import ServiceOverview from "../components/home/serviceOverview";


export default async function Home() {
  console.log('What am I doing here ? -- SERVER');

  return (
    <>
      
      <Hero />
      <ServiceOverview />
      <Missions />

    </>
  );
  // https://www.youtube.com/watch?v=Zq5fmkH0T78
}
