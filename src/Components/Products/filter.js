import React, { useEffect, useRef } from 'react';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import wNumb from 'wnumb';

function Filter({ setPrice }) {

  const minPrice = useRef(null);
  const maxPrice = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    noUiSlider?.create(sliderRef?.current, {
      start: [500000, 10000000],
      tooltips: false,
      step: 500000,
      connect: true,
      behaviour: 'tap-drag',
      direction: 'rtl',
      margin: 1000000,
      range: {
        'min': 500000,
        'max': 10000000
      },
      format: wNumb({
        decimals: 3,
        thousand: '.',
        suffix: ' تومان '
      })
    });

    // sliderRef.current.noUiSlider.on('end', (e) => console.log(e))
    sliderRef.current.noUiSlider.on('change', (e) => setPrice({ min: e[0], max: e[1] }))
    sliderRef.current.noUiSlider.on('slide', (e) => {
      minPrice.current.innerText = `از ${e[0]}`;
      maxPrice.current.innerText = `تا ${e[1]}`;
    })

  }, [])

  useEffect(() => {
    return () => {
      sliderRef?.current?.noUiSlider.off();
      sliderRef?.current?.noUiSlider.destroy();
    }
  }, [])

  return (
    <div>
      <div ref={sliderRef} className='mt-4' ></div>
      <div className='d-flex justify-content-between text-14 text-gray mt-4'>
        <span ref={minPrice}>{Number(500000).toLocaleString()} تومان </span>
        <span ref={maxPrice}>{Number(10000000).toLocaleString()}تومان </span>
      </div>
    </div>
  )
}

export default Filter