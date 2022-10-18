import React from 'react'

function CategoryBanner({ bgcolor, title, ad, image }) {


    return (
        <div className='rounded-4 category-banner' style={{ backgroundColor: `${bgcolor}` }}>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6 offset-lg-2'>
                    <h4 className='mb-lg-4 text-center'>{title}</h4>
                    <div className='d-flex flex-wrap justify-content-center my-4 my-lg-5'>
                        {ad.map((item, index) =>
                            <li className='mx-2' key={index}>
                                <img src='../../../images/Icons/Star.svg' alt='star shape' /><span>{item}</span>
                            </li>
                        )}
                    </div>

                    <div className='text-center'>
                        <a className="bg-white text-dark rounded-3 px-5 py-3 display-5 ">خرید</a>
                    </div>
                </div>
                <div className='col-12  col-lg-4 category-banner_brush'>
                    <figure>
                        <img src={image} className='img-fluid' alt='' />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CategoryBanner)