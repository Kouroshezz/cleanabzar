import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
// -------------- LIBRARY
import { useForm } from 'react-hook-form';
import { Add, ArrowForward, Heart, Minus, ShoppingCart } from 'iconsax-react';
// -------------- COMPONENTS
import Layout from '../../Components/Layout';
import Footer from '../../Components/Layout/footer';
import Header from '../../Components/Layout/header';
import SectionsTitle from '../../Components/shared/sections-title';
import ProductGallery from '../../Components/Products/Product-Gallery';
import { abortApi, api } from '../../Utils/apiFetch';
import axios from 'axios';

function SingleProduct() {

    let colors = [
        { color: '#EA3535', title: 'قرمز' },
        { color: '#010040', title: 'آبی تیره' },
        { color: '#f9f9f9', title: 'سفید' },
        { color: '#6A7810', title: 'زیتونی' },
        { color: '#0090BD', title: 'آبی روشن' },
    ]

    let attributes = [{ attribute: 'ویژگی', value: 'ویژگی' },
    { attribute: 'ویژگی', value: 'ویژگی' }, { attribute: 'ویژگی', value: 'ویژگی' },
    { attribute: 'ویژگی', value: 'ویژگی' }, { attribute: 'ویژگی', value: 'ویژگی' }
    ]

    let specs = [{ key: 'ابعاد', value: '۴۸۰x۳۲۰x۲۸۰ سانتی‌متر' },
    { key: 'مدل طراحی', value: 'سیم جمع کن خودکا' }, { key: 'تعداد چرخ', value: 'سه عدد' }]

    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit(data) {
        console.log(data)
    }

    const commentRef = useRef(null);
    const actionBoxRef = useRef(null);
    const [attr, setAttr] = useState({ color: '', quantity: 1, colorHex: '' })
    //const [data, setData] = useState();

    useEffect(() => {
        let data = api('GET', 'https://jsonplaceholder.typicode.com/todos/1');
        console.log(data)
        // axios('https://jsonplaceholder.typicode.com/todos/1', {
        //     method: 'GET'
        // })
        //     .then(data => console.log(data.data))
    }, [])


    useLayoutEffect(() => {

        const header = document.querySelector('header');
        const detailsBar = document.querySelector('.details');
        const secTitles = document.querySelectorAll('.section-link');
        const detailsBarTop = document.querySelector('.details').offsetTop;

        //---------- Scroll Actions
        window.scrollTo(0, 0);
        const commentSecOffset = commentRef.current.offsetTop - 120;
        const actionBoxOffset = actionBoxRef.current.offsetTop;

        const onWindowScrollFunctions = () => {
            if (window.pageYOffset > actionBoxOffset && window.pageYOffset < commentSecOffset) {
                actionBoxRef.current.style.cssText = `position:fixed;top:150px;width:${actionBoxRef.current.offsetWidth}px`;
            }
            else if (window.pageYOffset < actionBoxOffset) {
                actionBoxRef.current.style.cssText = `position:relative;`
            }
            else if (window.pageYOffset > commentSecOffset) {
                actionBoxRef.current.style.cssText = `position:absolute;top:${Number(commentSecOffset)}px;
                width:${actionBoxRef.current.offsetWidth}px`;
            }
            //   spec active on scroll to relevant section
            secTitles.forEach(current => {
                const sectionHeight = current.offsetHeight + 20;
                const sectionTop = current.offsetTop;
                let sectionId = current.getAttribute("id");
                if (
                    window.scrollY > sectionTop &&
                    window.scrollY <= sectionTop + sectionHeight
                ) {
                    document.querySelector(`.details li a[href*="${sectionId}"]`).classList.add("active-spec");
                } else {
                    document.querySelector(`.details li a[href*="${sectionId}"]`).classList.remove("active-spec");
                }
            });
        }

        window.addEventListener('scroll', onWindowScrollFunctions)
        //--------------------------------------
        return () => {
            window.removeEventListener('scroll', onWindowScrollFunctions)
        }
    }, [])

    // ----- SELECT PRODUCT COLOR ------
    function setColor(e, colorCode) {
        let Productcolor = e.target.attributes.value.textContent;
        setAttr({ ...attr, color: Productcolor, colorHex: colorCode })
    }
    // ----- SELECT PRODUCT QUANTITY ------ 
    function addQuantity(action) {
        action === 'plus' && setAttr({ ...attr, quantity: attr.quantity + 1 });
        if (action === 'minus' && attr.quantity > 1) {
            setAttr({ ...attr, quantity: attr.quantity - 1 });
        }
    }

    return (
        <>
            <div className="container px-5 single-product mb-5 mt-150 animate__animated animate__fadeIn">
                <div className="row align-items-lg-start">

                    {/* ----------------- */}
                    <div className="col-12 col-lg-9 content-box pb-4 d-flex flex-column flex-lg-row align-items-center">
                        <div className="col-12 col-lg-5 offset-lg-1">
                            <span className='isax isax-security-user'></span>
                            {/* ----------- Product Gallery-------- */}
                            <ProductGallery />
                            {/* --------------------------------- */}
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="summary mt-4 mt-lg-0">
                                <h1>جارو برقی بوش مدل BGL8PRO5IR</h1>
                                {/* ------- */}
                                <h3 className='my-lg-4 mb-3'>ویژگی ها</h3>
                                <ul className='attributes'>
                                    {attributes.map((item, index) =>
                                        <li className='d-flex align-items-center my-3' key={index}>
                                            <span className='text-gray ms-4'>{item.attribute} : </span>
                                            <span>{item.value}</span>
                                        </li>
                                    )}
                                </ul>
                                <div className="border-b my-4 w-50"></div>
                                {/* ------ PRODUCTS'S COLORS ------- */}
                                <div className='d-flex align-items-center'>
                                    <span className='ms-4 colors'>رنگ ها : </span>
                                    <ul className='d-flex align-items-center'>
                                        {colors.map((item, index) =>
                                            <li key={index} className='d-block mx-3  position-relative'>
                                                <span className={`color ${item.title === attr.color && 'selected'}`} value={item.title} onClick={(e) => setColor(e, item.color)}
                                                    style={{
                                                        backgroundColor: `${item.color}`,
                                                        border: `${item.title.includes('سفید') && '1px solid #101010'}`
                                                    }}>
                                                    <span className='color-title'>{item.title}</span>
                                                </span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                {/* -------- QUANTITY ------ */}
                                <div className='d-flex align-items-center mt-5'>
                                    <span className='ms-4 colors'>تعداد : </span>
                                    <div className="inline-flex aling-items-center">
                                        <span className="quantity-btn increment" onClick={() => addQuantity('plus')}><Add size='16' /></span>
                                        <span className='mx-3'>{attr.quantity}</span>
                                        <span className="quantity-btn decrement" onClick={() => addQuantity('minus')}><Minus size='16' /></span>
                                    </div>
                                </div>
                                {/* ------------------------ */}
                            </div>
                        </div>
                    </div>
                    {/* ----------------- */}

                    <div className="d-none d-lg-block col-lg-3">
                        <div className="action-box p-4 text-center" ref={actionBoxRef}>
                            <p>گارانتی ۲۴ ماهه ابراهیم</p>
                            {/* <p className='d-flex justify-content-between py-3'>
                                            <span className='text-end'>افزایش قیمت نسبت به هفته گذشته</span>
                                            <span className='price-change py-2 px-3'>9%</span>
                             </p> */}
                            <p className='d-flex justify-content-between py-3'>
                                <span className='text-end'>رنگ انتخاب شده :</span>
                                <span className='text-14' style={{ color: attr.color === 'سفید' ? '#121212' : attr.colorHex || '#121212' }}>
                                    {attr.color || 'انتخاب کنید'}
                                </span>
                            </p>
                            <p className='d-flex justify-content-between mt-3 py-3'>
                                <span>تعداد انتخاب شده</span>
                                <span>
                                    <span className='py-2 px-2 text-16'>{attr.quantity}</span>
                                    <span className='py-2 text-12'>عدد</span>
                                </span>
                            </p>
                            <p className='d-flex justify-content-between py-3'>
                                <span>قیمت محصول : </span>
                                <span>
                                    <strong className='text-16 ms-3'>{Number(380000).toLocaleString()}</strong>
                                    <span>تومان</span>
                                </span>
                            </p>
                            <button className='btn btn-primary text-12 w-100 py-3 mt-5' disabled={!attr.color ? true : false}>
                                <span> <ShoppingCart width={15} height={15} className='ms-3' /></span>
                                <span>افزودن به سبد خرید </span>
                            </button>
                        </div>
                    </div>

                </div>
                {/* ------------ */}
                <div className="row my-5 pt-5">
                    <div className="col-12 col-lg-9 offset-lg-3 content-box px-4">

                        <ul className="details d-flex">
                            <li className='mx-2 mx-lg-4'><a className='pb-2' href='#intro'>معرفی محصول</a></li>
                            <li className='mx-2 mx-lg-4'><a className='pb-2' href="#tech">برسی تخصصی </a></li>
                            <li className='mx-2 mx-lg-4'><a className='pb-2' href='#spec'>مشخصات</a></li>
                        </ul>

                        <div className='section-link pt-3' id='intro'>

                            <SectionsTitle link={''} titleDark='معرفی' titlePrimary='محصول' />
                            <p>محصول
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                            </p>
                        </div>

                        <div className='section-link' id='tech'>
                            <SectionsTitle link={''} titleDark='بررسی' titlePrimary='تخصصی' />

                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.</p>
                            <div className="my-5 d-flex">
                                {Array(4).fill(null).map((item, index) =>
                                    <figure className='mx-3' key={index}>
                                        <img className='img-fluid' src='../../../images/products/112943678-removebg-preview 1.png' />
                                    </figure>
                                )}
                            </div>
                        </div>

                        <div className='section-link' id='spec' ref={commentRef}>
                            <SectionsTitle link={''} titleDark='مشخصات' titlePrimary='محصول' />
                            <div className="p-4">
                                {specs.map((item, index) =>
                                    <div className='d-flex text-14 py-2 spec' key={index}>
                                        <span className='text-gray py-2'>{item.key}</span>
                                        <span className='flex-grow-1 py-2 me-5'>{item.value}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------- COMMENTS --------- */}
                <div className="row content-box pt-4">
                    <div className="col-12">
                        <SectionsTitle link={''} titleDark='نظر' titlePrimary='کاربران' />

                    </div>
                    {/* -- form -- */}
                    <div className="col-12 col-lg-4 offset-lg-2 order-2 order-lg-1 mt-5 mt-lg-0">
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
                    {/* -- comments -- */}
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
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
                        {/* --reply-- */}
                        <div className='comments pe-5 me-5 mt-5'>
                            <div className='d-flex align-items-center'>
                                <img src='../../../images/banner/blog.jpg' />
                                <div>
                                    <p className='mb-0 me-3 text-14'>نام کاربر</p>
                                    <span className='d-block text-gray me-3'>2 ساعت قبل</span>
                                </div>
                            </div>
                            <div className='me-lg-5'>
                                <p className='px-4 pt-4 text-14'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
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
                    </div>
                </div>
                {/* -------- */}
            </div>
            {/* ------ ADD TO CART MOBILE ---- */}
            <div className='d-flex d-lg-none mobile-addtocart align-items-center pt-3'>
                <a className='btn btn-primary text-14 w-100 py-3 '>
                    <span> <ShoppingCart width={15} height={15} className='ms-3' /></span>
                    <span>افزودن به سبد خرید </span>
                </a>
                <div className=' d-flex flex-column'>
                    <span className='text-12'>قیمت</span>
                    <strong className='px-3' dir='ltr'>225000تومان</strong>
                </div>
            </div>
        </>
    )
}

export default React.memo(SingleProduct)