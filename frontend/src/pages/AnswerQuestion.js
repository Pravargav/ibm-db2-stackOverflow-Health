import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function AnswerQuestion() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Answer+</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default AnswerQuestion
