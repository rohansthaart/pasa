import React,{useState} from 'react';
import LoctionModal from './LocationModal'
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import LocationModal from './LocationModal';
import { Button } from "react-bootstrap";

function Address() {
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
    <tr>
      <th scope="row">Bagmati - Kathmandu Metro 15 - Swayambhu Area - Swayambhu - Thulobharyang</th>
      <td><EditIcon/> <DeleteOutlineOutlinedIcon/></td>
     
    </tr>
    <tr>
      <th scope="row">769, Industrial, West Chicago, IL 60185, USA</th>
      <td><EditIcon/> <DeleteOutlineOutlinedIcon/></td>
      
    </tr>
    <tr>
      <th scope="row">514 S. Magnolia St. Orlando, FL 32806, USA    </th>
      <td><EditIcon/> <DeleteOutlineOutlinedIcon/></td>
     
    </tr>
    
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
