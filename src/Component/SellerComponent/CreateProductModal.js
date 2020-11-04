import React, { useState } from "react";
import { Modal, Button, Row, Col, Form,InputGroup,FormControl } from "react-bootstrap";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { useProduct } from "../../Context/ProductContext";
import { Spinner } from "react-bootstrap";

export default function CreateProductModal({ modalVisible, closeModal }) {
  
  

  const { setChanged, changed } = useProduct();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("Clothes");
  const [subCategory, setSubCategory] = useState("Others");
  const [description, setDescription] = useState("");
  const [pic, setPic] = useState(null);
  const [image, setImage] = useState([]);
  const [localUrl, setLocalUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [subSubCategory, setSubSubCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [toggle,setToggle]= useState('false');



  const addPic = (remoteUrl) => {
    setImage((prev) => [...prev, remoteUrl]);
  };

  const uploadPic = () => {
    setUploadLoading(true);
    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "instaPosts");
    data.append("cloud_name", "mycloud17");
    fetch("https://api.cloudinary.com/v1_1/mycloud17/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        addPic(data.url);
        setUploadLoading(false);
        setLocalUrl("");
      })
      .catch((err) => {
        console.log(err);
        setUploadLoading(false);
      });
  };
  const uploadProducts = () => {
    setLoading(true);
    fetch("/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: productName,
        unitPrice: price,
        category,
        subCategory,
        subSubCategory,
        brand,
        discount,
        image,
        description,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        result.status === 200
          ? ToastsStore.success(result.message)
          : ToastsStore.error(result.message);
        closeModal();
        setChanged(!changed);
        setLoading(false);
        setImage("");
        setLocalUrl("");
      })
      .catch((err) => {
        ToastsStore.error(err.message);
        setLoading(false);
      });
  };
  return (
    <div>
      <ToastsContainer className="mytoast" store={ToastsStore} />
      <Modal show={modalVisible} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Name"
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
             
         <Col>
                
         <Form.Label >Product Discount</Form.Label>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={()=>setToggle(!toggle)} />

            <Form.Control disabled={toggle}
                  type="text"
                  placeholder="Enter Discount in %"
                  onChange={(e) => setDiscount(e.target.value)}
                />
                
              </Col>
            </Row>
           
            <Row style={{ marginTop: 10 }}>
              <Col>
              
           

              <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option selected disabled>Select Category</option>
                  <option>Women's Fashion</option>
                  <option>Men's Fashion</option>
                  <option>Electrionics</option>
                  <option>Toys</option>
                  <option>Home</option>
                  <option>Beauty</option>
                  <option>Kids</option>
                  <option>Vintage</option>
                  <option>Sports</option>
                  <option>Handmade</option>
                  <option>Music Instrument</option>
                  <option>Groceries</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Select Sub-Category</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSubCategory(e.target.value)}
                ><option disabled selected>Sub-Category</option>
                  {category === "Women's Fashion" ? (
                    <>

                      <option>Women's Handbags</option>
                      <option>Shoes</option>
                      <option>Athletic Apparel</option>
                      <option>Tops & Blouses</option>
                      <option>Jewelry</option>
                      <option>Women's Accessories</option>
                      <option>Dresses</option>
                      <option>Sweaters</option>
                      <option>Coats & Jackets</option>
                      <option>Underwear</option>
                      <option>Traditional Clothing</option>
                      <option>Jeans</option>
                      <option>Others</option>
                    </>
                  ) : category === "Men's Fashion" ? (
                    <>
                      <option>Men's Accessories</option>
                      <option>Shoes</option>
                      <option>Athletic Apparel</option>
                      <option>Tops</option>
                      <option>Shorts</option>
                      <option>Jeans</option>
                      <option>Sweats & Hoodies</option>
                      <option>Coats & Jackets</option>
                      <option>Underwear</option>
                      <option>Traditional Clothing</option>
                      <option>Others</option>
                    </>
                  ) : category === "Electrionics" ? (
                    <>
                      <option>Cell Phones & Accessories</option>
                      <option>Computers & Laptops</option>
                      <option>Tablets</option>
                      <option>Video Games & Consoles</option>
                      <option>Werables</option>
                      <option>Headphones</option>
                      <option>Camera & Photography</option>
                      <option>Media</option>
                      <option>Speakers & Audio</option>
                      <option>TV & Videos</option>
                      <option>Others</option>
                    </>
                  ) : category === "Toys" ? (
                    <>
                      <option>Collectibles & Hobbies</option>
                      <option>Action Figures & Accessories</option>
                      <option>Dolls & Accessories</option>
                      <option>Vintage & Antique Toys</option>
                      <option>Trading Cards</option>
                      <option>Stuffed Animals & Plush</option>
                      <option>Building Toys</option>
                      <option>Arts & Crafts</option>
                      <option>Games & Puzzles</option>
                      <option>Remote Control Toys & Vehicles</option>
                      <option>Others</option>
                    </>
                  ) : category === "Accessories" ? (
                    <>
                      <option>Sunglasses</option>
                      <option>Watches</option>
                      <option>Necklaces</option>
                      <option>Others</option>
                    </>
                  ) : category === "Home" ? (
                    <>
                      <option>Kitchen & Dining</option>
                      <option>Home Decor</option>
                      <option>Seasonal Decor</option>
                      <option>Home Appliances</option>
                      <option>Bedding</option>
                      <option>Storage & Organization</option>
                      <option>Cleaning Supplies</option>
                      <option>Artwork</option>
                      <option>Furniture</option>
                      <option>Bath</option>
                      <option>Others</option>
                    </>
                  ) : category === "Beauty" ? (
                    <>
                      <option>Makeup</option>
                      <option>Fragrance</option>
                      <option>Skin Care</option>
                      <option>Tools & Accessories</option>
                      <option>Hair Care</option>
                      <option>Bath & Body</option>
                      <option>Other</option>
                    </>
                  ) : category === "Groceries" ? (
                    <>
                      <option>Beverages</option>
                      <option>Breakfast & Snacks</option>
                      <option>Chocolates</option>
                      <option>Cooking Ingredients</option>
                      <option>Wines,Beers & Spirits</option>
                      <option>Others</option>
                    </>
                  ) : category === "Kids" ? (
                    <>
                      <option>Girls Dress</option>
                      <option>Girls Tops & t-shirts</option>
                      <option>Girls Bottoms</option>
                      <option>Girls One-pieces</option>
                      <option>Girls Accessories</option>
                      <option>Girls Shoes</option>
                      <option>Boys Tops & t-shirts</option>
                      <option>Boys Bottoms</option>
                      <option>Boys One-pieces</option>
                      <option>Boys Accessories</option>
                      <option>Boys Shoes</option>
                      <option>Others</option>
                    </>
                  ) : category === "Vintage" ? (
                    <>
                      <option>Bags & Purses</option>
                      <option>Books</option>
                      <option>Antiques</option>
                      <option>Jewelry</option>
                      <option>Books</option>
                      <option>Electronics</option>
                      <option>Accessories</option>
                      <option>Serving Pieces</option>
                      <option>Supplies</option>
                      <option>Clothing</option>
                      <option>Houseware</option>
                      <option>Others</option>
                    </>
                  ) : category === "Sports" ? (
                    <>
                      <option>Outdoors</option>
                      <option>Exercise</option>
                      <option>Fan Shop</option>
                      <option>Team Shops</option>
                      <option>Cricket</option>
                      <option>Apparel</option>
                      <option>Footwear</option>
                      <option>Others</option>
                    </>
                  ) : category === "Music Instrument" ? (
                    <>
                      <option>Guitar</option>
                      <option>Paino</option>
                      <option>Violin</option>
                      <option>Drums</option>
                      <option>Flute</option>
                      <option>Tabala</option>
                      <option>Madal</option>
                      <option>Others</option>
                    </>
                  ) : category === "Handmade" ? (
                    <>
                      <option>Pashmina</option>
                      <option>Khukuri</option>
                      <option>Clay Products</option>
                      <option>Handwoven Nepali Dhaka</option>
                      <option>Lokta Paper Products</option>
                      <option>Nepali Jewelry</option>
                      <option>Thanka Paintings</option>
                      <option>Others</option>
                    </>
                  ) : (
                    <>
                      <option>Others</option>
                    </>
                  )}
                </Form.Control>
              </Col>
            </Row>

            <Row style={{ marginTop: 10 }}>
              <Col>
                <Form.Label>Sub-Sub-Category</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSubSubCategory(e.target.value)}
                >
                  <option disabled selected>Select Sub-Sub-Category</option>
                  {subCategory === "Women's Handbags" ? (
                    <>
                      <option>Backpacks</option>
                      <option>Cosmetic Bags</option>
                      <option>Hobo Bags</option>
                      <option>CrossbodyBags</option>
                      <option>Satchels</option>
                      <option>Shoulder Bags</option>
                      <option>Tote Bags</option>
                      <option>Waist Bags & Fanny Packs</option>
                      <option>Messenger Bags</option>
                      <option>Bucket Bags</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Shoes" ? (
                    <>
                      <option>Athletic Shoes</option>
                      <option>Boots</option>
                      <option>Fashion Sneakers</option>
                      <option>Flats</option>
                      <option>Sandals</option>
                      <option>Slippers</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Athletic Apparel" ? (
                    <>
                      <option>Jackets</option>
                      <option>Jerseys</option>
                      <option>Pants,Tights,Leggings</option>
                      <option>Shirts & Tops</option>
                      <option>Shorts</option>
                      <option>Skirts,Skorts & Dresses</option>
                      <option>Socks</option>
                      <option>Tracksuits & Sweats</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Shoes" ? (
                    <>
                      <option>Athletic Shoes</option>
                      <option>Boots</option>
                      <option>Fashion Sneakers</option>
                      <option>Flats</option>
                      <option>Sandals</option>
                      <option>Slippers</option>
                      <option>Work & Safety</option>
                      <option>Outdoor</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Tops & Blouses" ? (
                    <>
                      <option>Blouses</option>
                      <option>Button-down</option>
                      <option>Sports Bra</option>
                      <option>Halters</option>
                      <option>Knit Tops</option>
                      <option>Polo Shirts</option>
                      <option>T-Shirts</option>
                      <option>Tank,Cami</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Jewelry" ? (
                    <>
                      <option>Bracelets</option>
                      <option>Earrings</option>
                      <option>Necklaces</option>
                      <option>Rings</option>
                      <option>Brooches</option>
                      <option>Pendants</option>
                      <option>Watches</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Women's Accessories" ? (
                    <>
                      <option>Belts</option>
                      <option>Hair Accessories</option>
                      <option>Hats</option>
                      <option>Scarves & Wraps</option>
                      <option>Sunglasses</option>
                      <option>Wallets</option>
                      <option>Watches</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Dresses" ? (
                    <>
                      <option>Above Knee,Mini</option>
                      <option>High Low</option>
                      <option>Maxi</option>
                      <option>Knee-length</option>
                      <option>Midi</option>
                      <option>Jumpsuits & Rompers</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Sweaters" ? (
                    <>
                      <option>Cardigans</option>
                      <option>Collared</option>
                      <option>Cowl Neck</option>
                      <option>Crewneck</option>
                      <option>Full-zip</option>
                      <option>Hooded</option>
                      <option>Panchos</option>
                      <option>V-neck</option>
                      <option>Vest,Sleeveless</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Coats & Jackets" ? (
                    <>
                      <option>Fleece Jackets</option>
                      <option>Jean Jackets</option>
                      <option>Motorcycle Jackets</option>
                      <option>Parkas</option>
                      <option>Puffers</option>
                      <option>Trench Coats</option>
                      <option>Vests</option>
                      <option>Windbreakers</option>
                      <option>Rainwear</option>
                      <option>Flight/Bomber Jackets</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Jeans" ? (
                    <>
                      <option>Boot Cut</option>
                      <option>Boyfriend</option>
                      <option>Capri, Cropped</option>
                      <option>Flare</option>
                      <option>Leggings & Jeggings</option>
                      <option>Overalls</option>
                      <option>Slim,Skinny</option>
                      <option>Classic, Straight Leg</option>
                      <option>Wide-leg</option>
                      <option>Baggy,Loose</option>
                      <option>Cargo</option>
                      <option>Carpenter</option>
                      <option>Relaxed</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Tops" ? (
                    <>
                      <option>Button-Front</option>
                      <option>Dress Shirts</option>
                      <option>Henleys</option>
                      <option>T-Shirts</option>
                      <option>Tanks</option>
                      <option>Turtlenecks</option>

                      <option>Others</option>
                    </>
                  ) : subCategory === "Men's Accessories" ? (
                    <>
                      <option>Backpacks,Bags & Briefcases</option>
                      <option>Belts</option>
                      <option>Hats</option>
                      <option>Sunglasses</option>
                      <option>Ties</option>
                      <option>Wallets</option>
                      <option>Watches</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Sweats & Hoodies" ? (
                    <>
                      <option>Hoodies</option>
                      <option>Sweatshirt,Pullover</option>
                      <option>Track & Sweat Pants</option>
                      <option>Tracks & Sweat Suits</option>
                      <option>Track Jackts</option>
                      <option>Others</option>
                    </>
                  ) : subCategory === "Shorts" ? (
                    <>
                      <option>Athletic</option>
                      <option>Cargo</option>
                      <option>Casual Shorts</option>
                      <option>Denim</option>
                      <option>Dress Shorts</option>
                      <option>Khakis, Chinos</option>
                      <option>Others</option>
                    </>
                  ) : (
                    <>
                      <option>Others</option>
                    </>
                  )}
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Select Brand</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option selected disabled>Select Brand</option>
                  <option>H&M</option>
                  <option>Apple</option>
                  <option>Samsung</option>
                  <option>Lenovo </option>
                  <option>ASUS</option>
                  <option>POLO</option>
                  <option>NIKE</option>
                  <option>CASIO</option>
                  <option>DELL</option>
                  <option>ACER</option>
                  <option>Others</option>
                </Form.Control>
              </Col>
            </Row>

            <Form.Group controlId="textarea" style={{ marginTop: 10 }}>
              <Form.Label>Enter Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.File
              id="custom-file"
              label="Custom file input"
              custom
              onChange={(e) => {
                setPic(e.target.files[0]);

                setLocalUrl(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </Form>
          <div>
            <h3>{image.length} photo uploaded</h3>
          </div>
          {localUrl && (
            <div
              style={{ marginTop: 10 }}
              className="d-flex justify-content-between"
            >
              <img src={localUrl} width={100} height={80} />
              {uploadLoading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <Button onClick={uploadPic}>Upload</Button>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Button variant="primary" onClick={() => uploadProducts()}>
              Post
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
