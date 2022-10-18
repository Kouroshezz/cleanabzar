import React from 'react'
import { Link } from 'react-router-dom'

function SectionTitle({ titlePrimary, titleDark, link }) {
    return (
        <div className='d-flex align-items-center m-5 mb-4 pb-3 category-title'>
            <h3 className="">
                {titleDark} <span className='text-primary'> {titlePrimary} </span>
            </h3>
            {link ? <div className='divider flex-grow-1 me-4 d-inline-flex align-items-center text-primary'>
                <span className="border flex-grow-1 ms-3"></span>
                <Link to={`${link}`}>مشاهده همه</Link>
            </div> :
                <div className='divider flex-grow-1 me-4 d-inline-flex align-items-center text-primary'>
                    <span className="border flex-grow-1 ms-3"></span>
                </div>
            }

        </div>
    )
}

export default React.memo(SectionTitle)