// app / product / [...slug] / page.tsx
import React from 'react';

export default async function Product({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;

    if (slug?.length === 2) {
        return (
            <h1>
                Viewing product in category {slug[0]} with ID {slug[1]}
            </h1>
        );
    } else if (slug?.length === 1) {
        return <h1>Viewing products in category {slug[0]}</h1>;
    }

    return <h1>Product home page</h1>;
}