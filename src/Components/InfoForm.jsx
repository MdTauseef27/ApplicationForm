import React, { useState } from "react";
import moment from "moment";
import { Form, Button, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { string as yupString, object as yupObject } from "yup";

import { useFormik } from "formik";
export const InfoForm = () => {
  const [PhyAddress, SetPhyAddress] = useState("");
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const validationSchema = yupObject().shape({
    FirstName: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("*First  Name Is Required"),
    LastName: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("*Last Name Is Required"),
    FatherName: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("*Father Name Is Required"),
    Education: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("*Education Is Required"),
    Profession: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("*Profession Is Required"),
    Salary: yupString()
      .matches(/^\d+$/, "Salary must be In Digit")
      .required("*Salary Is Required"),
    MotherName: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("* Mother Name Is Required"),
    MotherEducation: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required(" *Education Is Required"),
    MotherProfession: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required(" *Profession Is Required"),
    MotherSalary: yupString()
      .matches(/^\d+$/, "Salary must be In Digit")
      .required("*Salary Is Required"),
    BrotherName: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("* Brother Name Is Required"),
    BrotherEducation: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required(" *Education Is Required"),
    BrotherProfession: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required(" *Profession Is Required"),
    BrotherSalary: yupString()
      .matches(/^\d+$/, "Salary must be In Digit")
      .required("*Salary Is Required"),
    SisterName: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required("*Sister Name Is Required"),
    SisterEducation: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required(" *Education Is Required"),
    SisterProfession: yupString()
      .min(3, "Too Short")
      .max(20, "Too Long")
      .required(" *Profession Is Required"),
    SisterSalary: yupString()
      .matches(/^\d+$/, "Salary must be In Digit")
      .required("*Salary Is Required"),
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
          <Form.Row>
            <Form.Group as={Col} controlId="dateofbirth">
              <Form.Label>Date Of Birth</Form.Label>
              <br />
              <DatePicker
                id="DOB"
                selected={formik.values.DOB}
                className="form-control"
                onChange={(date) => formik.setFieldValue("DOB", date)}
                showMonthDropdown
                showYearDropdown
                maxDate={new Date()}
                onBlur={formik.handleBlur}
              />

              {formik.values.DOB &&
                moment().diff(moment(formik.values.DOB), "years") < 18 && (
                  <React.Fragment>
                    <br />
                    <small class="text-danger">Age should above 18</small>
                  </React.Fragment>
                )}
              {formik.values.DOB &&
                moment().diff(moment(formik.values.DOB), "years") > 30 && (
                  <React.Fragment>
                    <br />
                    <small class="text-danger">Age should below 30</small>
                  </React.Fragment>
                )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="placeofbirth">
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
          </Form.Row>

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
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>Maharashtra</option>
                <option>Andhra Pardesh</option>
                <option>Telangana</option>
                <option>Kerela</option>
                <option>Kerela</option>
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

          <h>
            <b>Family Details:-</b>
          </h>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="FatherName">
              <Form.Label>FatherName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Fathers Name"
                value={formik.values.FatherName}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("FatherName", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.FatherName && formik.errors.FatherName
                }
              />
              {formik.touched.FatherName && formik.errors.FatherName && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.FatherName}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="Education">
              <Form.Label> Education</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Education"
                value={formik.values.Education}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("Education", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.Education && formik.errors.Education}
              />
              {formik.touched.Education && formik.errors.Education && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Education}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="Profession">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Profession"
                value={formik.values.Profession}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("Profession", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.Profession && formik.errors.Profession
                }
              />
              {formik.touched.Profession && formik.errors.Profession && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Profession}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="Salary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Salary"
                value={formik.values.Salary}
                maxLength={21}
                onChange={(e) => formik.setFieldValue("Salary", e.target.value)}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.Salary && formik.errors.Salary}
              />
              {formik.touched.Salary && formik.errors.Salary && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Salary}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="MotherName">
              <Form.Label>MotherName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mother Name"
                value={formik.values.Mother}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("MotherName", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.MotherName && formik.errors.MotherName
                }
              />
              {formik.touched.MotherName && formik.errors.MotherName && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.MotherName}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="MotherEducation">
              <Form.Label> Education</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Education"
                value={formik.values.MotherEducation}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("MotherEducation", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.MotherEducation &&
                  formik.errors.MotherEducation
                }
              />
              {formik.touched.MotherEducation &&
                formik.errors.MotherEducation && (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.MotherEducation}
                  </Form.Control.Feedback>
                )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="MotherProfession">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Profession"
                value={formik.values.MotherProfession}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("MotherProfession", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.MotherProfession &&
                  formik.errors.MotherProfession
                }
              />
              {formik.touched.MotherProfession &&
                formik.errors.MotherProfession && (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.MotherProfession}
                  </Form.Control.Feedback>
                )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="MotherSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Salary"
                value={formik.values.MotherSalary}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("MotherSalary", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.MotherSalary && formik.errors.MotherSalary
                }
              />
              {formik.touched.MotherSalary && formik.errors.MotherSalary && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.MotherSalary}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="BrotherName">
              <Form.Label>BrotherName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mother Name"
                value={formik.values.BrotherName}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("BrotherName", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.BrotherName && formik.errors.BrotherName
                }
              />
              {formik.touched.BrotherName && formik.errors.BrotherName && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.BrotherName}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="BrotherEducation">
              <Form.Label> Education</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Education"
                value={formik.values.BrotherEducation}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("BrotherEducation", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.BrotherEducation &&
                  formik.errors.BrotherEducation
                }
              />
              {formik.touched.BrotherEducation &&
                formik.errors.BrotherEducation && (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.BrotherEducation}
                  </Form.Control.Feedback>
                )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="BrotherProfession">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Profession"
                value={formik.values.BrotherProfession}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("BrotherProfession", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.BrotherProfession &&
                  formik.errors.BrotherProfession
                }
              />
              {formik.touched.BrotherProfession &&
                formik.errors.BrotherProfession && (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.BrotherProfession}
                  </Form.Control.Feedback>
                )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group as={Col} controlId="BrotherSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Salary"
                value={formik.values.BrotherSalary}
                maxLength={21}
                onChange={(e) =>
                  formik.setFieldValue("BrotherSalary", e.target.value)
                }
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.BrotherSalary && formik.errors.BrotherSalary
                }
              />
              {formik.touched.BrotherSalary && formik.errors.BrotherSalary && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.BrotherSalary}
                </Form.Control.Feedback>
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="SisterName">
              <Form.Label>Sister Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sister Name"
              ></Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="Education"></Form.Group>
            <Form.Label>Education</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Education"
            ></Form.Control>
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
