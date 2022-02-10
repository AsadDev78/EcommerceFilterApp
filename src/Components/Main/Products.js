import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Products extends React.Component {
  render() {
    return (
      // <Card
      //   style={{ width: "22%", textAlign: "center", marginBottom: "20px" }}
      //   className="product"
      // >
      //   <Card.Img

      //     variant="top"
      //     src={this.props.images}
      //     style={{ paddingTop: "10px" }}
      //   />
      //   <Card.Body>
      //     <Card.Title>{this.props.category}</Card.Title>
      //     <Card.Text style={{ color: "gray" }}>{this.props.title}</Card.Text>
      //     <Card.Title style={{ color: "red" }}>{this.props.price}</Card.Title>
      //   </Card.Body>

      //   <ListGroup className="list-group-flush mb-3">
      //     <Button variant="primary">Buy Now</Button>
      //   </ListGroup>
      // </Card>

      <Card
        style={{ width: "18rem",textAlign: "center", marginBottom: "20px" }}
        className="col-md-6 col-12 col-lg-3 col-sm-12 mt-5 mx-auto"
      >
      <Card.Img

    variant="top"
    src={this.props.images}
    style={{ paddingTop: "10px" }}
  />
  <Card.Body>
    <Card.Title>{this.props.category}</Card.Title>
    <Card.Text style={{ color: "gray" }}>{this.props.title}</Card.Text>
    <Card.Title style={{ color: "red" }}>{this.props.price}</Card.Title>
  </Card.Body>

  <ListGroup className="list-group-flush mb-3">
    <Button variant="primary">Buy Now</Button>
  </ListGroup>
        {/* <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}
      </Card>
    );
  }
}
export default Products;
