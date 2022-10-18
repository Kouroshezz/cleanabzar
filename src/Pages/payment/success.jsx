import { ArrowForward, Call, Sms, User } from 'iconsax-react';
import React from 'react';
import { Link } from 'react-router-dom';
//----- components
import Steps from '../../Components/Cart/steps';
import Layout from '../../Components/Layout';

function PaymentSuccess() {
    return (
        <>
            <div className="container animate__animated animate__fadeIn mt-150 payment-success">
                <Steps cart={true} payment={true} paymentResult={true} />
                <div className="mt-5 py-4 py-lg-5 content-box">
                    <div className="row">
                        <div className="col-10 col-lg-6 mx-auto">
                            <div className="text-center">
                                <img src='../../../images/Icons/payment-success.svg' className='img-fluid' />
                                <h2 className='mt-4 text-success'>سفارش شما با موفقیت ثبت شد</h2>
                                <h4 className='mt-3 mb-4'> همکاران ما در کوتاهترین زمان ممکن برای نهایی سازی فرآیند ارسال با شما تماس خواهند گرفت</h4>
                                <div className="d-inline-block text-center rounded-3 px-5 py-4 order-code mt-5">
                                    <span>کد سفارش شما : <strong>CA-65654</strong></span>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center my-5 pt-5 text-16">
                                    <a className='d-flex align-items-center mb-3 text-dark' href='tel:989351000000'> 093510000000
                                        <Call variant="Bold" className='text-primary me-3' /></a>

                                    <a className='d-flex align-items-center text-dark' href='mailto:info@cleanabzar.com'> info@cleanabzar.com
                                        <Sms variant="Bold" className='text-primary me-3' /></a>
                                </div>
                                {/* ---- back to shop or user account --- */}
                                <div className="d-flex justify-content-center align-items-center mt-5 text-14">
                                    <Link to='/profile' className='btn btn-primary px-5 py-3 text-light'> ناحیه کاربری  </Link>
                                    {/*<Link to='/shop' className='me-5 text-dark'> بازگشت به فروشگاه</Link>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(PaymentSuccess)