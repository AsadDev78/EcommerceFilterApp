import React from "react";
import { Button, Form } from "react-bootstrap";

class LeftSideBar extends React.Component {
  render() {
    return (
      <div className="sidebar text-center">
        <h1>Filter</h1>
        <div>
          Category
          <div>
            <select
              value={this.props.cat}
              onChange={(e) => {
                console.log(e.target.value);
                // {()=> this.props.filterByCategory(e.target.value)}
                this.props.filterByCategory(e.target.value);
                this.setState({ cat: e.target.value });
              }}
            >
              <option value="All">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="men's clothing">Men's Clothing</option>
            </select>
          </div>
        </div>
        {/* <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a> */}

        <Form
          onSubmit={(e) => {
            this.props.onSubmit(e, this.props.min, this.props.max);
          }}
        >
          <Form.Group className="my-3 px-4" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={this.props.min}
              placeholder="Min"
              type="number"
              onChange={this.props.minChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 px-4" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              placeholder="Max "
              type="number"
              value={this.props.max}
              onChange={this.props.maxChange}
            />
          </Form.Group>

          <Button className="mb-2" variant="danger" type="submit">
            Submit
          </Button>
        </Form>
        {/* <form
          onSubmit={(e) => {
            this.props.onSubmit(e, this.props.min, this.props.max);
          }}
        >
          Price
          <div>
            <input
              value={this.props.min}
              placeholder="Min"
              type="number"
              onChange={this.props.minChange}
            />
            <input
              placeholder="Max "
              type="number"
              value={this.props.max}
              onChange={this.props.maxChange}
            />
          </div>
          <button variant="warning">Search</button>
        </form> */}

        {/* <div>
          Rating
          <div>
            <select>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
        </div> */}
        {/* <button>Submit</button> */}
      </div>
    );
  }
}
export default LeftSideBar;
