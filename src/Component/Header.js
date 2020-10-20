import React, { useEffect, useState } from "react";
import "./Header.css";
import DepartmentCard from "./DepartmentCard";
import AvatarLogin from "./AvatarLogin";
import Cart from "./Cart";
import Button from "./LoginButton";
import {Form} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
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
    <div class="header">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Store
        </a>

     

        <div className="collapse navbar-collapse" id="navbarsExample04">
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
            
            <li className="dropdown nav-item">
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
        </div>
        {isSessionAvailable ? (
            <AvatarLogin />
          ) : (
            <Link to="/login" className="nav-link">
              <Button />
            </Link>
          )}
          <Cart />

          <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <br />
    </div>
  );
}
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 }]
export default Header;
