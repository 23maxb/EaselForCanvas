"use client";

import React, { useState } from 'react';
import Sidebar from '@/Components/Sidebar';
import { Topic } from '@/Components/forum/ForumTable';
import ForumTable from '@/Components/forum/ForumTable';
import { MessageCircleIcon, PlusCircleIcon } from "lucide-react";
import SendMessage from "@/Components/forum/SendMessage";

const Forum: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [topics, setTopics] = useState<Topic[]>([
        {
            id: 'topic-1',
            name: 'Introduction to Computer Science',
            description: 'Discuss the basics of computer science and programming.',
            lastTimePosted: '',
            numberOfPosts: 0,
        },
        {
            id: 'topic-2',
            name: 'Advanced Mathematics',
            description: 'Topics related to calculus, linear algebra, and differential equations.',
            lastTimePosted: '',
            numberOfPosts: 0,
        },
        // ... other topics
    ]);

    // Function to handle the new topic submission
    const handleSendMessage = (topicName: string, topicDescription: string) => {
        const newTopic: Topic = {
            id: `topic-${topics.length + 1}`,
            name: topicName,
            description: topicDescription,
            lastTimePosted: new Date().toLocaleString(),
            numberOfPosts: 0,
        };

        setTopics([...topics, newTopic]); // Add the new topic to the state
        setIsModalOpen(false); // Close the modal after sending the message
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area for Forum */}
            <div className="flex-grow bg-gray-100 min-h-screen py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center">
                            <MessageCircleIcon className="h-8 w-8 mr-2" />
                            <h1 className="text-4xl font-bold text-gray-800">Community Forums</h1>
                        </div>

                        {/* Add New Topic Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                        >
                            <PlusCircleIcon className="h-5 w-5 mr-2" />
                            Add New Topic
                        </button>
                    </div>

                    {/* Forum Table */}
                    <ForumTable topics={topics} />
                </div>
            </div>

            {/* Modal for Add New Topic */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                        <h2 className="text-xl font-semibold mb-4">Add New Topic</h2>
                        <SendMessage onSendMessage={handleSendMessage} />
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Forum;
