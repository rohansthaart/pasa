import React from "react";
import SingleProduct from "./SingleProduct";
function Products() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 ">
          <SingleProduct
            name="HP OMEN 15-dh1054nr 15.6''..."
            price="133333"
            url="https://images-na.ssl-images-amazon.com/images/I/51-MC4In9%2BL._AC_SL1000_.jpg"
          />
        </div>
        <div className="col-2">
          <SingleProduct
            name="Delux Matress "
            price="20000"
            url="https://www.livingspaces.com/api/image?recId=236262"
          />
        </div>
        <div className="col-2">
          <SingleProduct
            name="Oppo phone "
            price="15000"
            url="https://static.toiimg.com/photo/73078527.cms"
          />
        </div>
        <div className="col-2">
          <SingleProduct
            name="VIVO MXQ"
            price="35000"
            url="https://candytech.in/wp-content/uploads/2019/07/Vivo-Z1-PRO-Image-HD.jpg"
          />
        </div>
        <div className="col-2">
          <SingleProduct
            name="Samsung 65' smart TV"
            price="75000"
            url="https://www.sony-asia.com/image/53d7c185420c8f2a09c5b73efaf8fcd5?fmt=png-alpha&wid=720"
          />
        </div>
        <div className="col-2">
          <SingleProduct
            name="Samsung 65' smart TV"
            price="75000"
            url="https://www.sony-asia.com/image/53d7c185420c8f2a09c5b73efaf8fcd5?fmt=png-alpha&wid=720"
          />
        </div>
        <SingleProduct
          name="Samsung 65' smart TV"
          price="75000"
          url="https://www.sony-asia.com/image/53d7c185420c8f2a09c5b73efaf8fcd5?fmt=png-alpha&wid=720"
        />
      </div>
    </div>
  );
}

export default Products;
