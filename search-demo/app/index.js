import React from 'react';
import ReactDOM from 'react-dom'
import Search from './components/search'
import Result from './components/result'
import products from './products'

class App extends React.Component {
    constructor(props){
        super(props);
        console.log(products);
    }
    render(){
        return (<div className="search">
            <Search />
            <Result results={products}/>
        </div>)
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);