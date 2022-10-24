import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

// ================ all carousel navigation arrows
export const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}>
        <span className=' d-inline-block p-2 rounded-5 bg-white Arrow-carousel next'>
            <ArrowLeft2 size="18" color="#018895" />
        </span>
    </div>
);

export const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}>
        <span className=' d-inline-block p-2 rounded-5 bg-white Arrow-carousel prev'>
            <ArrowRight2 size="18" color="#018895" />
        </span>
    </div>
);