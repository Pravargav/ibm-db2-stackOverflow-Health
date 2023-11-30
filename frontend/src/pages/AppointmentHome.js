import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Doctors from "./OthProfileslist/DoctorsAll";
import Doctorsbyexp from "./OthProfileslist/Doctorsbyexperience";
import Doctorsbyspec from "./OthProfileslist/Doctorsbyspecialisation";

function Appointment() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <NavLink to="/MyProfile">
              <Button
                variant="secondary"
                size="lg"
                style={{ fontFamily: "sans-serif" }}
              >
                resetDB
              </Button>
            </NavLink>
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
                    <NavLink to="/login-admin">
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        one
                      </Button>
                    </NavLink>
                    <NavLink to="/login-doctor">
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        two
                      </Button>
                    </NavLink>
                    <NavLink to="/login-patient">
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        three
                      </Button>
                    </NavLink>

                    <NavLink to="/signup-doctor">
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        four
                      </Button>
                    </NavLink>
                    <NavLink to="/signup-patient">
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        five
                      </Button>
                    </NavLink>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Doctors />
      <Doctorsbyexp />
      <Doctorsbyspec />
    </>
  );
}

export default Appointment;
