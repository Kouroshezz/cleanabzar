import { TickCircle } from 'iconsax-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cartItems } from '../../Pages/Cart';

function Receipt({ children }) {

    const { pathname } = useLocation();
    let location = pathname.slice(1, pathname.length);


    return (
        <div className=' text-center box receipt px-lg-0 pb-5'>

            <p className="text-center py-4 mb-3 mb-lg-5 title-bg ">فاکتور</p>
            <div className="row align-items-center px-4">
                <div className="d-flex justify-content-between align-items-baseline d-lg-block text-lg-center">
                    <p className='text-center'>قیمت کل محصولات ({cartItems.length})</p>
                    <div className='text-center'>
                        <h2 className='d-inline-block my-4 text-primary'>{Number(38542000).toLocaleString()}</h2>
                        <span className='text-14 text-gray mx-2'>تومان</span>
                    </div>
                    {/* --- seprator --- */}
                    <div className="seprator d-none d-lg-block my-4"></div>
                    {/* -- */}
                </div>
                <div className="d-flex justify-content-between align-items-baseline d-lg-block text-lg-center">
                    <p>حمل و نقل</p>
                    <span className='d-block text-14 delivery'>ارسال با پیک ( هزینه بر عهده مشتری )</span>

                </div>
            </div>
            {/* --- seprator --- */}
            <div className="seprator d-none d-lg-block my-4"></div>
            {/* -------coupon section in cart page */}
            {location === 'cart' && <><div className="d-flex justify-content-between align-items-baseline d-lg-block text-lg-cente px-4">
                <p className="text-center mt-5 mt-lg-0">کد تخفیف</p>
                <form className='form-discount'>
                    <div className='d-flex justify-content-center'>
                        <input type="text" placeholder='کد تخفیف' name="" id="" />
                        <button type="submit icon p-3">اعمال</button>
                    </div>
                </form>
            </div>
                {/* -------- */}
                <div className="coupon-success p-4 mx-4">
                    <span class='text-success'><TickCircle size="16" />کد تخفیف اعمال شد</span>
                </div>
                <small className='d-block text-danger text-start mx-4'>لغو کد تخفیف</small>
                <div className="text-center">
                    <span className='text-14 text-success'>{Number(245000).toLocaleString()}</span>
                    <span className='text-10 text-gray mx-1'> تومان </span>
                    <span className='text-12'>از مبلغ نهایی شما کسر شد</span>
                </div>
            </>}
            {/* --- seprator --- */}
            <div className="seprator my-4"></div>
            {/* -- */}
            <div className="d-flex flex-lg-column justify-content-between align-items-center px-4">
                <p className="text-center">قیمت کل</p>
                <div className='text-center'>
                    <h2 className='d-inline-block my-4 text-primary'>{Number(38542000).toLocaleString()}</h2>
                    <span className='text-14 text-gray mx-2'>تومان</span>
                </div>
            </div>
            {location === 'cart' && <Link to={`/payment`} className="btn btn-primary d-flex justify-content-center py-3 mx-5">پرداخت</Link>}
            {/* ------- payment page --------- */}
            {location === 'payment' && <div className='text-center text-12 mt-4 px-4'>
                <img src='../../../images/footer/mellat-bank.png' className='img-fluid' />
                <p className='fs-5'>پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه بانک ملت</p>
                {children}
            </div>}
        </div>
    )
}

export default React.memo(Receipt)