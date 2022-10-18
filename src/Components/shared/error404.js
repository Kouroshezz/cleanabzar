import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-lg-8 mx-auto d-flex flex-column rounded-3
                align-items-center justify-content-center text-center mt-150 wrapper-404" >
                    <h1 className='mb-4 '>صفحه ی مورد نظر یافت نشد</h1>
                    <h2 className='text-danger mb-5'>خطای 404</h2>
                    <div className="row w-100">
                        <div className="col-12 col-md-7 mx-auto">
                            <div className="row w-100">
                                <div className="col-12 mb-4 mb-lg-0 col-lg-6">
                                    <Link to='/shop' className='btn btn-primary p-3 px-4 mx-2'> رفتن به فروشگاه</Link>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Link to='/' className='btn btn-secondary p-3 mx-2 rounded-1'> بازگشت به صفحه ی اصلی  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Error404)