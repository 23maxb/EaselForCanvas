// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { HomeIcon, BookOpenIcon, CalendarIcon, InboxIcon, HistoryIcon, HelpCircleIcon, ArchiveIcon } from "lucide-react"; // ShadCN icon imports

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen w-64 p-6 flex flex-col shadow-lg">
            <div className="text-3xl font-semibold mb-10 tracking-tight">Easel</div>
            <ul className="space-y-6">
                <li>
                    <Link href="/" className="flex items-center space-x-3 hover:text-gray-300 transition-all duration-300">
                        <HomeIcon className="h-6 w-6" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href="/courses" className="flex items-center space-x-3 hover:text-gray-300 transition-all duration-300">
                        <BookOpenIcon className="h-6 w-6" />
                        <span>Courses</span>
                    </Link>
                </li>
                <li>
                    <Link href="/calendar" className="flex items-center space-x-3 hover:text-gray-300 transition-all duration-300">
                        <CalendarIcon className="h-6 w-6" />
                        <span>Calendar</span>
                    </Link>
                </li>
                <li>
                    <Link href="/inbox" className="flex items-center space-x-3 hover:text-gray-300 transition-all duration-300">
                        <InboxIcon className="h-6 w-6" />
                        <span>Inbox</span>
                    </Link>
                </li>
                <li>
                    <Link href="/history" className="flex items-center space-x-3 hover:text-gray-300 transition-all duration-300">
                        <HistoryIcon className="h-6 w-6" />
                        <span>History</span>
                    </Link>
                </li>
                <li>
                    <Link href="/help" className="flex items-center space-x-3 hover:text-gray-300 transition-all duration-300">
                        <HelpCircleIcon className="h-6 w-6" />
                        <span>Help</span>
                    </Link>
                </li>
                <li>
                    <Link href="/library" className="flex items-center space-x-3 hover:text-gray-300 transition-all duration-300">
                        <ArchiveIcon className="h-6 w-6" />
                        <span>Library</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
