import React, { useEffect, useState ,useContext} from "react";
import { Appcontext } from "../../App";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function RefAnswsQ() {
  const {refqnid} = useContext(Appcontext);
  const [refans, setRefans] = useState([]);
  useEffect(() => {
    const fn = async () => { 
      try {
        const response = await axios.get(
          `http://localhost:5000/stackExchange/query/Qns/${refqnid}`
        );

        setRefans(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fn();
  }, [refqnid])

  return (
    <>
      <Card style={{ width: "90rem", margin: "10px 2px 10px 2px" }}>
        {refans.map((ans) => (
          <ListGroup className="list-group-flush" key={ans.ANSWERID}>
            <ListGroup.Item>
              {" "}
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex  justify-content-between align-items-center"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Featured
                  <div>
                    <Button
                      variant="secondary"
                      style={{ fontFamily: "sans-serif", margin: "5px" }}
                      size="sm"
                    >
                      like{" "}
                      <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                        9
                      </Badge>
                      <span
                        className="visually-hidden"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        likes
                      </span>
                    </Button>
                    <Button
                      variant="secondary"
                      style={{ fontFamily: "sans-serif", margin: "5px" }}
                      size="sm"
                    >
                      dislike{" "}
                      <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                        9
                      </Badge>
                      <span
                        className="visually-hidden"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        dislikes
                      </span>
                    </Button>
                
                  
                  </div>
                </Card.Header>
                <Card.Body style={{ fontFamily: "sans-serif" }}>
                  <blockquote className="blockquote mb-0">
                    <p style={{ fontFamily: "sans-serif" }}>
                      {" "}
                     {ans.TEXT}{" "}
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Card>
    </>
  );
}

export default RefAnswsQ;
