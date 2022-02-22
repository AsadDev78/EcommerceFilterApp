import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContextAPI from "../ContextApi/ContextAPI";

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
        style={{
          width: "18rem",
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "10px",
        }}
        className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-sm-12 mx-auto"
      >
        
          <Link to={`/ProductDetails/${this.props.id}`}>
          <Card.Img
          variant="top"
          src={this.props.images}
          style={{ paddingTop: "10px" }}
        />
          </Link>
        <Card.Body>
          <Card.Title>{this.props.category}</Card.Title>
          <Card.Text style={{ color: "gray" }}>{this.props.title}</Card.Text>
          <Card.Title className="text-danger">Rs: {this.props.price}</Card.Title>
          <Card.Title className="text-warning">Rating {this.props.rate} Reviews({this.props.count})</Card.Title>
          <Button variant="success">Buy Now</Button>
          <Button variant="danger" className="marginRight" onClick={() => {this.context.AddToCart(this.props.id)}} >Add to Cart</Button>
        </Card.Body>

        {/* <ListGroup className="list-group-flush mb-3 ">
        </ListGroup> */}
      </Card>
    );
  }
}
Products.contextType = ContextAPI
export default Products;
