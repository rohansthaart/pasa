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
            <li className="nav-item active">
              {/* <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a> */}
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
                <a href="#">
                  <DepartmentCard
                    title="Clothing"
                    url="https://www.chicagotribune.com/resizer/hvZkNkHDSkNA_VjYWeGJWnhXDpE=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/WFB2BMRLMVH2QCP2HWTGOE76FI.jpg"
                  />
                </a>
                <a href="#">
                  <DepartmentCard
                    title="Shoes"
                    url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rw-cross-training-shoes-e-1588703800.jpg"
                  />
                </a>
                <a href="#">
                  <DepartmentCard
                    title="Gadgets"
                    url="https://womenlovetech.com/wp-content/uploads/2020/04/women-love-tech-gold-apple2_yreagr.jpg"
                  />
                </a>
                <a href="#">
                  <DepartmentCard
                    title="Furniture and Decor"
                    url="https://image.made-in-china.com/2f0j00cGjUlEWzawqp/Modern-New-Design-Bedroom-Sets-Wardrobe-Dressing-Table-Home-Furniture-Chest-Drawer-Bed-Classic-Bed.jpg"
                  />
                </a>
                <a href="#">
                  <DepartmentCard
                    title="accessories"
                    url="https://i.gadgets360cdn.com/large/honor_band_5_magic_watch_1581172527884.jpg"
                  />
                </a>
                <a href="#">
                  <DepartmentCard
                    title="Entertainment"
                    url="https://www.gannett-cdn.com/presto/2020/04/04/USAT/9f76fc2c-96cc-4a12-bb90-2b1056c45188-VideoGameshero.jpg?width=580&height=326&fit=bounds&auto=webp"
                  />
                </a>
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
