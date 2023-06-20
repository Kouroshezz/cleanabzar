import React, { useState, useEffect, useRef } from 'react';
import { Setting5, Sort } from 'iconsax-react';
import Select from 'react-select';
import { useSearchParams } from 'react-router-dom';

function SortProducts({ sort, setSort, filterFunc, sortsm }) {

    const [search] = useSearchParams();
    let sortQuery = search.get('sort');

    const sortOptions = [
        { label: 'ارزان ترین', data: 'cheapest', value: 'cheapest' },
        { label: 'گران ترین', data: 'mostexpensive', value: 'pricier' },
        { label: 'پربازدید ترین', data: 'mostviewed', value: 'mostviewed' },
        { label: 'پرفروش ترین', data: 'mostsale', value: 'mostsale' },
    ];
    // --- add active class to sort options
    const sortopt = document.querySelectorAll('.sort .opt');
    sortopt.forEach(item => {
        item.getAttribute('data-sort') === sort ? item.classList.add('activesort') : item.classList.remove('activesort')
    })

    const sortWrapperRef = useRef(null);
    useEffect(() => {
        Object.values(sortWrapperRef?.current?.children)?.filter(function (item) {
            if (item.dataset.sort === `${sortQuery}`) {
                return item.classList.add('text-primary')
            }
            else if (item.dataset.sort !== `${sortQuery}`) {
                return item.classList.remove('text-primary')
            }
        });
    }, [sortQuery])

    return (
        <>
            <div className="sort d-none d-lg-flex align-items-center justify-content-center my-5 pt-5">
                <span className='icon ms-4'>
                    <Setting5 className='text-primary' />
                </span>
                <span>مرتب سازی : </span>
                <div className='d-flex justify-content-around' ref={sortWrapperRef}>
                    {sortOptions.map((item, index) =>
                        <span key={index} className={`mx-3 opt pointer`}
                            data-sort={item.data} onClick={(e) => setSort(e.target.dataset.sort)}>{item.label}
                        </span>
                    )}
                </div>
            </div>
            {/* ------------SORT OPTIONS IN MOBILE------ */}
            <div className="sort d-flex d-md-none align-items-center ">
                <div className="box py-4 px-3 w-50 mx-2" onClick={() => filterFunc('filter')}>
                    <span className='icon ms-2'>
                        <Setting5 className='text-primary' />
                    </span>
                    <span> فیلتر </span>
                </div>
                <div className="box py-4 px-3 w-50 mx-2" onClick={() => filterFunc('sort')}>
                    <span className='icon ms-2'>
                        <Sort className='text-primary' />
                    </span>
                    <span> {sortsm} </span>
                </div>
                {/* <Select className='flex-grow-1 me-3'
                    placeholder={'انتخاب کنید'}
                    defaultValue={sort}
                    onChange={(e) => setSort(e.data)}
                    options={sortOptions}
                /> */}
            </div>
            {/* ------------SORT OPTIONS IN MOBILE------ */}
        </>
    )
}

export default React.memo(SortProducts)