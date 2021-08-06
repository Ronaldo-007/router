
import './Gallery.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [

    <div className="item" data-value="1"> <a href="#" className="tor py-5 me-3">
        <div className="size-sm">
            <img className="img" alt="person" src="images/mls.jpg" />
        </div>
        <div className="text size-sm">
            <h2>OSTEN L1</h2>
        </div>
    </a></div>,
    <div className="item" data-value="2"><a href="#" className="tor py-5 me-3">
        <div className="size-sm">
            <img className="img" alt="person" src="images/OSTEN.jpg" />
        </div>
        <div className="text size-sm">
            <h2>OSTEN L2</h2>
        </div>
    </a></div>,
    <div className="item" data-value="3"><a href="#" className="tor py-5 me-3">
        <div className="size-sm">
            <img className="img" alt="person" src="images/mls.jpg" />
        </div>
        <div className="text size-sm">
            <h2>OSTEN L1</h2>
        </div>
    </a></div>,
    <div className="item" data-value="4"><a href="#" className="tor py-5 me-3">
        <div className="size-sm">
            <img className="img" alt="person" src="images/OSTEN.jpg" />
        </div>
        <div className="text size-sm">
            <h2>OSTEN L2</h2>
        </div>
    </a></div>,
    <div className="item" data-value="5"><a href="#" className="tor py-5 me-3">
        <div className="size-sm">
            <img className="img" alt="person" src="images/mls.jpg" />
        </div>
        <div className="text size-sm">
            <h2>OSTEN L1</h2>
        </div>
    </a></div>,


];

const Gallery = () => (
    <div className="section3 py-5 my-5">
        <h1 className="text-center">Результаты</h1>
        <h3 className="text-center py-2">_________________________</h3>
        <div className="content">
            <div className="testimonials">

                <div className="container">
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
        <div className="text-center">
        <button type="button" class="btn btn-primary my-5">ВСЯ ПРОДУКЦИЯ</button>
        </div>
    </div>
);

export default Gallery;