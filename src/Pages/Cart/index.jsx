import React, { useLayoutEffect, useState, useRef } from 'react';
//---- icons
import { Add, Minus, More, Trash, Xrp } from 'iconsax-react';
//---- components
import Modal from '../../Components/Modal';
import Layout from '../../Components/Layout';
import Steps from '../../Components/Cart/steps';
import Receipt from '../../Components/Cart/receipt';
// ---- library
import { v4 as uuidv4 } from 'uuid';

function Cart() {

    const deleteCartRef = useRef(null);
    const tableHeader = [' محصول', 'تعداد', 'قیمت'];
    const [openModal, setOpenModal] = useState(false);

    useLayoutEffect(() => {
        //const receipt = document.querySelector('.receipt');
        //window.addEventListener('scroll', () => {
        //    if (window.scrollY > receipt.offsetTop - 50) {
        //        receipt.style.cssText = `position:sticky;top:80px;`
        //    }
        //    if (window.scrollY < receipt.offsetTop) {
        //        receipt.style.cssText = `position:relative;`
        //    }
        //    console.log(window.scrollY + " " + receipt.offsetTop)
        //})
    }, []);

    const deleteCart = (e) => {

        const alertBox = deleteCartRef?.current.classList;
        if (e.target.nodeName === 'TH' || e.target.nodeName === 'svg' || e.target.nodeName === 'path') {
            if (!deleteCartRef?.current.classList.contains('animate__fadeInUp')) {
                alertBox.remove('animate__fadeOutDown', 'd-none', 'invisible');
                alertBox.add('animate__fadeInUp', 'd-block', 'visible');
            }
            else {
                alertBox.remove('animate__fadeInUp', 'visible');
                alertBox.add('animate__fadeOutDown', 'invisible');
            }
        }
    }

    function closeModal(e) {
        e.stopPropagation();
        setOpenModal(true);
        const alertBox = deleteCartRef?.current.classList;
        alertBox.remove('animate__fadeInUp', 'visible');
        alertBox.add('animate__fadeOutDown', 'invisible');
    }

    return (
        <>
            <div className='cart container mt-150 animate__animated animate__fadeIn'>
                <Steps cart={true} />
                <div className="my-5"></div>
                {/* ---- MODAL -------- */}
                {openModal && <Modal close={() => setOpenModal(false)}>
                    <div className='mx-auto py-4 px-lg-5'>
                        <div className="d-flex align-items-center">
                            <Trash size="30" className='text-danger' />
                            <div className='me-3'>
                                <p>آیا از حذف کل سبد خرید اطمینان دارید ؟</p>
                                <span className='text-gray text-14'>پس از حذف دیگر امکان بازگشت محصولات به سبد خرید وجود ندارد.</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className='btn mx-2 text-dark' onClick={() => setOpenModal(false)}>انصراف</button>
                        <button className="btn btn-danger py-2 px-5 me-5">حذف</button>
                    </div>
                </Modal>}
                {/* ---------------- */}
                <div className="row">
                    <div className="col-12 col-lg-8 order-2 order-lg-1  table-wrapper mt-5 mt-lg-0">
                        <table className='d-none d-lg-block w-100'>
                            <thead className='d-flex align-items-center py-4 w-100'>
                                <tr className='d-flex w-100 align-items-center'>
                                    <th className='flex-shrink-1'>#</th>
                                    {tableHeader.map((item, index) =>
                                        <th key={uuidv4()} className='p-4'>{item}</th>
                                    )}
                                    <th className='px-3 text-dark remove-cart-items position-relative' onClick={deleteCart}> <More size="16" />
                                        <div className='box alert position-absolute p-4 animate__animated d-none' ref={deleteCartRef} onClick={closeModal}>
                                            <Trash size="16" className='text-danger' />  <span className="text-14 text-gray">حذف همه ی محصولات </span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='d-block'>
                                {cartItems.map((item, index) =>
                                    <tr key={uuidv4()} className='d-flex align-items-center px-4 my-2'>
                                        <td className='flex-shrink-1 p-4'>{index + 1}</td>
                                        <td className='p-4 d-flex align-items-center title'>
                                            <img className='img-fluid' src={`${item.image}`} />
                                            <div>
                                                <span className='d-block me-3 text-end'>{item.title}</span>
                                                <span className='d-block me-3 mt-3 text-end text-12'>رنگ : سبز</span>
                                            </div>
                                        </td>
                                        <td className='flex-grow-1 p-4 quantity'>
                                            <div className="d-inline-flex align-items-center">
                                                <span className="quantity-btn increment"><Add size='16' /></span>
                                                <span className='mx-3'>{item.quantity}</span>
                                                <span className="quantity-btn decrement"><Minus size='16' /></span>
                                            </div>
                                        </td>
                                        <td className='flex-grow-1 p-4 price'>{item.price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} <span className='text-16'>تومان</span></td>
                                        <td className='remove pointer'><Trash size='14' className='text-danger' /></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {/* ---- items in mobile ---- */}
                        <div className="d-lg-none items-sm mt-5 box mobile-cart-items">
                            <div className="text-center py-4 mb-0 mb-lg-5 title-bg d-flex ">
                                <span className='flex-grow-1 me-5'>سفارشات</span>
                                <div className='px-3 text-dark remove-cart-items position-relative' onClick={deleteCart}> <More size="16" />
                                    <div className='box alert position-absolute bg-white p-4 animate__animated d-none' ref={deleteCartRef} onClick={(e) => closeModal(e)}>
                                        <Trash size="16" className='text-danger' />  <span className="text-14 text-gray">حذف همه ی محصولات </span>
                                    </div>
                                </div>
                            </div>

                            {cartItems.map((item, index) =>
                                <MobileCartItems item={item} key={uuidv4()} />
                            )}
                        </div>
                    </div>
                    {/* ---- receipt ---- */}
                    <div className="col-12 col-lg-4 order-1 order-lg-2">
                        <Receipt />
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Cart);


function MobileCartItems(items) {

    const { item } = items;
    const [quantity, setQuantity] = useState(1);

    function checkQuantity(para) {
        if (para === 'increase') {
            setQuantity(prev => prev + 1)
        }
        else if (para === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }


    return (
        <div className='d-flex px-4 py-3 cart-mobile'>
            <img src={`${item.image}`} className='rounded-3 ms-4' width={96} height={127} />
            <div className='w-100'>
                <h4 className='text-12 mt-3'>{item.title}</h4>
                <div className="d-flex align-items-center justify-content-between my-4">
                    <span className='text-12'><span className='text-gray'>رنگ</span> : سبز</span>
                    <div className="d-inline-flex align-items-center mt-auto">
                        <span className="quantity-btn increment p-1" onTouchEnd={() => checkQuantity('increase')}><Add width={22} height={22} size='22' /></span>
                        <span className='mx-3'>{quantity}</span>
                        {quantity === 1 ? <span className='p-2'><Trash size="22" width={22} height={22} className='text-danger p-1' /></span> :
                            <span className="quantity-btn decrement p-1" onTouchEnd={() => checkQuantity('decrease')}><Minus width={22} height={22} size='22' /></span>}
                    </div>
                </div>
                <div className=' text-start text-14 mt-3 pt-2'>
                    <strong className='mt-3 text-dark'>{Number(item.price).toLocaleString()}</strong><span className='text-gray pe-2'>تومان</span>
                </div>
            </div>
        </div>
    )
}

export const cartItems = [
    { id: 1, title: 'برس زبر اسکرادر', price: '38000000', quantity: 1, image: '../../../images/products/paint-spray.png' },
    { id: 2, title: 'جارو برقی بوش مدل BGL8PRO5IR', price: '4800000', quantity: 1, image: '../../../images/products/image-removebg-preview 1.png' },
    { id: 3, title: 'برس زبر اسکرادر', price: '24000000', quantity: 1, image: '../../../images/products/paint-spray.png' },
]