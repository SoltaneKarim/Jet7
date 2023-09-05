"use client"
import React, { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {	faFacebook,	faTwitter,	faYoutube,} from "@fortawesome/free-brands-svg-icons"; // Import Font Awesome icons
import logoDesc from "../assets/images/logo.png";


const Header = () => {
  //for the scroll
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust this value to determine when the header becomes sticky
      const threshold = 100;

      if (scrollY > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //toggeling when hover
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [isMobile, setIsMobile] = useState(false);

  function handleMouseEnter(event) {
    const target = event.target;
    if (window.innerWidth < 992) {
      return;
    }
    target.classList.add('hovered');
  }
  
  function handleMouseLeave(event) {
    const target = event.target;
    if (window.innerWidth < 992) {
      return;
    }
    target.classList.remove('hovered');
    target.classList.remove('class'); // Remove all classes from the element
  }
   useEffect(() => {
    const navigationItems = document.querySelectorAll('.navigation-block > ul > li');
    navigationItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    // Clean up event listeners on component unmount
    return () => {
      navigationItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const headerClass = isSticky ? 'sticked' : '';
	return (
		<header className={headerClass}>
			{/* ======================== Navigation ======================== */}
			<div className="container">
				{/* === navigation-top === */}
				<nav className="navigation-top clearfix">
					{/* navigation-top-left */}
					<div className="navigation-top-left">
						<a className="box" href="#">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a className="box" href="#">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a className="box" href="#">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</div>

					{/* navigation-top-right */}
					<div className="navigation-top-right">
						<a className="box" href="#">
							<i className="icon icon-star"></i> Special offers
						</a>

						<a className="box">
							<i className="icon icon-tag"></i> Reservations
						</a>

						<a className="box" href="#">
							<i className="icon icon-phone-handset"></i> (01) 252-3333
						</a>
					</div>
				</nav>

				{/* === navigation-main === */}
				<nav className="navigation-main clearfix">
					{/* logo */}
					<div className="logo animated fadeIn">
					
							<Image 
							className="logo-desktop"
							src ={logoDesc.src}
							width={150}
							height={0}
							/>
						{/* resposive pic when needed */}
						




						
					</div>
					{/* toggle-menu */}
					<div className={`toggle-menu ${menuOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
        <i className="icon icon-menu"></i>
      </div>
					{/* navigation-block */}
					<div className="navigation-block clearfix">
						{/* navigation-left */}
						<ul className="navigation-left">
							<li >
								<a href="/pageloader">
									Home{" "}
									<span className="open-dropdown">
										<i className="fa fa-angle-down"></i>
									</span>
								</a>

								<ul>
									<li>
										<a>Home - Booking intro</a>
									</li>
									<li>
										<a>Home - Booking box</a>
									</li>
									<li>
										<a>Home - Rooms intro</a>
									</li>
								</ul>
							</li>
							<li>
								<a >
									Pages{" "}
									<span className="open-dropdown">
										<i className="fa fa-angle-down"></i>
									</span>
								</a>
								<ul>
									<li>
										<a>About us</a>
									</li>
									<li>
										<a>Rooms category</a>
									</li>
									<li>
										<a>Room overview</a>
									</li>
									<li>
										<a>404 Not found</a>
									</li>
									<li>
										<a>Shortcodes</a>
									</li>
								</ul>
							</li>
							<li>
								<a >
									Booking{" "}
									<span className="open-dropdown">
										<i className="fa fa-angle-down"></i>
									</span>
								</a>
								<ul>
									<li>
										<a>Booking step 1</a>
									</li>
									<li>
										<a>Booking step 2</a>
									</li>
									<li>
										<a>Booking step 3</a>
									</li>
								</ul>
							</li>
						</ul>

						{/* navigation-right */}
						<ul className="navigation-right">
							<li>
								<a>Facilities</a>
							</li>
							<li>
								<a href="#">
									Blog{" "}
									<span className="open-dropdown">
										<i className="fa fa-angle-down"></i>
									</span>
								</a>
								<ul>
									<li>
										<a>Blog category</a>
									</li>
									<li>
										<a>Blog item</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Contact</a>
							</li>
						</ul>
					</div>{" "}
					{/*/navigation-block*/}
				</nav>
			</div>{" "}
			{/*/container*/}
		</header>
	);
};

export default Header;
