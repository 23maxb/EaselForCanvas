import { useRouter } from 'next/router';
import React from 'react';

const ForumTopicPage: React.FC = () => {
    const router = useRouter();
    const { topicId } = router.query;

    // Ensure topicId is a string before using it
    const formattedTopicId = typeof topicId === 'string' ? topicId.replace(/-/g, ' ') : '';

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 capitalize">{formattedTopicId}</h1>

            {/* Render posts or other content here */}
        </div>
    );
};

export default ForumTopicPage;
