import React, { useState } from 'react'

// ------ICONS
import { Link, useLocation } from 'react-router-dom';
import { ArrowSwapHorizontal, DiscountShape, Heart, ShoppingCart } from 'iconsax-react';


function ProductCard({ name, price, image, id, offer, favourite }) {

    const { pathname } = useLocation();
    let location = pathname.slice(1, pathname.length);

    function addToCart() {
        console.log(id)
    }

    const [fav, setFav] = useState(false);

    function addToFavorite() {
        setFav(!fav)
        console.log(`Product ID ${id} Has Added to Favorite`)
    }

    return (
        <div className='ProductCard bg-white py-4 px-3 rounded-4' id={id}>

            <div className='d-flex align-items-center justify-content-between' dir='ltr'>
                <a onClick={() => addToFavorite(id)}>
                    {/* <Heart variant={`${favourite && 'Bold'}`} className='text-danger' /> */}
                    {fav || favourite ? <Heart variant='Bold' className='text-danger animate__animated animate__heartBeat' /> :
                        <Heart className='text-danger' />}
                </a>
                {offer.stat ? <a className='text-danger'><DiscountShape /> </a> : null}
            </div>
            <div className={`d-flex flex-column p-card-sm`}>
                <figure className='d-block text-center'>
                    <Link to={`/shop/product/${id}`}>
                        <img src={`${image}`} className='img-fluid d-inline' />
                    </Link>
                </figure>
                <div>
                    <h5 className='text-center mb-0 mt-3 text-12'><Link to={`/shop/product/${id}`}>{name}</Link></h5>
                    {offer.stat ?
                        // ------- product with offer
                        <>
                            <div className='text-center mt-n2'>
                                <span className='discount '>-{offer.discount}%</span>
                                <span className='prev-price d-flex justify-content-center text-12' dir='rtl'><span>{price}</span>
                                    <span className='text-14 mx-2'>تومان</span></span>
                            </div>
                            <span className="d-block text-center mb-3 d-flex justify-content-center align-items-center" dir='ltr'>
                                <span className='text-14 mx-2'>تومان</span><strong>{Number(offer.price).toLocaleString()}</strong></span>
                        </>
                        // -------- ordinary product
                        : <span className="d-block text-center mb-3 d-flex justify-content-center align-items-center" dir='ltr'>
                            <span className='text-14 mx-2'>تومان</span>
                            <strong>{Number(price).toLocaleString()}</strong> </span>}
                    <a className="btn btn-secondary w-100 align-items-center px-1 py-lg-3" dir='ltr' onClick={() => addToCart(id)}>
                        <span className='me-2'>افزودن به سبد خرید</span>
                        <ShoppingCart width={15} height={15} />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default React.memo(ProductCard)