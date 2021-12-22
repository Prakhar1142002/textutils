import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <div class="container-fluid" style={{ paddingTop: '0px' }}>
                {/* <!-- NavBar --> */}
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class=" container-fluid">
                        <div class="col-lg-6 left-half">
                            <Link class="navbar-brand" style={{ color: '#FF8000', fontSize: '4rem', letterSpacing: '3px', marginTop: '0' }} to="/">MeetCon</Link>
                        </div>
                        <button class="navbar-toggler btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            style={{ marginRight: '5px' }}>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse flex-row-reverse ml-auto" id="navbarSupportedContent">

                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login" style={{fontWeight: 'bold'}}>Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/signup" style={{fontWeight: 'bold'}}>Signup</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about" style={{fontWeight: 'bold'}}>About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
