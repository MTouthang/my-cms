import React from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className='border-b'>
                <p>Blog banner</p>
            </div>
            {children}
        </div>
    );
};

export default BlogLayout;