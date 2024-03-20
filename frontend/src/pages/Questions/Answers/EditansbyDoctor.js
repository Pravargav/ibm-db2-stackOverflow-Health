import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { Appcontext } from "../../../App";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function EditansbyDoctor() {
  const { refansid, ansText } = useContext(Appcontext);
  const { editText, setEditText } = useState("");
  let navigate = useNavigate();

  const handleSubmit= async (event) => {
    event.preventDefault();
    try {
      const res = await Axios.post(
        "http://localhost:5000/stackExchange/edit/Ans",
        { editText, refansid }
      );
      if (res.data.message === "success") {
        navigate("/doctorStack");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Card style={{ width: "90rem", margin: "10px 2px 10px 2px" }}>
        {ansText}
      </Card>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 text-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label
            style={{
              fontSize: "27px",
              fontWeight: "bold",
              textDecoration: "underline",
              fontFamily: "sans-serif",
            }}
          >
            Edit
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default EditansbyDoctor;
