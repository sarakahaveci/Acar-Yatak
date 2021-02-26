import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
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
                        <Link to='/'>Vatan Mah. Esenler Cad. No:39 Azim İş Hani No:10 Bayrampaşa/İstanbul 34035</Link>
                       
                    </div>
                    <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'> +90 (537) 432 80 02</Link>
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
                          Acar Yatak
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
    );
}

export default Footer;