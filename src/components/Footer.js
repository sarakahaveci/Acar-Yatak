import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <p class="about">
            <span> About the company</span> Our company, which started its
            commercial activities in the 1970s, has become the number 1 in the
            sector as ACAR YATAK with its strong equity and wide customer
            portfolio{" "}
          </p>
          <div class="icons">
            <a href="https://www.facebook.com/Acaryatak">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCY06nUZTzMRlTg0hX2wxJtg">
              <i class="fa fa-youtube"></i>
            </a>
            <a href="https://tr.linkedin.com/in/fatih-acar-0aa073142">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/acaryatak/">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div className="center">
            <i class="fa fa-map-marker"></i>
            <span>
              <span>Bayrampaşa </span>
              <span> Vatan Mah. Esenler Cad. No:39</span>
              <br />
              Istanbul, Turkey
            </span>
          </div>

          <div>
            <i class="fa fa-whatsapp"></i>
            <span> (0537) 432 80 02</span>
            <br />
            <i class="fa fa-phone"></i>
            <span> (0212) 674 04 73</span>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <span> info@yurosunger.com</span>
          </div>
        </div>
        <div class="footer-right col-md-4 col-sm-6">
          <h2>
            <span>
              <img
                className="logo"
                src="https://i.imgur.com/4XugT2h.jpg"
                width="200px"
                height="10%"
                alt="Acar Yatak logo"
              />
            </span>
          </h2>
          <p class="menu">
            <a href="./"> Home</a> |<a href="Products"> Products</a> |
            <a href="./Salesoutlet"> Sales Outlet</a> |
            <a href="./Aboutus"> About Us</a> |
            <a href="./Contactus"> Contact Us</a>
          </p>
          <p class="name"> Yaman Ka &copy; 2021</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
