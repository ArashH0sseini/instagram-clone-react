/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { useSession, signOut, signIn } from 'next-auth/react'
import { GlobeEuropeAfricaIcon, HeartIcon, MagnifyingGlassIcon, PaperAirplaneIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
    const { data: session } = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    const router = useRouter()

    return (
        <div className='sticky top-0 z-50 bg-white border-b shadow-sm'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
                {/* Left */}
                <div className='relative hidden w-24 cursor-pointer lg:inline-grid'>
                    <Image onClick={() => router.push('/')} src="https://links.papareact.com/ocw" layout='fill'
                        objectFit='contain' alt='' />
                </div>
                <div className='relative flex-shrink-0 w-10 cursor-pointer lg:hidden'>
                    <Image onClick={() => router.push('/')} src="https://links.papareact.com/jjm" layout='fill'
                        objectFit='contain' alt='' />
                </div>

                {/* Middle */}
                <div className='max-w-xs'>
                    <div className='relative p-3 mt-1 rounded-md'>
                        <div className='absolute inset-y-0 flex items-center pl-3 pointer-events-none'>
                            <MagnifyingGlassIcon className='w-5 h-5 text-gray-500' />
                        </div>
                        <input className='block w-full pl-10 border-gray-300 rounded-md bg-gray-50 sm:text-sm focus:ring-black focus:border-black' type="text" placeholder='Search' />
                    </div>
                </div>

                {/* Right */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon onClick={() => router.push('/')} className='navBtn inline-flex' />

                    {session ? (
                        <>
                            <div className='relative navBtn inline-flex'>
                                <PaperAirplaneIcon className='-rotate-45 navBtn inline-flex' />
                                <div className='absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1 animate-pulse'>3</div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
                            <GlobeEuropeAfricaIcon className='navBtn' />
                            <HeartIcon className='navBtn' />

                            <img onClick={signOut} src={session.user.image} alt=""
                                className='h-10 w-10 rounded-full cursor-pointer' /></>
                    ) : (
                        <>
                            <button onClick={signIn}>Sign In</button>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Header;