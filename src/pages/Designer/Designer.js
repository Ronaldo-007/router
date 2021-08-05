import React from 'react'
import Footer from '../../container/Footer'
import './Designer.css'

const Designer = () => {
    return (<div className="App">
        <div className="onas">
            <div>
                <h1>Designer</h1>
            </div>
        </div>

        <div class=" cvdOze section-padding">
            <div class="container">
                <div class="title__TitleWrapper-sc-1ef4zkx-0 jLYewO">
                    <h1>Создайте интерьер своего лифта</h1>
                    <h3 className="text-center"> ________________________</h3>
                </div>
                <div class="mt-5 row">
                    <div class="col-md-5">
                        <div class="liftstyle__LiftWrapper-gz551l-0 hrMPpR">
                            <div class="lift-container">
                                <img src="images/frame.png" />
                                
                            </div>
                            <ul class="lift-parametres"></ul>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-12">
                        <div class="stepstyle__StepWrapper-w680es-0 jspppC">
                            <p>Создайте свой собственный интерьер лифта онлайн уже сегодня. Выберите дизайн из коллекции "COMPANY NAME", комбинируйте материалы, освещение и аксессуары, чтобы создать уникальный интерьер лифта.</p>
                        </div>
                        <div class="jspppC">
                            <h1>
                                Шаг 1 - Размеры подъемника</h1>
                            <form novalidate="" class="">
                                <div class="form-group row">
                                    <label for="formHorizontalHeight" class="form-label col-form-label col-xl-3 col-sm-4">Высота (мм)</label>
                                    <div class="col-lg-9 col-sm-8">
                                        <input placeholder="Высота" min="0" required="" type="number" id="formHorizontalHeight" class="form-control" value="" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="formHorizontalHeight" class="form-label col-form-label col-xl-3 col-sm-4">Глубина (мм) Боковые стенки</label>
                                    <div class="col-lg-9 col-sm-8">
                                        <input placeholder="Глубина" min="0" required="" type="number" id="formHorizontalHeight" class="form-control" value="" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="formHorizontalHeight" class="form-label col-form-label col-xl-3 col-sm-4">Ширина (мм) Задние стенки</label>
                                    <div class="col-lg-9 col-sm-8">
                                        <input placeholder="Ширина" min="0" required="" type="number" id="formHorizontalHeight" class="form-control" value="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="stepstyle__StepWrapper-w680es-0 jspppC ">
                            <h1><b>Шаг 2</b> - Выберем цвет боковых стенок</h1>
                            <ul class="gallery-grid">
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture01_NllNXd8.jpg" /></li>
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture03_vy90iSd.jpg" /></li>
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture07_MqePO8i.jpg" /></li>
                            </ul>
                        </div>
                        <div class="stepstyle__StepWrapper-w680es-0 jspppC">
                            <h1>Шаг 3- Выберем цвет задней стенки</h1>
                            <ul class="gallery-grid">
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture01.jpg" /></li>
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture03.jpg" /></li>
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/texture07.jpg" /></li>
                            </ul>
                        </div>
                        <div class="stepstyle__StepWrapper-w680es-0 jspppC">
                            <h1>Шаг 4 - Выберем стиль зеркала</h1>
                            <ul class="gallery-grid">
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/icon-mirror-half.png" /></li>
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/icon-mirror-half-small.png" /></li>
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/icon-mirror-full_0oE6vfK.png" /></li>
                                <li class="item">
                                    <img src="images/icon-mirror-none.png" /></li>
                            </ul>
                        </div>
                        <div class="stepstyle__StepWrapper-w680es-0 jspppC">
                            <h1>Шаг 5 - Возьмем поручни</h1>
                            <ul class="gallery-grid">
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/handrails1.jpg" /></li>
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/handrails2.jpg" /></li>
                                <li class="item">
                                    <img src="images/icon-mirror-none.png" /></li>
                            </ul>
                        </div>
                        <div class="stepstyle__StepWrapper-w680es-0 jspppC">
                            <h1><b>Шаг 6</b> - Выберем пол</h1>
                            <ul class="gallery-grid">
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/floors01.jpg" /></li>
                            </ul>
                        </div>
                        <div class="stepstyle__StepWrapper-w680es-0 jspppC">
                            <h1>Тип пола</h1>
                            <ul class="gallery-grid">
                                <li class="item square "><span>Винил</span></li>

                                <li class="item square">Резиновый</li>
                            </ul>
                        </div>
                        <div class="stepstyle__StepWrapper-w680es-0 jspppC size-sm">
                            <h1><b>Шаг 7</b> - Подберем потолочное освещение</h1>
                            <ul class="gallery-grid">
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/ceiling5.jpg" /></li>
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/ceiling1.jpg" /></li>
                                <li class="item">
                                    <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/17/ceiling3.jpg" /></li>
                            </ul>
                        </div>
                        <div class="stepstyle__StepWrapper-w680es-0 jspppC">
                            <h1><b>Шаг 8</b> - Детали проекта</h1>
                            <form novalidate="" class="">
                                <div class="form-group row">
                                    <label for="formProjectName" class="form-label col-form-label col-xl-3 col-sm-4">Название проекта</label>
                                    <div class="col-lg-9 col-sm-8"><input required="" type="text" id="formProjectName" class="form-control" value="" />
                                    </div>
                                </div>
                                <div class="mt-2 form-group row">
                                    <label for="formCompanyName" class="form-label col-form-label col-xl-3 col-sm-4">Название компании</label>
                                    <div class="col-lg-9 col-sm-8">
                                        <input required="" type="text" id="formCompanyName" class="form-control" value="" />
                                    </div>
                                </div>
                                <div class="mt-2 form-group row">
                                    <label for="formContactName" class="form-label col-form-label col-xl-3 col-sm-4">Контактное лицо</label>
                                    <div class="col-lg-9 col-sm-8">
                                        <input required="" type="text" id="formContactName" class="form-control" value="" />
                                    </div>
                                </div>
                                <div class="mt-2 form-group row ">
                                    <label for="formAddress" class="form-label col-form-label col-xl-3 col-sm-4">Адрес</label>
                                    <div class="col-lg-9 col-sm-8">
                                        <input required="" type="text" id="formAddress" class="form-control" value="" />
                                    </div>
                                </div>
                                <div class="mt-2 form-group row"><label for="formPostCode" class="form-label col-form-label col-xl-3 col-sm-4">Почтовый индекс</label>
                                    <div class="col-lg-9 col-sm-8">
                                        <input required="" type="text" id="formPostCode" class="form-control" value="" />
                                    </div>
                                </div>
                                <div class="mt-2 form-group row">
                                    <label for="formPhoneNumber" class="form-label col-form-label col-xl-3 col-sm-4">Номер телефона</label>
                                    <div class="col-lg-9 col-sm-8">
                                        <input required="" type="tel" id="formPhoneNumber" class="form-control" value="" />
                                    </div>
                                </div>
                                <div class="mt-2 form-group row">
                                    <label for="formEmail" class="form-label col-form-label col-xl-3 col-sm-4">Электронной почты</label>
                                    <div class="col-lg-9 col-sm-8"><input required="" type="email" id="formEmail" class="form-control" value="" />
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center mt-4 col">
                                    <button type="submit" class="btn btn-primary">Отправить запрос</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
    )
}

export default Designer