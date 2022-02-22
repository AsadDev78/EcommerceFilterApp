import axios from "axios";
import React, {Component} from 'react';
const ContextAPI = React.createContext();

export class AuthProvider extends Component{
    constructor() {
        super();
        this.state = {
            username:"",
            isAuthenticated: false,
            productsData: [],
            updatedProductsData: [],
            cat: "",
            min: "",
            max: "",
            loader: false,
            CartProducts: [],
            qty:0,
        };
        this.filterByCategory = this.filterByCategory.bind(this);
        // this.filterByPriceMin = this.filterByPriceMin.bind(this);
        // this.filterByPriceMax = this.filterByPriceMax.bind(this);
        this.SearchBar = this.SearchBar.bind(this);
        this.minChange = this.minChange.bind(this);
        this.maxChange = this.maxChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.AddToCart = this.AddToCart.bind(this);
        this.increment = this.increment.bind(this);
      }

    // this.filterByCategory = this.filterByCategory.bind(this);

    // logIn = ()=>{
    //     this.setState({username: "Bob", isAuthenticated: true})
    // }
    // logOut = ()=>{
    //     this.setState({username: "", isAuthenticated: false})
    // }
    async componentDidMount() {
        const res = await axios.get("https://fakestoreapi.com/products");
        const products = res.data;
        console.log(res.data);
        this.setState({ productsData: products, updatedProductsData: products });
        this.setState({ loader: true });
      }


    //   ===================================Search Bar ==========
    SearchBar(item) {
    // console.log('search bar'+item);
    const updatedList = this.state.productsData.filter((currentItem) => {
      return currentItem.title.toLowerCase().includes(item.toLowerCase());
    });
    this.setState({ updatedProductsData: updatedList });
  }

      // -================================= filter By Category
  filterByCategory(item) {
    console.log(item);

    //   console.log(this.state.productsData)
    const updateList = this.state.productsData.filter((currentItem) => {
      return currentItem.category === item;
    });
    if(item==='All'){
    this.setState({ updatedProductsData: this.state.productsData });

    }
    else{

      console.log(updateList);
      this.setState({ updatedProductsData: updateList });
    }
  }
  // ================================================= Start Filter by Price
minChange(e) {
    // console.log(Number (e.target.value))
    // if(e.target.value>0){

    this.setState({ min: Number(e.target.value) });
    // }
    // console.log(typeof )
  }
  maxChange(e) {
    // console.log(e.target.value)
    // if(e.target.value>0){

    this.setState({ max: Number(e.target.value) });
    // }
    // console.log(this.props.min)
  }
 onSubmit(e, min, max) {
    console.log("hi" + min + max);

    e.preventDefault();

    const updateList = this.state.productsData.filter((currentItem) => {
      return currentItem.price >= min && currentItem.price <= max;
    });
    console.log(updateList);
    this.setState({ updatedProductsData: updateList });
    console.log(max);
    console.log(this.state.updatedProductsData);
  }
  // ================================================= End Filter by Price


  increment() {
    this.setState({
      qty: this.state.qty + 1
    });
  }
  AddToCart(id) {
    console.log("Product is Added", id);
    const cartUpdate = this.state.productsData.find(
      (currentItem) => currentItem.id === id
    );
    console.log(cartUpdate);
    // this.setState([...CartProducts,{...id, quantity:1}])
    // console.log(cartUpdate,'--sd')
    if (this.state.CartProducts.length > 0) {
      //   console.log('if')
      const check = this.state.CartProducts.find((itemExit) => {
        return itemExit.id === cartUpdate.id;
      });
      this.state.CartProducts.map((Item) => {
        if (!check) {
          this.setState([this.state.CartProducts.push(cartUpdate)]);
          this.increment();

          console.log("Already exit");
        } else {
          // console.log("----------else",this.state.CartProducts)
          // console.log("Already exit");

          // this.setState([this.state.CartProducts.push(cartUpdate)])
        }
      });
    } else {
      this.setState([this.state.CartProducts.push(cartUpdate)]);
      this.increment()


      // console.log("----------First time",this.state.CartProducts)
    }

    console.log(this.state.CartProducts);
  }

    render(){
        const {username,isAuthenticated, productsData,updatedProductsData,cat,min,max,loader,CartProducts,qty} = this.state;
        
        const {logIn, logOut, componentDidMount, filterByCategory, SearchBar,onSubmit,minChange,maxChange,AddToCart} = this;
        return(
            <ContextAPI.Provider value={{username, isAuthenticated, logIn, logOut, componentDidMount,filterByCategory,SearchBar,onSubmit,minChange,maxChange,AddToCart,productsData,updatedProductsData,cat,min,max,loader,CartProducts,qty}}>
                {this.props.children}
            </ContextAPI.Provider>
        )
    }
}

export default ContextAPI;