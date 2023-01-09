import React, { useState } from 'react';
import styles from '../../styles/modules/modal.module.scss';

import { CloseCircle } from 'iconsax-react';

// interface Props {
//     title: string
//     subtitle?: string
//     children: React.ReactNode
//     close: () => void
// }

function Modal(props) {

    let { title, subtitle, children, close } = props;

    return (
        <>
            <div className={`${styles.wrapper}  animate__animated animate__fadeIn animate__faster`} onClick={() => close()}> </div>
            <div className={`${styles.content} animate__animated animate__fadeIn animate__faster`}>
                <div className="d-flex align-items-center justify-content-between border-b pb-3 mb-4">
                    <div>
                        <h2 className=''>{title}</h2>
                        {subtitle && <span>{subtitle}</span>}
                    </div>
                    <CloseCircle size='24' className='text-danger' onClick={() => close()} />
                </div>
                <div className='my-3'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default React.memo(Modal)