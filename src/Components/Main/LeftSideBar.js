import React from "react";

class LeftSideBar extends React.Component {
  render() {
    let mini,maxi;
    return (
      <div className="sidebar">
        <h1>Filter</h1>
        <form onSubmit={(e) => {
            this.props.onSubmit(e,this.props.min, this.props.max);
          }} >
          Price
          <div>
            <input
            value ={this.props.min}
              placeholder="Min"
              type="number"
              onChange={this.props.minChange
              //   (e) => {
              //   // mini=e.target.value
              //   // console.log(e.target.value);
              //   // console.log(mini);
              //   // this.props.filterByPriceMin(e.target.value);
                
              //   this.setState({ min: e.target.value });
              //   console.log(this.props.min)
              // }
              }
            />
            <input
              placeholder="Max "
              type="number"
              value ={this.props.max}
              onChange={this.props.maxChange}
              // {(e) => {
              //   // maxi=e.target.value;
              //   // console.log(maxi);
              //   this.setState({ max: e.target.value });
              //   // this.props.filterByPriceMax(e.target.value);
              // }}
            />
          </div>
          <button
            
          >
            Search
          </button>
        </form>
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
