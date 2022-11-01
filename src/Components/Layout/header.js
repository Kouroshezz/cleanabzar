import React, { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';

// ------ library
import { Link, NavLink, useLocation } from "react-router-dom";
import { Add, ArrowDown2, ArrowLeft2, ArrowRight2, Call, HambergerMenu, Profile, SearchNormal1, ShoppingCart, User } from 'iconsax-react';
// ------ ICONS
import { type } from '@testing-library/user-event/dist/type';

function Header() {

    const { pathname } = useLocation();

    const header = useRef(null);
    const headerbottom = useRef(null);
    const mobileSideMenu = useRef(null);
    const [searchParam, setSearchParam] = useState('');

    function showSideMenu() {
        mobileSideMenu.current.classList.add('show_mobile-nav')
    }

    function hideSideMenu() {
        mobileSideMenu.current.classList.remove('show_mobile-nav')
    }

    let getsearchParam;
    const search = useCallback((e) => {
        clearTimeout(getsearchParam);
        getsearchParam = setTimeout(() => {
            let val = e.target.value;
            val.trim().length > 4 && console.log(val.trim().replace(/\s/g, '%'))
        }, 600)
    }, [])

    // ---- menu items
    const menuItems = [
        { title: 'محصولات', link: '/shop' },
        {
            title: 'تجهیزات نظافتی', submenu: [
                { title: 'جاروبرقی', submenu2: [{ title: 'جارو برقی خانگی', link: '' }, { title: 'جاروبرقی صنعتی', link: '' }] },
                { title: 'زمین شوی', submenu2: [{ title: 'زمین شوی خانگی', link: '' }, { title: 'زمین شوی صنعتی', link: '' }] }
            ]
        },
        { title: 'تجهیزات رفاهی', submenu: [{ title: 'ابزار سلامت', link: '' }, { title: ' خوشبو کننده خانگی', link: '' }, { title: ' خوشبو کننده صنعتی', link: '' }] },
        { title: 'قطعات یدکی', submenu: [{ title: 'قطعات یدکی اسکرابر', link: '' }, { title: ' خوشبو کننده خانگی', link: '' }, { title: ' خوشبو کننده صنعتی', link: '' }] },
        { title: 'تماس با ما', link: '/contact-us' },
        { title: 'درباره ما', link: '/about-us' }
    ]

    // ---- darken the body when megamenu opens

    function openMegamenu() {
        header?.current?.classList.add('active-after')
    }
    function closeMegamenu() {
        header?.current?.classList.remove('active-after')
    }
    // ------

    useLayoutEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY < 200) {
                header.current.style.cssText = 'max-height:auto';
                headerbottom?.current?.classList?.remove('hide');
            }
            if (window.scrollY > 200) {
                header.current.style.cssText = 'height:70px;max-height:70px';
                headerbottom?.current?.classList?.add('hide');
            }
        });

        document.documentElement?.offsetWidth < 600 && hideSideMenu();
        closeMegamenu();
    }, [pathname])

    return (
        <>
            <header className='container-fluid pt-3 d-flex flex-column px-4'>
                {/* -------- HEADER IN LG ABOVE ----- */}
                <div className='d-none d-lg-block' ref={header}>
                    <div className="d-flex align-items-center px-3" style={{ position: 'relative', zIndex: '1', background: '#ffffff' }}>
                        <Link to='/' className='ms-5'>
                            <img src='../../../LOGO.svg' />
                        </Link>
                        <form className='ms-auto flex-grow-1 position-relative'>
                            <div className='input_wrapper d-flex align-items-center'>
                                <span className='icon text-gray p-3'> <SearchNormal1 /></span>
                                <input type='text' placeholder='جستجو...' value={searchParam} className='p-3'
                                    tabIndex={1} onChange={(e) => { setSearchParam(e.target.value); search(e) }} />
                                {searchParam && <div>
                                    <img className='loading' src='../../../images/Icons/loading.png' />
                                    <span className='mx-1 px-2 pointer' onClick={() => setSearchParam('')}>
                                        <Add size='16' color='#018895' style={{ transform: 'rotate(45deg' }} />
                                    </span>
                                </div>}
                            </div>
                            {/* {searchParam.trim().length > 3 && */}
                            <div className={`searchResult bg-white w-50 animate__animated 
                                ${searchParam ? 'animate__fadeInDown' : 'animate__fadeOutUp zIndex-n9'} animate__faster`}>
                            </div>
                        </form>
                        <div className='me-auto'>
                            {/* <div className="login-reg pointer">ورود / ثبت نام</div> */}
                            <div className="btn btn-secondary pointer">ورود / ثبت نام</div>
                            <Link to='/cart' className="icon p-3 me-3 text-dark"><ShoppingCart /></Link>
                        </div>
                    </div>
                    {/* ---- Menu ---- */}
                    <div className="d-flex align-items-center justify-content-between bg-white mt-4 header-b" ref={headerbottom}>
                        <ul className='nav main-nav'>
                            <li className='py-4' onMouseEnter={openMegamenu} onMouseLeave={closeMegamenu}>
                                <NavLink className={({ isActive }) => isActive ? 'pb-4 px-4 link-active' : 'pb-4 px-4'} to='/' end>
                                    صفحه نخست</NavLink></li>

                            {menuItems.map((item, index) =>
                                <li className='py-4' key={index} onMouseEnter={openMegamenu} onMouseLeave={closeMegamenu}>
                                    {item.link ? <NavLink className={({ isActive }) => isActive ? 'pb-4 px-4 link-active' : 'pb-4 px-4'}
                                        to={`${item?.link}`} >{item.title}</NavLink> : <span className='pb-4 px-4'>{item.title}</span>}
                                    {/* ----- Submenu ----- */}
                                    {item.submenu &&
                                        <ul className='nav submenu'>
                                            {item.submenu?.map((item, index) =>
                                                <div key={index}>
                                                    <li className='my-2 py-2 border-b' key={index}>
                                                        <span className='d-flex align-items-center justify-content-between'>
                                                            {item.title}
                                                            {item.submenu2 && <ArrowLeft2 size="16" />}
                                                        </span>
                                                        {/* <span className='py-3 px-2 ms-3'></span> */}
                                                        {item.submenu2 &&
                                                            <div className='submenu2 flex-grow-1'>
                                                                <ul className='nav flex-column'>
                                                                    {item.submenu2?.map((item, index) =>
                                                                        <li className='d-block w-100 my-2 py-2' key={index}>{item.title}</li>
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        }
                                                    </li>
                                                </div>
                                            )}
                                        </ul>
                                    }
                                </li>
                            )}
                        </ul>

                        <div className='d-inline-flex align-items-center text-gray'>
                            <a href='tel:9821000' className='p-1' dir='ltr'>021 - 85171717</a>
                            <span className='p-1'><Call size='18' /></span>
                        </div>
                    </div>
                </div>
                {/* --------- HEADER IN MOBILE ------- */}
                <div className='d-block d-lg-none'>
                    <div className="d-flex justify-content-between align-items-center mb-2 pb-3 border-b">
                        <span className='d-block d-lg-none icon p-3' onTouchStart={() => showSideMenu()}>
                            <HambergerMenu />
                        </span>
                        <Link to='/' className='text-center'>
                            <img src='../../../LOGO.svg' className='w-75' />
                        </Link>
                        <div className="btn btn-secondary pointer text-16 p-2">ورود / ثبت نام</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-b pb-3 mb-5">
                        <form className='ms-auto flex-grow-1 position-relative'>
                            <div className='input_wrapper d-flex align-items-center ms-auto'>
                                <span className='icon text-gray p-3'> <SearchNormal1 /></span>
                                <input type='text' value={searchParam} placeholder='جستجو...' className='p-3'
                                    onChange={(e) => { setSearchParam(e.target.value); search(e) }} />
                                {searchParam && <div className='d-flex'>
                                    <img className='loading' src='../../../images/Icons/loading.png' />
                                    <span className='mx-1 px-2 pointer' onClick={() => setSearchParam('')}>
                                        <Add size='16' color='#018895' style={{ transform: 'rotate(45deg' }} />
                                    </span>
                                </div>}
                            </div>
                            {/* {searchParam.trim().length > 3 && */}
                            <div className={`searchResult bg-white w-100 animate__animated 
                                ${searchParam ? 'animate__fadeInDown' : 'animate__fadeOutUp zIndex-n9'} animate__faster`}>

                            </div>
                        </form>
                        <Link to='/cart' className="icon p-3 me-3 text-dark"><ShoppingCart /></Link>
                    </div>

                    {/* ---  side menu --- */}
                    <aside ref={mobileSideMenu} className='d-block d-lg-none mobile-nav px-4'>
                        <div className="d-flex justify-content-between align-items-center bg-white">
                            <Link className='p-2 flex-grow-1 '>
                                <img src='../../LOGO.svg' />
                            </Link>
                            <span className='p-3 text-primary' onTouchStart={hideSideMenu}>
                                <ArrowRight2 />
                            </span>
                        </div>
                        <ul className='nav flex-column main-nav'>
                            {menuItems.map((item, index) =>
                                <li key={index} className='px-2 py-4 my-1 border-bottom '>
                                    {item.link ? <NavLink to={`${item.link}`} className={({ isActive }) => isActive ? "text-primary" : "text-dark"}>
                                        {item.title}
                                    </NavLink> : <div className='d-flex justify-content-between align-items-center'><span>{item.title}</span>  <ArrowDown2 size='14' /></div>}
                                    <ul className='nav flex-column submenu '>
                                        {item.submenu?.map((item, index) =>
                                            <li className='d-block my-3 py-2 px-3' key={index}>
                                                <span className='d-flex justify-content-between align-items-center'>{item.title}
                                                    {item.submenu2 && <ArrowDown2 size='14' />} </span>
                                                {item.submenu2 && <ul className='nav submenu2 flex-column'>
                                                    {item.submenu2?.map((item, index) =>
                                                        <li className='d-block my-2 py-2' key={index}>{item.title}</li>
                                                    )}
                                                </ul>}
                                            </li>
                                        )}
                                    </ul>
                                </li>
                            )}
                        </ul>
                    </aside>
                </div>
                {/* --------------------- */}
            </header >
        </>
    )
}

export default React.memo(Header)