import React from 'react'

export class Result extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            "results":(props.results)? props.results: []
        }
    }
    renderResults(){
        let {results} = this.state;
        return results.map((item, index)=>{
            return <div key={index} className="in-stock">                  
                <h2><a href={item.url}>{item.manufacturer}</a></h2>
                <p>{item.price}</p>
                <p>{item.description}</p>
            </div>
        }) 
    }
    setResults(results){
        this.setState({results:results});
    }
    render(){
        return (
            <div className="results">
              {this.renderResults()}  
            </div>
        )
    }
}

export default Result