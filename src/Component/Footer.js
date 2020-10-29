import React from 'react';
import { Link, useHistory } from "react-router-dom";


import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
    return (
    <div className="site-footer">
        <div className="">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-12">
              
              <img src='https://i.ibb.co/pR3sFH8/logo.png' style={{height:'60%',width:'60%'}} />
              
            </div>
  
            <div className="col col-md-5">
              <h6>Categories</h6>
              <ul className="footer-links category">
                <li><a href="">Men's Fashion</a></li>
                <li><a href="">Women's Fashion</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Accessories</a></li>
                <li><a href="">Mobile</a></li>
                <li><a href="">Laptop</a></li>
                <li><a href="">TV</a></li>
                <li><a href="">Shoes</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Beauty</a></li>
                <li><a href="">Kids</a></li>
                <li><a href="">Sports</a></li>
                <li><a href="">Grocery</a></li>
                <li><a href="">Vintage</a></li>
                <li><a href="">Handmade</a></li>
                <li><a href="">Music</a></li>
                <li><a href="">and more</a></li>
              </ul>
            </div>
  
            <div className=" col-md-3" style={{padding:'0'}}>
            <div className="mapouter" style={{position:'relative', textAlign:'left', height:'249px',width:'99%'}}>
          <div className="gmap_canvas" style={{overflow:'hidden', background:'none!important', height:'249px' ,width:'99%'}}>
            <iframe width="99%" height="249" id="gmap_canvas" src="https://maps.google.com/maps?q=namgyal%20chowk%2C%20kathmandu&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div></div>
            </div>
          </div>
          <hr/>
        </div>
      
        <div className="">
          <div className="row">
            <div className="col-md-8 col-sm-6 col">
              <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by PASA
              </p>
              <Link to="/termsandconditions">
                <a href="">Terms & Conditions</a>
                </Link>
            </div>
  
            
          </div>
          <div className="row" style={{justifyContent:'center'}}>
          
              <ul className="social-icons">
                <li><FacebookIcon/></li>
                <li><InstagramIcon/></li>
                <li><TwitterIcon/></li>
                <li><LinkedInIcon/></li>
              </ul>
            </div>
        </div>
        
  </div>
    )
}

export default Footer
