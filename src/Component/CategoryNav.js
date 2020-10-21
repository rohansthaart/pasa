import React from 'react'
import './CategoryNav.css'
function CategoryNav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
          {/*loop this li for another category*/}
      <li class="nav-item dropdown category">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Women
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div>
            <div class="row">
            <div class="col-md-2 col-sm-4 col-6">
              {/*  loop this div for another subCategory */}
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Women's Handbags</a>
                </li>
                {/*loop this li for another subSubCategory*/}
                <li class="nav-item">
                  <a class="nav-link" href="#">Backpacks</a> 
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Cosmetic Bags</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Hobo Bags</a>
                </li>
            
              </ul>
              </div>

              <div class="col-md-2 col-sm-4 col-6">
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Shoes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Athletic Shoes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Boots</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sandals</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Slippers</a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    
    </ul>
   
  </div>


</nav>
    )
}

export default CategoryNav

