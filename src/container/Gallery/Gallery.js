
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

const Gallery = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        paddingLeft={50}
        paddingRight={50}
        responsive={responsive}
    />
);








// const Section3 = () => {
//     return (
//         <div className="section3 py-5 my-5">
//             <h1 className="text-center">Результаты</h1>
//             <h3 className="text-center py-2">_________________________</h3>
//             <div className="content">
//                 <div className="testimonials">

//                     {/* <div className="container">
//                         <a href="#" className="tor py-5 me-3">
//                             <div className="size-sm">
//                                 <img className="img" alt="person" src="images/mls.jpg" />
//                             </div>
//                             <div className="text size-sm">
//                                 <h2>OSTEN L1</h2>
//                             </div>
//                         </a>

//                         <a href="#" className="tor py-5 me-3">
//                             <div className="size-sm">
//                                 <img className="img" alt="person" src="images/OSTEN.jpg" />
//                             </div>
//                             <div className="text size-sm">
//                                 <h2>OSTEN L2</h2>
//                             </div>
//                         </a>
//                         <a href="#" className="tor py-5 me-3">
//                             <div className="size-sm">
//                                 <img className="img" alt="person" src="images/mls.jpg" />
//                             </div>
//                             <div className="text size-sm">
//                                 <h2>OSTEN L3</h2>
//                             </div>
//                         </a>
//                         <a href="#" className="tor py-5 me-3">
//                             <div className="size-sm">
//                                 <img className="img" alt="person" src="images/OSTEN.jpg" />
//                             </div>
//                             <div className="text size-sm">
//                                 <h2>OSTEN L4</h2>
//                             </div>
//                         </a>

//                     </div> */}
//                 </div>
//             </div>
//         </div>


//     );
// }
// export default Section3

export default Gallery;