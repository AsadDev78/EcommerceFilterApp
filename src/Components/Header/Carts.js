import React, { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

class Carts extends React.Component {
   
  render() {
    return (
      <div>
        <Routes>
          <Route path="" element={<Header />} />
          {/* <Route path="/" element={<App />} /> */}
        </Routes>
        <h1>Cart Component here!</h1>
      </div>
    );
  }
}
export default Carts;
