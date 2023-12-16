import React, { useEffect, useState ,useContext} from "react";
import { Appcontext } from "../../../App";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";

function RefQn() {
  const {refansid} = useContext(Appcontext);
  const [refqns, setRefqns] = useState([]);


  useEffect(() => {
    const fn = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/stackExchange/dr/${refansid}`
        );

        setRefqns(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fn();
  }, [refansid]);

  return (
    <>
    <Card style={{ width: "90rem", margin: "10px 2px 10px 2px" }}>
      {refqns.map((qns) => (
        <ListGroup className="list-group-flush" key={qns.QUESTIONID}>
          <ListGroup.Item>
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                border: "2px solid #000",
                margin: "20px",
                padding: "20px",
              }}
            >
              <Card style={{ borderRadius: "0" }}>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-between align-items-center"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Featured
                 
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
                
                </Card.Body>
              </Card>
            </div>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </Card>
  </>
  );
}

export default RefQn;
