import React from 'react'
//--- library
import { NavLink } from 'react-router-dom';
//---- icons
import { Card, ShoppingCart, TickSquare } from 'iconsax-react';

function CartSteps({ cart, payment, paymentResult }) {

    return (
        <div className="cart-steps-wrapper pt-2 pb-5 px-4 px-lg-0">
            <div className='cart-steps py-3'>
                <div className="d-flex align-items-center">
                    <div className="step">
                        {/* -- step 1 -- */}
                        <div className='d-flex flex-column'>
                            <div className={`icon-wrapper p-3 d-inline-flex justify-content-center align-items-center 
                            `} style={{ backgroundColor: cart && '#018895', color: cart && '#ffffff' }}>
                                <ShoppingCart />
                            </div>

                            <NavLink to='/cart'> <span className={`${cart && 'text-primary'}`}>سبد خرید</span></NavLink>
                        </div>
                        <div className={`line ${payment && 'active-line'}`} style={{
                            backgroundImage: payment &&
                                'linear-gradient(270deg, #018895 0%, #F6AF0E 43.23%, #018895 100%)'
                        }}></div>
                    </div>
                    {/* -- step 2 -- */}
                    <div className="step">
                        <div className="d-flex flex-column">
                            <div className={`icon-wrapper p-3 d-inline-flex justify-content-center align-items-center 
                    `} style={{ backgroundColor: payment && '#018895', color: payment && '#ffffff' }}>
                                <Card />
                            </div>
                            <span className={`${payment && 'text-primary'}`}>پرداخت</span>
                        </div>
                        <div className={`line`} style={{ backgroundImage: paymentResult && 'linear-gradient(270deg, #018895 0%, #F6AF0E 43.23%, #018895 100%)' }}></div>
                    </div>

                    {/* -- step 3 ---*/}
                    <div className="step">
                        <div className="d-flex flex-column">
                            <div className={`icon-wrapper p-3 d-inline-flex justify-content-center align-items-center 
                    `} style={{ backgroundColor: paymentResult && '#018895', color: paymentResult && '#ffffff' }}>
                                <TickSquare />
                            </div>
                            <span className={`${paymentResult && 'text-primary'} last-step`}>تکمیل سفارش</span>
                        </div>
                    </div>

                </div>
            </div >
        </div>
    )
}

export default React.memo(CartSteps);
