import React, { useEffect } from 'react';

function OrderDetail({ orderId }) {

    return (
        <div className='p-4'>
            <div className="d-flex justify-content-between align-items-center flex-wrap p-3 px-lg-4 text-gray text-14">
                <span className=''> کد سفارش : <strong className='text-dark text-16'> {orderId}</strong></span>
                <span className='py-3 py-lg-0'> تاریخ ثبت سفارش : <strong className='text-dark text-16'> 1400/04/24 </strong></span>
                <span> مبلغ : <strong className='text-dark text-16'>{Number(235000).toLocaleString()} تومان</strong></span>
            </div>
            <div className='text-gray p-3 px-lg-4 text-14'> آدرس : <span className='text-dark text-16'> بالاتر از میدان ولیعصر - دانش کیان </span></div>
            <div className="border-b pb-3 my-3"></div>
            {/* ------- PRODUCTS -------- */}
            <h2 className='text-primary mt-5'>محصولات</h2>
            <div className="row">
                {Array(5).fill(null).map((item, index) =>
                    <div className="col-12 col-lg-6" key={index}>
                        <div className="d-flex  my-4 p-3 item-card align-items-center">
                            <img className='w-25' src='../../../images/products/112943678-removebg-preview 1.png' />
                            <div className='d-flex flex-column gap-4 product text-14 me-lg-4'>
                                <span>جارو برقی بوش مدل BGL8PRO5IR</span>
                                <span > {Number(32510000).toLocaleString()} تومان</span>
                                <span>تعداد : <strong className='text-primary'>2</strong> </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default React.memo(OrderDetail)