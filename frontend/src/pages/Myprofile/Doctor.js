import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useContext, useEffect, useState } from "react";
import { Appcontext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Doctorprofile() {
  let navigate = useNavigate();
  const { doctorId } = useContext(Appcontext);
  const [doctor, setDoctor] = useState({});

  const func = () => {
    window.localStorage.setItem("doctorId", "myProfileId");
    window.localStorage.setItem("userType", "userTypex");
    navigate("/");
  };
  useEffect(() => {
    const fetchprofile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/doctorProfile/${doctorId}`
        );
        setDoctor(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchprofile();
  }, [doctorId]);
  const Bttncontainer = {
    display: "flex",
    justifyContent: "space-between",
  };
  const Bttn = {
    fontFamily: "sans-serif",
    width: "600px",
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: "78rem" }}>
        <Card.Body>
          <Card.Title
            style={{ fontFamily: "sans-serif" }}
            className="d-flex justify-content-center align-items-center"
          >
            Doctorprofile
            <Button
              variant="secondary"
              size="sm"
              style={{ marginRight: "10px", marginLeft: "870px" }}
              onClick={func}
            >
              logout
            </Button>
            <Button
              variant="secondary"
              size="sm"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              resetDb
            </Button>
          </Card.Title>
          <Card.Text
            style={{ fontFamily: "sans-serif" }}
            className="d-flex justify-content-center align-items-center"
          >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            doctorid : {doctor.DOCTORID}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            name : {doctor.NAME}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            email : {doctor.EMAIL}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            password : {doctor.PASSWORD}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            experience : {doctor.EXPERIENCE}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            specialisation : {doctor.SPECIALISATION}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            mobilenum : {doctor.MOBILENUM}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            address : {doctor.ADDRESS}
          </ListGroup.Item>
        </ListGroup>
        <div style={Bttncontainer}>
          <Button variant="dark" size="lg" style={Bttn}>
            my reports
          </Button>

          <Button variant="dark" size="lg" style={Bttn}>
            my appointments
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Doctorprofile;
