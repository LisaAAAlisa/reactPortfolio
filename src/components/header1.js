import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import { Navbar} from "react-bootstrap";

const header = () => {

    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-light border-bottom">
        <a className="navbar-brand" href="./index.html">Alisa Macedo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <Router>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to={{ pathname: '/portfolio', state: 'flushDeal'}}>Portfolio</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/alisa-macedo-4470b331/"
                        target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/LisaAAAlisa"
                        target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./contact.html">Contact</a>
                </li>
            </ul>
            </Router>
        </div>
    </Navbar>
        </div>
    )
}

export default header
