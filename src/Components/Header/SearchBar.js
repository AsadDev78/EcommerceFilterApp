import React from "react";
import {
  Button,
  Form,
  FormControl,
 
} from "react-bootstrap";
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
            this.props.SearchBar(e.target.value);
            console.log(e.target.value);
          }}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-warning">Search</Button>
      </Form>
    );
  }
}
export default SearchBar;
