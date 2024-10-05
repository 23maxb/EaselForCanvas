// components/Card.tsx
import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200">
            <div className="text-lg font-semibold mb-2">{title}</div>
            <div className="text-sm text-gray-500">{description}</div>
        </div>
    );
};

export default Card;
