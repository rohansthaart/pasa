import React,{useState,useContext} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { Button } from "react-bootstrap";
import axios from 'axios'

import {useUser} from '../Context/UserContext';
import LocationModal from './LocationModal';



function Address() {
  
  const deleteAddress = (id) => {
    fetch("/user/deleteAddress/" + id)
      .then(res=>console.log(res))
      .catch((err) => console.log(err));
  };

  const userAddress = useUser().user.shippingAddress
  console.log(userAddress)
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
    return (<div>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col-9">Address</th>
      <th scope="col-3">Actions</th>
     
    </tr>
  </thead>
  <tbody>
 {userAddress.map((Address,index)=> Address != null ?  <tr key={index}>
 <th scope="row">
  { `${Address.region} - ${Address.city}-${Address.area} - ${Address.address} ${console.log(Address._id)}`}</th>
 <td><EditIcon/> <DeleteOutlineOutlinedIcon onClick={() => deleteAddress(Address._id)}/></td>

</tr>:null)}

       
   
  </tbody>
  
</table>

<Button onClick={openModal}>Add New Address</Button>
<LocationModal
        modalVisible={modalVisible}
        openModal={openModal}
        closeModal={closeModal}
      />

</div>
    )
}

export default Address
