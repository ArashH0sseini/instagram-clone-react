import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Header() {
    return (
        <div>
            <div className='flex justify-between max-w-6xl'>
                {/* Left */}
                <div className='relative w-24 hidden lg:inline-grid cursor-pointer'>
                    <Image src="https://links.papareact.com/ocw" layout='fill'
                        objectFit='contain' alt='' />
                </div>
                <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image src="https://links.papareact.com/jjm" layout='fill'
                        objectFit='contain' alt='' />
                </div>

                {/* Middle */}
                <div className='max-w-xs'>
                    <div className='mt-1 relative p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input className='bg-gray-50 block w-full pl-10 
                    sm:text-sm border-gray-300 focus:ring-black
                     focus:border-black rounded-md' type="text" placeholder='Search' />
                    </div>
                </div>

                {/* Right */}
            </div>
        </div>
    )
}

export default Header