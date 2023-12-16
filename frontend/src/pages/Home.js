import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { Appcontext } from "../App";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Home() {
  const { patientId, userType,doctorId } = useContext(Appcontext);
  let navigate = useNavigate();
  const handleClick = async (event) => {
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
            ) : (
              userType === "doctor"?(
              <NavLink to="/doctorProfile">
                <Button
                  variant="secondary"
                  size="lg"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {doctorId}
                </Button>
              </NavLink>):(<NavLink to="/patientProfile">
                <Button
                  variant="secondary"
                  size="lg"
                  style={{ fontFamily: "sans-serif" }}
                >
                  myProfile
                </Button>
              </NavLink>)
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
              HealthConnect: Streamlined Doctors Appointment And Health Record
              Management-
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
                      Login??
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
                      SignUp??
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
      <Row>
        <Col>
          <Card style={{ width: "34rem", margin: "20px" }}>
            <Card.Header as="h5" style={{ fontFamily: "sans-serif" }}>
              Appointments and Reports Page
            </Card.Header>
            <Card.Body>
              <Card.Text style={{ fontFamily: "sans-serif" }}>
                An appointment scheduling app is a powerful tool designed to
                streamline and simplify the process of booking and managing
                appointments for both businesses and individuals. In today's
                fast-paced world, where time is of the essence, such
                applications have become indispensable for optimizing
                productivity and enhancing customer satisfaction.
              </Card.Text>
              <Button
                variant="dark"
                size="lg"
                style={{ fontFamily: "sans-serif" }}
              >
                Appointments & Reports
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "34rem", margin: "20px" }}>
            <Card.Header as="h5" style={{ fontFamily: "sans-serif" }}>
              StackExchange Page
            </Card.Header>
            <Card.Body>
              <Card.Text style={{ fontFamily: "sans-serif" }}>
                As of my last knowledge update in September 2021, Stack Exchange
                did not have an official mobile app. However, it's worth noting
                that Stack Exchange, which includes popular Q&A communities like
                Stack Overflow, Super User, Ask Ubuntu, and others, had a
                well-optimized mobile website that allowed users to access the
                platform on their mobile devices.
              </Card.Text>
              <Button
                variant="dark"
                size="lg"
                style={{ fontFamily: "sans-serif" }}
                onClick={handleClick}
              >
                Health StackExchange QnA
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Home;
