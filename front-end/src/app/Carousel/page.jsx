"use client"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import React from 'react'

function UncontrolledExample() {
  return (
    <div className="frontpage-slider">
    <Carousel className="owl-slider owl-slider-header owl-slider-fullscreen">
      <Carousel.Item className="item">
        <img src="https://images.unsplash.com/photo-1493243350443-9e3048ce7288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80" text="First slide" />
        <Carousel.Caption >
        <div
						className='carousel-caption'
						>
						<div className="box text-center">
							<div className="container">
								<div className="rating animated" data-animation="fadeInDown">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<h2 className="title animated h1" data-animation="fadeInDown">
									A moment of <br />
									<span>pure prestige</span>
								</h2>
								<div className="desc animated" data-animation="fadeInUp">
									Lavish social and business events
								</div>
								<div className="desc animated" data-animation="fadeInUp">
									and unforgettable weddings.
								</div>
								<div className="animated" data-animation="fadeInUp">
									<a
										href="https://themeforest.net/item/colina-hotel-website-template/20977257"
										className="btn btn-clean"
										>Buy this template</a>
								</div>
							</div>
						</div>
					</div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img src="https://plus.unsplash.com/premium_photo-1672004854448-9115b9309e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" text="Second slide" />
        <Carousel.Caption>
        <div  className="box text-center">
        <div className='carousel-caption'>

<div className="container">
  <h2 className="title animated h1" data-animation="fadeInDown">
    The privacy and <br />
    individuality of a custom
  </h2>
  <div className="desc animated" data-animation="fadeInUp">
    The Residences have their own dedicated private entrance as well <br />
    as an anonymous "celebrity" entrance, for ultimate privacy.
  </div>
  <div className="animated" data-animation="fadeInUp">
    <a href="#" className="btn btn-clean">Virtual tour</a>
  </div>
</div>
</div>

        </div>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img src="https://images.unsplash.com/photo-1551983914-4ab58d6b1018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1799&q=80" text="Third slide" />
        <Carousel.Caption className="item">
        <div className="box text-center">
      <div className="container">
        <div className="rating animated" data-animation="fadeInDown">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <h2 className="title animated h1" data-animation="fadeInDown">
          Fairmont managed!
        </h2>
        <div className="desc animated" data-animation="fadeInUp">
          The elegant Champagne Bar, the stylish Colina Club.
        </div>
        <div className="desc animated" data-animation="fadeInUp">
          Guestrooms and luxurious suites
        </div>
        <div className="animated" data-animation="fadeInUp">
          <a href="#" className="btn btn-clean">Get inspired</a>
        </div>
      </div>
    </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;