import React from "react";
import axios from "axios";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import { withRouter } from "./Child";
import { Row, Card, Col,Button } from "react-bootstrap";

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      SingleProduct: [],
      loader: false
    };
  }

  async componentDidMount() {
    const id = this.props.params.id;
    this.fetchData(id);
    console.log(id);

    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const products = res.data;
    console.log(res.data);
    this.setState({ SingleProduct: products });
    this.setState({ loader: true });
  }

  fetchData = (id) => {
    // ...
  };
  render() {
    return (
      <div>
        <Routes>
          <Route path="" element={<Header />} />
          {/* <Route path="/" element={<App />} /> */}
        </Routes>
        {this.state.loader?<>
          <h1 className="text-center" >Product Details</h1>
        <Card className="py-5 px-5 mx-0 noBorder" style={{border:'none'}}>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="noBorder" style={{border:'none'}}>
              <Card.Img variant="top" src={this.state.SingleProduct.image} alt={"sjj"}/>
              <Card.Body>
                {/* <Card.Title>{this.state.SingleProduct.title}</Card.Title>
                <Card.Text>
                  {this.state.SingleProduct.description}
                </Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="noBorder">
              
              <Card.Body>
                <Card.Title>{this.state.SingleProduct.title}</Card.Title>
                <Card.Text>
                  {this.state.SingleProduct.description}
                </Card.Text>
                <Card.Title className="text-danger">
                  Rs: {this.state.SingleProduct.price}
                </Card.Title>
                <Card.Text >
                  <Button className="w-50" variant="success" >Buy Now</Button>
                  <Button className="w-50" variant="danger" >Add to Cart</Button>
                </Card.Text>
                <Card.Title>
                  Color Family
                </Card.Title>
                <Card.Title>
                  Quantity <Button variant="danger" size="sm">-</Button> 1 <Button variant="success" size="sm">+</Button>
                </Card.Title>
                

              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Card>
        </>
        :<div className="text-center"><img  src="https://acegif.com/wp-content/uploads/loading-72.gif" /></div>

        }
        
      </div>
    );
  }
}
export default withRouter(ProductDetails);
