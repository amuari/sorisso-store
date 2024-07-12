import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
    <div>
      <Image
        src='/images/online.png'
        alt='shop image'
        height={500}
        width={400}
        className='w-full h-96 object-contain '
      />
    </div>
  )
}

export default HeroImage
