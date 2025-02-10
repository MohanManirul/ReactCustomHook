import React from 'react';

const Badge = () => {
    return (
        <div>
            <h2>Heading <span className='badge badge-xs'>XS New</span> </h2>
            <h2>Heading <span className='badge badge-md'>Md New</span> </h2>
            <h2>Heading <span className='badge badge-sm'>SM New</span> </h2>
            <h2>Heading <span className='badge badge-xs'>New</span> </h2>           
        </div>
    );
};

export default Badge;