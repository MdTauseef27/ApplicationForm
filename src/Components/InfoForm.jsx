import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { string as yupString, object as yupObject } from "yup";

import { useFormik } from "formik";
export const InfoForm = () => {
  const [StartDate, SetStartDate] = useState(new Date());
  const [PhyAddress, SetPhyAddress] = useState("Workshop corner");
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const validationSchema = yupObject().shape({
    FirstName: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("*First Name Is Required"),
    LastName: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("*Last Name Is Required"),
    email: yupString()
      .email("*Must be a valid email address")
      .max(100, "*Email must be less than 100 characters")
      .required("*Email is required"),
    ContactNo: yupString()
      .matches(phoneRegExp, "*Phone number is not valid")
      .required("*Phone number required"),
    address: yupString()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("*Permenent Address Is Required"),
    age: yupString()
      .matches(/^\d+$/, "Age must be In Digit")
      .min(18, "You must be at least 18 years")
      //.max(60, "You must be at most 60 years")
      .required("*Age Is Required"),
    placeofbirth: yupString()
      .min(3, "Too Short")
      .max(15, "Too Long")
      .required("*Place Of Birth Required"),
    weight: yupString()
      .matches(/^\d+$/, "weight must be In Digit")
      .required("*Weight Is Required"),
    height: yupString()
      .matches(/^\d+$/, "Height must be In Digit")
      .required("*Height Is Required"),
    chest: yupString()
      .matches(/^\d+$/, "Chest must be In Digit")
      .required("*chest Is Required"),
  });

  const formik = useFormik({
    initialValues: {},
    validationSchema,
  });

  return (
    <div>
      <h1 className="text-center">Personel Information</h1>

      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="FirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={formik.values.FirstName}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("FirstName", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.FirstName && formik.errors.FirstName}
              />
              {formik.touched.FirstName && formik.errors.FirstName && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.FirstName}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={formik.values.LastName}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("LastName", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.LastName && formik.errors.LastName}
              />
              {formik.touched.LastName && formik.errors.LastName && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.LastName}
                </Form.Control.Feedback>
              )}
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
              minDate={new Date(1985,9,9)}
              maxDate={new Date(2002,9,9)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="placeofbirth">
            <Form.Label>Place Of Birth</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Place Of Birth"
              value={formik.values.placeofbirth}
              onChange={(e) =>
                formik.setFieldValue("placeofbirth", e.target.value)
              }
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.placeofbirth && formik.errors.placeofbirth
              }
            />

            {formik.touched.placeofbirth && formik.errors.placeofbirth && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.placeofbirth}
              </Form.Control.Feedback>
            )}
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
                value={formik.values.age}
                maxLength={2}
                onChange={(e) => formik.setFieldValue("age", e.target.value)}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.age && formik.errors.age}
              />

              {formik.touched.age && formik.errors.age && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.age}
                </Form.Control.Feedback>
              )}

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="email">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            )}

            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="weight">
              <Form.Label>Weight(kgs)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Weight"
                value={formik.values.weight}
                maxLength={2}
                onChange={(e) => formik.setFieldValue("weight", e.target.value)}
                onFocus={formik.handleBlur}
                isInvalid={formik.touched.weight && formik.errors.weight}
              />
              {formik.touched.weight && formik.errors.weight && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.weight}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="height">
              <Form.Label>Height(cm)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Height"
                value={formik.values.height}
                maxLength={3}
                onChange={(e) => formik.setFieldValue("height", e.target.value)}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.height && formik.errors.height}
              />
              {formik.touched.height && formik.errors.height && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.height}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="chest">
              <Form.Label>Chest(cm)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter chest size"
                value={formik.values.chest}
                maxLength={3}
                onChange={(e) => formik.setFieldValue("chest", e.target.value)}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.chest && formik.errors.chest}
              />
              {formik.touched.chest && formik.errors.chest && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.chest}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="address">
            <Form.Label>Permenent Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Permenent Address"
              value={formik.values.address}
              onChange={(e) => formik.setFieldValue("address", e.target.value)}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.address && formik.errors.address}
            />
            {formik.touched.address && formik.errors.address && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.address}
              </Form.Control.Feedback>
            )}
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="physicaladd">
            <Form.Label>Physical Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Physical Address"
              value={PhyAddress}
              onChange={(e) => SetPhyAddress(e.target.value)}
              onFocus={() => SetPhyAddress("")}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="ContactNo">
            <Form.Label>Contact No</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Contact No"
              maxLength={13}
              value={formik.values.ContactNo}
              onChange={(e) =>
                formik.setFieldValue("ContactNo", e.target.value)
              }
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.ContactNo && formik.errors.ContactNo}
            />
            {formik.touched.ContactNo && formik.errors.ContactNo && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.ContactNo}
              </Form.Control.Feedback>
            )}
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
        </Form>
      </Container>
    </div>
  );
};
