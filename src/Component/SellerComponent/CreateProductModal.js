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
  const [subCategory, setSubCategory] = useState("Inner Wear");
  const [description, setDescription] = useState("");
  const [pic, setPic] = useState(null);
  const [image, setImage] = useState([]);
  const [localUrl, setLocalUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

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
                <Form.Label>Select Sub-Category</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  {category === "Mobiles" ? (
                    <>
                      <option>SmartPhone</option>
                      <option>Tablets</option>
                      <option>Accessories</option>
                      <option>Wearables</option>
                      <option>Others</option>
                    </>
                  ) : category === "Electronics" ? (
                    <>
                      <option>Televisions</option>
                      <option>Desktop</option>
                      <option>Projectors</option>
                      <option>Laptops</option>
                      <option>Cameras</option>
                      <option>Video Games</option>
                      <option>Home audio & videos</option>
                      <option>IT equipment</option>
                      <option>Camcorders</option>
                      <option>Others</option>
                    </>
                  ): category === "Home & Kitchen" ? (
                    <>
                      <option>Home Appliances</option>
                      <option>Bedding</option>
                      <option>Home Decor</option>
                      <option>Kitchen Utensils</option>
                      <option>Furniture</option>
                      <option>Household</option>
                      <option>Kichen Appliances</option>
                      <option>Tools & Home Improvement</option>
                      <option>Others</option>
                    </>
                  ): category === "Beauty & Fragrances" ? (
                    <>
                      <option>Fragrances</option>
                      <option>Grooming Appliances</option>
                      <option>Skin & Hair Care</option>
                      <option>Makeup</option>
                      <option>Health & Fitness</option>
                      <option>Others</option>
                    </>
                  ): category === "Accessories" ? (
                    <>
                      <option>Sunglasses</option>
                      <option>Watches</option>
                      <option>Necklaces</option>
                      <option>Others</option>
                      
                    </>
                  ) : category === "Men's Fashion" ? (
                    <>
                      <option>Clothing</option>
                      <option>Men's Bags</option>
                      <option>Shoes</option>
                      <option>Underwear</option>
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
