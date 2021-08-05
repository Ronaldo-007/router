
import Footer from '../../container/Footer'
import Gallery from '../../container/Gallery'
import Section from '../../container/Section'
import Section2 from '../../container/Section2'
import './Menu.css'


const Menu = () => {
    return (<div className="App">

        <div className="menu ">


            <div className="container">
                <div className="css-cxqlfv">
                    <h1 className="gap">«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии</h1>
                </div>
                <div className="css-1xbb6c7">
                    <p className="book">Компания «Osten» была основана в 2019 году!</p>
                </div>
                <div className="css-g6dsm5">
                    <a className="mylink__ALink-v0deg6-0" rel="noopener noreferrer" href="/about">
                        <button type="button" className="btn btn-primary">ПОДРОБНЕЕ</button>
                    </a>
                </div>
            </div>
    
        </div>
        <Section />
        <Section2 />
        <Gallery />
        <Footer />
    </div>

    )
}

export default Menu

