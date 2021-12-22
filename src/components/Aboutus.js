import React from 'react'
import Navbar from './Navbar'

export default function Aboutus() {
    return (
        <div>
            <Navbar/>
            <h2>Developers of Meetcon</h2>
            <li className="name" style={{color: 'white', paddingLeft: '10px'}}>Prakhar Rai</li>
            <li className="name" style={{color: 'white', paddingLeft: '10px'}}>Atharva Patilpate</li>
            <li className="name" style={{color: 'white', paddingLeft: '10px'}}>Ratan Patil</li>
            <li className="name" style={{color: 'white', paddingLeft: '10px'}}>Pushkaraj Bhor</li>
        </div>
    )
}
