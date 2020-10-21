import React from 'react';
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
    return (
    <div className="site-footer sticky-buttom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">PASA<i>PASA </i> Nepal’s most trusted best online shopping Portal. Buy Electronics, Clothes, Furniture, Kitchen, Home Appliances & More. We offer best Quality products at the affordable price at PASA Online Store in Kathmandu, Nepal. Online Shopping in Nepal integrate products with people- opening all the doors of probability. We provide you the access to everything ranging from Mobile, Electronic, CCTV Cameras Fashion clothes, Home appliances and Kitchen appliances to organic coffee, green tea products and much more. Our online shopping services are genuine and prices unbeatable in Nepal. Be it simple, smooth or casual; popular, unique or customary, PASA provides you all. Everyday lives, events, needs and necessities, festivities, wants and wish lists – PASA confirms it all. We trust life isn't comprised of days however every day is a sphere of life, where every minute is a different color and each shade belongs to PASA!</p>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links category">
                <li><a href="">Men's Fashion</a></li>
                <li><a href="">Women's Fashion</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Accessories</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Beauty</a></li>
                <li><a href="">Kids</a></li>
                <li><a href="">Sports</a></li>
                <li><a href="">Grocery</a></li>
                <li><a href="">Vintage</a></li>
                <li><a href="">Handmade</a></li>
                <li><a href="">Music Instrument</a></li>
                <li><a href="">and more</a></li>
              </ul>
            </div>
  
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
         
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
           <a href="#">PASA</a>. Inspired by scanfcode
              </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><FacebookIcon/></li>
                <li><InstagramIcon/></li>
                <li><TwitterIcon/></li>
                <li><LinkedInIcon/></li>   
              </ul>
            </div>
          </div>
        </div>
        
  </div>
    )
}

export default Footer
