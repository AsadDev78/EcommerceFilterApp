import React from "react";
import {
  Button,
  Form,
  FormControl,
 
} from "react-bootstrap";
import ContextAPI from "../ContextApi/ContextAPI";
class SearchBar extends React.Component {
  render() {
    return (
      // <div>
      //     <input type='text' onChange={(e)=>{
      //         this.props.SearchBar(e.target.value);
      //         console.log(e.target.value)}}/>
      //     <button>Search</button>
      // </div>

      <Form className="d-flex">
        <FormControl
          type="text"
          onChange={(e) => {
            this.context.SearchBar(e.target.value);
            // console.log(e.target.value);
          }}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        {/* <Button variant="outline-danger">Search</Button> */}
      </Form>
    );
  }
}
SearchBar.contextType = ContextAPI
export default SearchBar;
