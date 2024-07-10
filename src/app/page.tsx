import Image from 'next/image'
import HomePage from './ui/HomePage'
import HeroSection from './ui/HeroSection'
// import HeroImage from './ui/HeroImage'

export default function Home() {
  return (
    <main>
      <HomePage />
      <HeroSection />
      {/* <HeroImage /> */}
    </main>
  )
}
