// import "./App.css";
import axios from "axios";
import React from "react";
import Header from "./Components/Header/Header";
import MainBody from "./Components/Main/MainBody";
import "bootstrap/dist/css/bootstrap.min.css";
import ContextAPI from "./Components/ContextApi/ContextAPI";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     productsData: [],
  //     updatedProductsData: [],
  //     cat: "",
  //     min: "",
  //     max: "",
  //     loader: false,
  //     CartProducts: [],
  //     qty:0,
  //   };
  //   // this.filterByCategory = this.filterByCategory.bind(this);
  //   this.filterByPriceMin = this.filterByPriceMin.bind(this);
  //   this.filterByPriceMax = this.filterByPriceMax.bind(this);
  //   this.SearchBar = this.SearchBar.bind(this);
  //   this.minChange = this.minChange.bind(this);
  //   this.maxChange = this.maxChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  //   this.AddToCart = this.AddToCart.bind(this);
  //   this.increment = this.increment.bind(this);
  // }
  // async componentDidMount() {
  //   const res = await axios.get("https://fakestoreapi.com/products");
  //   const products = res.data;
  //   console.log(res.data);
  //   this.setState({ productsData: products, updatedProductsData: products });
  //   this.setState({ loader: true });
  // }
  // async getData() {
  // const res = await axios.get('https://fakestoreapi.com/products');
  // const products = res.data
  // console.log(res.data)
  // this.setState({productsData: products})
  // fetch('https://fakestoreapi.com/products')
  //         .then(res=>res.json())
  //         .then(json=>console.log(json))
  // }

  // increment() {
  //   this.setState({
  //     qty: this.state.qty + 1
  //   });
  // }
  // filter By Category
  // filterByCategory(item) {
  //   const updateList = this.state.productsData.filter((currentItem) => {
  //     return currentItem.category === item;
  //   });
  //   if(item==='All'){
  //   this.setState({ updatedProductsData: this.state.productsData });

  //   }
  //   else{

  //     console.log(updateList);
  //     this.setState({ updatedProductsData: updateList });
  //   }
  // }

  // Filter by Price
  // filterByPriceMin(min) {
  //   const updateList = this.state.productsData.filter((currentItem) => {
  //     return currentItem.price >= min;
  //   });
  //   console.log(updateList);
  //   this.setState({ updatedProductsData: updateList });
  //   console.log(min);
  // }
  // filterByPriceMax(max) {
  //   const updateList = this.state.productsData.filter((currentItem) => {
  //     return currentItem.price >= max;
  //   });
  //   console.log(updateList);
  //   this.setState({ updatedProductsData: updateList });
  //   console.log(max);
  // }
  // SearchBar(item) {
  //   // console.log('search bar'+item);
  //   const updatedList = this.state.productsData.filter((currentItem) => {
  //     return currentItem.title.toLowerCase().includes(item.toLowerCase());
  //   });
  //   this.setState({ updatedProductsData: updatedList });
  // }

  // minChange(e) {
  //   // console.log(Number (e.target.value))
  //   // if(e.target.value>0){

  //   this.setState({ min: Number(e.target.value) });
  //   // }
  //   // console.log(typeof )
  // }
  // maxChange(e) {
  //   // console.log(e.target.value)
  //   // if(e.target.value>0){

  //   this.setState({ max: Number(e.target.value) });
  //   // }
  //   // console.log(this.props.min)
  // }
  // onSubmit(e, min, max) {
  //   console.log("hi" + min + max);

  //   e.preventDefault();

  //   const updateList = this.state.productsData.filter((currentItem) => {
  //     return currentItem.price >= min && currentItem.price <= max;
  //   });
  //   console.log(updateList);
  //   this.setState({ updatedProductsData: updateList });
  //   console.log(max);
  //   console.log(this.state.updatedProductsData);
  // }
  // AddToCart(id) {
  //   console.log("Product is Added", id);
  //   const cartUpdate = this.state.productsData.find(
  //     (currentItem) => currentItem.id === id
  //   );
  //   console.log(cartUpdate);
  //   // this.setState([...CartProducts,{...id, quantity:1}])
  //   // console.log(cartUpdate,'--sd')
  //   if (this.state.CartProducts.length > 0) {
  //     //   console.log('if')
  //     const check = this.state.CartProducts.find((itemExit) => {
  //       return itemExit.id === cartUpdate.id;
  //     });
  //     this.state.CartProducts.map((Item) => {
  //       if (!check) {
  //         this.setState([this.state.CartProducts.push(cartUpdate)]);
  //         this.increment();

  //         console.log("Already exit");
  //       } else {
  //         // console.log("----------else",this.state.CartProducts)
  //         // console.log("Already exit");

  //         // this.setState([this.state.CartProducts.push(cartUpdate)])
  //       }
  //     });
  //   } else {
  //     this.setState([this.state.CartProducts.push(cartUpdate)]);
  //     this.increment()


  //     // console.log("----------First time",this.state.CartProducts)
  //   }

  //   console.log(this.state.CartProducts);
  // }
  render() {
    console.log(this.context)
    return (
      <div className="App">
        {this.context.loader ? (
          <>
            <Header
              // SearchBar={this.SearchBar}
              // CartProducts={this.state.CartProducts}
              // qty={this.state.qty}
            />

            <MainBody
              // productsData={this.context.updatedProductsData}
              // filterByCategory={this.filterByCategory}
              // filterByPriceMin={this.filterByPriceMin}
              // filterByPriceMax={this.filterByPriceMax}
              // onSubmit={this.onSubmit}
              // cat={this.state.cat}
              // min={this.state.min}
              // max={this.state.max}
              // minChange={this.minChange}
              // maxChange={this.maxChange}
              // AddToCart={this.AddToCart}
            />
          </>
        ) : (
          <div className="text-center">
            <img src="https://acegif.com/wp-content/uploads/loading-72.gif" />
          </div>
        )}
      </div>
    );
  }
}

// <div className="Row">
//         <div className="col-sm-2"></div>
//         <div className="col-sm-1"></div>
//         <div className="col-sm-9"></div>
//       </div>

// function App() {

//   return (
//     <div className="App">
//       <Header />
//       <MainBody/>
//     </div>
//   );
// }
App.contextType = ContextAPI
export default App;
