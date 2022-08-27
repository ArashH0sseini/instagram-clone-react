/* eslint-disable @next/next/no-img-element */
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
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

            
        </div>
    )
}

export default Post