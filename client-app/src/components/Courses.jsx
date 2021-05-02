import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import CourseData from "../courses.json";

const Courses = () => {
  return (
    <Row>
      <Col>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label className="d-flex justify-content-start">
            Name*
          </Form.Label>
          <Form.Control as="select" size="lg" name="courseName">
            {CourseData.courses.map((item) => {
              return <option key={item.id}>{item.name}</option>;
            })}
          </Form.Control>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label className="d-flex justify-content-start">Date</Form.Label>
          <Form.Control as="select" size="lg" name="date">
            {CourseData.courses.map((item) => {
              return <option key={item.id}>{item.dates[0]}</option>;
            })}
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default Courses;
