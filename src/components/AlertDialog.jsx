import React, { useState } from 'react';

const AlertDialog = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={()=>setIsOpen(true)}> Open Alert</button>

            {
                isOpen && (
                    <div className='modal modal-open'>
                        <div className='modal-box'>
                            <p>Are You Sure !</p>
                            <div className='modal-action' >
                                <button className='btn' onClick={()=>setIsOpen(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                    
                )
            }
        </div>
    );
};

export default AlertDialog;