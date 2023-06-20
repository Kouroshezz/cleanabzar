import React from 'react';

function BannerHomepage({ title, image, subTitle }) {
    return (
        <div className='homepage-banners position-relative rounded-5 my-5 my-lg-1'>
            <img src={image} className='img-fluid' />
            <div className="content d-flex flex-column justify-content-center w-50">
                <h4>{title}</h4>
                <p className='mt-5'>{subTitle}</p>
            </div>
        </div>
    )
}

export default React.memo(BannerHomepage)