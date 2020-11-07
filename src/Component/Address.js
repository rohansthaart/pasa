import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { Button } from "react-bootstrap";
import axios from "axios";

import { useUser } from "../Context/UserContext";
import LocationModal from "./LocationModal";
import { ToastsContainer, ToastsStore } from "react-toasts";

function Address() {
  const { user } = useUser();
  const [address, setAddress] = useState([]);
  const [changed, setChanged] = useState(false);
  const deleteAddress = (id) => {
    axios
      .put("/user/deleteAddress/" + id)
      .then((res) => {
        ToastsStore.success(res.data.message);
        setChanged(!changed);
      })
      .catch((err) => console.log(err));
  };
  const getUserAddress = () => {
    axios
      .get(`/user/userAddress/${user._id}`)
      .then((res) => setAddress(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUserAddress();
  }, [changed]);

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col-9">Address</th>
            <th scope="col-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {address.length !== 0 &&
            address.map((Address, index) =>
              Address != null ? (
                <tr key={index}>
                  <th scope="row">
                    {`${Address.region} - ${Address.city}-${Address.area} - ${Address.address}`}
                  </th>
                  <td>
                    <EditIcon />{" "}
                    <DeleteOutlineOutlinedIcon
                      onClick={() => deleteAddress(Address._id)}
                    />
                  </td>
                </tr>
              ) : null
            )}
        </tbody>
      </table>

      <Button onClick={openModal}>Add New Address</Button>
      <LocationModal
        modalVisible={modalVisible}
        openModal={openModal}
        closeModal={closeModal}
        setChanged={setChanged}
        changed={changed}
      />
    </div>
  );
}

export default Address;
