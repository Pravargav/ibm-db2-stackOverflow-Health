import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Ask() {
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

export default Ask;
