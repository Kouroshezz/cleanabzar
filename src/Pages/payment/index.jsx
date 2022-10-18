import React, { useCallback, useState } from 'react'
//------ library
import { useForm } from 'react-hook-form';
//------ components
import Receipt from '../../Components/Cart/receipt';
import Steps from '../../Components/Cart/steps';
import Layout from '../../Components/Layout';

function Payment() {

    const persianLetterPattern = /^[A-Za-z\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u06A9\u06AF\u06BE\u06CC]+$/;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => { //--
    };

    const [btnDisable, setBtnDisable] = useState(false);

    const checkPolicy = useCallback((e) => {
        setBtnDisable(e.target.checked)
    }, [])

    return (
        <>
            <div className='payment container mt-150 animate__animated animate__fadeIn'>
                <Steps cart={true} payment={true} />
                <div className="my-5"></div>
                <div className="row">
                    <div className='col-12 col-lg-8 box'>
                        <div className="text-center py-4 mb-3 mb-lg-5 title-bg ">مشخصات شما</div>
                        <div className="p-3 p-lg-5">
                            <form className='form-wrapper'>

                                <div className="row">
                                    {/* -- NAME -- */}
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'>نام<sup className='text-danger'>*</sup></label>
                                        <input type='text' className={`d-block w-100 ${errors?.firstName && 'border-danger'}`} placeholder='نام شما'
                                            {...register("firstName", { required: true, minLength: 3, maxLength: 25, pattern: persianLetterPattern })} />
                                        {errors.firstName?.type === 'required' && <span className='text-12 text-danger'>فیلد نام ضروریست</span>}
                                    </div>
                                    {/* -- LAST NAME -- */}
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'>نام خانوادگی<sup className='text-danger'>*</sup></label>
                                        <input type='text' {...register('lastName', { required: true, pattern: persianLetterPattern, minLength: 3, maxLength: 25 })}
                                            className={`d-block w-100 ${errors?.lastName && 'border-danger'}`} placeholder='نام خانوداگی شما' />
                                        {errors?.lastName && <span className='text-12 text-danger'>نام خانوادگی خود را وارد نمایید</span>}
                                    </div>
                                </div>
                                <div className="my-2 my-lg-5"></div>
                                <div className="row">
                                    {/* -- PHONE NUMBER -- */}
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'>شماره موبایل<sup className='text-danger'>*</sup></label>
                                        <input type='number' className={`d-block w-100 ${errors.mobile && 'border-danger'}`} placeholder='09121234567'
                                            {...register("mobile", { required: true, pattern: /^[09][0-9]{9}/, minLength: 11, maxLength: 11 })} />
                                        {errors.mobile?.type === 'required' && <span className='text-12 text-danger'>فیلد تلفن همراه  ضروریست</span>}
                                        {errors.mobile?.type === "pattern" && <span className='text-12 text-danger'> تلفن همراه با 09 آغاز میشود</span>}
                                        {errors.mobile?.type === "minLength" || errors.mobile?.type === "maxLength" &&
                                            <span className='text-12 text-danger'> تلفن همراه 11 رقمی میباشد</span>}
                                    </div>
                                    {/* -- NN -- */}
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'>کدملی<sup className='text-danger'>*</sup></label>
                                        <input type='text' className='d-block w-100' placeholder='کد 10 رقمی' />
                                    </div>
                                </div>

                                <div className="my-2 my-lg-5"></div>
                                <div className="row">
                                    {/* -- EMAIL -- */}
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'>پست الکترونیک</label>
                                        <input type='email' {...register("Email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[A-Za-z]{2,4}$/ })}
                                            className={`d-block w-100 ${errors?.Email && 'border-danger'}`} placeholder='Example@gmail.com' />
                                        {errors.Email?.type === 'required' && <span className='text-12 text-danger'> ایمیل خود را وارد نمایید </span>}
                                        {errors.Email?.type === 'pattern' && <span className='text-12 text-danger'> فرمت ایمیل خود را اصلاح کنید</span>}
                                    </div>
                                    {/* -- POSTAL CODE -- */}
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'>کد پستی<sup className='text-danger'>*</sup></label>
                                        <input type='text' {...register('postalcode', { required: true, minLength: 16, maxLength: 16 })}
                                            className={`d-block w-100 ${errors?.postalcode && 'border-danger'}`} placeholder='کد 16 رقمی' />
                                        {errors.postalcode?.type === 'required' && <span className='text-12 text-danger'> کدپستی خود را وارد نمایید </span>}
                                        {errors.postalcode?.type === 'minLength' || errors.postalcode?.type === 'maxLength'
                                            && <span className='text-12 text-danger'>  کد پستی 16 رقمی میباشد</span>}
                                    </div>
                                </div>

                                <div className="my-2 my-lg-5"></div>
                                <div className="row">
                                    {/* -- ADDRESS -- */}
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'>آدرس<sup className='text-danger'>*</sup></label>
                                        <textarea {...register('Address', { required: true, minLength: 20, maxLength: 250 })}
                                            className={`d-block w-100 ${errors?.Address && 'border-danger'}`} placeholder='استان ، شهر ،‌خیابان ، کوچه ، پلاک ، واحد' rows={5} />
                                        {errors?.Address && <span className='text-12 text-danger'>آدرس خود را وارد نمایید</span>}
                                    </div>
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'> توضیحات <span className='text-12 text-gray'>  (اختیاری)  </span></label>
                                        <textarea className='d-block w-100' placeholder='توضیحات شما در مورد سفارشتان ،‌بطور مثال نحوه تحویل محصول' rows={5} />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 box '>
                        <Receipt >

                            <div className='d-flex align-items-center'>
                                <input id='policy' type="checkbox" onChange={(e) => checkPolicy(e)} />
                                <label htmlFor='policy' className='text-gray me-2'>پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه بانک ملت</label>
                            </div>
                            {errors?.policy && <span className='text-danger text-12 d-block'>قوانین را بپذیرید</span>}
                            <a className={`btn ${btnDisable ? 'btn-primary' : 'btn-disabled'} w-50 mt-4 py-3 mx-5`}
                                disabled={btnDisable ? true : false} onClick={handleSubmit(onSubmit)}
                            >تکمیل سفارش</a>
                        </Receipt>
                    </div>
                </div>
            </div >
        </ >
    )
}

export default React.memo(Payment)