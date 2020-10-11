import React, { useEffect, useState } from "react";
import "./Header.css";
import DepartmentCard from "./DepartmentCard";
import AvatarLogin from "./AvatarLogin";
import Cart from "./Cart";
import Button from "./LoginButton";
import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";
function Header() {
  const { isSessionAvailable } = useUser();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div class="header">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Store
        </a>

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
          <form className="form-inline my-2 my-md-0">
            <input className="form-control" type="text" placeholder="Search" />
          </form>

          {isSessionAvailable ? (
            <AvatarLogin />
          ) : (
            <Link to="/login" className="nav-link">
              <Button />
            </Link>
          )}
          <Cart />
        </div>
      </nav>
      <br />
    </div>
  );
}

export default Header;
