import React from 'react'
import Layout from '../../Components/Layout'
import SectionsTitle from '../../Components/shared/sections-title'

function Aboutus() {
    return (
        <>
            <div className='container mt-150 aboutus animate__animated animate__fadeIn'>
                <div className=' content-box pt-3 pb-5'>
                    <SectionsTitle link={''} titleDark='درباره' titlePrimary='ما' />
                    <div className="d-none d-lg-block col-1"></div>
                    <div className="col-12 col-lg-10 mx-auto mt-5">
                        <div className="col-10 col-lg-8 mx-auto">
                            <figure>
                                <img src='../../../images/bg/about-us-min.png' className='img-fluid rounded-5' />
                            </figure>
                        </div>
                        <p className='mt-5'>
                            کلین ابزار نخستین فروشگاه الکترونیک فارسی زبان است که فعالیت آن به صورت تخصصی بر فروش دستگاه‌های مکانیزه و ابزارهای دستی نظافت و شستشو و مواد شوینده قابل استفاده در کاربردهای خانگی متمرکز شده است. کلین ابزار به پشتوانه سالها تجربه و تخصص در حوزه نظافت خانگی و صنعتی و در پاسخ به تقاضای روزافزون مصرف کنندگان برای شیوه‌های جدید خرید تجهیزات و محصولات نظافت خانگی فعالیت خود را آغاز نموده است. تمامی محصولات ارائه شده در فروشگاه اینترنتی کلین ابزار توسط برترین و شناخته‌شده ترین تولیدکنندگان تجهیزات نظافتی در سطح جهان و مطابق با سختگیرانه‌ترین استانداردهای کیفی و ایمنی تولید شده اند. کیفیت بالای محصولات ارگونومیک و کاربرپسند ارائه شده توسط کلین ابزار بالاترین سطح پاکیزگی و بهداشت را برای خانه یا محل کار مشتریان فراهم می‌نماید.
                            <br />
                            کلین ابزار تلاش می کند تا با ارائه اطلاعات کامل و صادقانه در خصوص هر محصول و پرهیز از تبلیغات غیرواقعی، امکان مقایسه محصولات عرضه شده توسط برندهای مختلف را برای مشتریان فراهم نماید تا مشتریان بتوانند با اطمینان خاطر کامل کالایی متناسب با نیاز و بودجه مورد نظر خود را به ساده‌ترین شیوه خریداری نموده و در کوتاه‌ترین زمان ممکن آن را دریافت نمایند.
                        </p>
                    </div>
                    <div className="d-none d-lg-block col-1"></div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Aboutus)