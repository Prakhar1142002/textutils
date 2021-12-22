import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar2() {
    return (
        <>
            {/* <nav class="navbarop">
                <div class="nav-wrapperrrr">
                    
                <Link to="/"><img src="img/meetcon.png" class="brand-img" alt="" /></Link>
                    
                    <input type="search" name="search" class="search-box" placeholder="Search Here" autocomplete="on" />

                    <div class="nav-items">
                        <Link to="/homepage">
                            <img src="img/home.PNG" class="icon" alt="Loading" />
                        </Link>
                        <Link to="/chat">
                            <img src="img/messenger.PNG" class="icon" alt="Loading" />
                        </Link>
                        <a href="add.html">
                            <img src="img/add.PNG" class="icon" alt="Loading" />
                        </a>
                        <Link to="/interest">
                            <img src="img/explore.PNG" class="icon" alt="Loading" />
                        </Link>
                        <a href="likes.html">
                            <img src="img/like.PNG" class="icon" alt="Loading" />
                        </a>
                        <Link to="/profile"> */}
                            {/* <div class="icon user-profile"></div> */}
                            {/* <img src="img/dp1.jpg" class="icon" style={{borderRadius: '30%'}} alt="Loading" />
                        </Link>
                    </div>
                </div>
            </nav> */}



            {/* New Navbar */}
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#11324D'}}>

            <div>
                <Link class="navbar-brand" style={{color: '#FF8000', fontSize: '4rem', letterSpacing: '3px', margin: '6rem'}} to="/">MeetCon</Link>
            </div>

            <div class="mb" style={{width: '28rem', margin: '0 3rem'}}>
                <input type="text" class="form-control" id="search" placeholder="Search"/>
            </div>

            <button class="navbar-toggler btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                style={{marginRight: '5rem'}}>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse flex-row-reverse ml-auto" id="navbarSupportedContent">

                <ul class="navbar-nav">

                <Link class="link-icons" to="/homepage"><i class="fas fa-home fa-2x" style={{color: '#3FC1C9'}}></i></Link>
                {/* <a class="link-icons" href="#"><i class="fas fa-search fa-2x" style={{color: '#3FC1C9'}}></i></a> */}
                <Link class="link-icons" to="/interest"><i class="fas fa-plus-circle fa-2x" style={{color: '#3FC1C9'}}></i></Link>
                <Link class="link-icons" to="/chat"><i class="fas fa-comments fa-2x" style={{color: '#3FC1C9'}}></i></Link>
                {/* <a class="link-icons" href="#"><i class="fas fa-user fa-2x" style={{color: '#3FC1C9', marginRight: '5rem'}}></i></a> */}
                <Link class="link-icons" to="/profile" style={{height:'35px', width:'50px'}}> 
                    {/* <div class="icon user-profile"></div> */}
                    <img src="img/dp1.jpg" class="icon" style={{borderRadius: '30%'}} alt="Loading" />
                </Link>

                </ul>
            </div>

            </nav>
        </>
    )
}
