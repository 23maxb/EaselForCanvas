// components/UpcomingEvents.tsx
import React from 'react';

interface Event {
    title: string;
    date: string;
}

const UpcomingEvents: React.FC = () => {
    const events: Event[] = [
        { title: "Welcome to ENGL 11A Cultures & Ideas 1", date: "Sep 20" },
        { title: "Welcome to Phys 32L!", date: "Sep 22" },
        { title: "Please note: 11A is in O'Connor 210", date: "Sep 22" },
        { title: "Quick reminders!", date: "Sep 25" },
    ];

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">To Do</h3>
            <ul className="space-y-4">
                {events.map((event, index) => (
                    <li key={index} className="bg-white p-4 rounded-md shadow-sm">
                        <div className="font-bold text-gray-800">{event.title}</div>
                        <div className="text-sm text-gray-500">{event.date}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingEvents;
