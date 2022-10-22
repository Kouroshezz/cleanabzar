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

function Shop() {

    const [sort, setSort] = useState('');
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
        navigate({
            pathname,
            // search: `?sort=${sort ? sort : (query ? query : '')}&page=${page}`
            search: `?sort=${sort || query || ''}&page=${page}`
        })

    }, [selectedOption, page, sort])


    return (
        <>
            <div className="container shop mt-150 animate__animated animate__fadeIn  mb-5">
                <SortProducts sort={sort} setSort={setSort} selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption} />
                {/* ---------------------------------------- */}
                <div className="row">
                    {/* ------FILTER--------- */}
                    <div className="col-12 col-lg-3 mt-4">
                        <div className="filter">
                            <h3 className='border-b pt-2 pb-4 mb-4 text-center'>فیلتر ها</h3>
                            <h5 className=''>محدوده قیمت</h5>
                            <Filter />
                            <form onChange={(e) => ''}>
                                <label htmlFor='price_from d-block'>از</label>
                                <input type="number" className='w-100' placeholder='0 تومان' min={0} max={1000000} step={50000} />
                                <div className='my-3'></div>
                                <label htmlFor='price_from d-bloc'>تا</label>
                                <input type="number" className='w-100' placeholder='0 تومان' step={50000} min={100000} max={10000000} maxLength={100000000} />
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