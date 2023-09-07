"use client"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import image1 from '../assets/images/blue-pool-sky.avif'
import image2 from '../assets/images/hotel-lumineux.avif'
import image3 from '../assets/images/chambre-yellow-light.avif'


function UncontrolledExample() {
  return (
    <div className="frontpage-slider">
    <Carousel >
    <Carousel.Item className="item" style={{ "backgroundImage": `url(${image1.src})` }}>
        
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
								</div>
							</div>
						</div>
					</div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item" style={{ "backgroundImage": `url(${image2.src})` }}>
        <Carousel.Caption>
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
								</div>
							</div>
						</div>
					</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item" style={{ "backgroundImage": `url(${image3.src})` }}>
        <Carousel.Caption>
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
								</div>
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