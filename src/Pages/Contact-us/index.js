import { CallCalling, Headphone, Location, Message } from 'iconsax-react';
import React from 'react';
import Layout from '../../Components/Layout';
import Footer from '../../Components/Layout/footer';
import Header from '../../Components/Layout/header';
import SectionsTitle from '../../Components/shared/sections-title';

function Contactus() {

    const supports = [{ title: 'پشتیبانی', supportname: 'پشتیبان 1', phone: '۰۹۱۰۴۶۰۸۰۰۰' },
    { title: 'مرجوعی', supportname: 'پشتیبان 2', phone: '۰۹۱۰۴۶۰۸۰۰۰' },
    { title: 'انتقادات', supportname: 'پشتیبان 3', phone: '۰۹۱۰۴۶۰۸۰۰۰' }]

    return (
        <>
            <div className='container mt-150 mb-5 contact-us animate__animated animate__fadeIn'>
                <SectionsTitle link={''} titleDark='تماس با' titlePrimary='ما' />
                {/* ------ */}
                <div className="row mt-5 pt-5">
                    <div className="d-none d-lg-block col-1"></div>
                    <div className="col-12 col-lg-5">
                        <div className="box p-5 ">
                            <Heading title='پشتیبانی' icon={<Headphone size={25} />} subtitle='۷ روز هفته، ۲۴ ساعت روز، پاسخگوی تماس های شما هستیم.' />
                            <div className="my-5"></div>
                            {supports.map((item, index) =>
                                <div key={index} className='supports py-4 d-flex align-items-center justify-content-between'>
                                    <span className='text-gray'>{item.title}</span>
                                    <span className=''>{item.supportname}</span>
                                    <a href={`tel:${item.phone}`}><span className='text-dark'>{item.phone}</span><CallCalling variant="Bold" size={18} className='text-primary' /></a>
                                </div>
                            )}
                            <div className="my-5"></div>
                            <Heading title='آدرس' icon={<Location size={25} />} subtitle='تهران، خیابان دماوند ، خیابان ولیعصر (عج)، کوچه دانش کیان ، طبقه 3' />
                            {/* --- map --- */}
                            <div className="text-center">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.8696638447416!2d51.40498882923827!3d35.71444499876166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5882d30f14391808!2zMzXCsDQyJzUyLjAiTiA1McKwMjQnMTkuOSJF!5e0!3m2!1sen!2s!4v1664426168683!5m2!1sen!2s" width="500" height="210" style={{ border: 0, borderRadius: '25px', maxWidth: '100%' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5">
                        <div className="box p-5 ">
                            <Heading title=' ارسال پیام ' icon={<Message size={25} />} subtitle='با ما در تماس باشید.' />
                            <div className="my-5"></div>
                            <div className="form-wrapper">
                                <form>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor='usernmae'>نام و نام خانوادگی</label>
                                            <input id='username' className='w-100' />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor='userphone'> شماره تلفن</label>
                                            <input id='userphone' className='w-100' />
                                        </div>
                                    </div>
                                    <div className="row my-5">
                                        <label htmlFor='subject'>موضوع</label>
                                        <input id='subject' />
                                    </div>
                                    <div className="row">
                                        <label htmlFor='message'>متن پیام</label>
                                        <textarea name="" id="message" cols="30" rows="5" maxLength={255} placeholder='متن پیام'></textarea>
                                    </div>
                                    <button className='btn btn-primary w-100 py-3 mt-5' type='submit'>ارسال</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-1"></div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Contactus)


const Heading = ({ title, icon, subtitle }) => {
    return (
        <>
            <h2 className='text-primary mb-4' > {icon}  {title} </h2>
            <p className='text-gray text-14'>{subtitle}</p>
        </>
    )
}