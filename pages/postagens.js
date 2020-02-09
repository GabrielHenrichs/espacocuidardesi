import React, { useState, useEffect } from 'react'

const PostsPage = function() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
      async function getPosts() {
        const res = await fetch('/api/posts');
        const { posts } = await res.json();
        
        setPosts(posts);
      }

      getPosts();
    }, []);

    if (posts === null) {
        return (
            <div>Carregando...</div>
        )
    }

    return (
        <div>
            {
                posts.map(({ title, content }) => (
                    <div>
                        <h2>{ title }</h2>
                        <p>{ content }</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PostsPage