import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col, Form,InputGroup,FormControl } from "react-bootstrap";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { useProduct } from "../../Context/ProductContext";
import { Spinner } from "react-bootstrap";
import { Categorys } from "./CategoryOption";

export default function CreateProductModal({ modalVisible, closeModal }) {
  
  

  const { setChanged, changed } = useProduct();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(0);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [pic, setPic] = useState(null);
  const [image, setImage] = useState([]);
  const [localUrl, setLocalUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [subSubCategory, setSubSubCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [toggle,setToggle]= useState('false');
  const [subOptions,setSubOptions]= useState([]);
  const [subSubOptions, setSubSubOptions]= useState([]);
  
  useEffect(()=>{
    if(category.length !== 0){
      const filteredSub = Categorys
        .filter((su)=>su.category=== category)[0]
        .subCategorys.map((sub)=>sub.subCatageory);
        setSubOptions(filteredSub)
    }
  },[category])

  useEffect(()=>{
    if(subCategory.length !== 0){
      const filteredSubSub = Categorys
        .filter((cu)=>cu.category=== category)[0]
        .subCategorys.filter((s)=>s.subCatageory===subCategory)[0];
        setSubSubOptions(filteredSubSub.subSubCategory)
    }
  },[subCategory])




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
                  {Categorys.map((cata)=>(
                    <option>{cata.category}</option>
                  ))}
                  
                  
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Select Sub-Category</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSubCategory(e.target.value)}
                ><option disabled selected>Sub-Category</option>
                  {subOptions.map((sub,i)=>(

                  <option key={i}>{sub}</option>
                  ))}
                
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
                  {subSubOptions.map((subSub,i)=>(
                    <option key={i}>{subSub}</option>
                  ))}
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Apple"
                  onChange={(e) => setBrand(e.target.value)}
                  
                >
             
                  
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
