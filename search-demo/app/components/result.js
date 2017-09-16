import React from 'react'

export class Result extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            "results":(props.results)? props.results: []
        }
    }
    displayPrice(price){
        return '$'+price/100;
    }
    renderResults(){
        let {results} = this.state;
        return results.map((item, index)=>{
            return <div key={index} className="in-stock"> 
                <h2><a href={item.url}>{item.name}</a></h2>                 
                <p>{this.displayPrice(item.price)}</p>
                <p>{item.description}</p>
            </div>
        }) 
    }
    setResults(results){
        this.setState({results:results});
    }
    componentWillReceiveProps(nextProps){
        let filterResults = nextProps.results.filter(result=>{
            return result.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
                result.description.toLowerCase().match(nextProps.query.toLowerCase());
        });
        this.setResults(filterResults);
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