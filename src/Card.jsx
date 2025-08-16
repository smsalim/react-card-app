import React from 'react';

const Card = ({ title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
            <h1 className="text-xl font-semibold mb-2">{title}</h1>
            <p className="text-gray-700">{content}</p>
        </div>
    )
}

export default Card;