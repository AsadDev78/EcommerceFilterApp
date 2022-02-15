import React from "react";
import LeftSideBar from "./LeftSideBar";
import Products from "./Products";
import { Col, Row } from "react-bootstrap";


  /* <Container fluid>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container> */

class MainBody extends React.Component {
  render() {
    return (
      
        <Row >
          <Col sm={12} md={"auto"} lg={"auto"}></Col>
          <Col  sm={12} md={3}>
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
          <Col sm={12} md={8}>
            <Row >
              {this.props.productsData.map((product) => (
                <Products
                  key={product.id}
                  product={product}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  images={product.image}
                  description={product.description}
                  id={product.id}
                  rate={product.rating.rate}
                  count={product.rating.count}
                />
              ))}
            </Row>
          </Col>
        </Row>

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
