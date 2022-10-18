import React from 'react'
import Editinfo from './editinfo';

function UserInfo() {
    return (
        <div data-content='profile' className='row gy-5 animate__animated animate__fadeIn'>
            <div className="col-12 col-lg-4">
                <Editinfo fieldType='text' label='نام' placeHolder='کلین ابزار' />
            </div>
            <div className="col-12 col-lg-4">
                <Editinfo fieldType='text' label='نام خانوادگی' placeHolder='نام خانوادگی' />
            </div>
            <div className="col-12 col-lg-4">
                <Editinfo fieldType='number' label='شماره تلفن' placeHolder='09121234567' />
            </div>
            <div className="col-12 col-lg-4">
                <Editinfo fieldType='email' label='ایمیل' placeHolder='test@email.com' />
            </div>
            <div className="col-12 col-lg-4">
                <Editinfo fieldType='text' label='شماره ملی' placeHolder='005659870' />
            </div>
        </div>
    )
}

export default React.memo(UserInfo)