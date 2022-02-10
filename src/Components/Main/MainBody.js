import React from "react";
import LeftSideBar from "./LeftSideBar";
import Products from "./Products";
import { Col, Container, Row } from "react-bootstrap";

{
  /* <Container fluid>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container> */
}
class MainBody extends React.Component {
  render() {
    return (
      <Container>
        <Row className="mt-3">
          <Col sm="12" md="2">
            <LeftSideBar
              filterByCategory={this.props.filterByCategory}
              filterByPriceMin={this.props.filterByPriceMin}
              filterByPriceMax={this.props.filterByPriceMax}
              cat={this.props.cat}
              min={this.props.min}
              max={this.props.max}
              onSubmit={this.props.onSubmit}
              minChange={this.props.minChange}
              maxChange={this.props.maxChange}
            />
          </Col>
          <Col xs="12" md="1"></Col>
          <Col xs="12" md="9">
            <Row xs="1">
              {this.props.productsData.map((product) => (
                <Products
                  key={product.id}
                  product={product}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  images={product.image}
                  description={product.description}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      /* <div className="main">
        <LeftSideBar
          filterByCategory={this.props.filterByCategory}
          filterByPriceMin={this.props.filterByPriceMin}
          filterByPriceMax={this.props.filterByPriceMax}
          cat={this.props.cat}
          min={this.props.min}
          max={this.props.max}
        />

        {this.props.productsData.map((product) => (
          <Products
            key={product.id}
            product={product}
            title={product.title}
            category={product.category}
            price={product.price}
            images={product.image}
            description={product.description}
          />
        ))}
      </div> */
    );
  }
}
export default MainBody;

// {this.props.getData.map((product) =>(
//   <Products
//     key={product.id}
//     product={product}
//     title= {product.title}
//     price ={product.price}
//   />

//   ))}
