import React from 'react'
import Footer from '../../container/Footer'
import './Contactus.css'

const Contactus = () => {
    return (<div className="Add">
        <div className="onas">
            <div>
                <h1>Designer</h1>
            </div>
        </div>

        <div>
                <h1 className="text-center py-5">Контакты</h1>
                <h3 className="text-center">___________________________</h3>
            </div>
        <div class="map-container py-5 px-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.74398265753!2d69.13928040691668!3d41.28277055704213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvtGI0LrQtdC90YIsIE9gemJla2lzdG9u!5e0!3m2!1suz!2s!4v1628085534009!5m2!1suz!2s"
                width="100%" height="500px" allowfullscreen="" loading="lazy">

            </iframe>
            <h1 className="my-5 cola">Режим работы с 09:00 до 18:00</h1>
            <div className="row py-3">
                <div className="col-lg-4 col-sm-12">
                    <h5><span>Наш адрес: </span>город Ташкент ...</h5>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <h5><span>Телефон: </span>(+99897) 123-45-67, (+99897) 123-45-67</h5>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <h5><span >Emai: </span> info@lift.uz</h5>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8">
                    <form novalidate="" className="">
                        <label className="mt-3 form-label" for="name">Ваше имя (обязательно)</label>
                        <input required="" className="form-control" /><label class="mt-3 form-label" for="email">Ваш e-mail (обязательно)</label>
                        <input required="" type="email"  className="form-control" /><label class="mt-3 form-label" for="message">Сообщение</label>
                        <textarea required=""  className="form-control"></textarea>
                        <div className="text-center">
                            <button type="submit" className="mt-4 btn btn-primary">Отправить</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Contactus