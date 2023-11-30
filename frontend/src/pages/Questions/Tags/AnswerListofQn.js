import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function AnsofQn() {
  return (
    <>
      <Card style={{ width: "90rem", margin: "10px 2px 10px 2px" }}>
        <Card.Body>
          <Card.Title
            style={{
              fontFamily: "sans-serif",
              fontSize: "30px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Question
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
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
                  <Button
                    variant="secondary"
                    type="submit"
                    style={{ fontFamily: "sans-serif", margin: "5px" }}
                  >
                    Edit
                  </Button>
                </div>
              </Card.Header>
              <Card.Body style={{ fontFamily: "sans-serif" }}>
                <blockquote className="blockquote mb-0">
                  <p style={{ fontFamily: "sans-serif" }}>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.{" "}
                  </p>
                  <footer
                    className="blockquote-footer"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Someone famous in{" "}
                    <cite
                      title="Source Title"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Source Title
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-between align-items-center"
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
                  <Button
                    variant="secondary"
                    type="submit"
                    style={{ fontFamily: "sans-serif", margin: "5px" }}
                  >
                    Edit
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ fontFamily: "sans-serif" }}>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.{" "}
                  </p>
                  <footer
                    className="blockquote-footer"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Someone famous in{" "}
                    <cite
                      title="Source Title"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Source Title
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-between align-items-center"
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
                  <Button
                    variant="secondary"
                    type="submit"
                    style={{ fontFamily: "sans-serif", margin: "5px" }}
                  >
                    Edit
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ fontFamily: "sans-serif" }}>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.{" "}
                  </p>
                  <footer
                    className="blockquote-footer"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Someone famous in{" "}
                    <cite
                      title="Source Title"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Source Title
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default AnsofQn;
