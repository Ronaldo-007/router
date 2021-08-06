import React from 'react'
import Footer from '../../container/Footer'
import Gallery2 from '../../container/Gallrey2/Gallrey2'
import './News.css'

const News = () => {
    return (<div className="App">

        <div className="onas">
            <div>
                <h1>News</h1>
            </div>
        </div>

        <div className="container">
            <div>
                <h1 className="text-center py-5">Новости</h1>
                <h3 className="text-center">___________________________</h3>
            </div>

            <div className="row my-5">
                <div className="col-lg-4 col-sm-12">
                    <a href="#" >
                        <div className="card shadow">
                            <img src="images/OSTENm.jpg" alt="" />
                            <h4 className="m-3">Построен новый лифт</h4>
                        </div>
                    </a>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <a href="#" >
                        <div className="card shadow">
                            <img src="images/OSTENn.jpg" alt="" />
                            <h4 className="m-3">РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</h4>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <a href="#" >
                        <div className="card shadow">
                            <img src="images/OSTENb.jpg" alt="" />
                            <h4 className="m-3">ДИСПЕТЧЕРИЗАЦИЯ</h4>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <a href="" >
                        <div className="card shadow">
                            <img src="images/liftpartner.png" alt="" />
                            <h4 className="m-3">ПАССАЖИРСКИЕ ЛИФТЫ</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <Gallery2 />
        <Footer />
    </div>
    )
}

export default News