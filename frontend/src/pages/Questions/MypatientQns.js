import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Appcontext } from "../../App";
import ListGroup from "react-bootstrap/ListGroup";


function ReadbyPatientId() {



  const [mypatientqns, setMypatientqns] = useState([]);
  const { patientId, setRefqnid } = useContext(Appcontext);

  const handleClick = async (qnid) => {
    try {
      setRefqnid(qnid);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fn = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/stackExchange/p/${patientId}`
        );

        setMypatientqns(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fn();
  }, [patientId]);

  console.log(mypatientqns);
  return (
    <>

      <Card style={{ width: "90rem", margin: "10px 2px 10px 2px" }}>
        {mypatientqns.map((qns) => (
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
                    Edit
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
                        {qns.TAG1}
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.TAG2}
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.TAG3}
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.TAG4}
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.TAG5}
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

export default ReadbyPatientId;
