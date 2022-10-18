import React from 'react'
// ----- library
import Slider from 'react-slick';
// -------- components
import Layout from '../../Components/Layout';
import BlogCard from '../../Components/Blog/itemcard';
import { productCarousel } from '../Homepage/data.helper';
import SectionsTitle from '../../Components/shared/sections-title';

function Blogs() {

    return (
        <>
            <div className="container blog mt-5">
                {/* -------- RECENT POSTS GRID lg ABOVE -------*/}
                <div className="row d-none d-lg-flex">
                    <div className="col-12 col-lg-3">
                        <MainCard title='  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
                            image='../../../../../images/products/paint-spray.png'
                            category='تگ' date='3' />
                        <MainCard title='  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
                            image='../../../../../images/products/paint-spray.png' category='تگ' date='3' />
                    </div>

                    <div className="col-12 col-lg-6">
                        <MainCard title='  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
                            image='../../../../../images/banner/blog.jpg' category='تگ' date='3' />
                    </div>

                    <div className="col-12 col-lg-3">
                        <MainCard title='  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
                            image='../../../../../images/products/paint-spray.png' category='تگ' date='3' />
                        <MainCard title='  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
                            image='../../../../../images/products/paint-spray.png' category='تگ' date='3' />
                    </div>
                </div>
                {/* ---------- recent post carousel -------- */}
                <div className="d-block d-md-none">
                    <Slider {...recentPosts} centerMode={true} centerPadding={25} draggable={true} direction='rtl'>
                        <MainCard title='  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
                            image='../../../../../images/banner/blog.jpg' category='تگ' date='3' />
                        <MainCard title='  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
                            image='../../../../../images/products/paint-spray.png' category='تگ' date='3' />
                        <MainCard title='  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
                            image='../../../../../images/products/paint-spray.png' category='تگ' date='3' />
                    </Slider>
                </div>
                {/* ---------------------------------------- */}
                <SectionsTitle link={'/'} titleDark='جدیدترین' titlePrimary='بلاگ' />

                <Slider {...carousel} centerMode={true} centerPadding={25} draggable={true}>
                    {Array(7).fill(null).map((item, index) =>
                        <BlogCard key={index} title='صفر تا صد نحوه نگهداری جارو برقی ' likes={19} comments={15}
                            image='../../../images/banner/blog.jpg' category={'تگ'} id='1' />
                    )}
                </Slider>
            </div>
        </>
    )
}

export default React.memo(Blogs)




const MainCard = ({ image, title, date, category, style }) => {
    return (
        <article className="main-card mb-4 mx-4 mx-lg-0" style={style}>
            <figure >
                <img src={`${image}`} />
                <div className='detail d-flex align-items-center justify-content-between px-4' dir='rtl'>
                    <h5 className='text-light' style={{ fontSize: '1.4rem' }}>
                        {title}
                    </h5>
                    <div className='w-50 text-start'>
                        <span className='d-block' style={{ fontSize: '1.1rem' }}> {date} دقیقه قبل</span>
                        <span className='d-block text-primary' style={{ fontSize: '1.2rem' }}>#{category}</span>
                    </div>
                </div>
            </figure>

        </article>
    )
}

const recentPosts = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    cssEase: "ease-in",
}

const carousel = {
    rtl: true,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    cssEase: "ease-in",
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}