// import "./App.css";
import axios from "axios";
import React from "react";
import Header from "./Components/Header/Header";
import MainBody from "./Components/Main/MainBody";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productsData: [],
      updatedProductsData: [],
      cat: "",
      min: '',
      max: '',
      
    };
    this.filterByCategory = this.filterByCategory.bind(this);
    this.filterByPriceMin = this.filterByPriceMin.bind(this);
    this.filterByPriceMax = this.filterByPriceMax.bind(this);
    this.SearchBar = this.SearchBar.bind(this);
    this.minChange = this.minChange.bind(this)
    this.maxChange = this.maxChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  async componentDidMount() {
    const res = await axios.get("https://fakestoreapi.com/products");
    const products = res.data;
    console.log(res.data);
    this.setState({ productsData: products, updatedProductsData: products });
  }
  // async getData() {
  // const res = await axios.get('https://fakestoreapi.com/products');
  // const products = res.data
  // console.log(res.data)
  // this.setState({productsData: products})
  // fetch('https://fakestoreapi.com/products')
  //         .then(res=>res.json())
  //         .then(json=>console.log(json))
  // }

  // filter By Category
  filterByCategory(item) {
    const updateList = this.state.productsData.filter((currentItem) => {
      return currentItem.category === item;
    });
    console.log(updateList);
    this.setState({ updatedProductsData: updateList });
  }

  // Filter by Price
  filterByPriceMin(min) {
    const updateList = this.state.productsData.filter((currentItem) => {
      return currentItem.price >= min;
    });
    console.log(updateList);
    this.setState({ updatedProductsData: updateList });
    console.log(min);
  }
  filterByPriceMax(max) {
    const updateList = this.state.productsData.filter((currentItem) => {
      return currentItem.price >= max;
    });
    console.log(updateList);
    this.setState({ updatedProductsData: updateList });
    console.log(max);
  }
  SearchBar(item) {
    // console.log('search bar'+item);
    const updatedList = this.state.productsData.filter((currentItem) => {
      return currentItem.title.toLowerCase().includes(item.toLowerCase());
    });
    this.setState({ updatedProductsData: updatedList });
  }

  minChange(e){
    console.log(e.target.value)
    this.setState({ min: e.target.value});
    // console.log(this.props.min)
  }
  maxChange(e){
    console.log(e.target.value)
    this.setState({ max: e.target.value});
    // console.log(this.props.min)
  }
  onSubmit(e,min,max){
    console.log('hi'+ min + max);

    e.preventDefault()


    const updateList = this.state.productsData.filter((currentItem) => {
      return (currentItem.price >= min) && (currentItem.price <= max);
    });
    console.log(updateList);
    this.setState({ updatedProductsData: updateList });
    console.log(max);
  }
  render() {
    return (

      <div className="App">
        <Header SearchBar={this.SearchBar}/>
        <MainBody
          productsData={this.state.updatedProductsData}
          filterByCategory={this.filterByCategory}
          filterByPriceMin={this.filterByPriceMin}
          filterByPriceMax={this.filterByPriceMax}
          onSubmit={this.onSubmit}
          cat={this.state.cat}
          min={this.state.min}
          max={this.state.max}
          minChange={this.minChange}
          maxChange={this.maxChange}
        />
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

export default App;
