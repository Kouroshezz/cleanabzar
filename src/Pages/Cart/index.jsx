import React, { useEffect, useState } from 'react';
//---- icons
import { Add, Minus, Trash } from 'iconsax-react';
//---- components
import Layout from '../../Components/Layout';
import Steps from '../../Components/Cart/steps';
import Receipt from '../../Components/Cart/receipt';

function Cart() {

    const tableHeader = [' محصول', 'تعداد', 'قیمت', ''];

    useEffect(() => {
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

    const [quantity, setQuantity] = useState(1)

    return (
        <>
            <div className='cart container mt-150 animate__animated animate__fadeIn'>
                <Steps cart={true} />
                <div className="my-5"></div>
                <div className="row">
                    <div className="col-12 col-lg-8 order-2 order-lg-1 box table-wrapper">
                        <table className='d-none d-lg-block w-100'>
                            <thead className='d-flex align-items-center py-4 w-100'>
                                <tr className='d-flex w-100 align-items-center'>
                                    <th className='flex-shrink-1'>#</th>
                                    {tableHeader.map((item, index) =>
                                        <th key={index} className='p-4'>{item}</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody className='d-block'>
                                {cartItems.map((item, index) =>
                                    <tr key={index} className='d-flex align-items-center px-4 my-2'>
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
                        <div className="block d-lg-none items-sm">
                            {cartItems.map((item, index) =>
                                <div className='d-flex mb-4 box mx-4 p-4' key={index}>
                                    <img src={`${item.image}`} className='rounded-3 ms-4' width={150} height={150} />
                                    <div className='d-inline-flex flex-column w-50'>
                                        <div className='mb-4'>
                                            <h4 className='text-14'>{item.title}</h4>
                                            <span className='d-block mt-3 text-12'>رنگ : سبز</span>
                                        </div>
                                        <div className="d-inline-flex align-items-center mt-auto">
                                            <span className="quantity-btn increment" onTouchEnd={() => setQuantity(prev => prev + 1)}><Add size='22' /></span>
                                            <span className='mx-3'>{quantity}</span>
                                            <span className="quantity-btn decrement" onTouchEnd={() => setQuantity(quantity - 1)}><Minus size='22' /></span>
                                        </div>
                                        <div className='d-flex align-items-baseline mt-5 text-14'>
                                            <span> قیمت :</span><strong className=''>{Number(item.price).toLocaleString()}</strong>
                                        </div>
                                    </div>
                                </div>
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


export const cartItems = [
    { id: 1, title: 'برس زبر اسکرادر', price: '38000000', quantity: 1, image: '../../../images/products/paint-spray.png' },
    { id: 2, title: 'جارو برقی بوش مدل BGL8PRO5IR', price: '4800000', quantity: 1, image: '../../../images/products/image-removebg-preview 1.png' },
    { id: 3, title: 'برس زبر اسکرادر', price: '24000000', quantity: 1, image: '../../../images/products/paint-spray.png' },
]