import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useEffect, useState } from "react";
import { Appcontext } from "../App";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Axios from "axios";
import Stack from "react-bootstrap/Stack";
function Home() {
  let navigate = useNavigate();

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

  const { setRefqueryid } = useContext(Appcontext);

  const handleClick = async (qnid) => {
    try {
      setRefqueryid(qnid);
      navigate("/stackExchangeQuery/refAns");
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await Axios.post(
        "http://localhost:5000/stackExchange/query/Qns",
        {
          val1,
          val2,
          val3,
          val4,
        }
      );

      setQns(res.data);
    } catch (error) {
      console.error(error);
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
  }, [qns]);
  const { patientId, userType, doctorId } = useContext(Appcontext);

  const handleClick1 = async (event) => {
    event.preventDefault();
    try {
      if (userType === "doctor") {
        navigate("/doctorStack");
      } else {
        navigate("/patientStack");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick2 = async (event) => {
    event.preventDefault();
    try {
      navigate("/stackExchange");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            {userType === "patient" ? (
              <NavLink to="/patientProfile">
                <Button
                  variant="secondary"
                  size="lg"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {patientId}
                </Button>
              </NavLink>
            ) : userType === "doctor" ? (
              <NavLink to="/doctorProfile">
                <Button
                  variant="secondary"
                  size="lg"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {doctorId}
                </Button>
              </NavLink>
            ) : (
              <NavLink to="/patientProfile">
                <Button
                  variant="secondary"
                  size="lg"
                  style={{ fontFamily: "sans-serif" }}
                >
                  myProfile
                </Button>
              </NavLink>
            )}

            <Navbar.Brand
              href="#"
              style={{
                fontSize: "27px",
                fontWeight: "bold",
                textDecoration: "underline",
                fontFamily: "sans-serif",
              }}
            >
              Health stack Exchange
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className="d-grid gap-2">
                    <h1
                      style={{
                        fontFamily: "sans-serif",
                        border: "1px solid black",
                        padding: "10px 10px 10px 90px",
                      }}
                    >
                      Login
                    </h1>

                    <NavLink to="/login-admin">
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        admin
                      </Button>
                    </NavLink>
                    <NavLink to="/login-doctor">
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        doctor
                      </Button>
                    </NavLink>
                    <NavLink to="/login-patient">
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        patient
                      </Button>
                    </NavLink>

                    <h1
                      style={{
                        fontFamily: "sans-serif",
                        border: "1px solid black",
                        padding: "10px 10px 10px 90px",
                      }}
                    >
                      SignUp
                    </h1>

                    <NavLink to="/signup-doctor">
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        doctor
                      </Button>
                    </NavLink>
                    <NavLink to="/signup-patient">
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        patient
                      </Button>
                    </NavLink>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <div>
              {" "}
              <NavLink to="">
                <Button
                  variant="dark"
                  size="lg"
                  style={{ fontFamily: "sans-serif" }}
                  onClick={handleClick1}
                >
                  MyQna
                </Button>
              </NavLink>
              <NavLink to="">
                <Button
                  variant="dark"
                  size="lg"
                  style={{ fontFamily: "sans-serif" }}
                  onClick={handleClick2}
                >
                  Question+
                </Button>
              </NavLink>
            </div>

            <Navbar.Brand
              href="#"
              style={{
                fontSize: "27px",
                fontWeight: "bold",
                textDecoration: "underline",
                fontFamily: "sans-serif",
              }}
            ></Navbar.Brand>

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
                    <Form.Group as={Col} controlId="formGridState">
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
                    <Form.Group as={Col} controlId="formGridState">
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
                    <Form.Group as={Col} controlId="formGridState">
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
                    <Form.Group as={Col} controlId="formGridState">
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

      <Card style={{ width: "90rem", margin: "10px 2px 10px 2px" }}>
        {qns.map((qns) => (
          <ListGroup className="list-group-flush" key={qns.QUESTIONID}>
            <ListGroup.Item>
              {" "}
              <Card style={{ borderRadius: "0" }}>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-between align-items-center"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Featured
                  <Button
                    variant="secondary"
                    type="submit"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Answer+
                  </Button>
                </Card.Header>
                <Card.Body>
                  <Card.Title style={{ fontFamily: "sans-serif" }}>
                    Special title treatment
                  </Card.Title>
                  <Card.Text style={{ fontFamily: "sans-serif" }}>
                    {qns.TEXT}
                    <Stack direction="horizontal" gap={2}>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.PRIORITY1}
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.PRIORITY2}
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.PRIORITY3}
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.PRIORITY4}
                      </Badge>
                    </Stack>
                  </Card.Text>
                  <Button
                    variant="secondary"
                    type="submit"
                    style={{ fontFamily: "sans-serif" }}
                    onClick={() => handleClick(qns.QUESTIONID)}
                  >
                    Go to Answers
                  </Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Card>
    </>
  );
}

export default Home;
