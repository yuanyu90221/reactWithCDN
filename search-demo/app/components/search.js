import React from 'react'

export class Search extends React.Component {
    handleChange(e){
        console.log("Query",e.target.value);
    }
    render(){
        return (
            <div className="search-bar">
                <input placeholder="Search" onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}

export default Search