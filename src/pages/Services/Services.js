import React from 'react'
import Footer from '../../container/Footer'
import './Services.css'

const Services = () => {
    return (<div className="App">
        <div className="onas">
            <div>
                <h1>Services</h1>
            </div>
        </div>
        <div className="services-sectionstyle__ServicesSectionWrapper-sc-1qewxxn-0 dcxwyR section-padding-only-top">
            <div className="container">
                <div color="#09152D" class="title__TitleWrapper-sc-1ef4zkx-0 jLYewO">
                    <h1>Услуги</h1>
                    <h3 className="text-center"> ________________________</h3>
                </div>
                <div className="mt-5 row">
                    <div className="col-md-3 col-sm-12">
                        <div className="flex-column nav nav-pills" role="tablist">
                            <div className="nav-item">
                                <a href="#" role="tab" data-rb-event-key="key1" id="left-tabs-example-tab-key1" aria-controls="left-tabs-example-tabpane-key1" aria-selected="false" class="nav-link">
                                    Проектирование</a>
                            </div>
                            <div className="nav-item">
                                <a href="#" role="tab" data-rb-event-key="key2" id="left-tabs-example-tab-key2" aria-controls="left-tabs-example-tabpane-key2" aria-selected="false" class="nav-link">
                                    Монтаж лифтов и лифтового оборудования</a>
                            </div>
                            <div className="nav-item">
                                <a href="#" role="tab" data-rb-event-key="key3" id="left-tabs-example-tab-key3" aria-controls="left-tabs-example-tabpane-key3" aria-selected="false" class="nav-link">
                                    Техническое обслуживание лифтов и лифтового оборудования</a>
                            </div>
                            <div className="nav-item">
                                <a href="#" role="tab" data-rb-event-key="key4" id="left-tabs-example-tab-key4" aria-controls="left-tabs-example-tabpane-key4" aria-selected="false" class="nav-link">
                                    Запасные части</a>
                            </div>
                            <div className="nav-item">
                                <a href="#"  aria-selected="true" class="nav-link active">
                                    Ремонт лифтов и лифтового оборудования</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 mt-md-0 pl-md-4 pl-lg-3 col-md-9 col-sm-12">
                        <div className="tab-content">
                            <div id="left-tabs-example-tabpane-key1" aria-labelledby="left-tabs-example-tab-key1" role="tabpanel" aria-hidden="true" class="fade tab-pane">
                                <div>
                                    <p>У нас Вы можете заказать любой проект лифтового оборудования а так же дизайн, эксклюзивные лифты на заказ по желанию клиента.</p>
                                </div>
                            </div>
                            <div id="left-tabs-example-tabpane-key2" aria-labelledby="left-tabs-example-tab-key2" role="tabpanel" aria-hidden="true" class="fade tab-pane">
                                <div>
                                    <p>Монтаж лифтового оборудования производится в согласованные с клиентом сроки. Специалисты компании произведут все необходимые диагностические и пуско-наладочные работы.</p>
                                    <p><b>Преимущества монтажа</b></p>
                                    <ul>
                                        <li>Контактное лицо для каждого проекта по монтажу лифтового и эскалаторного оборудования</li>
                                        <li>Профессиональные консультации на каждом этапе монтажа оборудования</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="left-tabs-example-tabpane-key3" aria-labelledby="left-tabs-example-tab-key3" role="tabpanel" aria-hidden="true" class="fade tab-pane">
                                <div>
                                    <p>Качественное техническое обслуживание лифтового оборудования, лифтов, эскалаторов и конвейеров подразумевает прозрачность, гибкость и регулярность осмотра механизмов и электроники. Мы гарантируем высокую работоспособность Вашего лифтового и подъемного оборудования, быструю поставку качественных запасных частей.</p>
                                    <p>Специалисты проведут все необходимые диагностические работы, произведут пуско-наладочные работы, подготовят механизм к работе, устранят любые возможные неполадки. А предотвратить ранний выход оборудования и запчастей из строя поможет система мониторинга, которую мы рекомендуем ставить нашим клиентам.</p><p>Мы сделаем все, чтобы Ваше лифтовое и эскалаторное оборудование работало. И хотели бы еще раз напомнить, что регулярное техническое обслуживание лифтов и лифтового оборудования позволят существенно продлить срок службы и повысить безопасность. Доверьте ремонт и обслуживание лифтов профессионалам.</p>
                                </div>
                            </div>
                            <div id="left-tabs-example-tabpane-key4" aria-labelledby="left-tabs-example-tab-key4" role="tabpanel" aria-hidden="true" class="fade tab-pane">
                                <div>
                                    <p><b>Если Ваше лифтовое и эскалаторное оборудование вышло из строя — мы быстро поможем решить Вашу проблему</b></p><p>Благодаря заводу MLS всегда оперативно доступны запасные части для лифтов, эскалаторов, пассажирских конвейеров.</p>
                                </div>
                            </div>
                            <div id="left-tabs-example-tabpane-key5" aria-labelledby="left-tabs-example-tab-key5" role="tabpanel" aria-hidden="false" class="fade tab-pane active show">
                                <div>content
                                    <p>Качественный ремонт лифтового оборудования, лифтов, эскалаторов и траволаторов. Мы гарантируем высокую работоспособность Вашего лифтового и эскалаторного оборудования, быстрое устранение неисправностей и поставку качественных запасных частей.</p>
                                    <p>Наша компания предлагает услуги по техническому обслуживанию и ремонту лифтов. Специалисты компании «MLS» осуществляют ремонт любых типов лифтов, включая пассажирские, грузовые, панорамные, коттеджные лифты и даже сложные подъемные механизмы. С полным перечнем ремонтируемого оборудования можно ознакомиться в разделе каталог. В штате работают квалифицированные сотрудники, которые в кратчайшие сроки произведут ремонт лифта, даже если он требует капитального ремонта, и подготовят механизм к работе, при этом простой в работе оборудования будет минимальным.</p>
                                    <p>Ремонт лифтов будет произведен строго в согласованные с клиентом сроки. У нас всегда выгодные тарифы на ремонт лифтов, а сроки ремонта напрямую зависит от сложности заказа – требуется ли комплексный ремонт лифтового оборудования или лишь замена какой-то одной детали.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
    )
}

export default Services