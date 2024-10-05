import React from 'react';

export interface Topic {
    id: string;
    name: string;
    description: string;
    lastTimePosted: string;
    numberOfPosts: number;
}

interface ForumTableProps {
    topics: Topic[];
}

const ForumTable: React.FC<ForumTableProps> = ({ topics }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full table-auto border-collapse border border-slate-300">
                <thead className="bg-slate-800 text-white">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wide border-b border-slate-300">
                        Topic Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wide border-b border-slate-300">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wide border-b border-slate-300">
                        Last Time Posted
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wide border-b border-slate-300">
                        Number of Posts
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-300">
                {topics.map((topic) => (
                    <tr key={topic.id} className="hover:bg-slate-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b border-slate-300">
                            {topic.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-slate-300">
                            {topic.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-slate-300">
                            {topic.lastTimePosted}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-slate-300">
                            {topic.numberOfPosts}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ForumTable;
