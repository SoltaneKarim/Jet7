"use client";
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const slide1 =
	"http://www.elathemes.com/themes/colina/assets/images/slide-3.jpg";
const slide2 =
	"http://www.elathemes.com/themes/colina/assets/images/slide-1.jpg";
const slide3 =
	"http://www.elathemes.com/themes/colina/assets/images/slide-2.jpg";
const FrontpageSlider = () => {
	const arrowIcons = [
		'<span class="icon icon-chevron-left"></span>',
		'<span class="icon icon-chevron-right"></span>',
	];

	const owlCarouselOptions = {
		autoHeight: false,
		navigation: true,
		navigationText: arrowIcons,
		items: 1, // Set this to 1 for singleItem: true
		singleItem: true, // Use singleItem: true to show only one item at a time
		addClassActive: true,
		transitionStyle: "fadeUp",

		autoPlay: 8000,
		stopOnHover: false,
	};

	const [activeItemIndex, setActiveItemIndex] = useState(0);

	useEffect(() => {
		const animateCaptions = () => {
			const timeDelay = 100;
			const animatedElements = document.querySelectorAll(
				".owl-slider .owl-item.active .animated",
			);

			animatedElements.forEach((item, index) => {
				const animatedItem = item;
				animatedItem.style.animationDelay = `${timeDelay + index * 180}ms`;
				animatedItem.classList.add(animatedItem.dataset.animation);

				setTimeout(() => {
					animatedItem.classList.remove(animatedItem.dataset.animation);
				}, 2000);
			});
		};
		owlCarouselOptions.afterMove = animateCaptions;

		animateCaptions();
	}, [activeItemIndex]);

	const handleOwlChange = (event) => {
		setActiveItemIndex(event.item.index);
	};
	return (
		<div className="frontpage-slider">
			<div className="container">
				<OwlCarousel
					className="owl-slider owl-slider-header"
					items={owlCarouselOptions.items}
					nav={owlCarouselOptions.navigation}
					navText={owlCarouselOptions.navigationText}
					autoPlay={owlCarouselOptions.autoPlay}
					autoplayHoverPause={owlCarouselOptions.stopOnHover}
					onTranslated={handleOwlChange}
					animateOut={owlCarouselOptions.transitionStyle} // Set the transition style
					afterAction={owlCarouselOptions.afterMove} // Set the afterMove callback
				>
					{/* === slide item === */}
					<div className="item" style={{ backgroundImage: `url(${slide1})` }}>
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
							</div>
						</div>
					</div>

					{/* === slide item === */}

					<div className="item" style={{ backgroundImage: `url(${slide2})` }}>
						<div className="box text-center">
							<div className="container">
								<h2 className="title animated h1" data-animation="fadeInDown">
									The privacy and <br />
									individuality of a custom
								</h2>
								<div className="desc animated" data-animation="fadeInUp">
									The Residences have their own dedicated private entrance as
									well <br />
									as an anonymous "celebrity" entrance, for ultimate privacy.
								</div>
								<div className="animated" data-animation="fadeInUp">
									<a href="#" className="btn btn-clean">
										Virtual tour
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* === slide item === */}

					<div className="item" style={{ backgroundImage: `url(${slide3})` }}>
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
									<a href="#" className="btn btn-clean">
										Get inspired
									</a>
								</div>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</div>
		</div>
	);
};

export default FrontpageSlider;
