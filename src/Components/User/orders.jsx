import React, { useEffect, useState } from 'react';
// --- icons
import { ArrowLeft, ArrowRight, TickCircle } from 'iconsax-react';
// --- library
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import OderDetail from './oderDetail';

function OrderHistory() {

    const [orderId, setOrderId] = useState('');

    return (
        <div className='position-relative overflow-hidden'>
            <Tabs>
                <TabList className='nav d-flex border-b mb-5'>
                    <Tab className='p-3 pointer'>همه</Tab>
                    <Tab className='p-3 pointer'>جاری</Tab>
                    <Tab className='p-3 pointer'>تحویل داده شده</Tab>
                </TabList>

                {/* --- ALL ORDERS --- */}
                <TabPanel className='animate__animated animate__fadeIn'>
                    {Array(3).fill(null).map((item, index) =>
                        <div className="order-box  p-4 mb-5 rounded-3" key={index}>
                            <div className="d-flex justify-content-between flex-wrap text-14">
                                <span><TickCircle className='text-primary' size='20' variant='Bold' /> تحویل شده</span>
                                <span className='pointer' onClick={() => setOrderId(`${Math.floor(Math.random() * 1000)}`)}>مشاهده جزییات <ArrowLeft size='14' /></span>
                            </div>
                            <div className="d-flex flex-wrap text-gray my-3">
                                <span className='p-2 ms-2'> تاریخ تحویل <span className='text-black'>۱۲ اسفند ۱۴۰۲</span></span>
                                <span className='d-flex p-2 ms-2'> کد سفارش : <span className='text-dark mx-2'>۵۴۶۹۸۷۶۴۵۲۲۲۹</span></span>
                                <span className='d-flex p-2 ms-2'>  مبلغ : <span className='text-dark mx-2'>{Number(5600000).toLocaleString()} تومان</span></span>
                            </div>
                            <div className="divider my-4"></div>
                            <div className="product-pix d-flex">
                                <img src='../../../images/products/112943678-removebg-preview 1.png' />
                                <img src='../../../images/products/image 2.png' />
                                <img src='../../../images/products/paint-spray.png' />
                            </div>
                        </div>
                    )}
                </TabPanel>
                {/* --- CURRENT ORDERS ---- */}
                <TabPanel className='animate__animated animate__fadeIn'>
                    <h2>Any content 2</h2>
                </TabPanel>
                {/* --- RECEIVED ORDERS --- */}
                <TabPanel className='animate__animated animate__fadeIn'>
                    <h2>Any content 3</h2>
                </TabPanel>
                {/* ------------- ORDER DETAIL ------------ */}

                {orderId && <div className={`position-absolute order-detail p-lg-4 animate__animated `}>
                    <span className='text-12 d-block mb-4 ms-3 pb-4 border-b pointer' onClick={() => setOrderId('')}
                    > <ArrowRight size='16' /> مشاهده سفارش  ها </span>
                    <OderDetail orderId={orderId} />
                </div>}

            </Tabs>
        </div>
    )
}

export default React.memo(OrderHistory)