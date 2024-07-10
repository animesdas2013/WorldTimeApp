import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [time, setTime] = useState('');
    const [inputTimeZone, setInputTimeZone] = useState('');

    const fetchTime = async () => {
        try {
            const response = await axios.get('http://localhost:3000/time', {
                params: {
                    timeZone: inputTimeZone,
                },
            });
            setTime(response.data.time);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleButtonClick = () => {
        fetchTime();
    };

    return (
        <div>
            <h1>Current Time: {time}</h1>
            <input
                type="text"
                placeholder="Enter time zone (e.g., Europe/London)"
                value={inputTimeZone}
                onChange={(e) => setInputTimeZone(e.target.value)}
            />
            <button onClick={handleButtonClick}>Get Time</button>
        </div>
    );
};

export default App;
