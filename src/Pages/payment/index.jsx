import { Danger } from 'iconsax-react';
import React, { useCallback, useState } from 'react'
//------ library
import { useForm } from 'react-hook-form';
//------ components
import Receipt from '../../Components/Cart/receipt';
import Steps from '../../Components/Cart/steps';
import Layout from '../../Components/Layout';

function Payment() {

    const persianLetterPattern = /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u06A9\u06AF\u06BE\u06CC]+$/;

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();
    const onSubmit = data => { //--
        console.table(data)
    };

    // check national code function
    function checkNC(meli_code) {
        if (meli_code.length == 10) {
            if (meli_code == '1111111111' ||
                meli_code == '0000000000' ||
                meli_code == '2222222222' ||
                meli_code == '3333333333' ||
                meli_code == '4444444444' ||
                meli_code == '5555555555' ||
                meli_code == '6666666666' ||
                meli_code == '7777777777' ||
                meli_code == '8888888888' ||
                meli_code == '9999999999') {
                return false;
            }
            let c = parseInt(meli_code.charAt(9));
            let n = parseInt(meli_code.charAt(0)) * 10 +
                parseInt(meli_code.charAt(1)) * 9 +
                parseInt(meli_code.charAt(2)) * 8 +
                parseInt(meli_code.charAt(3)) * 7 +
                parseInt(meli_code.charAt(4)) * 6 +
                parseInt(meli_code.charAt(5)) * 5 +
                parseInt(meli_code.charAt(6)) * 4 +
                parseInt(meli_code.charAt(7)) * 3 +
                parseInt(meli_code.charAt(8)) * 2;
            let r = n - parseInt(n / 11) * 11;
            if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

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
                                        {errors.firstName?.type === 'pattern' && <span className='text-12 text-danger'>فیلد نام باید حروف فارسی باشد</span>}
                                    </div>
                                    {/* -- LAST NAME -- */}
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'>نام خانوادگی<sup className='text-danger'>*</sup></label>
                                        <input type='text' {...register('lastName', { required: true, pattern: persianLetterPattern, minLength: 3, maxLength: 25 })}
                                            className={`d-block w-100 ${errors?.lastName && 'border-danger'}`} placeholder='نام خانوداگی شما' />
                                        {errors.lastName?.type === 'required' && <span className='text-12 text-danger'>نام خانوادگی خود را وارد نمایید</span>}
                                        {errors.lastName?.type === 'pattern' && <span className='text-12 text-danger'>لطفا از حروف فارسی استفاده نمایید</span>}
                                    </div>
                                </div>
                                <div className="my-2 my-lg-5"></div>
                                <div className="row">
                                    {/* -- PHONE NUMBER -- */}
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'>شماره موبایل<sup className='text-danger'>*</sup></label>
                                        <input type='number' className={`d-block w-100 ${errors.mobile && 'border-danger'}`} placeholder='09121234567'
                                            {...register("mobile", { required: true, pattern: /^[09][0-9]{9}$/, minLength: 11, maxLength: 11 })} />
                                        {errors.mobile?.type === 'required' && <span className='text-12 text-danger'>فیلد تلفن همراه  ضروریست</span>}
                                        {errors.mobile?.type === "pattern" && <span className='text-12 text-danger'> تلفن همراه با 09 آغاز میشود</span>}
                                        {errors.mobile?.type === "minLength" || errors.mobile?.type === "maxLength" && <span className='text-12 text-danger'> تلفن همراه 11 رقمی میباشد</span>}
                                    </div>
                                    {/* -- National Code -- */}
                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                        <label htmlFor="name" className='mb-2 d-inline-flex align-items-center'>کدملی<sup className='text-danger'>*</sup></label>
                                        <input type='text' className={`d-block w-100 ${errors?.nationalcode && 'border-danger'}`} placeholder='کد 10 رقمی'
                                            {...register('nationalcode', { required: true, minLength: 10, maxLength: 10, pattern: /\d{10}/, validate: val => checkNC(val) })}
                                        />
                                        {errors.nationalcode?.type === 'maxLength' || errors.nationalcode?.type === 'minLength' && <span className="text-danger">کد ملی باید 10 رقمی باشد</span>}
                                        {errors.nationalcode?.type === 'pattern' && <span className="text-danger">کد ملی وارد شده صحیح نمیباشد </span>}
                                        {errors.nationalcode?.type === 'validate' && <span className="text-danger">کد ملی وارد شده صحیح نمیباشد </span>}
                                        {errors.nationalcode?.type === 'required' && <span className="text-danger">کد ملی خود را وارد نمایید</span>}
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
                                        <input type='text' {...register('postalcode', { required: true, minLength: 10, maxLength: 10, pattern: /(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}/ })}
                                            className={`d-block w-100 ${errors?.postalcode && 'border-danger'}`} placeholder='کد 10 رقمی' />
                                        {errors.postalcode?.type === 'required' && <span className='text-12 text-danger'> کدپستی خود را وارد نمایید </span>}
                                        {errors.postalcode?.type === 'pattern' && <span className='text-12 text-danger'>کد پستی وارد شده صحیح نمیباشد</span>}
                                        {errors.postalcode?.type === 'minLength' || errors.postalcode?.type === 'maxLength'
                                            && <span className='text-12 text-danger'>  کد پستی 10 رقمی میباشد</span>}
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
                                <input id='policy' type="checkbox" {...register('checkpolicy', { required: true })} />
                                <label htmlFor='policy' className='text-gray me-2'>پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه بانک ملت</label>
                            </div>
                            {errors?.policy && <span className='text-danger text-12 d-block'>قوانین را بپذیرید</span>}
                            <a className={`btn ${isValid ? 'btn-primary' : 'btn-disabled'} w-50 mt-4 py-3 mx-5`}
                                disabled={!isValid} onClick={handleSubmit(onSubmit)}
                            >تکمیل سفارش</a>
                        </Receipt>
                    </div>
                </div>
            </div >
        </ >
    )
}

export default React.memo(Payment)