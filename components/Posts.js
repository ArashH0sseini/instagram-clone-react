import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: 'arash.h0sseini',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: ' Watch my REACT BASICS 101 class for FREE with 1 month FREE Skillshare access (First 1000 people)'
    },
    {
        id: '123',
        username: 'arash.h0sseini',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: ' Watch my REACT BASICS 101 class for FREE with 1 month FREE Skillshare access (First 1000 people)'
    },
]

function Posts() {
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