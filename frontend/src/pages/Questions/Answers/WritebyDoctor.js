import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Write() {
    
  return (
    /* Custom styles.css */
    <Card border="dark" className="my-3 p-3 cstm" style={{borderWidth:"4px"}}>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          A network may have three types of layers: input layers that take raw
          input from the domain, hidden layers that take input from another
          layer and pass output to another layer, and output layers that make a
          prediction. All hidden layers typically use the same activation
          function. The output layer will typically use a different activation
          function from the hidden layers and is dependent upon the type of
          prediction required by the model. Activation functions are also
          typically differentiable, meaning the first-order derivative can be
          calculated for a given input value. This is required given that neural
          networks are typically trained using the backpropagation of error
          algorithm that requires the derivative of prediction error in order to
          update the weights of the model. There are many different types of
          activation functions used in neural networks, although perhaps only a
          small number of functions used in practice for hidden and output
          layers.
        </Card.Text>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Textarea</Form.Label>
            <Form.Control as="textarea" rows={7} />
          </Form.Group>
        </Form>
        <Button variant="secondary">Save</Button>
      </Card.Body>
    </Card>
  );
}

export default Write;
