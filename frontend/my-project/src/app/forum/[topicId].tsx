import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
}

const ForumTopicPage: React.FC = () => {
    const router = useRouter();
    const { topicId } = router.query;
    const [posts, setPosts] = useState<Post[]>([]);

    // Ensure topicId is a string before using it
    const formattedTopicId = typeof topicId === 'string' ? topicId.replace(/-/g, ' ') : '';

    useEffect(() => {
        if (typeof topicId === 'string') {
            // Fetch posts related to the topicId
            fetch(`/api/topics/${topicId}/posts`)
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error('Error fetching posts:', error));
        }
    }, [topicId]);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 capitalize">{formattedTopicId}</h1>

            {/* Render posts */}
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} className="mb-4 p-4 bg-white shadow rounded">
                        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                        <p className="text-gray-700 mb-2">{post.content}</p>
                        <p className="text-gray-500 text-sm">By {post.author}</p>
                    </div>
                ))
            ) : (
                <p>No posts available for this topic.</p>
            )}
        </div>
    );
};

export default ForumTopicPage;