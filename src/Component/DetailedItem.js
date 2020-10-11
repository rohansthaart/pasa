import React, { useState } from "react";
import "./DetailedItem.css";
import StarIcon from "@material-ui/icons/Star";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import { Description } from "@material-ui/icons";
import Specification from "./Specification";
import Reviews from "./Review";
function DetailedItem() {
  const [count, setCount] = useState(1);
  const specification = [
    " Brand	HP",
    "Series	Omen",
    "Item model number	dh1054nr",
    "Hardware Platform	PC",
    "Operating System	Windows 10 Home",
    "Item Weight	5.43 pounds",
    "Product Dimensions	10.35 x 14.17 x 0.79 inches",
    "Item Dimensions LxWxH	10.35 x 14.17 x 0.79 inches",
    "Color	Black",
    "Processor Brand	Intel",
    "Processor Count	6",
    "Computer Memory Type	DDR4 SDRAM",
    "Flash Memory Size	512 GB",
    "Hard Drive Interface	Solid State",
    "Batteries	1 Lithium Polymer batteries required. (included)",
  ];
  const reviews = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      image: `https://thispersondoesnotexist.com/image`,
      body:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      image: `https://thispersondoesnotexist.com/image`,
      body:
        "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et",
    },
    {
      postId: 1,
      id: 3,
      name: "odio adipisci rerum aut animi",
      email: "Nikita@garfield.biz",
      image: `https://thispersondoesnotexist.com/image`,
      body:
        "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione",
    },
    {
      postId: 1,
      id: 4,
      name: "alias odio sit",
      email: "Lew@alysha.tv",
      image: `https://thispersondoesnotexist.com/image`,
      body:
        "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati",
    },
    {
      postId: 1,
      id: 5,
      name: "vero eaque aliquid doloribus et culpa",
      email: "Hayden@althea.biz",
      image: `https://thispersondoesnotexist.com/image`,
      body:
        "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et",
    },
  ];

  const [description, setDescription] = useState("specification");
  let price = 133333;
  return (
    <div className="detail-specification">
      <div className="row">
        <div className="col-xl-1">
          <div id="slider-thumbs">
            <ul class="reset-ul   ba">
              <li className="m-1">
                <a data-target="#myCarouselArticle" data-slide-to="0">
                  <img
                    class="img-fluid fit-image"
                    src="https://images-na.ssl-images-amazon.com/images/I/61bFn1z7-IL._AC_SL1000_.jpg"
                  />
                </a>
              </li>

              <li className="m-1">
                <a data-target="#myCarouselArticle" data-slide-to="1">
                  <img
                    class="img-fluid fit-image"
                    src="https://images-na.ssl-images-amazon.com/images/I/51-MC4In9%2BL._AC_SL1000_.jpg"
                    alt=""
                  />
                </a>
              </li>

              <li className="m-1">
                <a data-target="#myCarouselArticle" data-slide-to="2">
                  <img
                    class="img-fluid fit-image"
                    src="https://images-na.ssl-images-amazon.com/images/I/513uTnDay6L._AC_SL1000_.jpg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*main image*/}
        <div className=" col-lg-5 ">
          <div id="myCarouselArticle" class="carousel " data-ride="false">
            <div style={{ padding: "0px" }}>
              <div class="carousel-item active">
                <img
                  className="slide-image"
                  src="https://images-na.ssl-images-amazon.com/images/I/61bFn1z7-IL._AC_SL1000_.jpg"
                  alt="Card image cap"
                  title=""
                />
              </div>
              <div class="carousel-item">
                <img
                  className="slide-image"
                  src="https://images-na.ssl-images-amazon.com/images/I/51-MC4In9%2BL._AC_SL1000_.jpg"
                  alt="Card image cap"
                  title=""
                />
              </div>
              <div class="carousel-item">
                <img
                  className="slide-image"
                  src="https://images-na.ssl-images-amazon.com/images/I/513uTnDay6L._AC_SL1000_.jpg"
                  alt="Card image cap"
                  title=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3 col-md-12 ">
          <div className="product_title">
            <h3>
              HP OMEN 15-dh1054nr 15.6" Gaming Laptop; i7-10750H, 16GB DDR4
              Memory, 512GB SSD, Nvidia GeForce 1660Ti
            </h3>
          </div>
          <div className="rating-review">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon /> 12 ratings
          </div>
          <div className="brand-name">Brand:HP store</div>
          <div className="small-description">
            Intel Core i7-10750H Processor 2.6GHz NVIDIA GeForce GTX 1660 Ti 6GB
            GDDR5 16GB DDR4-2933 RAM 512GB Solid State Drive Microsoft Windows
            10 Home Multi-Format SD Media Card Reader 10/100/1000 Network Intel
            Wi-Fi 6 AX 201 (2x2)+Bluetooth 5.0 Combo 15.6" FUll HD 144Hz IPS
            Anti-Glare Micro-Edge WLED-backlit Display Ultra thin, ultra light,
            and unbelievably powerful, the OMEN 15 Laptop packs high performance
            graphics, processing power, and a blazing fast refresh rate into a
            sleek design...
          </div>
          <div className="Price">
            <h3>Rs.{price}</h3>

            <h4>
              <span className="discount">Rs.160000 </span> -20%
            </h4>
            <h4>6 stocks remaining</h4>
          </div>
          <div className="quantity mt-4">
            Quantity:{" "}
            <button
              className="btn "
              onClick={() => setCount(count - 1)}
              disabled={count < 1 ? true : false}
            >
              <IndeterminateCheckBoxOutlinedIcon />
            </button>
            <strong>{count}</strong>
            <button className="btn " onClick={() => setCount(count + 1)}>
              <AddBoxOutlinedIcon />
            </button>
          </div>
        </div>
        <div className="col-lg-12 col-xl-3 col-md-12">
          <div>
            <h3> Total: Rs.{count * price}</h3>
            Delevery Options <br />
            Bagmati,kathmandu Metro 22- Newroad Area,Newroad{" "}
            <a href="">CHANGE</a>
            <div className="row">
              <div className="delevery-time col">
                Home Delevery <br />
                2-5 days
              </div>
              <div className="col delevery-charge">
                Free <br />
                Cash on Delivery Available
              </div>
            </div>
            <div className="">
              Return and Warranty <br />
              7 days returns <br />
              change of mind is not applicable
              <br />1 Year Local saller warrenty
            </div>
            <div className="saler row">
              <div className="col">
                Sold by
                <br />
                iTeam
              </div>
              <div className="col">Chat Now</div>
            </div>
            <div className="buy-cart mt-4 center">
              <button type="button" class="btn btn-outline-primary m-3 ">
                <PaymentOutlinedIcon />
                BUY IT NOW
              </button>
              <button type="button" class="btn btn-outline-success m-3">
                <ShoppingCartIcon />
                Add to Cart
              </button>
            </div>
            <div className="row ">
              <div className="col">
                <h7> Positive Seller Ratings</h7> <br />
                <h3>76%</h3>
              </div>
              <div className="col">
                <h7>Ship on Time</h7>
                <br />
                <h3>100%</h3>
              </div>
              <div className="col">
                <h7>Chat Response Rate</h7>
                <br />
                <h3>100%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="review-specification">
        <div>
          <button
            className="btn"
            onClick={() => setDescription("specification")}
          >
            <h3>Specification</h3>
          </button>
          <button className="btn" onClick={() => setDescription("review")}>
            <h3> Reviews</h3>
          </button>
        </div>
        {description === "specification" ? (
          <Specification
            singleSpecification={specification.map((spec) => {
              return <li>{spec}</li>;
            })}
          />
        ) : (
          reviews.map((rev) => {
            return (
              <Reviews
                name={rev.name}
                email={rev.email}
                review={rev.body}
                url={rev.image}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default DetailedItem;
