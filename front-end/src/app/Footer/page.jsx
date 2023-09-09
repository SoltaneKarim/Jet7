import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Footer links */}
        <div className="footer-links">
          <div className="row">
            <div className="col-sm-6 footer-left">
              <a href="https://www.google.com/maps/place/36%C2%B010'12.3%22N+8%C2%B042'17.2%22E/@36.1700746,8.7047832,19z/data=!4m4!3m3!8m2!3d36.1700833!4d8.7047778?entry=ttu">Sitemap</a> &nbsp; | &nbsp; <a href="https://en.wikipedia.org/wiki/Privacy_policy">Privacy policy</a> 
            </div>
            <div className="col-sm-6 footer-right">
              <a href="/Reservation/step1">Reservations</a> | &nbsp; <a href="https://www.europ-assistance.fr/fr/assurance-voyage/assurance-voyage-vacances">Help center</a>
            </div>
          </div>
        </div>

        {/* Footer social */}
        <div className="footer-social">
          <div className="row">
            <div className="col-sm-12 text-center hidden">
              <a href="" className="footer-logo"><img src="assets/images/logo.png" alt="Alternate Text" /></a>
            </div>
            <div className="col-sm-12 icons">
              <ul>
                <li><a href="https://www.facebook.com/lkormi"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/karim_ben_soltane/"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-github"></i></a></li>
                &nbsp; | &nbsp;
                <li><a href="https://github.com/IHEEBEU"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.instagram.com/ihebmachraoui/"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              </ul>
            </div>
            <div className="col-sm-12 copyright">
              <small>Copyright &copy; 2017 &nbsp; | &nbsp; <a href="https://themeforest.net/item/colina-hotel-website-template/20977257">Karim & Iheb</a></small>
            </div>
            <div className="col-sm-12 text-center">
              <img src="assets/images/logo-footer.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
