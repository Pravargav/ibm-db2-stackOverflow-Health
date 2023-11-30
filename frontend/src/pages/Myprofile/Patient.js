import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import { Appcontext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Patientprofile() {
  let navigate = useNavigate();
  const { patientId } = useContext(Appcontext);
  const [patient, setPatient] = useState({});
  const func = () => {
    window.localStorage.setItem("patientId", "myProfileId");
    window.localStorage.setItem("userType", "userType");
    navigate("/");
  };

  useEffect(() => {
    const fetchprofile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/patientProfile/${patientId}`
        );
        setPatient(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchprofile();
  }, [patientId]);

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
      <Card style={{ width: "28rem" }}>
        <Card.Body>
          <Card.Title
            style={{ fontFamily: "sans-serif" }}
            className="d-flex justify-content-center align-items-center"
          >
            Patientprofile
            <Button
              variant="secondary"
              size="sm"
              style={{ textAlign: "right", marginLeft: "100px" }}
              onClick={func}
            >
              logout
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
            patientid : {patient.PATIENTID}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            name : {patient.NAME}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            email : {patient.EMAIL}
          </ListGroup.Item>
          <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
            password : {patient.PASSWORD}
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

export default Patientprofile;
