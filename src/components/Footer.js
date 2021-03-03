/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <>
        <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the company</span>  aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
    <div class="icons">
      <a href='/https://www.facebook.com/Acaryatak'><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-youtube"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Vatan Mah. Esenler Cad. No:39 Azim İş Hani No:10</span> Bayrampaşa-İstanbul /Turkey</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (0537) 432 80 02</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> info@yurosunger.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> <span> logo</span></h2>
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> Products</a> |
      <a href="#"> Sales Outlet</a> |
      <a href="#"> About Us</a> |
      <a href="#"> Contact Us</a>
    </p>
    <p class="name"> Yaman Ka &copy; 2021</p>
  </div>
</footer>
        </>
    );
}

export default Footer;