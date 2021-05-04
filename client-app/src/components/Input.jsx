import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const Input = ({ name, label, handleChange }) => {
  return (
    <>
      <Form.Label className="d-flex justify-content-start">{label}*</Form.Label>
      <InputGroup size="lg">
        <FormControl name={name} value={name} onChange={handleChange} />
      </InputGroup>
    </>
  );
};

export default Input;
