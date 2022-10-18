import React from 'react'
// ------ ICONS
import { Dislike, Like1 } from 'iconsax-react';

function ReviewCard({ uimage, uname, like, dislike, comment }) {
    return (
        <article className='review-card '>
            <div className='d-flex justify-content-between align-items-center border-b pb-4 mb-4'>
                {/* ------user image and name */}
                <div className='d-flex align-items-center'>
                    <img src='../../../images/banner/blog.jpg' />
                    <p className='mb-0 me-3'>نام کاربر</p>
                </div>
                <div className='d-flex align-items-center opacity-75'>
                    <span className='d-flex flex-column text-gray px-2 align-items-center'>
                        <Like1 />
                        15
                    </span>
                    <span className='d-flex flex-column text-gray px-2 align-items-center'>
                        <Dislike />
                        5
                    </span>
                </div>
            </div>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
        </article>
    )
}

export default React.memo(ReviewCard)