import React from "react";
import App from '../App'
import {
  Routes,
  Route
} from "react-router-dom";
import ProductDetails from "./Products/ProductDetails";
import Login from "./Header/Auth/Login";
import SignUp from "./Header/Auth/SignUp";
class RoutingPage extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<SignUp/>} />

      </Routes>
        
    //     <MainBody
    //     productsData={this.state.updatedProductsData}
    //     filterByCategory={this.filterByCategory}
    //     filterByPriceMin={this.filterByPriceMin}
    //     filterByPriceMax={this.filterByPriceMax}
    //     onSubmit={this.onSubmit}
    //     cat={this.state.cat}
    //     min={this.state.min}
    //     max={this.state.max}
    //     minChange={this.minChange}
    //     maxChange={this.maxChange}
    //   />
    );
  }
}

export default RoutingPage