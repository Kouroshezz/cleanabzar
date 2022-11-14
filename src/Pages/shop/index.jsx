import React, { useEffect, useRef, useState } from 'react';
// ------ library 
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import { createSearchParams, Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
// ------components
import ProductCard from '../../Components/Products/productCard';
import SortProducts from '../../Components/Products/sort';
import Layout from '../../Components/Layout';
import Filter from '../../Components/Products/filter';
import { ArrowDown2 } from 'iconsax-react';

function Shop() {

    const shopFilterRef = useRef(null);
    const [sort, setSort] = useState('');
    const [price, setPrice] = useState({ min: 0, max: 0 });
    const [selectedOption, setSelectedOption] = useState(null);

    // ------- Pagination 
    const allData = 137
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

    function handlePaginate({ selected }) {
        setPage(selected + 1)
    }


    useEffect(() => {

        // Object.values(shopFilterRef.current.children)
        //     .filter(item => item.classList.contains('dropdown'))
        //     .map(item => item.addEventListener('click', (e) => {
        //         item.classList.add('open')
        //        item.classList.contains('open') ? item.classList.remove('open') : item.classList.add('open');
        // if (e.target.localName !== 'div') { e.preventDefault() };
        //     }))

        document.querySelectorAll('.dropdown').forEach(item => item.addEventListener('click', (e) => {
            item.classList.contains('open') ? item.classList.remove('open') : item.classList.add('open')
        }))
        document.querySelectorAll('.dropdown.open .options').forEach(item => item.addEventListener('click', (e) => e.stopPropagation()))

        navigate({
            pathname,
            // search: `?sort=${sort ? sort : (query ? query : '')}&page=${page}`
            search: `?sort=${sort || query || ''}&page=${page}`
        })
    }, [page, sort])

    console.log(price.min + '\t' + price.max)

    return (
        <>
            <div className="container shop mt-150 animate__animated animate__fadeIn  mb-5">
                <SortProducts sort={sort} setSort={setSort} />
                {/* ---------------------------------------- */}
                <div className="row">
                    {/* ------FILTER--------- */}
                    <div className="col-12 col-lg-3 mt-4">
                        <div className="filter">
                            <h3 className='border-b pt-2 pb-4 mb-4 text-center'>فیلتر ها</h3>
                            <h5 className=''>محدوده قیمت</h5>
                            <Filter setPrice={setPrice} />
                            <form ref={shopFilterRef}>
                                <div className=" border-b py-4 pointer dropdown">
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span>برند</span>
                                        <ArrowDown2 size="16" />
                                    </div>
                                    <div className="options">
                                        {Array(10).fill(null).map((item, index) =>
                                            <div key={item + index} className='d-flex align-items-center py-2 my-3 text-gray text-14'>
                                                <input type="checkbox" name="" id="" />
                                                <label className='me-3'>برند</label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* ---- */}
                                <div className=" border-b py-4 pointer dropdown">
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span>برند</span>
                                        <ArrowDown2 size="16" />
                                    </div>
                                    <div className="options">
                                        {Array(10).fill(null).map((item, index) =>
                                            <div key={item + index} className='d-flex align-items-center py-2 my-3 text-gray text-14'>
                                                <input type="checkbox" name="" id="" />
                                                <label className='me-3'>برند</label>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* -- checkbox show only available products --*/}
                                <div className='my-4 d-flex align-items-center'>
                                    <input type='checkbox' id='inStock' value='onlyInStock' />
                                    <label htmlFor='inStock' className=' d-block me-2'>فقط موجود ها را نمایش بده .</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* ------------------ */}
                    {/* --------- PRODUCTS ------- */}
                    <div className="col-12 col-lg-9">
                        <div className="row">
                            {Array(20).fill(null).map((item, index) =>
                                <div className='col-6 col-lg-3 my-4' key={index}>
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