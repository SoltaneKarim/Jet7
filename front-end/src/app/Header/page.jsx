"use client"
import React, { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {	faFacebook,	faGithub,	faInstagram,	faTwitter,	faYoutube,} from "@fortawesome/free-brands-svg-icons"; // Import Font Awesome icons
import logoDesc from "../assets/images/Jet-7-logo-white.png";


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
						<a className="box" href="https://www.facebook.com/lkormi">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a className="box" href="https://www.instagram.com/ihebmachraoui/">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a className="box" href="https://github.com/SoltaneKarim">
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</div>

					{/* navigation-top-right */}
					<div className="navigation-top-right">
						<a className="box" href="/LatestNews">
							<i className="icon icon-star"></i> Special offers
						</a>

						<a className="box" href="/Reservation/step1">
							<i className="icon icon-tag"></i> Reservations
						</a>

						<a className="box" href="#">
							<i className="icon icon-phone-handset"></i> (+216) 5117-2000  
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
								<a href="http://localhost:3000/">
									Home{" "}
									<span className="open-dropdown">
									</span>
								</a>
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
                                        <a href="/ImageBlocks">Rooms category</a>
                                    </li>
                                    <li>
                                        <a>404 Not found</a>
                                    </li>
                                    <li>
                                        <a href="https://dealspotr.com/promo-codes/us.nothing.tech">Shortcodes</a>
                                    </li>
                                </ul>
								
							</li>
							<li>
								<a href="/Reservation/step1">
									Booking{" "}
									<span className="open-dropdown">
									</span>
								</a>
								
							</li>
						</ul>

						{/* navigation-right */}
						<ul className="navigation-right">
							<li>
								<a>Facilities</a>
							</li>
							<li>
								<a href="/Subsribe">
									Blog{" "}
									<span className="open-dropdown">
									</span>
								</a>
								
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
