import React from 'react'
import Item from '../Item'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="/assets/images/home/img1.jpg" class="d-block w-100" alt="Blouse" height="500px"/>
                <div class="carousel-caption d-none d-md-block">
                  <h4 className="text-right">New Arrival</h4>
                  <h2>Chrochet<br/>Sweater</h2>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="/assets/images/home/img2.jpg" class="d-block w-100" alt="Blouse" height="500px"/>
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img src="/assets/images/home/img3.jpg" class="d-block w-100" alt="..." height="500px"/>
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <Item />
        </div>
    )
}

export default Home
