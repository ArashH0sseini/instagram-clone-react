import { useSession } from 'next-auth/react'
import React from 'react'
import Post from './Post'



function Posts() {
    const { data: session } = useSession()
    const posts = [
        {
            id: '123',
            username: 'arash.h0sseini',
            userImg: `${session?.user?.image}`,
            img: 'https://links.papareact.com/3ke',
            caption: ' Watch my REACT BASICS 101 class for FREE with 1 month FREE Skillshare access (First 1000 people)'
        },
        {
            id: '123',
            username: 'arash.h0sseini',
            userImg: `${session?.user?.image}`,
            img: 'https://links.papareact.com/3ke',
            caption: ' Watch my REACT BASICS 101 class for FREE with 1 month FREE Skillshare access (First 1000 people)'
        },
    ]
    return (
        <div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption} />
            ))}

        </div>
    )
}

export default Posts