import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const InfoForm = () => {
  const [StartDate, SetStartDate] = useState(new Date());
  const [FirstName, SetFirstName] = useState("Mohammed");
  const [LastName, SetLastName] = useState("Zubair");
  const [PlaceOfBirth, SetPlaceOfBirth] = useState("Nanded");
  const [Age, SetAge] = useState("30");
  const [EmailId, SetEmailID] = useState("zubair@gmail.com");
  const [Weight, SetWeight] = useState("72");
  const [Height, SetHeight] = useState("5.8");
  const [Chest, SetChest] = useState("34");
  const [PermAddress, SetPermAddress] = useState("Chaitanya Nager");
  const [ContactNo, SetContactNo] = useState("8888777799");

  return (
    <div>
      <h1 className="text-center">Personel Information</h1>

      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formFirstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={FirstName}
                onChange={(e) => SetFirstName(e.target.value)}
                onFocus={() => SetFirstName("")}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formlastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={LastName}
                onChange={(e) => SetLastName(e.target.value)}
                onFocus={(e) => SetLastName("")}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="dateofbirth">
            <Form.Label as={Col}>Date Of Birth</Form.Label>
            <DatePicker
              selected={StartDate}
              onChange={(date) => SetStartDate(date)}
              showMonthDropdown
              showYearDropdown
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="placeofbirth">
            <Form.Label>Place Of Birth</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Place Of Birth"
              value={PlaceOfBirth}
              onChange={(e) => SetPlaceOfBirth(e.target.value)}
              onFocus={(e) => SetPlaceOfBirth("")}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="gender">
              <Form.Label>Select Gender</Form.Label>
              <Form.Control as="select">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control as="select">
                <option>Maharashtra</option>
                <option>Andhra Pardesh</option>
                <option>Telangana</option>
                <option>Kerela</option>
                <option>Rajisthan</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                value={Age}
                onChange={(e) => SetAge(e.target.value)}
                onFocus={() => SetAge("")}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="email id">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={EmailId}
              onChange={(e) => SetEmailID(e.target.value)}
              onFocus={() => SetEmailID("")}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="weight">
              <Form.Label>Weight(kgs)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Weight"
                value={Weight}
                onChange={(e) => SetWeight(e.target.value)}
                onFocus={() => SetWeight("")}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="height">
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Height"
                value={Height}
                onChange={(e) => SetHeight(e.target.value)}
                onFocus={() => SetHeight("")}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="chest">
              <Form.Label>Chest</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter chest size"
                value={Chest}
                onChange={(e) => SetChest(e.target.value)}
                onFocus={() => SetChest("")}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="address">
            <Form.Label>Permenent Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Permenent Address"
              value={PermAddress}
              onChange={(e) => SetPermAddress(e.target.value)}
              onFocus={() => SetPermAddress("")}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="contactno">
            <Form.Label>Contact No</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Contact No"
              value={ContactNo}
              onChange={(e) => SetContactNo(e.target.value)}
              onFocus={() => SetContactNo("")}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <center>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {"   "}
            <Button Variant="primary" type="cancel">
              Cancel
            </Button>
          </center>

          <p>
            The First Name Of Applicant is {FirstName} and Last Name Is{" "}
            {LastName}
          </p>
        </Form>
      </Container>
    </div>
  );
};
