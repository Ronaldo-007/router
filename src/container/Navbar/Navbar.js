

import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Navbar.css"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

let menu = [
    { rasm: "https://osten-co.uz/images/osten.svg" },
    { to: "/", title: "Menu" },
    { to: "/onas", title: "ONas" },
    { to: "/production", title: "Production" },
    { to: "/services", title: "Services" },
    { to: "/products", title: "Products" },
    { to: "/designer", title: "Designer" },
    { to: "/news", title: "News" },
    { to: "/contactus", title: "Contactus" },
]



class Navbar extends React.Component {
    state = { a: false }

    showNavbar = () => {
        this.setState((state) => {
            return { a: !state.a }
        })
    }


    render() {
        return <div className="bar py-4">
            <div className="container container-flied d-flex justify-content-between align-items-center ">

                <img src="images/osten.svg" alt="" />
            
                <div className={`nav__menu ${this.state.a && "show__nav" || ""}`}>
                    {menu.map((item, value) => <Link to={item.to} key={item.to} className=" nav__link">
                      
                        {item.title}</Link>)}

                    <button className="btn btn__close" onClick={this.showNavbar}><FontAwesomeIcon icon={faTimes} /></button>

                    
                </div>

                <button className="btn btn__open" onClick={this.showNavbar}><FontAwesomeIcon icon={faBars} /></button>
            </div>
        </div>

    }
}

export default Navbar;