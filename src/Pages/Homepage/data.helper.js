import { current } from "@reduxjs/toolkit";
import { NextArrow, PrevArrow } from ".";

export const settings = {
    speed: 800,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // infinite: true,
}

export const productCarousel = {
    dots: false,
    autoplay: true,
    draggable: true,
    swipeToSlide: true,
    accessibility: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
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
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

export const whyUs = [
    { title: 'تحویل فوری', desc: 'پس از خرید شما مراحل ارسال کالا آغاز میشود', icon: '../../../images/icons/delivery-truck-loading-exporting 1.svg' },
    { title: '7 روز ضمانت تعویض کالا', desc: 'پس از خرید شما مراحل ارسال کالا آغاز میشود', icon: '../../../images/icons/74818-time-ticking-red 1.svg' },
    { title: 'تحویل فوری', desc: 'پس از خرید شما مراحل ارسال کالا آغاز میشود', icon: '../../../images/icons/delivery-truck-loading-exporting 1.svg' },
    { title: 'ضمانت اصالت', desc: 'پس از خرید شما مراحل ارسال کالا آغاز میشود', icon: '../../../images/icons/102628-protection 1.svg' },
]

export const productCatergory = [
    { title: 'اسپری', image: '../../images/products/image-removebg-preview 1.png', bgcolor: '#e3f8ff' },
    { title: 'اسانس خوشبو کننده', image: '../../images/products/1.png', bgcolor: '#fefa9b' },
    { title: 'جاروبرقی', image: '../../images/products/2464056-removebg-preview 1.png', bgcolor: '#f6e3ff' },
    { title: ' شوینده', image: '../../images/products/2.png', bgcolor: '#e2fcaa' },
    { title: 'کارواش خانگی', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', bgcolor: '#ffeae3' },
    { title: 'جاروبرقی', image: '../../images/products/2464056-removebg-preview 1.png', bgcolor: '#f6e3ff' },
    { title: 'جاروبرقی', image: '../../images/products/120590321-removebg-preview 1.png', bgcolor: '#ffdbc7' },
    { title: 'کارواش خانگی', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', bgcolor: '#ffeae3' },
    { title: ' شوینده', image: '../../images/products/2.png', bgcolor: '#e2fcaa' },
    { title: 'جاروبرقی', image: '../../images/products/120590321-removebg-preview 1.png', bgcolor: '#ffdbc7' },
    { title: 'اسپری', image: '../../images/products/image-removebg-preview 1.png', bgcolor: '#e3f8ff' },
    { title: 'اسانس خوشبو کننده', image: '../../images/products/1.png', bgcolor: '#fefa9b' },
]


export const products = [
    { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 225000, id: 1, offer: false },
    { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 250000, id: 2, offer: false },
    { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 168000, id: 3, offer: false },
    { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 328000, id: 4, offer: { stat: false } },
    { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 123000, id: 5, offer: false },
    { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 899000, id: 6, offer: false },
]

export const spProducts = {
    specialOffer: [
        { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 225000, id: 1, offer: { stat: true, price: 295200, discount: 10 } },
        { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 250000, id: 2, offer: { stat: true, price: 295200, discount: 10 } },
        { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 168000, id: 3, offer: { stat: true, price: 295200, discount: 10 } },
        { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 328000, id: 4, offer: { stat: true, price: 295200, discount: 10 } },
        { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 123000, id: 5, offer: { stat: true, price: 295200, discount: 10 } },
        { title: 'کارواش خانگی k5 power', image: '../../images/products/کارواش-خانگی-K2-battery-set-removebg-preview 1.png', price: 899000, id: 6, offer: { stat: true, price: 295200, discount: 10 } },
    ]
}
// =================


// ------------ HOMEPAGE BRANS CAROUSEL 
export const brandsSliderSetting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 0,
    centerMode: true,
    autoplaySpeed: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
}