import React from 'react';

const CardExample = () => {
    return (
        <div className="flex justify-center p-4">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                <img src="https://source.unsplash.com/random/400x300" alt="Random" />
                </figure>
                <div className="card-body">
                <h2 className="card-title">DaisyUI Card</h2>
                <p>Beautiful and responsive UI components for Tailwind.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CardExample;