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
import Test from './test'
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
                    url="https://asset1.modelmanagement.com/mm-eyJ0Ijp7InIiOnsibCI6/IjE2MDAiLCJoIjoiMTIw/MCJ9LCJ3Ijp7InR4Ijoi/QWFuZ3lhIEthcmFuaml0/XG5tb2RlbG1hbmFnZW1l/bnQuY29tXC9tb2RlbFwv/YWFuZ3lhLWthcmFuaml0/IiwidHhvIjp7ImwiOiI4/MDAiLCJoIjoiMTIwMCJ9/fSwiMCI6eyJ3Ijoic2Zt/In19LCJpZCI6Imk1NzI5/MDQyIiwiZiI6ImpwZyJ9.jpg"
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
