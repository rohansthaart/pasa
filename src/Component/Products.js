import React from "react";
import SingleProduct from "./SingleProduct";
function Products() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1.1 ">
          <SingleProduct url="https://ae01.alicdn.com/kf/HTB1Nb2jARmWBuNkSndVq6AsApXaq/Yiyaobess-Korea-Style-Synthetic-Medium-Long-Bob-Wig-With-Bangs-Dark-Roots-Ombre-Hair-Linen-Grey.jpg" />
        </div>
        <div className="col-sm-1.1">
          <SingleProduct url="https://www.livingspaces.com/api/image?recId=236262" />
        </div>
        <div className="col-1.1">
          <SingleProduct url="https://static.toiimg.com/photo/73078527.cms" />
        </div>
        <div className="col-1.1">
          <SingleProduct url="https://candytech.in/wp-content/uploads/2019/07/Vivo-Z1-PRO-Image-HD.jpg" />
        </div>
        <div className="col-1.1">
          <SingleProduct url="https://www.sony-asia.com/image/53d7c185420c8f2a09c5b73efaf8fcd5?fmt=png-alpha&wid=720" />
        </div>
      </div>
    </div>
  );
}

export default Products;
