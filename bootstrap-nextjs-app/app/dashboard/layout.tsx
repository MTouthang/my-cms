import React from 'react'

const DashboardLayout = ({ content, sidebar }: { content: React.ReactNode, sidebar: React.ReactNode }) => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '20%' }}>
                {content}
            </div>
            <div style={{ width: '80%' }}>
                {sidebar}
            </div>
        </div>
    )
}

export default DashboardLayout