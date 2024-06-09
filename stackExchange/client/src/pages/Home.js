import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const fields = [
    "Allergist",
    "Allergy",
    "Anesthesiology",
    "Cardiologist",
    "Cardiology",
    "Dermatologist",
    "Dermatology",
    "Emergency",
    "Endocrinology",
    "Family",
    "Gastroenterologist",
    "Gastroenterology",
    "Genetics",
    "Geriatrics",
    "Hematologist",
    "Hematology",
    "Infectious",
    "Internist",
    "Medical",
    "Medicine",
    "Nephrologist",
    "Nephrology",
    "Neurologist",
    "Neurology",
    "Neurosurgeon",
    "Neurosurgery",
    "Obstetrics",
    "Oncologist",
    "Oncology",
    "Ophthalmologist",
    "Ophthalmology",
    "Orthopedics",
    "Otolaryngology",
    "Pain",
    "Pathologist",
    "Pathology",
    "Pediatrician",
    "Pediatrics",
    "Physician",
    "Plastic",
    "Psychiatry",
    "Pulmonology",
    "Radiology",
    "Rehabilitation",
    "Rheumatology",
    "Specialist",
    "Surgeon",
    "Surgery",
    "Thoracic",
    "Urology",
    "Vascular",
  ];
  
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");
  const [qns, setQns] = useState([]);

  let navigate = useNavigate();


  const handleSubmit = async () => {
    try {
      const res = await axios.get("http://localhost:5000/Qns", {
        params: {
          v1: val1,
          v2: val2,
          v3: val3,
          v4: val4,
        },
      });
      navigate("/Test");
      // console.log(val1+val2+val3+val4)
      setQns(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fn = async () => {
      try {
        console.log(qns);
      } catch (err) {
        console.log(err);
      }
    };
    fn();
    handleSubmit();
  }, [qns]);

  return (
    <>
    {/* {val1+val2+val3+val4} */}
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              style={{ maxHeight: "120px" }}
            >
              <Offcanvas.Body style={{ overflowY: "hidden" }}>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState1">
                      <Form.Label>priority1</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setVal1(e.target.value)}
                      >
                        {fields.map((element, index) => (
                          <option key={index} value={element}>
                            {element}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState2">
                      <Form.Label>priority2</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setVal2(e.target.value)}
                      >
                        {fields.map((element, index) => (
                          <option key={index} value={element}>
                            {element}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState3">
                      <Form.Label>priority3</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setVal3(e.target.value)}
                      >
                        {fields.map((element, index) => (
                          <option key={index} value={element}>
                            {element}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState4">
                      <Form.Label>priority4</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setVal4(e.target.value)}
                      >
                        {fields.map((element, index) => (
                          <option key={index} value={element}>
                            {element}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Button
                      variant="dark"
                      type="submit"
                      size="lg"
                      style={{ margin: "10px" }}
                      as={Col}
                    >
                      Search
                    </Button>
                  </Row>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Card style={{ width: "90rem", margin: "10px 2px 10px 2px" }}></Card>
    </>
  );
};
