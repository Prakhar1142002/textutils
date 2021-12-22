import React from 'react'
import Navbar2 from './components/Navbar2'
import './Profile.css'

export default function Profile() {
    return (
        <>
            <Navbar2/>

            <header>
        <div class="container">
            <div class="profile">
                <div class="profile-image">
                    <img src="img/dp1.jpg" alt="user"/>
                </div>
                <div class="profile-user-settings">
                    <h1 class="profile-user-name" style={{color: 'white'}}><b>Meetcon_Developers</b></h1>
                    <button class="btn profile-edit-btn">Edit Profile</button>
                    <button class="btn profile-settings-btn" aria-label="Profile Settings"><i class="fas fa-cog" aria-hidden=""></i></button>
                </div>
                <div class="profile-stats">
                    <ul>
                        <li><span class="profile-stat-count">104 </span>posts</li>
                        <li><span class="profile-stat-count">1640 </span>followers</li>
                        <li><span class="profile-stat-count">1250 </span>following</li>
                    </ul>
                </div>
                <div class="profile-bio">
                    <p><span class="profile-real-name" style={{color: 'white'}}>Meetcon Dev.</span> Prakhar Rai, Atharva Patilpate, Pushkaraj Bhor, Ratan Patil</p>
                </div>
            </div>
            {/* <!-- end of profile section --> */}
        </div>
        {/* <!--end of container--> */}
    </header>

    <main>
        <div class="container">
            <div class="gallery">
                <div class="gallery-item"tabindex="0">
                    <img src="img/cover 6.png" alt="" class="gallery-image"/>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
                <div class="gallery-item"tabindex="0">
                    <img src="https://i.pinimg.com/564x/30/a2/e2/30a2e232eb87ee1d8cc3512f4200a101.jpg" alt="" class="gallery-image"/>
                    <div class="gallery-item-type">
                        <span class="visually-hidden">Gallery</span>
                        <i class="fas-fa-clone" aria-hidden></i>
                    </div>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
                <div class="gallery-item"tabindex="0">
                    <img src="https://img.freepik.com/free-photo/silhouette-dj-gesturing-spinning-turntable_85574-4076.jpg?size=626&ext=jpg" alt="" class="gallery-image"/>
                    <div class="gallery-item-type">
                        <span class="visually-hidden">Video</span>
                        <i class="fas-fa-video" aria-hidden></i>
                    </div>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
                <div class="gallery-item"tabindex="0">
                    <img src="img/cover 6.png" alt="" class="gallery-image"/>
                    <div class="gallery-item-type">
                        <span class="visually-hidden">Gallery</span>
                        <i class="fas-fa-clone" aria-hidden></i>
                    </div>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
                <div class="gallery-item"tabindex="0">
                    <img src="img/cover 6.png" alt="" class="gallery-image"/>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
                <div class="gallery-item"tabindex="0">
                    <img src="img/cover 6.png" alt="" class="gallery-image"/>
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden></i>1,012</li>
                            <li class="gallery-item-comments"><span class="visualy-hidden">Comments:</span><i class="fas fa-comment" aria-hidden></i>391</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- end of gallery--> */}
        </div>
        <div class="loader"></div>
    </main>
        </>
    )
}
