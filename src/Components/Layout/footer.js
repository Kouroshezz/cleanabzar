import React from 'react'
// ------ ICONS
import { NavLink } from 'react-router-dom';
import { Call, Sms } from 'iconsax-react';

function Footer() {

    const quickAccess = [
        { title: 'مجله', link: '' },
        { title: 'درباره ما', link: '' },
        { title: 'تماس با ما', link: '' },
        { title: 'پرسش های متداول', link: '' },
        { title: 'راهنمای خرید از فروشگاه', link: '' },
        { title: 'شرایط حمل و ارسال', link: '' },
    ]

    return (
        <footer className='border-top container py-5 mt-5'>
            <div>
                <NavLink to='/'>
                    <img src='../../../LOGO.svg' className='img-fluid' />
                </NavLink>
            </div>
            <p className='py-4 about'>کلین ابزار نخستین فروشگاه الکترونیک فارسی زبان است که فعالیت آن به صورت تخصصی بر فروش دستگاه‌های مکانیزه و ابزارهای دستی نظافت و شستشو و مواد شوینده قابل استفاده در کاربردهای خانگی متمرکز شده است. کلین ابزار به پشتوانه سالها تجربه و تخصص در حوزه نظافت خانگی و صنعتی و در پاسخ به تقاضای روزافزون مصرف کنندگان برای شیوه‌های جدید خرید تجهیزات و محصولات نظافت خانگی فعالیت خود را آغاز نموده است</p>
            <div className="row">
                <div className="col-6 col-lg-2">
                    <h5>دسترسی سریع</h5>
                    <ul>
                        {quickAccess.slice(0, 3).map((item, index) =>
                            <li key={index} className='d-block my-2 py-2'>{item.title}</li>
                        )}
                    </ul>
                </div>
                <div className="col-6 col-lg-2 offset-lg-1">
                    <h5 className='opacity-0'>دسترسی سریع</h5>
                    <ul>
                        {quickAccess.slice(3, quickAccess.length).map((item, index) =>
                            <li key={index} className='d-block my-2 py-2'>{item.title}</li>
                        )}
                    </ul>
                </div>
                <div className="col-12 col-lg-3 mt-5 mt-lg-0">
                    <h5>ارتباط با ما</h5>
                    <p className='py-2 my-2'><Call width={20} height={20} opacity={.5} className='ms-3' /> <a href='tel:+989218517171' dir='ltr'> 021 - 85171717</a></p>
                    <p className='py-2 my-2'><Sms width={20} height={20} opacity={.5} className='ms-3' /><a href='mailto:info@cleanabzar.com'>info@cleanabzar.com</a></p>
                </div>
                <div className="col-12 col-lg-4">
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src='../../../images/footer/mellat-bank.png' className='img-fluid' />
                        <img src='../../../images/footer/e-namad.png' className='img-fluid' />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default (Footer)