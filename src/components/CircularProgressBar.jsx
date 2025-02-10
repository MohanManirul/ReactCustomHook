import React from 'react';

const CircularProgressBar = () => {
    return (
        <div className='radial-progress text-primary' style={{ "--value":80 }}>
            80%
        </div>
    );
};

export default CircularProgressBar;