import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (


        <div className="footerstyle__FooterWrapper-sc-1bdumvd-0 hlGRuh section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 pas ">
                        <h1>О НАС</h1>
                        <p>«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии Компания «Osten» была основана в 2019 году!</p>
                        <h1>МЫ В СОЦ.СЕТЯХ:</h1>
                        <div className="simpl">
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} className="me-3" />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTelegram} className="me-3" />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} className="me-3" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-5 mt-lg-0 col-lg-4 col-sm-12 ">
                        <h1>ПОСЛЕДНИЕ НОВОСТИ</h1>
                        <div>
                            <a rel="noopener noreferrer" href="/news/TmV3c05vZGU6MQ==" className="mylink__ALink-v0deg6-0 iBcdlu">
                                <p>Построен новый лифт</p>
                            </a>
                        </div>
                        <div>
                            <a rel="noopener noreferrer" href="/news/TmV3c05vZGU6Mw==" className="mylink__ALink-v0deg6-0 iBcdlu">
                                <p>РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</p>
                            </a>
                        </div>
                        <div>
                            <a rel="noopener noreferrer" href="/news/TmV3c05vZGU6NA==" className="mylink__ALink-v0deg6-0 iBcdlu">
                                <p>ДИСПЕТЧЕРИЗАЦИЯ</p>
                            </a></div>
                    </div>
                    <div className="mt-5 mt-lg-0 col-lg-4 col-sm-12 ">
                        <h1>КОНТАКТЫ</h1>
                        <p>
                            <b>Номер телефона:</b>
                            <span> +998 (93) 511-11-17</span>
                            <span>+998 (91) 791-51-15</span>
                        </p>
                        <p>
                            <b>Электронная почта:
                            </b>info@uzlift.uz</p>
                        <p><b>Адрес: </b>100077, город Ташкент, улица Мухаммад Юсуф 1А.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer