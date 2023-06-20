import React, { useCallback, useEffect, useRef, useState } from 'react';
// ------ library 
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import ReactPaginate from 'react-paginate';
import { createSearchParams, Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
// ------components
import Layout from '../../Components/Layout';
import Filter from '../../Components/Products/price-range';
import SortProducts from '../../Components/Products/sort';
import ProductCard from '../../Components/Products/productCard';
// ------icons
import { ArrowDown2, CloseCircle, Setting5 } from 'iconsax-react';
import FilterMobile, { colorFilters } from '../../Components/Shop/Filtersm';
import PriceRange from '../../Components/Products/price-range';
import Dropdown from '../../Components/Shop/Dropdown';
import { whiteShade } from '../../Utils/helper-functions';

function Shop() {

    const filterBoxRef = useRef(null);
    const shopFilterRef = useRef(null);
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('');


    const [price, setPrice] = useState({ min: 0, max: 0 });
    const [selectedOption, setSelectedOption] = useState(null);

    // ------- Pagination 
    const allData = 137;
    const postperpage = 10;
    const pagestoshow = Math.ceil(allData / postperpage);
    // ------ Router
    let navigate = useNavigate();
    const [search] = useSearchParams();
    let { pathname, location } = useLocation();

    // let query = search.get('sort');
    // query = query?.slice(query.indexOf('=') + 1, query.length);

    // ------- Paginate Variables In URL
    let paginate = search.get('page');
    let query = Object.fromEntries(search).sort;

    const [page, setPage] = useState(paginate || 1);

    // --- mobile sort containing URL query param 
    let [label] = sortoptions.filter(item => item.param === query).map(item => item.label);
    const [sortsm, setSortsm] = useState(label || 'جدیدترین');

    function handlePaginate({ selected }) {
        setPage(selected + 1)
    }

    useEffect(() => {

        // Object.values(shopFilterRef.current.children)
        //     .filter(item => item.classList.contains('dropdown'))
        //     .map(item => item.addEventListener('click', (e) => {
        //         item.classList.add('open')
        //         item.classList.contains('open') ? item.classList.remove('open') : item.classList.add('open');
        //         if (e.target.localName !== 'div') { e.preventDefault() };
        //     }))

        document.querySelectorAll('.dropdown').forEach(item => item.addEventListener('click', (e) => {
            item?.classList.contains('open') ? item.classList?.remove('open') : item.classList?.add('open')
        }))
        document.querySelectorAll('.dropdown.open .options').forEach(item => item.addEventListener('click', (e) => e.stopPropagation()))
        // ---
        navigate({
            pathname,
            search: `?sort=${sort || query || ''}&page=${page}`
        })
    }, [page, sort])

    // console.log(price.min + '\t' + price.max);

    const openFilter = useCallback((e) => {
        setFilter(e);
        filterBoxRef?.current?.classList?.remove('animate__slideOutDown');
        filterBoxRef?.current?.classList?.add('animate__slideInUp');
    }, [])

    const sortmobile = (e) => {
        setSortsm(e);
        filterBoxRef?.current?.classList?.remove('animate__slideInUp');
        filterBoxRef?.current?.classList?.add('animate__slideOutDown');
    }

    return (
        <>
            <div className="container shop mt-150 animate__animated animate__fadeIn mb-5">
                <SortProducts sort={sort} sortsm={sortsm} setSort={setSort} filterFunc={openFilter} />
                {/* --------------- filter and sort in mobile ------- */}
                {filter && <div ref={filterBoxRef}
                    className={`d-block d-lg-none sort-filter box py-5 px-4 bg-white animate__animated animate__slideInUp animate__fast ${filter === 'filter' ? 'h-100' : 'h-50'}`}>
                    <div className='d-flex justify-content-between align-items-center p-4'>
                        <span className='text-14 text=gray'>
                            <div className="py-4">
                                <span className='icon ms-2'>
                                    <Setting5 className='text-primary' />
                                </span>
                                <span> {filter === 'filter' ? 'فیلتر' : 'مرتب سازی'} </span>
                            </div></span>
                        <span className='p-3' onTouchEnd={() => setFilter('')}><CloseCircle size="24" className='text-danger' /></span>
                    </div>
                    {filter == 'filter' ?
                        <div className='d-block d-lg-none'>
                            <FilterMobile setPrice={setPrice} />
                        </div>
                        : <div>
                            <ul className="nav flex-column mt-4 sm-sort">
                                {Object.values(sortoptions).map(({ label, param }, index) =>
                                    <li key={index} className={`text-gray text-14 p-3 mb-4 ${sortsm == label ? 'activeFS' : ''}`}
                                        onTouchEnd={(e) => { setSort(param); sortmobile(label) }}>{label}</li>
                                )}
                            </ul>
                        </div>}
                </div>
                }
                {/* ---------------------------------------- */}
                <div className="row">
                    {/* ------FILTER--------- */}
                    <div className="d-none d-lg-block col-lg-3 mt-4">
                        <DesktopFilter filterRef={shopFilterRef} setPrice={setPrice} />
                    </div>
                    {/* ------------------ */}
                    {/* --------- PRODUCTS ------- */}
                    <div className="col-12 col-lg-9">
                        <div className="row">
                            {Array(20).fill(null).map((item, index) =>
                                <div className='col-12 col-md-6 col-lg-3 my-3 my-lg-4' key={index}>
                                    <ProductCard name='جاروبرقی خانگی کارچر مدل T 15/1'
                                        image='../../../images/products/file_660.jpg' price='250000' offer='' id={index} />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* ----- PAGINATION -------- */}
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={(e) => handlePaginate(e)}
                        pageRangeDisplayed={3}
                        forcePage={page - 1}
                        // onPageActive={page}
                        pageCount={pagestoshow}
                        previousLabel="<"
                        marginPagesDisplayed={2}
                        containerClassName='d-flex justify-content-center align-items-baseline my-5 nav paginate'
                        pageClassName='links d-flex justify-content-center align-items-center'
                        pageLinkClassName='rounded-4'
                        activeClassName='active-page border-none border-0 p-0'
                        previousClassName='prev'
                        previousLinkClassName=''
                        nextClassName='next'
                        nextLinkClassName=''
                        breakClassName=''
                        breakLinkClassName=''
                    />
                </div>
            </div>
        </>
    )
}

export default React.memo(Shop)


// const sortoptions = ['جدیدترین', 'ارزان ترین', 'گران ترین', 'پربازدید ترین', 'پرفروش ترین'];
const sortoptions = [{ label: 'جدیدترین', param: 'newest' }, { label: 'ارزان ترین', param: 'cheapest' }, { label: 'گران ترین', param: 'mostexpensive' },
{ label: 'پربازدید ترین', param: 'mostview' }, { label: 'پرفروش ترین', param: 'mostsale' }];


const DesktopFilter = ({ filterRef, setPrice }) => {
    return (
        <div className="filter">
            <h3 className='border-b pt-2 pb-4 mb-4 text-center'>فیلتر ها</h3>

            <form ref={filterRef}>
                {Array(3).fill(null).map(item =>
                    <Dropdown key={uuidv4()} title={'برند'} >
                        {Array(10).fill(null).map((item, index) =>
                            <div className='my-3 text-gray py-2' key={uuidv4()}>
                                <input className='align-middle' type="checkbox" name={`brand-option-${index + 1}`} id={`option-${index + 1}`} value={`option-${index + 1}`} />
                                <label className='me-3' htmlFor={`option-${index + 1}`}>برند اول</label>
                            </div>
                        )}
                    </Dropdown>
                )}
                <Dropdown title={'انتخاب رنگ'}>
                    {colorFilters?.map(({ title, ccode }, index) =>
                        <li className='filter-colors d-flex justify-content-between align-items-center my-3 text-gray py-2' key={index + Math.floor(Math.random() * 100)}>
                            <input type="checkbox" className='ms-3' id={`${title + index}`} value={title} name={title} />
                            <label className='flex-grow-1 d-inline-flex' htmlFor={`${title + index}`}>
                                <span>{title}</span>
                                <span class='me-auto' style={{ backgroundColor: `${ccode}`, border: `${whiteShade(ccode) && '1px solid #404040'}` }}></span>
                            </label>
                        </li>
                    )}
                </Dropdown>
                <Dropdown title={'محدوده قیمت '}>
                    <PriceRange setPrice={setPrice} />
                </Dropdown>
                {/* ---- */}


                {/* -- checkbox show only available products --*/}
                <div className='my-4 d-flex align-items-center'>
                    <input type='checkbox' id='inStock' value='onlyInStock' />
                    <label htmlFor='inStock' className=' d-block me-2'>فقط موجود ها را نمایش بده .</label>
                </div>
            </form>
        </div>
    )
}