import React, { useRef, useState } from 'react';
//--- icons
import { Edit, TickSquare } from 'iconsax-react';
import { Button } from 'bootstrap';

function InputEditInfo({ label, placeHolder, fieldType, wrapperStyle }) {

    const inputRef = useRef();
    const [newdata, setNewdata] = useState('');
    const [editfield, setEditfield] = useState(true);

    function changeInfo() {
        console.log(inputRef.current.value)
        setEditfield(true)
        console.log(editfield)
    }


    const patterns = {

    }


    return (
        <form className='d-inline-block text-12 w-100 mx-lg-3'>
            <label htmlFor="name">{label}</label>
            <div className={`input-wrapper mt-1 px-4 d-flex align-items-center justify-content-between ${!editfield && 'border-active'}`}>
                <input id='name' type={fieldType} className='py-4 pe-2 ps-5 w-100' ref={inputRef}
                    placeholder={placeHolder} onChange={() => ''} readOnly={editfield} />
                {editfield ? <Edit size='14' className='pointer' onClick={() => setEditfield(false)} />
                    : <button style={{ all: 'unset' }} type='submit' onClick={changeInfo} ><TickSquare size={20} className='text-success' /></button>}
            </div>
        </form>
    )
}

export default React.memo(InputEditInfo)