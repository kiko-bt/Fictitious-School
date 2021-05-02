import React from "react";
import Courses from "./Courses";

import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const CourseForm = () => {
  return (
    <Container fluid="lg">
      <Form className="mt-5 bg-light text-dark p-5">
        <h2 className="d-flex justify-content-start">Course</h2>

        <Courses />

        <h2 className="mt-5 d-flex justify-content-start">Company</h2>

        <Form.Label className="d-flex justify-content-start">Name*</Form.Label>
        <InputGroup size="lg">
          <FormControl name="companyName" />
        </InputGroup>

        <Row className="mt-3">
          <Col>
            <Form.Label className="d-flex justify-content-start">
              Phone*
            </Form.Label>
            <InputGroup size="lg">
              <FormControl name="companyPhoneNumber" />
            </InputGroup>
          </Col>

          <Col>
            <Form.Label className="d-flex justify-content-start">
              E-Mail*
            </Form.Label>
            <InputGroup size="lg">
              <FormControl name="companyEmail" />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="d-flex justify-content-start mt-5"
              variant="dark"
              size="lg"
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
