import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Appcontext } from "../App";
import axios from "axios";

function Profilext() {
  // patient_ids = ["69-0855699", "93-0120011", "75-0206485", "17-8885274"]
  // const fields = ["Dermatology", "Infectious", "Neurology", "Psychiatry"];
  
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

  const [flag, setFlag] = useState(false);

  const { setQues, userType } = useContext(Appcontext);

  const handleSubmit = async () => {
    if (flag === true) {
      try {
        const res = await axios.get("http://localhost:5000/Query", {
          params: {
            v1: val1,
            v2: val2,
            v3: val3,
            v4: val4,
          },
        });
        // console.log(val1+val2+val3+val4)
        setFlag(false);

        if (res.data.length !== 0) {
          navigate("/myHome/search");
          setQues(res.data);
        }
      } catch (err) {}
    }
  };
  const handleClick2 = async () => {
    if(userType === "patient"){
    navigate("/myHome/askQuestion");
    }
  };
  useEffect(() => {
    const fn = async () => {
      try {
        console.log(flag);
      } catch (err) {
        console.log(err);
      }
    };

    fn();
    handleSubmit();
  }, [flag]);

  let navigate = useNavigate();

  const handleClick = async () => {
    if (userType === "doctor") {
      navigate("/myHome/Myprofiledoctor");
    } else if (userType === "patient") {
      navigate("/myHome/Myprofilepatient");
      // console.log(val1+val2+val3+val4)
    }
  };

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
                {" "}
                <Form>
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
                      onClick={() => setFlag(true)}
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
      <div style={{ display: "flex" }}>
        <Card style={{ width: "50rem", marginRight: "10px" }}>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link>
              {" "}
              <Button
                variant="dark"
                size="lg"
                style={{ fontFamily: "sans-serif" }}
                onClick={handleClick}
              >
                Myprofile
              </Button>{" "}
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "50rem", marginLeft: "10px" }}>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link>
              {" "}
              <Button
                variant="dark"
                type="submit"
                size="lg"
                style={{ fontFamily: "sans-serif" }}
                onClick={handleClick2}
              >
                AskQuestion
              </Button>{" "}
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Profilext;
