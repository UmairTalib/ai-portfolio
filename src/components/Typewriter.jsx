import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 100, infinite = true, className = "" }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;
        if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
        } else if (infinite) {
            // Optional: Reset logic could go here, for now just static after type
        }
        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return <span className={className}>{currentText}</span>;
};

export default Typewriter;
