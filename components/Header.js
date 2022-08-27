import Image from 'next/image'
import React from 'react'
import { GlobeEuropeAfricaIcon, HeartIcon, MagnifyingGlassIcon, PaperAirplaneIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import avatar from '../assets/avatar.jpg'

function Header() {
    return (
        <div>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
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
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className='navBtn' />

                    <div className='relative navBtn'>
                    <PaperAirplaneIcon className='navBtn h-6 -rotate-45' />
                    <div className='absolute -top-1 -right-1 text-xs w-5 h-5 bg-red-500 flex items-center justify-center rounded-full animate-pulse text-white'>3</div>
                    </div>
                    <PlusCircleIcon className='navBtn' />
                    <GlobeEuropeAfricaIcon className='navBtn' />
                    <HeartIcon className='navBtn' />
                    
                    <img src='https://links.papareact.com/3ke' alt="" className='h-8 rounded-full cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Header