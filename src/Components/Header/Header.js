import React from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo'
import './HeaderStyle.css'

class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <Logo/>
                <SearchBar SearchBar={this.props.SearchBar}/>

            </div>
        )
    }
}
export default Header