import React from 'react'
import HeroSection from '../components/homeSections/HeroSection'
import AboutSection from '../components/homeSections/AboutSection'
import QaSection from '../components/homeSections/QaSection'
import ProfileSection from '../components/homeSections/ProfileSection'
import GallerySection from '../components/homeSections/GallerySection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProfileSection />
      <AboutSection />
      <GallerySection />
      <QaSection />
    </>
  )
}

export default Home