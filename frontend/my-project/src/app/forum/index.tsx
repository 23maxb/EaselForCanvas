import ForumTable from '@/Components/forum/ForumTable';
import React from 'react';

interface ForumPageProps {
    topics: Array<{
        _id: string;
        name: string;
        description: string;
        topicsCount: number;
        repliesCount: number;
        viewsCount: number;
        lastPost: string;
    }>;
}

const ForumPage: React.FC<ForumPageProps> = ({ topics }) => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6">Community Forums</h1>
            <ForumTable topics={topics} />
        </div>
    );
};

// Fetch forum topics on the server-side
export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/forums');
    const { topics } = await res.json();

    return {
        props: {
            topics,
        },
    };
}

export default ForumPage;
