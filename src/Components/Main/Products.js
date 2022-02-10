import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Products extends React.Component {
  render() {
    return (
      <Card
        style={{ width: "22%", textAlign: "center", marginBottom: "20px" }}
        className="product"
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
      </Card>
    );
  }
}
export default Products;
