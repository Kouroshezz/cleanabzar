import React, { useEffect, useState } from 'react'
// -------- library
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { ArrowForward, Heart, Message } from 'iconsax-react';
// --------- components
import Layout from '../../Components/Layout'

function SinglePost() {

    const [data, setData] = useState();
    const { id } = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit(data) {
        console.log(data)
    }

    useEffect(() => {
        // --- TODO
        // ----- fetch single post based on post id 
    }, [])

    return (
        <>
            <div className="container single-post mt-5 pt-4">
                <div className='row align-items-center'>
                    <div className="col-12 col-lg-5">
                        <figure>
                            <img src='../../../images/banner/blog.jpg' className='img-fluid rounded-5' />
                        </figure>
                    </div>
                    <div className="col-12 col-lg-7 pe-lg-5">
                        <h1 className='ps-lg-5 ms-lg-4 title pe-lg-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                        <p className='mb-0 mt-4 excert pe-lg-4'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                        </p>
                        <div className="d-flex align-items-center pe-lg-4 pt-5">
                            <span className='cat text-primary ms-5'> #نگهداری</span>
                            <span className='text-gray ms-5'>۱۴۰۰/۱۱/۲۵</span>
                            <span className='text-gray ms-5'><Message opacity={.5} />12</span>
                            <span className='text-gray'><Heart className='text-danger' opacity={.5} />25</span>
                        </div>
                    </div>
                    <div className='my-5'></div>
                </div>
                <div className='px-4 px-lg-5'>
                    <h3 className='mb-4 content-tilte'>مقدمه</h3>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط .
                    <div className="my-5"></div>
                    <h3 className='mb-4 content-tilte'>معایب</h3>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.

                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                </div>
                <div className='my-5 py-5'></div>
                <div className='d-flex align-items-center mb-5 pb-3 category-title'>
                    <h3 className="">
                        آخرین نظرات <span className='text-primary'>  کاربران </span>
                    </h3>
                    <div className='divider flex-grow-1 me-4 d-inline-flex align-items-center text-primary'>
                        <span className="border flex-grow-1 ms-3"></span>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 col-lg-4 offset-lg-2">
                        <h5 className='text-primary' style={{ fontSize: '1.8rem' }}>نظر شما</h5>
                        <form className='p-4 p-lg-5' onSubmit={handleSubmit(onSubmit)}>
                            <label className='d-block' htmlFor='name'>نام و نام خانوادگی</label>
                            <input id='name' {...register("username", { required: true })}
                                className='d-block w-100 rounded-4 py-3 px-3 px-lg-4' placeholder='کلین ابزار' />
                            {errors.username?.type === 'required' && <p className='text-danger text-12'>نام کاربری الزامیست</p>}
                            <label className='d-block mt-4' htmlFor='name'> ایمیل</label>
                            <input type='email' id='name' {...register("useremail", {
                                required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                            })}
                                className='d-block w-100 rounded-4 py-3 px-3 px-lg-4' placeholder='info@sample.com' />
                            {errors.username?.type === 'required' && <p className='text-danger text-12'> ایمیل الزامیست</p>}
                            <label htmlFor='comment' className='mt-4'>نظر خود را برای ما بنویسید</label>
                            <textarea id='comment' className='w-100' rows={5} cols={8}></textarea>
                            <button className='btn btn-primary mt-5 w-100 py-3 rounded-4' type='submit'>ارسال</button>
                        </form>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h5 className='text-primary' style={{ fontSize: '1.8rem' }}>نظرات</h5>
                        {/* ------------ comments ----------- */}
                        <div className="comments pt-5 mt-3">
                            <div className='d-flex align-items-center'>
                                <img src='../../../images/banner/blog.jpg' />
                                <div>
                                    <p className='mb-0 me-3'>نام کاربر</p>
                                    <span className='d-block text-gray me-3'>2 ساعت قبل</span>
                                </div>
                            </div>
                            <div className='me-lg-5'>
                                <p className='px-4 pt-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                                <div className='d-flex align-items-center me-4'>
                                    <span className="like-comment text-gray ms-5">
                                        <Heart /> 24
                                    </span>
                                    <span className="like-comment text-gray">
                                        <ArrowForward /> پاسخ
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='comments comments_reply pe-5 me-5 mt-5'>
                            <div className='d-flex align-items-center'>
                                <img src='../../../images/banner/blog.jpg' />
                                <div>
                                    <p className='mb-0 me-3'>نام کاربر</p>
                                    <span className='d-block text-gray me-3'>2 ساعت قبل</span>
                                </div>
                            </div>
                            <div className='me-lg-5'>
                                <p className='px-4 pt-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                                <div className='d-flex align-items-center me-4'>
                                    <span className="like-comment text-gray ms-5">
                                        <Heart /> 24
                                    </span>
                                    <span className="like-comment text-gray">
                                        <ArrowForward /> پاسخ
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------- */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(SinglePost)