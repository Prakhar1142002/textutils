import React from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from './components/Navbar2'
import './Interest.css'
export default function Interest() {
    return (
        <>
            <Navbar2 />

            <div className="scrollmenu">
                <div class="sect"><a href="#home">
                    <img src="img/cover 1.png" alt="Loading" />
                    Music
                </a>
                </div>
                <div class="sect"><a href="#news">
                    <img src="img/cover 2.png" alt="Loading" />
                    Sports
                </a>
                </div>
                <div class="sect"><Link to="/news">
                    <img src="img/cover 3.png" alt="Loading" />
                    News
                </Link>
                </div>
                <div class="sect"><a href="#about">
                    <img src="img/cover 4.png" alt="Loading" />
                    Entertainment
                </a>
                </div>
                <div class="sect"><a href="#about">
                    <img src="img/cover 5.png" alt="Loading" />
                    Education
                </a>
                </div>
                <div class="sect"><a href="#about">
                    <img src="img/cover 6.png" alt="Loading" />
                    Bollywood
                </a>
                </div>
                <div class="sect"><a href="#about">
                    <img src="img/cover 7.png" alt="Loading" />
                    Hollywood
                </a>
                </div>
            </div>
        

        </>
    )
}
