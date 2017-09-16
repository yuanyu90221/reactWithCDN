import React from 'react';
import ReactDOM from 'react-dom'
import Search from './components/search'
import Result from './components/result'
import products from './products'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        };
    }
    handleQuery(query){
        this.setState({query:query.toLowerCase().trim()});
    }
    render(){
        let {query} = this.state;
        return (<div className="search">
            <Search onQuery={this.handleQuery.bind(this)}/>
            <Result results={products} query={query}/>
        </div>)
    }
}

ReactDOM.render(
    <App results={products}/>,
    document.getElementById('app')
);