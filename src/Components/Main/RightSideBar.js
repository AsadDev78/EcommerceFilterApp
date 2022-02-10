import React from 'react'

class RightSideBar extends React.Component{
    render(){
        return(
            <div className='sidebar'>
                <h1>Right SideBar</h1>
                <div>
                    <select>
                        <option value='Price'>Price</option>
                        <option value='20'>20</option>
                        <option value='30'>30</option>
                        <option value='40'>40</option>
                        <option value='50'>50</option>
                    </select>
                </div>
                <div>Category</div>
                <div>Rating</div>
            </div>
        )
    }
}
export default RightSideBar