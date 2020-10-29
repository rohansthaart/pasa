import React,{useState} from 'react'
import { ToastsContainer, ToastsStore } from "react-toasts";
import { Spinner } from "react-bootstrap";
import {Modal,Button , Form} from 'react-bootstrap'
import { useUser } from "../Context/UserContext";

import { addresses} from  './AddressesOption'


function LocationModal({ modalVisible, closeModal }) {
  const { setUser, user } = useUser();

const [region,setRegion]= useState('');
const [city,setCity] = useState('');
const [selectCity,setSelectCity]=useState([]);
const [area,setArea]= useState('')
const [address,setAddress]= useState('')
const [loading, setLoading] = useState(false);


   const uploadLocation =()=>{
     setLoading(true);
     fetch('/user/addShippingAddress',{
       method:'PUT',
       headers:{
         "Content-Type":"application/json",
       },
       body:JSON.stringify({
         region:region,
         city: city,
         area: area,
         address:address,
       }),
     })
     .then((res)=> res.json())
     .then((result)=>{
       result.status === 200
       ? ToastsStore.success(result.message)
       :ToastsStore.error(result.message);
       closeModal();
       setUser(!user);
       setLoading(false);
     })
     .catch((err)=>{
       ToastsStore.error(err.message);
       setLoading(false);
     });
   
   };

    return (
        <div>
             <ToastsContainer className="mytoast" store={ToastsStore} />
      <Modal show={modalVisible} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
           
        
              
                <Form.Label>Region</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setRegion(e.target.value)}

                >
                  <option disabled selected>Please select your region</option>
                   {addresses.map(address=><option>{address.region}</option>)}
                   
                  
                </Form.Control>
            
            
                <Form.Label>City</Form.Label>
                <Form.Control
                  placeholder='Please choose your city'
                  as="select"
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option disabled selected>Please select your city</option>
                   {region === "bagmati" ? (
                    <>
                      
                      {addresses.map(address=>address.citys.map(city=><option>{city.cityName}</option>))}
                      
                    </>
                  ) :(
                    <>
                      
                      <option>Other</option>
                    </>
                  )} 
                  
                </Form.Control>
            
           
            
           
              
                <Form.Label>Area</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setArea(e.target.value)}
                >
                  <option disabled selected>Please select you area</option>
                  {city === 'Banepa' ? (
                    <>
                       {setSelectCity(addresses.map(address=>address.citys.filter(cit=>cit.cityName==city)))}
                   <option>   {selectCity.map(area=>area.areas)}</option>
                     
                     
                    
                    </>
                  ) :(
                    <>
                      
                      <option>Other</option>
                    </>
                  )} 
                  
                </Form.Control>
                  

            <Form.Group controlId="textarea" style={{ marginTop: 10 }}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder='For Example:House#123,Street#123,ABC Road'
                rows={6}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            
          </Form>
         
          
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
            <Button variant="primary" onClick={() => uploadLocation()}>
              SAVE
            </Button>
          )}
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default LocationModal
