"use client";

import React from 'react';

const courses = [
    "Course 1: Introduction to Programming",
    "Course 2: Advanced JavaScript",
    "Course 3: React for Beginners",
    "Course 4: School Essentials"
];

const Page = () => {
    return (
        <div className="p-6 font-sans">
            <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Courses</h1>
            <ul className="list-none p-0 flex flex-wrap gap-4">
                {courses.map((course, index) => (
                    <li key={index} className="py-2 px-4 bg-blue-100 text-blue-800 rounded-full shadow-md">
                        {course}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;