import React from 'react'
// ------ Library
import moment from 'jalali-moment';
// ----- ICONS
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Message } from 'iconsax-react';

function BlogCard({ image, title, comments, likes, date, id, category }) {

    const m = moment();
    m.locale('fa');
    let today = m.format('Y/M/D').slice(1, m.format('Y/M/D').length)

    return (
        <article className='blog-card' dir='rtl'>
            <figure className='d-block'>
                <img src={`${image}`} className='img-fluid' />
            </figure>
            <h3 className='mt-3 mb-5 pb-3'>{title}</h3>
            <div className='d-flex align-items-center justify-content-between'>
                {/* --- LIKE and COMMENT --- */}
                <div>
                    <span className='d-inline-flex align-items-center'>
                        <Heart width={20} height={20} className='ms-1' />
                        {likes}
                    </span>
                    <span className='d-inline-flex align-items-center mx-3'>
                        <Message width={20} height={20} className='ms-1' />
                        {comments}
                    </span>
                </div>
                {/* ------- DATE -------- */}
                <span>{today}</span>
            </div>
            {/* ------ ACTION and TAGS */}
            <div className='d-flex justify-content-between align-items-center mt-4'>
                <div className='tags'>
                    <span className=' text-primary'>#{category}</span>
                </div>
                <Link to={`/blog/${id}`}>
                    <span className='d-inline-flex align-items-center'>ادامه مطلب <ArrowLeft width={20} height={20} className='me-3' /></span>
                </Link>
            </div>

        </article>
    )
}

export default React.memo(BlogCard)