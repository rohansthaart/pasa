import React, { useEffect, useState } from "react";
import "./Header.css";
import DepartmentCard from "./DepartmentCard";
import AvatarLogin from "./AvatarLogin";
import Cart from "./Cart";
import Button from "./LoginButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Form} from 'react-bootstrap'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import {useProduct} from "../Context/ProductContext";

function Header() {
  const { isSessionAvailable } = useUser();
  const {products} = useProduct();
  const [loading, setLoading] = useState(true);
  const [result,setResult] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const history = useHistory();
  const goToResult = name => {
    const searchId = products.filter(product => product.name.toUpperCase() === name.toUpperCase())[0]._id;
    history.push(`/product/${searchId}`)
  }
  return (
    <div>
    
      <nav className="navbar navbar-expand-md navbar-light bg-light ">
      <button
          className="navbar-toggler d-none "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <ExpandMoreIcon/>
        </button>
        <a className="" href="#">
         <img className="header-Image" src='https://i.ibb.co/pR3sFH8/logo.png'/>
        </a>

    

        <div className="collapse navbar-collapse d-none d-lg-block d-xl-block" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
            
            <li className="dropdown nav-item d-none d-lg-block d-xl-block">
              <a href="#" className="nav-link">
                Departments
              </a>
              <div className="dropdown-content">
                
                  <DepartmentCard
                    title="Women"
                    url="data:image/jpeg;base64,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"
                    subTitle="Hats, Headbands, Head Tie/Scarves, Shirts, Sweaters, Blouses, Tube Top, Pants/Trousers, Skirts, Shorts, Tights and Leggings, Dresses/Gowns, Jackets and Hoodies, Poncho, Shawls, Bras, Panties, Socks, Footwear... "
                  />
                
                  <DepartmentCard
                    title="Men"
                    url="https://www.nextmodelsnepal.com/assets/uploads/2019/10/4-29.jpg"
                    subTitle="Hats, Headbands, Shirts, Crop, Sweaters, Bttoms, Pants/Trousers, Socks, Coats, JacketandHoodies, Gloves, Windbreaker, Underwear, Socks, Footwear..."
                  />
                
                  <DepartmentCard
                    title="Electronics"
                    url="https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg"
                    subTitle="TV & Video, Audio & Home Theater, Computers, Camera & Photo, Wearable Technology, Car Electronics & GPS, Portable Audio, Cell Phone, Office Electronics, Smart Home... "
                  />
               
                  <DepartmentCard
                    title="Home"
                    url="https://image.made-in-china.com/2f0j00cGjUlEWzawqp/Modern-New-Design-Bedroom-Sets-Wardrobe-Dressing-Table-Home-Furniture-Chest-Drawer-Bed-Classic-Bed.jpg"
                    subTitle="Architecture & Interiors, Bath Caddies, Bathroom Storage, Bedding Storage, Bedside Table, Benches, Glass, Blanket, Bookshelves & Bookcases, Kitchen, Knife, Table, Tabletops, Beds.."
                  />
                
                  <DepartmentCard
                    title="Toys"
                    url="https://i.ytimg.com/vi/xzaNqjc4fkE/maxresdefault.jpg"
                    subTitle="Action figures, Animals, Cars and radio controlled, Creative toys, Dolls, Educational toys, Electronics toys, Food-related toys, Games, Model building, Puzzle/assembly, sound toysm, Spinning toys, Wooden toys... "
                  />
               
                  <DepartmentCard
                    title="Beauty"
                    url="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2019/opinion/6-dfnmgkjndown.-shutterstock.jpg&w=900&height=601"
                    subTitle='Luxury Beauty, Make-up & Nails, Skin Care, Hair Care, Bath & Body, Fragrance, Tools & Acessories, Mens Grooming, Kajal, Lip Gloss, Concealer, blush, Compact, Mascara...'
                  />
                  <DepartmentCard
                    title="Kids"
                    url="https://cdn1.storehippo.com/s/58b6b898fe14ad9f7ef50fb8/ms.products/5c9b447e30462275f8d3f1ba/images/5c9b447e30462275f8d3f1bb/5c9b41aa7d1db5552b437f19/webp/5c9b41aa7d1db5552b437f19-640x640.jpg"
                    subTitle="Baby bumper headguard cap, babygrow, Blanket sleeper Diaper, Fauntlerou suit, Infant's clothing, Children's underwear, Children's Dress set... "
                  />
               
                  <DepartmentCard
                    title="Sports"
                    url="https://wfmj.images.worldnow.com/images/18627951_G.jpg"
                    subTitle="Basketball, Football, Sport Shoes, Cricket sets, Basketball jerseys, Football Jerseys, Chess..."
                  />
                
              </div>
            </li>
          </ul>
        
      
        
       </div>
       <div style={{width:"80%"}}>
       <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={products.map((option) => option.name)}
        renderOption={option => (
        <h4 onClick={()=>goToResult(option)}>{option}</h4>
  )}
      
        renderInput={(params) => (
          <div ref={params.InputProps.ref} className="searchInput">
           
          <Form>
            <Form.Control type="text" {...params.inputProps} style={{width:"100%"}} placeholder="Search"/> 
          </Form>
          </div>
        )}
        value={result}
        onChange={(event, newValue) => {
          setResult(newValue);
        }}
      />
      
        </div>
        <div className='d-none d-lg-block d-xl-block'>
        {isSessionAvailable ? (
            <AvatarLogin className=''/>
          ) : (
            <Link to="/login" className="nav-link " style={{paddingLeft:'0px'}}>
              <Button />
            </Link>
          )}
              </div>
          <Cart />              
      </nav>
    </div>
  );
}

export default Header;
