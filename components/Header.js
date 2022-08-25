import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex justify-between max-w-6xl'>
        <div className='relative w-24 h-24 hidden lg:inline-grid cursor-pointer'>
            <Image src="https://links.papareact.com/ocw" layout='fill'
            objectFit='contain' alt='' />
        </div>
        <div className='relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer'>
        <Image src="https://links.papareact.com/jjm" layout='fill'
            objectFit='contain' alt='' />
        </div>
        </div>
    </div>
  )
}

export default Header