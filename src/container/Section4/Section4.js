import { faAccusoft } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faListOl, faThumbsDown, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Section4.css'



const Section4 = () => {
    return (<div className="Add">
      <section className="section4">
        <div className="title text-center py-5">
            <h1>Результаты</h1>
            <h3 className="text-center">_________________________</h3>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12 my-5 cat">
                    <a href="#" className="add">
                        <div className="icon my-5">
                            <FontAwesomeIcon icon={faAccusoft} />
                        </div>
                        <div className="text-center">
                            <h5>Поиск и инновации</h5>
                            <p>Мы ведем постоянный поиск
                                и внедряем инноваций</p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-12 my-5 cat" >
                    <a href="#" className="add">
                        <div className="icon my-5">
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </div>
                        <div className="text-center">
                            <h5>Качество и цена</h5>
                            <p>Предложение лифтов и эскалаторов
                                высокого качества по конкурентным ценам</p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-12 my-5 cat">
                    <a href="#" className="add">
                        <div className="icon my-5">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="text-center">
                            <h5>Индивидуальный подход</h5>
                            <p>Индивидуальный и гибкий
                                подход к каждому клиенту</p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-2 col-sm-12">
                    
                </div>
                <div className="col-lg-4 col-sm-12 my-3 cat">
                    <a href="#" className="add">
                        <div className="icon my-5">
                            <FontAwesomeIcon icon={faListOl} />
                        </div>
                        <div className="text-center">
                            <h5>Широкий ассортимент</h5>
                            <p>Начиная с решений, оптимизированных для жилых и
                                офисных зданий, заканчивая сложными проектами
                                с эскалаторами и высокоскоростными лифтами</p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-12 my-3 cat">
                    <a href="#" className="add">
                        <div className="icon my-5">
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className="text-center">
                            <h5>Гибкость</h5>
                            <p>Гибкость технологических решений и
                                собственных прогнозов, ориентированных
                                на потребности каждого здания</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </section>
    </div>
    )
}

export default Section4
