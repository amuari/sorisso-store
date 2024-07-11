'use client'
import Image from 'next/image'
import HomePage from './ui/HomePage'
import HeroSection from './ui/HeroSection'
import Skeleton from './ui/Skeleton'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
// import HeroImage from './ui/HeroImage'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <Suspense fallback={<Skeleton />}>
        <HomePage />
        <HeroSection />
        {/* <HeroImage /> */}
      </Suspense>
    </motion.main>
  )
}
