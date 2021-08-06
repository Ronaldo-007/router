import React from 'react';
import './Alice.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className="item" data-value="1"><h4 class="my-4 text-center go">JOHN DOE • PROPERTY INVESTOR</h4> <hr />
        <p className="text-center be">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
            Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
            В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя
            Lorem Ipsum для распечатки образцов. </p>
    </div>,
    <div className="item" data-value="2"><h4 class="my-4 text-center go">MuhammadAli • Algorismic Company</h4> <hr />
        <p className="text-center be">
            Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
            перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов
            Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа
            Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
    </div>,
    <div className="item" data-value="3"><h4 class="my-4 text-center go">Author • CYBERSPACE DEVELOPMENT CENTER</h4> <hr />
        <p className="text-center be">

            Многие думают, что Lorem Ipsum - взятый с
            потолка псевдо-латинский набор слов, но это не совсем так.
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney</p>
    </div>,

];

const Alice = () => (
    <div className="alice ">

        <div className="container">
            <h1 className="text-center">Наши партнеры</h1>
            <h3 className="text-center py-2">_________________________</h3>

            <AliceCarousel
                autoPlay
                autoPlayControls
                autoPlayStrategy="none"
                autoPlayInterval={3000}
                animationDuration={3000}
                animationType="fadeout"
                infinite
                touchTracking={false}
                disableDotsControls
                disableButtonsControls
                items={items}
            />
        </div>
    </div>

);

export default Alice
