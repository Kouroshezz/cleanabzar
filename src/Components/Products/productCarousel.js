import React, { useEffect } from 'react';
//  library
import Slider from 'react-slick';
import Countdown from 'react-countdown';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
//  slick setting
import { renderer } from '../../Utils/countdown.helper';
// Components 
import ProductCard from './productCard';
import { productCarousel } from '../../Pages/Homepage/data.helper';
import { NextArrow, PrevArrow } from '../shared/carousel-arrows';

function ProductCarousel({ title, subtitle, products, category, banner }) {

    useEffect(() => {
        if (window.matchMedia('(max-width: 600px)')) {

            // console.log(document.querySelector('.product_carousel .slick-track').lastChild)
            // let cloneLast = document.querySelector('.product_carousel .slick-track').lastChild.cloneNode(true);
            //  document.querySelector('.product_carousel .slick-track').appendChild(cloneLast)
            // console.log(products.length)
        }
    }, [])

    return (
        <div className="container py-4">
            <div className="row">
                <div className='d-flex justify-content-between'>
                    <h3 className='me-lg-5'>{title}</h3>
                    <Link to={`/shop/${category}`}>مشاهده همه</Link>
                </div>
                <div className='row product_carousel align-items-center'>
                    <div className='col-5 col-md-3 d-none d-lg-block'>
                        {Object.keys(products[0].offer).length > 0 ?
                            <>
                                <h3 className='text-center'>فروش فوق العاده</h3>
                                <p className='my-4 text-center'>لورم ایپسوم متن ساختگی با تولید سادگی</p>
                                <strong className='product_carousel_offer-banner text-danger text-center d-block'>تخفیف ویژه</strong>
                                <h3 className='text-center mt-4'>
                                    <Countdown date={Date.now() + 524000000} autoStart={true} renderer={renderer} />
                                </h3>
                            </>
                            : <>
                                {/* <h3 className='d-none d-lg-block text-center'>{title}</h3> */}
                                <span className='d-block text-end text-lg-center'>{subtitle}</span>
                                <figure className='text-center'>
                                    <img src={banner} className='img-fluid' />
                                </figure>
                            </>}

                    </div>
                    <div className='col-12 col-md-9 px-0'>
                        {/* <a className='d-none d-lg-block text-start'>مشاهده همه</a> */}
                        <Slider {...productCarousel}
                            centerMode={true} centerPadding='20px'
                            rtl={false}
                            nextArrow={<NextArrow />} prevArrow={<PrevArrow />}
                            className='py-2'>
                            {products.map((item, index) =>
                                <ProductCard key={index} offer={item.offer} name={item.title} image={item.image} price={item.price} id={item.id} />)}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ProductCarousel)