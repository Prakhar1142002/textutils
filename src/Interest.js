import React from 'react'
import Navbar2 from './components/Navbar2'
import './Interest.css'
export default function Interest() {
    return (
        <>
            <Navbar2 />
            {/* <div className="sectorsss">
            <div className="sect1">
                <img src="img/cover 1.png" alt="Loading" />
                Music
            </div>
            <div className="sect2">
                <img src="img/cover 2.png" alt="Loading" />
                Sports
            </div>
            <div className="sect3">
                <img src="img/cover 3.png" alt="Loading" />
                News
            </div>
            <div className="sect4">
                <img src="img/cover 4.png" alt="Loading" />
                Entertainment
            </div>
            <div className="sect5">
                <img src="img/cover 5.png" alt="Loading" />
                Education
            </div>
            <div className="sect6">
                <img src="img/cover 6.png" alt="Loading" />
                Movies
            </div>
        </div> */}

            {/* Trail */}
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
                <div class="sect"><a href="#contact">
                    <img src="img/cover 3.png" alt="Loading" />
                    News
                </a>
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
