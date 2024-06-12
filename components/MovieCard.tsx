import Image from 'next/image'
import React from 'react'

export default function MovieCard() {
  return (
    <div>
      <Image src="/Images/uncharted2.jpg" width={700} height={1000} alt="" className='rounded-md w-44 h-60 object-cover'/>
      <h2 className='text-white'>Uncharted</h2>
    </div>
  )
}
