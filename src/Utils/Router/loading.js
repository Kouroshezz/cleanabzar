import React from 'react';
import styles from '../../styles/modules/loading.module.scss'

function Loading() {
    return (
        <div className={`flex-column animate__animated animate__fadeIn animate__fadeOut ${styles.loading}`}>
            {/* animate__animated animate__fadeOutDownt */}
            <img src='../../../LOGO.svg' className='img-fluid mb-4' />
            <span className=''>در حال بارگذاری...</span>
        </div>
    )
}

export default React.memo(Loading)