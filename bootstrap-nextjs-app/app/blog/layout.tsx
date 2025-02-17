// /app /blog / layout.tsx
import Link from 'next/link';
import React from 'react';

export default function BlogLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div>
            <header>
                <h1>My Blog</h1>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2024 My Blog</p>
            </footer>
        </div>
    );
};
