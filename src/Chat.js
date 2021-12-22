import React from 'react'
import './Chat.css'
import Navbar2 from './components/Navbar2'
import './Homepage.css'

export default function Chat() {
    return (
        <>
            <Navbar2/>

            <div class="below_nav">
        <div class="container1">
            <input type="search" placeholder="Search Contacts" class="searchbox"/>
            <div class="input-icons">
                <i class="fa fa-user icon"></i>
                <input class="input-field" type="search" placeholder="Recents"/>
                <select class="recents">
                    <option value="volvo">Prakhar</option>
                    <option value="saab">Atharva</option>
                    <option value="opel">Pushkaraj</option>
                    <option value="audi">Ratan</option>
                </select>
            </div>
            <hr/>
            <div class="contacts">
                <div class="list_contacts">
                    <div class="Contact1">
                        <img src="img/cover 1.png" alt=""/>
                        Contact1
                        <hr/>
                    </div>
                    <div class="Contact2">
                        <img src="img/cover 1.png" alt=""/>
                        Contact2
                        <hr/>
                    </div>
                    <div class="Contact3">
                        <img src="img/cover 1.png" alt=""/>
                        Contact3
                        <hr/>
                    </div>
                    <div class="Contact4">
                        <img src="img/cover 1.png" alt=""/>
                        Contact4
                        <hr/>
                    </div>
                    <div class="Contact5">
                        <img src="img/cover 1.png" alt=""/>
                        Contact5
                        <hr/>
                    </div>
                    <div class="Contact6">
                        <img src="img/cover 1.png" alt=""/>
                        Contact6
                        <hr/>
                    </div>
                    <div class="Contact7">
                        <img src="img/cover 1.png" alt=""/>
                        Contact7
                        <hr/>
                    </div>
                    <div class="Contact8">
                        <img src="img/cover 1.png" alt=""/>
                        Contact8
                        <hr/>
                    </div>
                    <div class="Contact9">
                        <img src="img/cover 1.png" alt=""/>
                        Contact9
                        <hr/>
                    </div>
                    <div class="Contact10">
                        <img src="img/cover 1.png" alt=""/>
                        Contact10
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container2">
            <h3>Chats</h3>
            <hr/>
            <div class="Contact1">
                <div class="activity">
                    Online
                </div>
                <img src="img/cover 1.png" alt=""/>
                <div class="sub_container2">
                    <p><b>Contact1</b></p>   
                </div> <hr/>
                <div class="msgs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere, aliquam obcaecati aut sapiente est sunt ab nemo itaque iusto beatae minima odio ad adipisci eum totam iure nulla. Consequatur.
                </div>
                <div class="our_msgs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere, aliquam obcaecati aut sapiente est
                </div>
                <div class="msgs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere, aliquam obcaecati aut sapiente est Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ipsam.
                </div>
            </div>

        </div>
    </div>
        </>
    )
}
