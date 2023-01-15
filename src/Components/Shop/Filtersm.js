import React, { useRef, useEffect } from 'react';
// --- component
import Filter from '../Products/price-range';
// --- library
import Dropdown from './Dropdown';
import { v4 as uuidv4 } from 'uuid';
import { ArrowDown2 } from 'iconsax-react';
import PriceRange from '../Products/price-range';
import { whiteShade } from '../../Utils/helper-functions';

function FilterMobile() {

    return (
        <>
            {Array(5).fill(null).map(item =>
                <Dropdown key={uuidv4()} title={'برند'} >
                    {Array(10).fill(null).map((item, index) =>
                        <li className='d-flex align-items-center my-3 text-gray py-2' key={uuidv4()}>
                            <input className='align-middle' type="checkbox" name={`brand-option-${index + 1}`} id={`option-${index + 1}`} value={`option-${index + 1}`} />
                            <label className='me-3 w-100' htmlFor={`option-${index + 1}`}>برند اول</label>
                        </li>
                    )}
                </Dropdown>
            )}
            <Dropdown title={'بازه قیمت'}>
                <PriceRange />
            </Dropdown>
            <Dropdown title={'انتخاب رنگ'}>
                {colorFilters?.map(({ title, ccode }, index) =>
                    <li className='filter-colors d-flex justify-content-between align-items-center my-3 text-gray py-2' key={index + Math.floor(Math.random() * 100)}>
                        <input type="checkbox" className='ms-3' id={`${title + index}`} value={title} name={title} />
                        <label className='flex-grow-1 d-inline-flex' htmlFor={`${title + index}`}>
                            <span>{title}</span>
                            <span className='me-auto' style={{ backgroundColor: `${ccode}`, border: `${whiteShade(ccode) && '1px solid #404040'}` }}></span>
                        </label>
                    </li>
                )}
            </Dropdown>
        </ >
    )
}

export default React.memo(FilterMobile)


export const colorFilters = [{ title: 'مشکی', ccode: '#101010' }, { title: 'سفید', ccode: '#f3f3f3' }, { title: 'سبز', ccode: '#00FF00' }, { title: 'آبی', ccode: '#0000FF' }]

