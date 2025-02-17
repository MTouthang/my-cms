import Link from 'next/link';
import React from 'react'

const BlogList = () => {
    const posts = [
        { id: '1', title: 'First Post' },
        { id: '2', title: 'Second Post' },
    ];
    return (
        <>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BlogList