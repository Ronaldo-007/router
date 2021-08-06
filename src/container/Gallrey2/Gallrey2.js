import './Gallrey2.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [

    <div className="item" data-value="1"> <a href="#" className="">

        <img className="apple" alt="person" src="images/partnerz.png" />

    </a></div>,
    <div className="item" data-value="2"><a href="#" className="">

        <img className="apple" alt="person" src="images/partnera.png" />

    </a></div>,
    <div className="item" data-value="3"><a href="#" className="">

        <img className="apple" alt="person" src="images/partner.png" />

    </a></div>,
    <div className="item" data-value="4"><a href="#" className="">

        <img className="apple" alt="person" src="images/partnerq.png" />

    </a></div>,
    <div className="item" data-value="5"><a href="#" className="">

        <img className="apple" alt="person" src="images/partnerw.png" />

    </a></div>,
    <div className="item" data-value="5"><a href="#" className="">

        <img className="apple" alt="person" src="images/partnere.png" />

    </a></div>,

];

const Gallery2 = () => (
    <div className="section3 py-5 my-5">
        <h1 className="text-center">Наши партнеры</h1>
        <h3 className="text-center py-2">_________________________</h3>
        <div className="content">
            <div className="testimonials">

               
                    <AliceCarousel

                        mouseTracking
                        items={items}
                        paddingLeft={50}
                        paddingRight={50}
                        responsive={responsive}
                    />
                </div>
            </div>
        </div>
    
);

export default Gallery2;