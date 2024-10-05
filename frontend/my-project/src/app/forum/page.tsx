import React from 'react';
import Sidebar from '@/Components/Sidebar';
import ForumTable from '@/Components/forum/ForumTable';

const Forum: React.FC = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area for Forum */}
            <div className="flex-grow bg-gray-100 min-h-screen py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-10 text-gray-800">Community Forums</h1>

                    {/* Forum Table */}
                    <ForumTable />
                </div>
            </div>
        </div>
    );
};

export default Forum;
