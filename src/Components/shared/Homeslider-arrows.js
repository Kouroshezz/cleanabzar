import { ArrowLeft2, ArrowRight2 } from "iconsax-react";


// =========== only uses in homepage slider 
export const NextArrowhp = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}>
        <span className=' d-inline-block p-2 rounded-5 border border-white'>
            <ArrowLeft2 size="18" color="#ffffff" />
        </span>
    </div>
);

export const PrevArrowhp = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}>
        <span className=' d-inline-block p-2 rounded-5 border border-white'>
            <ArrowRight2 size="18" color="#ffffff" />
        </span>
    </div>
);

