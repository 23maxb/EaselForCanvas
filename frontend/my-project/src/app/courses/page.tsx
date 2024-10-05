"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"; // Ensure you have shadcn Card components
import { Button } from "@/Components/ui/button";

const courses = [
    { title: "Introduction to Programming", description: "Learn the basics of programming with hands-on exercises." },
    { title: "Advanced JavaScript", description: "Deep dive into JavaScript, closures, and advanced patterns." },
    { title: "React for Beginners", description: "Get started with React and build interactive UIs." },
    { title: "School Essentials", description: "A foundational course covering essential school subjects." },
];

const Page = () => {
    return (
        <div className="p-6 font-sans max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Courses</h1>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, index) => (
                    <Card key={index} className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-900">
                                {course.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">{course.description}</p>
                            <Button variant="outline" className="w-full text-blue-600 hover:bg-blue-50">
                                Enroll Now
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Page;
