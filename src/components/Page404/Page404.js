import './Page404.css'

import React from 'react'
import { Link } from 'react-router-dom'


const Page404 = () => {
    return (
        <div className="page404 p-3">

            <Link to="/" className="btn btn-dark">
                Menu
            </Link>

            <div className="container">
                <div className="looc text-center my-5 py-5 mx-5">
                   
                    <div className="d-flex justify-content-center align-items-center my-3">

                        <p>
                            <span className="aaaa">4</span>
                            <span className="ssss">0</span>
                            <span className="dddd">4</span>
                           
                        </p>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="erorr">ERR<span className="ffff">O</span>R</h1>
                    
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page404