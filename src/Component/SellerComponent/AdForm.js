import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import { Button } from "@material-ui/core";
import { ToastsContainer, ToastsStore } from "react-toasts";
import axios from "axios";

export default function AdForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState("");
  const [localUrl, setLocalUrl] = useState(null);
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("title", title);
    data.append("duration", duration);
    data.append("price", price);
    data.append("image", banner);

    axios
      .post("/ads/postAds", data)
      .then((res) => {
        ToastsStore.success(res.data.message);
        setLoading(false);
      })
      .catch((err) => {
        ToastsStore.error(err.message);
        setLoading(false);
      });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Upload Banner</Form.Label>
          <Form.File
            id="custom-file"
            label="Custom file input"
            custom
            onChange={(e) => {
              setBanner(e.target.files[0]);

              setLocalUrl(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </Form.Group>
        {localUrl && (
          <img src={localUrl} width={200} height={150} alt="banner" />
        )}
        <Form.Group>
          <Form.Label>Pick the start date and end date</Form.Label>
          <br />
          <DateRangePicker
            startDate={startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
              var s = moment(startDate, "DD-MM-YYYY");
              var e = moment(endDate, "DD-MM-YYYY");
              var difference = e.diff(s, "days");
              setDuration(difference);
              setPrice(difference * 100);
            }}
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
          />
        </Form.Group>
        {price !== 0 && <h5>Your price is {price}</h5>}
        {isLoading ? (
          <h6 style={{ color: "green" }}>Please Wait...</h6>
        ) : (
          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        )}
      </Form>
      <ToastsContainer className="mytoast" store={ToastsStore} />
    </div>
  );
}
