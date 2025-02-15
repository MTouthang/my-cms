import Link from "next/link";

export default function Home() {
    const posts = [
        { id: '1', title: 'First Post' },
        { id: '2', title: 'Second Post' },
    ];
    return (
        <>
            <h1 className="h-2"> This a Blog Home page</h1>
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
