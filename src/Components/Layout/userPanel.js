import React from 'react';
//--- library
import { Link, NavLink, useLocation } from 'react-router-dom';
//--- components
import Layout from '.';
//--- icons
import { Heart, LoginCurve, ShoppingCart, User } from 'iconsax-react';

function UserpanelLayout({ children }) {

    let { pathname } = useLocation();

    const userNav = [
        { link: '/profile', text: 'اطلاعات حساب کاربری ', icon: <User size={20} className='ms-2' /> },
        { link: '/profile/orders', text: ' سفارش های من ', icon: <ShoppingCart className='ms-2' /> },
        { link: '/profile/favourites', text: 'مورد علاقه های من', icon: <Heart className='ms-2' /> },
    ]

    return (
        <>
            <div className='container user mt-150'>
                <div className="d-flex flex-column flex-lg-row">
                    <div className="">
                        <div className="user-nav p-4">
                            <div className='d-flex align-items-center data'>
                                <img src='../../../images/banner/blog.jpg' />
                                <div>
                                    <p className='mb-0 me-3 text-14'>محمد محمدی</p>
                                    <span className='d-block text-gray text-12 me-3'>09123456789</span>
                                </div>
                            </div>
                            <div className="my-4 border-b"></div>
                            <ul className='nav d-flex flex-column text-14'>
                                {userNav.map((item, index) =>
                                    <li className={`mb-4 rounded-2 p-4 d-block pointer ${pathname === item.link && 'active'}`} key={index} >
                                        <Link className='p-4' to={`${item.link}`}>{item.icon}{item.text}</Link>
                                    </li>
                                )}
                                <li className='mb-4 p-4 rounded-2 d-block pointer'> <span className="p-4"><LoginCurve className='ms-2' /> خروج </span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-grow-1 p-4 mx-lg-4 content mt-5 mt-lg-0">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(UserpanelLayout)