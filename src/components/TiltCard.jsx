import React, { useState } from 'react';

const TiltCard = ({ children, className = "" }) => {
    const [transform, setTransform] = useState("");
    const [transition, setTransition] = useState("transform 0.1s ease-out");

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const box = card.getBoundingClientRect();
        const x = e.clientX - box.left;
        const y = e.clientY - box.top;

        const centerX = box.width / 2;
        const centerY = box.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 10;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
        setTransition("transform 0.1s ease-out");
    };

    const handleMouseLeave = () => {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
        setTransition("transform 0.5s ease-out");
    };

    return (
        <div
            className={`transform-style-3d ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform, transition }}
        >
            {children}
        </div>
    );
};

export default TiltCard;
