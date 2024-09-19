import React from 'react'
import HeroSection from '../components/homeSections/HeroSection'
import AboutSection from '../components/homeSections/AboutSection'
import MemenomicsSection from '../components/homeSections/MemenomicsSection'
import NftSection from '../components/homeSections/NftSection'
import QaSection from '../components/homeSections/QaSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MemenomicsSection />
      {/* <NftSection /> */}
      <QaSection />
    </>
  )
}

export default Home