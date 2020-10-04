import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const InfoForm = () => {
  const [StartDate, SetStartDate] = useState(new Date());

  return (
    <div>
      <h1 className="text-center">Personel Information</h1>

      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formFirstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="formlastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
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
            <Form.Control type="text" placeholder="Enter Place Of Birth" />
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
              <Form.Control type="text" placeholder="Enter age" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="email id">
            <Form.Label>Email ID</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="weight">
              <Form.Label>Weight(kgs)</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Weight" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="height">
              <Form.Label>Height</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Height" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="chest">
              <Form.Label>Chest</Form.Label>
              <Form.Control type="text" placeholder="Enter chest size" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="address">
            <Form.Label>Permenent Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Permenent Address"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="contactno">
            <Form.Label>Contact No</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Contact No" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          {"   "}
          <Button Variant="primary" type="cancel">
            Cancel
          </Button>
        </Form>
      </Container>
    </div>
  );
};
