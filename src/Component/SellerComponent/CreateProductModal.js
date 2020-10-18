import React, { useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
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
  const [subSubCategory,setSubSubCategory]=useState("");
  const [brand, setBrand]= useState("");
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
                <Form.Label>Product Discount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Discount in %"
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </Col>
            </Row>

            <Row style={{ marginTop: 10 }}>
              <Col>
                <Form.Label>Select Category</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setCategory(e.target.value)}
                >
                   <option>Other</option>
                  <option>Women</option>
                  <option>Men</option>
                  <option>Electrionics</option>
                  <option>Toys</option>
                  <option>Home</option>
                  <option>Beauty</option>
                  <option>Kids</option>
                  <option>Vintage</option>
                  <option>Sports</option>
                  <option>Handmade</option>
                  <option>Digital items</option>
                 
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Select Sub-Category</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  {category === "Women" ? (
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
                      <option>Jeans</option>
                    </>
                  ) : category === "Men" ? (
                    <>
                      <option>Men's Accessories</option>
                      <option>Shoes</option>
                      <option>Athletic Apparel</option>
                      <option>Tops</option>
                      <option>Shorts</option>
                      <option>Jeans</option>
                      <option>Sweaters & Hoodies</option>
                      <option>Coats & Jackets</option>
                      <option>Others</option>
                    </>
                  ): category === "Electrionics" ? (
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
                  ): category === "Toys" ? (
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
                  ): category === "Accessories" ? (
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
                  ): category === "Women's Fashion" ? (
                    <>
                      <option>Clothing</option>
                      <option>Women's Bags</option>
                      <option>Shoes</option>
                      <option>Underwear</option>
                      <option>Traditional Clothing</option>
                      <option>Others</option>
                    </>
                  ): category === "Music Instrument" ? (
                    <>
                      <option>Guitar</option>
                      <option>Keyboard</option>
                      <option>Piano</option>
                      <option>Drums</option>
                      <option>Flute</option>
                      <option>Violin</option>
                      <option>Saxophone</option>
                      <option>Others</option>
                    </>
                  ): category === "Groceries" ? (
                    <>
                      <option>Beverages</option>
                      <option>Breakfast & Snacks</option>
                      <option>Chocolates</option>
                      <option>Cooking Ingredients</option>
                      <option>Wines,Beers & Spirits</option>
                      <option>Others</option>
                    </>
                  ):(
                    <>
                      
                      <option>Others</option>
                    </>
                  )}
                </Form.Control>
              </Col>
            </Row>
            
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Form.Label>Select Sub-Sub-Category</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSubSubCategory(e.target.value)}
                >
                  <option>Mobiles</option>
                  <option>Electronics</option>
                  <option>Home & Kitchen</option>
                  <option>Beauty & Fragrances </option>
                  <option>Accessories</option>
                  <option>Men's Fashion</option>
                  <option>Women's Fashion</option>
                  <option>Music Instrument</option>
                  <option>Sports & Fitness</option>
                  <option>Groceries</option>
                  <option>Others</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Select Brand</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option>Mobiles</option>
                  <option>Electronics</option>
                  <option>Home & Kitchen</option>
                  <option>Beauty & Fragrances </option>
                  <option>Accessories</option>
                  <option>Men's Fashion</option>
                  <option>Women's Fashion</option>
                  <option>Music Instrument</option>
                  <option>Sports & Fitness</option>
                  <option>Groceries</option>
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
