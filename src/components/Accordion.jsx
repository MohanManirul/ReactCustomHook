import React from 'react';

const Accordion = () => {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Click to expand
                </div>
            <div className="collapse-content">
                <p>This is the content inside the accordion.</p>
            </div>
        </div>
    );
};

export default Accordion;