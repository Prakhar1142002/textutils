import React from 'react'
import './Main.css'
import Navbar from './components/Navbar'

export default function Main() {
    return (
        <>
            <Navbar />
            {/* componentDidMount(){
                document.body.style.backgroundColor = "#11324D"// Set the style
            } */}
            <section>
                <div class="container-fluid">
                    <div class="row row-cols-2 tagline">
                        <div class="col-6" style={{paddingTop: '30px'}}>
                            <h4>Meet <h6><b>&nbsp;&nbsp;&nbsp;People,</b></h6></h4>
                            <h4>Share <h6><b>&nbsp;&nbsp;&nbsp;Interests,</b></h6></h4>
                            <h4>Create <h6><b>&nbsp;&nbsp;&nbsp;Community.</b></h6></h4>
                        </div>
                        <div class="col-6" style={{paddingTop: '0'}}>
                            <img class="title-image" src="images/person1.png" alt="person1" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
