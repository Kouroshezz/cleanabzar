import React from 'react'
// --------library
import * as yup from 'yup';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
// ------- ICONS
import { brandsSliderSetting, productCatergory, products, settings, spProducts, whyUs } from './data.helper';
// ------- COMPONENTS 
import BannerHomepage from './banner';
import Layout from '../../Components/Layout';
import BlogCard from '../../Components/Blog/itemcard';
import ReviewCard from '../../Components/Reviews/review-card';
import CategoryBanner from '../../Components/Products/categoryBanner';
import ProductCarousel from '../../Components/Products/productCarousel';
import SectionsTitle from '../../Components/shared/sections-title';
import { NextArrowhp, PrevArrowhp } from '../../Components/shared/Homeslider-arrows';


function Homepage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    function onSubmit(data) {
        let { username, useremail } = data
        console.log(username, useremail)
    }

    const schema = yup.object({
        firstName: yup.string().required(),
        age: yup.number().positive().integer().required(),
    }).required();


    return (
        <>
            <div className='container mb-5 mt-150 animate__animated animate__fadeIn'>
                <div className="row gap-y-5">
                    <div className="col-12 col-md-8 landing">
                        {/* ----------- SLIDER --------- */}
                        <Slider {...settings} prevArrow={<PrevArrowhp />} nextArrow={<NextArrowhp />}
                            className='rounded-3 align-items-stretch'>
                            <img src='../../images/banner/Frame 39.png' />
                            <img src='../../images/banner/Frame 39.png' />
                        </Slider>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src='../../images/banner/Frame 41.png' className='img-fluid rounded-3 mt-5 mt-md-0' />
                    </div>
                </div>
                <div className='my-5 pyt-3'></div>
                {/* -------- SERVICES -------- */}
                <div className='row'>
                    {whyUs.map((item, index) =>
                        <div key={index} className="col-12 col-lg-3 mb-4 mb-lg-0">
                            <div className='whyUs_box d-flex p-4 align-items-center'>
                                <img src={`${item.icon}`} className='img-fluid' />
                                <div className='me-3'>
                                    <h4>{item.title}</h4>
                                    <p className='mb-0'>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* ------------  Category  ------------ */}
                <div className='my-5 py-3'></div>
                <SectionsTitle link={'/shop'} titleDark='دسته بندی' titlePrimary='محصولات' />
                <div className='row'>
                    {productCatergory.map((item, index) =>
                        <div className="col-6 col-md-3 col-lg-2" key={index}>
                            <div className='product-cat text-center p-3 mb-5' style={{ backgroundColor: `${item.bgcolor}` }}>
                                <figure className='text-center'>
                                    <img src={`${item.image}`} alt={`${item.title}`} className='img-fluid' />
                                </figure>
                                <h4 className='text-center mt-4 text-lg'>{item.title}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='container-fluid mt-5 pt-3'>
                <div className="" style={{ backgroundColor: '#ffeae3' }}>
                    <ProductCarousel title='کارواش خانگی ' subtitle='انواع کارواش خانگی ، نیمه صنعنی و الکتریکی '
                        category={'vacum'} products={products} banner='../../../images/products/tstst.png' />
                </div>
            </div>
            {/* ------- PRODUCT CATEGORY BANNER -------- */}
            <div className='container my-5 py-2'>
                <div className='row'>
                    <CategoryBanner bgcolor={'#FA6917'} title='تجهیزات رفاهی' ad={['خوشبو کننده هوا', 'دستگاه واکس زن برقی', 'سشوار و دست خشک کن']}
                        image='../../../images/products/Group-17382.png' />

                </div>
            </div>
            {/* ------- PRODUCT CAROUSEL -------- */}
            <div className='container-fluid my-5 py-3'>
                <div className="" style={{ backgroundColor: '#D0F3FF' }}>
                    <ProductCarousel title='کارواش خانگی ' subtitle='انواع کارواش خانگی ، نیمه صنعنی و الکتریکی ' products={products}
                        banner='../../../images/products/tstst.png' />
                </div>
            </div>
            {/* ------- PRODUCT CATEGORY BANNER -------- */}
            <div className='container my-5'>
                <div className=''>
                    <CategoryBanner bgcolor={'#807DFF'} title='تجهیزات رفاهی' ad={['خوشبو کننده هوا', 'دستگاه واکس زن برقی', 'سشوار و دست خشک کن']} image='../../../images/products/Group-17382.png' />

                </div>
            </div>
            {/* ------- PRODUCT CAROUSEL -------- */}
            <div className='container-fluid my-5 py-3'>
                {/*  style={{ backgroundColor: '#D0F3FF' }} */}
                <div className="" style={{ backgroundColor: '#D0F3FF' }} >
                    <ProductCarousel title='کارواش خانگی ' subtitle='انواع کارواش خانگی ، نیمه صنعنی و الکتریکی '
                        products={spProducts.specialOffer} />
                </div>
            </div>
            {/* --------------BANNERS----------- */}
            <div className="container my-5 pt-5">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <BannerHomepage title='انواع اسپری' subTitle='رنگ ، خودرو و صنعتی' image='../../../images/banner/Group-17385.png' />
                    </div>
                    <div className="col-12 col-lg-6">
                        <BannerHomepage title='انواع اسپری' subTitle='رنگ ، خودرو و صنعتی' image='../../../images/banner/Group-17386.png' />
                    </div>
                </div>
            </div>
            {/* -------- BLOG -----------*/}
            <div className="container">
                <SectionsTitle link={'/'} titleDark='جدیدترین' titlePrimary='بلاگ' />
                {/* ----- posts columns only on lg above */}
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <BlogCard title='صفر تا صد نحوه نگهداری جارو برقی ' likes={19} components={15}
                            image='../../../images/banner/blog.jpg' category={'تگ'} id='1' />
                    </div>
                </div>
            </div>
            <div className='my-5 py-4'></div>
            {/* ------- BRANDS ----- */}
            <div className="container">
                <SectionsTitle link={'/'} titleDark='محبوب ترین' titlePrimary='برند ها' />
            </div>
            <div className="container-fluid pt-2" style={{ backgroundColor: '#F4F4F4' }}>
                <div className="container">
                    <div className="row">
                        <div className="brands">
                            <Slider {...brandsSliderSetting} className='py-5' direction='left'>
                                <div className='px-3'><img src='../../../images/brands/lg.png' className='img-fluid' /></div>
                                <div className='px-3'><img src='../../../images/brands/Kenwood svg.png' className='img-fluid' /></div>
                                <div className='px-3'><img src='../../../images/brands/Marshalls.png' className='img-fluid' /></div>
                                <div className='px-3'><img src='../../../images/brands/Samsung Electronics.png' className='img-fluid' /></div>
                                <div className='px-3'><img src='../../../images/brands/Sony Electronics.png' className='img-fluid' /></div>
                                <div className='px-3'><img src='../../../images/brands/Kenwood svg.png' className='img-fluid' /></div>
                                <div className='px-3'><img src='../../../images/brands/Sony Electronics.png' className='img-fluid' /></div>
                                <div className='px-3'><img src='../../../images/brands/Marshalls.png' className='img-fluid' /></div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 pt-5"></div>
            {/* ------- REVIEW SECTION --------- */}
            <div className="container">

                <SectionsTitle link={''} titleDark='آخرین نظرات' titlePrimary='کاربران' />
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <ReviewCard />
                    </div>
                </div>
            </div>
            {/* --------- NEWSLETTER --------- */}
            <section className='container my-5 pt-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 mx-auto'>
                        <div className='d-flex align-items-center justify-content-center m-5 mb-4 pb-3 category-title'>
                            <h3 className="d-block text-center">
                                عضویت در <span className='text-primary'> خبرنامه </span>
                            </h3>
                        </div>

                        <form className='form-wrapper newsletter p-4 p-lg-5' onSubmit={handleSubmit(onSubmit)}>
                            <div className='d-flex flex-column flex-lg-row justify-content-between'>
                                <div className='mb-4 mb-lg-0'>
                                    <label className='d-block' htmlFor='name'>نام و نام خانوادگی</label>
                                    <input id='name' {...register("username", { required: true })}
                                        className='d-block w-100 rounded-4 py-3 px-3 px-lg-4' placeholder='کلین ابزار' />
                                    {errors.username?.type === 'required' && <p className='text-danger text-12'>نام کاربری الزامیست</p>}
                                </div>
                                <div>
                                    <label className='d-block' htmlFor='name'> ایمیل</label>
                                    <input type='email' id='name' {...register("useremail", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                                        className='d-block w-100 rounded-4 py-3 px-3 px-lg-4' placeholder='info@sample.com' />
                                    {errors.username?.type === 'required' && <p className='text-danger text-12'> ایمیل الزامیست</p>}
                                </div>
                            </div>
                            <button className='btn btn-primary mt-5 w-100 py-3 rounded-4' type='submit'>عضویت</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(Homepage)


