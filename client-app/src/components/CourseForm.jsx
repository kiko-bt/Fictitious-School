import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Courses from "./Courses";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

const url = "http://localhost:5000/courses";

const CourseForm = () => {
  const [data, setData] = useState({
    companyName: "",
    companyPhone: "",
    companyEmail: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange({ currentTarget: input }) {
    const newData = { ...data };
    newData[input.name] = input.value;
    setData({ newData });
  }

  return (
    <Container fluid="lg">
      <Form className="mt-5 bg-light text-dark p-5">
        <h2 className="d-flex justify-content-start">Course</h2>

        <Courses />

        <h2 className="mt-5 d-flex justify-content-start">Company</h2>

        <Input value={data.companyName} label="Name" onChange={handleChange} />

        <Row className="mt-3">
          <Col>
            <Input
              value={data.companyPhone}
              label="Phone"
              onChange={handleChange}
            />
          </Col>

          <Col>
            <Input
              value={data.companyEmail}
              label="Email"
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button
              className="d-flex justify-content-start mt-5"
              variant="dark"
              size="lg"
              onClick={handleSubmit}
            >
              Add a company
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CourseForm;
