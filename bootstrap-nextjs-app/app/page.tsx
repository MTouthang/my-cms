// app/page.tsx
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Welcome to My Blog</h1>
            <Link href="/blog">
                <p>Blog</p>
            </Link>
        </div>
    );
}