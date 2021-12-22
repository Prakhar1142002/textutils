import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Login() {
    return (
        <>
            <Navbar/>
            <div class="container-fluid">
                <div class=" row row-cols-2">

                    <div class="col-6 left-half-image">
                        <img class="title-image" src="images/person2.png" alt="person2" style={{ width: '80%', marginLeft: '1rem' }} />
                    </div>
                    <div class="col-6">
                        <div class="form-div">

                            <form>
                                <div class="mb-3">
                                    <input type="email" class="form-control form-control-lg" placeholder="Email address" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control form-control-lg" placeholder="Password" id="exampleInputPassword1" />
                                </div>

                                <Link class="go_to_homepage" to="/homepage">
                                <button type="submit" class="btn btn-lg btn-primary" style={{ margin: '5px' }}>Login</button>
                                </Link>
                                <hr style={{ border: '1px solid', borderRadius: '5px' }} />
                                <Link to="/signup" class="btn btn-lg btn-primary" style={{ margin: '5px 0 0 0' }}>Create New Account</Link>
                                {/* <!-- <button class="btn btn-lg btn-primary" style="margin:5px 0 0 0;">Create New Account</button> --> */}


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
