import React, { useState } from 'react';
// ----
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
// ----
import Modal from '../../Modal';
import { NextArrow, PrevArrow } from '../../shared/carousel-arrows';

function ProductGallery() {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    // ------- Lightbox
    const [lightbox, setLightbox] = useState('');

    const imgWidth = 376;
    const lensWidth = 100;
    const imgHeight = 416;
    const lensHeight = 100;
    const previewLensHeight = 600;

    return (
        <div className="product-gallery p-2 p-lg-4">
            {/* ------------- */}
            <Slider {...productGallery} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                <InnerImageZoom width={300} height={300} className='text-center' zoomScale={1.5} src='../../../images/products/2464056-removebg-preview 1.png' zoomSrc={`${lightbox}`} />
                <InnerImageZoom width={300} height={300} className='text-center' zoomScale={1.5} src='../../../images/products/112943678-removebg-preview 1.png' zoomSrc={`${lightbox}`} />
                <InnerImageZoom width={300} height={300} className='text-center' zoomScale={1.5} src='../../../images/products/2464056-removebg-preview 1.png' zoomSrc={`${lightbox}`} />
                <InnerImageZoom width={300} height={300} className='text-center' zoomScale={1.5} src='../../../images/products/112943678-removebg-preview 1.png' zoomSrc={`${lightbox}`} />
            </Slider>
            <Slider asNavFor={nav1} focusOnSelect={true} ref={(slider2) => setNav2(slider2)} className='thumbnails' slidesToShow={4}
                swipeToSlide={true} infinite={false}>
                <div className='d-inline-flex justify-content-center single'>
                    <img className='img-fluid' src='../../../images/products/2464056-removebg-preview 1.png' />
                </div>
                <div className='d-inline-flex justify-content-center single'>
                    <img className='img-fluid' src='../../../images/products/112943678-removebg-preview 1.png' />
                </div>
                <div className='d-inline-flex justify-content-center single '>
                    <img className='img-fluid' src='../../../images/products/2464056-removebg-preview 1.png' />
                </div>
                <div className='d-inline-flex justify-content-center single'>
                    <img className='img-fluid' src='../../../images/products/112943678-removebg-preview 1.png' />
                </div>
            </Slider>
            <div className="d-flex justify-content-between thumbnails">

            </div>
            {/* ------------ */}
        </div>
    )
}

export default React.memo(ProductGallery)



const productGallery = {
    responsive: [
        {
            breakpoint: 900,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                NextArrow: <NextArrow />,
                PrevArrow: <PrevArrow />
            }
        }
    ]
}