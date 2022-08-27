/* eslint-disable @next/next/no-img-element */
import { HeartIcon, PaperAirplaneIcon, BookmarkIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { EllipsisHorizontalIcon, HeartIcon as HeartIconsolid } from '@heroicons/react/24/solid'
import React from 'react'

function Post({ id, username, img, caption, userImg }) {
    return (
        <div className='bg-white my-7 border rounded-sm'>
            {/* header */}
            <div className='flex items-center p-5'>
                <img src={img} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt='' />
                <p className='flex-1  font-bold'>{username}</p>
                <EllipsisHorizontalIcon className='h-7' />
            </div>

            {/* img */}
            <img src={img} className='object-cover w-full' alt='' />

            {/* Buttons */}
            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn' />
                    <ChatBubbleOvalLeftIcon className='btn' />
                    <PaperAirplaneIcon className='btn h-[1.6rem] -rotate-45' />
                </div>
                <BookmarkIcon className='btn' />
            </div>

            {/* caption */}
            <div>
                <p className='p-5 truncate'>
                    <span className='font-bold mr-1'>{username}</span>
                    {caption}
                </p>
            </div>
        </div>
    )
}

export default Post