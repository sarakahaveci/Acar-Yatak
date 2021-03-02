import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
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
      <p><span> Vatan Mah. Esenler Cad. No:39 Azim İş Hani No:10</span> Istanbul,Turkey</p>
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
    <h2> Company<span> logo</span></h2>
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> Products</a> |
      <a href="#"> Sales Outlet</a> |
      <a href="#"> About Us</a> ||
      <a href="#"> Contact Us</a>
    </p>
    <p class="name"> Fatih Acar &copy; 2021</p>
  </div>
</footer>
        <BrowserRouter>
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2> Products</h2>
                    <Link to='/'>Beds</Link>
                    <Link to='/'>Beds Basments</Link>
                    <Link to='/'>Beds Bunks</Link>
                </div>
            </div>  
                <div class='footer-link-items'>
                        <h2> Address</h2>
                        <Link to='/'> Bayrampaşa/İstanbul 34035</Link>
                       
                    </div>
                    <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'> +90 (537)</Link>
                        <Link to='/'> +90 (212) 579 80 02</Link>
                        <Link to='/'> +90 (212) 674 04 73</Link>
                        <Link to='/'>info@yurosunger.com</Link>
                    </div>
                </div>
                <div class='footer-link-items'>
                <h2>Social Media</h2>
                <Link to='/https://www.instagram.com/acaryatak/'>Instagram</Link>
                <Link to='/https://www.facebook.com/Acaryatak'>Facebook</Link>
                <Link to='/https://www.youtube.com/channel/UCPT7nYipeN62q5lOHhd3MuA'>Youtube</Link>

            </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                          f.acar
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>Yaman © 2021</small>
                    <div class='social-icons'>
                    </div>
                </div>
            </section>
        </div>
        </BrowserRouter>
        </>
    );
}

export default Footer;