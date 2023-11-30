import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

function EditQ() {
  return (
    /* Custom styles.css */
    <Card
      border="dark"
      className="my-3 p-3 cstm"
      style={{ borderWidth: "4px" }}
    >
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text style={{ fontFamily: "sans-serif" }}>
            When it comes to building a responsive app, CSS frameworks are
            useful in the market. If you work as a front-end developer, then
            Bootstrap, Foundation, and Bulma kind of framework are not new for
            you. Most industries use the Bootstrap framework. Millions of
            websites are running on bootstrap. Here in this blog, we are going
            to discuss how to use React and Bootstrap, how to add bootstrap to
            React app. How to install the React bootstrap package and how to use
            it in React application. Let’s start with it…We all know the
            popularity of React, and how this library has made development tasks
            easier for frontend developers. React is the most popular front-end
            library to build the user interface of the application. Industries
            are slowly reducing the use of jQuery and DOM libraries for building
            their application.
            <Stack direction="horizontal" gap={2}>
              <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                secondary
              </Badge>
              <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                secondary
              </Badge>
              <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                secondary
              </Badge>
              <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                secondary
              </Badge>
              <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                secondary
              </Badge>
              <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                secondary
              </Badge>
              <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                secondary
              </Badge>
              <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                secondary
              </Badge>
              <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                secondary
              </Badge>
              <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                secondary
              </Badge>
            </Stack>
          </Card.Text>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>TextArea</Form.Label>
            <Form.Control as="textarea" rows={7} />
          </Form.Group>
        </Form>
        <br />
        <br />
        <h4>tag1</h4>
        <Form.Select size="lg">
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
        </Form.Select>
        <br />
        <br />
        <h4>tag2</h4>
        <Form.Select size="lg">
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
        </Form.Select>
        <br />
        <br />
        <h4>tag3</h4>
        <Form.Select size="lg">
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
        </Form.Select>
        <br />
        <br />
        <h4>tag4</h4>
        <Form.Select size="lg">
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
        </Form.Select>
        <br />
        <br />
        <h4>tag5</h4>
        <Form.Select size="lg">
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
          <option>Large select</option>
        </Form.Select>
        <br />
        <br />
        <Button variant="secondary" size="lg">Save</Button>
      </Card.Body>
    </Card>
  );
}

export default EditQ;
