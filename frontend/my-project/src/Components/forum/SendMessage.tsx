"use client";

import React, { useState } from 'react';

interface SendMessageProps {
    onSendMessage: (topicName: string, topicDescription: string) => void; // Updated to accept topic name and description
}

const SendMessage: React.FC<SendMessageProps> = ({ onSendMessage }) => {
    const [topicName, setTopicName] = useState<string>(''); // State for topic name
    const [topicDescription, setTopicDescription] = useState<string>(''); // State for topic description

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (topicName.trim() === '' || topicDescription.trim() === '') {
            alert('Both fields are required');
            return;
        }
        onSendMessage(topicName, topicDescription); // Pass both topic name and description
        setTopicName(''); // Clear the input fields after sending
        setTopicDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Topic Name</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring focus:ring-slate-200"
                    placeholder="Enter the topic name"
                    value={topicName}
                    onChange={(e) => setTopicName(e.target.value)}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Topic Description</label>
                <textarea
                    className="w-full h-24 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring focus:ring-slate-200"
                    placeholder="Enter the topic description"
                    value={topicDescription}
                    onChange={(e) => setTopicDescription(e.target.value)}
                />
            </div>

            <button
                type="submit"
                className="self-end bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
                Submit
            </button>
        </form>
    );
};

export default SendMessage;
