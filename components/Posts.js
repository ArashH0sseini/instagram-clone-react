import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Post from './Post'

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() =>
        onSnapshot(
            query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
            (snapshot) => {
                setPosts(snapshot.docs);
            }
        ),
        [db]
    );


    const { data: session } = useSession()
    
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption} />
            ))}

        </div>
    )
}

export default Posts