import React from 'react'
import Footer from '../../container/Footer'
import './Products.css'

const Products = () => {
    return (<div className="App">

        <div className="onas">
            <div>
                <h1>Products</h1>
            </div>
        </div>

        <div className="products-sectionstyle__ProductsSectionWrapper-sxdnvp-0 lmeosf section-padding-only-top">
            <div className="container">
                <div className="css-cxqlfv">
                    <div color="#09152D" class="title__TitleWrapper-sc-1ef4zkx-0 jLYewO">
                        <h1>ПРОДУКЦИЯ</h1>
                        <h3 className="text-center"> ________________________</h3>
                    </div>
                </div>
                <nav className="mt-5 products nav nav-tabs" role="tablist">
                    <a  href="#" role="tab" data-rb-event-key="UHJvZHVjdENhdGVnb3J5Tm9kZTox" aria-controls="noanim-tab-example-tabpane-UHJvZHVjdENhdGVnb3J5Tm9kZTox" aria-selected="false" class="nav-item nav-link ">
                        Поручни лифтов</a>
                    <a href="#" role="tab" data-rb-event-key="UHJvZHVjdENhdGVnb3J5Tm9kZToz" aria-controls="noanim-tab-example-tabpane-UHJvZHVjdENhdGVnb3J5Tm9kZToz" aria-selected="false" class="nav-item nav-link">
                        Опции</a>
                    <a  href="#" role="tab" data-rb-event-key="UHJvZHVjdENhdGVnb3J5Tm9kZToy" aria-controls="noanim-tab-example-tabpane-UHJvZHVjdENhdGVnb3J5Tm9kZToy" aria-selected="true" class="nav-item nav-link active">
                        Кабины лифтов</a>
                </nav>
                <div className="tab-content">
                    <div aria-labelledby="noanim-tab-example-tab-UHJvZHVjdENhdGVnb3J5Tm9kZTox" role="tabpanel" aria-hidden="true" class="tab-pane ">
                        <div className="mt-5 row">
                        </div>
                    </div>
                    <div  aria-labelledby="noanim-tab-example-tab-UHJvZHVjdENhdGVnb3J5Tm9kZToz" role="tabpanel" aria-hidden="true" class="tab-pane">
                        <div className="mt-5 row">
                        </div>
                    </div>
                    <div  aria-labelledby="noanim-tab-example-tab-UHJvZHVjdENhdGVnb3J5Tm9kZToy" role="tabpanel" aria-hidden="false" class="tab-pane active py-5 my-5">
                        <div className="mt-5 row">
                            <div className="col-sm-6 col-md-4 col-lg-3 mt-2 css-sanqhm">
                                <div className="products-section__Product-fiwgrk-0 kzfvsA">
                                    <a className="mylink__ALink-v0deg6-0 iBcdlu w-100" rel="noopener noreferrer" href="/products/UHJvZHVjdE5vZGU6Mw==">
                                        <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg" alt="no photo" />
                                        <h3 className="m-2">osten l3</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mt-2 css-sanqhm">
                                <div className="products-section__Product-fiwgrk-0 kzfvsA">
                                    <a className="mylink__ALink-v0deg6-0 iBcdlu w-100" rel="noopener noreferrer" href="/products/UHJvZHVjdE5vZGU6Mg==">
                                        <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg" alt="no photo" />
                                        <h3 className="m-2">OSTEN L2</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 mt-2 css-sanqhm">
                                <div className="products-section__Product-fiwgrk-0 kzfvsA">
                                    <a className="mylink__ALink-v0deg6-0 iBcdlu w-100" rel="noopener noreferrer" href="/products/UHJvZHVjdE5vZGU6MQ==">
                                        <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg" alt="no photo" />
                                        <h3 className="m-2">OSTEN L1</h3>
                                    </a>
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

export default Products