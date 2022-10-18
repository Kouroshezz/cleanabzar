import React, { useEffect, useRef } from 'react';
//------- library
import { Link, useLocation, useNavigate } from 'react-router-dom';
//----- icons
import { ArchiveAdd, CloseCircle, Heart, LoginCurve, ShoppingCart, User } from 'iconsax-react';
//----- components
import Layout from '../../Components/Layout';
import UserInfo from '../../Components/User/Info';
import OrderHistory from '../../Components/User/orders';
import ProductCard from '../../Components/Products/productCard';

function UserAccount() {

    let { pathname } = useLocation();
    let navigate = useNavigate();

    const form = [
        { label: '', placeHolder: '', inputType: '' }
    ]

    const userNav = [
        { link: 'profile', text: 'اطلاعات حساب کاربری', icon: <User size={20} className='ms-2' /> },
        { link: 'profile/orders', text: 'سفارش های من', icon: <ShoppingCart size={20} className='ms-2' /> },
        { link: 'profile/favourites', text: 'مورد علاقه های من', icon: <Heart size={20} className='ms-2' /> },
    ]

    const linkRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {

        // -- CUSTOM TAB ----- 

        //--- add active class to  first item on the list
        Object.values(linkRef.current.children)[0].classList.add('active');
        //--- map through ul children and  add click listener
        Object.values(linkRef.current.children).map(item =>
            item.addEventListener('click', () => {
                let link = item.getAttribute('data-link');
                //----- contents
                Object.values(contentRef.current.children).map(function (item) {
                    item.attributes[0].value === `${link}` && item.classList.remove('d-none');
                    item.attributes[0].value !== `${link}` && item.classList.add('d-none');
                })
                //------- nav active links
                Object.values(linkRef.current.childNodes).filter(function (item) {
                    item.attributes[0].value === `${link}` && item.classList.add('active')
                    item.attributes[0].value !== `${link}` && item.classList.remove('active')
                });
            })
        )
    }, []);

    return (
        <>
            <section className='container user mt-150'>
                <div className="d-flex flex-column flex-lg-row mt-5">
                    <div style={{ minWidth: '250px' }}>
                        <div className="user-nav p-4">
                            <div className='d-flex align-items-center data'>
                                <img src='../../../images/banner/blog.jpg' />
                                <div>
                                    <p className='mb-0 me-3 text-14'>محمد محمدی</p>
                                    <span className='d-block text-gray text-12 me-3'>09123456789</span>
                                </div>
                            </div>
                            <div className="my-4 border-b"></div>
                            {/* ------ SIDEBAR NAV ------- */}
                            <ul className='nav d-flex flex-column text-14' ref={linkRef}>
                                {userNav.map((item, index) =>
                                    <li key={index} data-link={`${item.link}`}
                                        className={`mb-4 rounded-2 p-4 d-block pointer ${pathname === item.link && 'active'}`}>
                                        <span className='p-4' to={`${item.link}`}>{item.icon}{item.text}</span>
                                    </li>
                                )}
                                <li className='mb-4 p-4 rounded-2 d-block pointer'> <span className="p-4"><LoginCurve className='ms-2' />خروج</span></li>
                            </ul>
                        </div>
                    </div>
                    {/* --------  CONTENTS --------- */}
                    <div className="flex-grow-1 mx-lg-4 p-3 p-md-4 p-lg-5 content mt-5 mt-lg-0" ref={contentRef}>
                        {/* --- profile --- */}
                        <UserInfo />
                        {/* --- order history ---- */}
                        <div data-content='profile/orders' className='d-none  animate__animated animate__fadeIn'>
                            <OrderHistory />
                        </div>
                        {/* --- favourite --- */}
                        <div data-content='profile/favourites' className='d-none row gy-5 animate__animated animate__fadeIn'>
                            {Array(6).fill(null).map((item, index) =>
                                <div className='col-6 col-md-4 col-lg-3' key={index}>
                                    <ProductCard id={index} key={index} image='../../../images/products/2464056-removebg-preview 1.png'
                                        name='اسپری فوم براق کننده و پاک کننده' price='2360000' offer={''} favourite={true} />
                                </div>
                            )}
                        </div>
                        {/* ----- */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(UserAccount)