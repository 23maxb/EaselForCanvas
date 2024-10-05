// app/page.tsx
import Sidebar from '@/Components/Sidebar';
import Card from '@/Components/Card';
import UpcomingEvents from "@/Components/UpcomingEvents";

interface ClassInfo {
    title: string;
    description: string;
}

export default function Home() {
    const classes: ClassInfo[] = [
        {title: "Online Diversity Modules 2023", description: "ODM 2023"},
        {title: "School of Engineering - Fall 2023", description: "Engineer_Acad_Advis_Fall_2023"},
        {title: "Technology for Academic Success", description: "tech-success-2023"},
        {title: "Child Studies 4-1: Cultural Competency", description: "CHST4-TTh 08:30 AM Fall 2024"}
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar/>
            <main className="flex-1 p-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classes.map((course, index) => (
                        <Card key={index} title={course.title} description={course.description}/>
                    ))}
                </div>
            </main>
            <div className="w-96 p-8 bg-white shadow-lg rounded-lg sticky top-0 h-screen">
                <UpcomingEvents/>
            </div>
        </div>
    );
}
