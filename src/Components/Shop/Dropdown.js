import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ArrowDown2 } from 'iconsax-react';

function Dropdown({ title, children }) {

    function openOption(e) {

        if (e.target.nextSibling.classList.contains('showopt')) {
            e.target.nextSibling.classList.remove('showopt');
            e.target.classList.remove('active');
        }
        else if (!e.target.nextSibling.classList.contains('showopt')) {
            e.target.classList.add('active');
            e.target.nextSibling.classList.add('showopt')
        }
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center opt-title py-3 px-4 px-lg-0" onClick={(e) => openOption(e)}>
                <span>{title}</span><ArrowDown2 size={16} />
            </div>
            <div className='filter-dd px-4 px-lg-3'>
                <form className="options">
                    {children}
                </form>
            </div>
        </>
    )
}

export default React.memo(Dropdown)