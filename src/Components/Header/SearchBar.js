import React from "react";

class SearchBar extends React.Component{
    render(){
        return(
            <div>
                <input type='text' onChange={(e)=>{
                    this.props.SearchBar(e.target.value);
                    console.log(e.target.value)}}/>
                <button>Search</button>
            </div>
        )
    }
}
export default SearchBar