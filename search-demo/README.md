##Project Name: Search DEMO
# project structure:
    ./app/
        ./components
            result.js
            search.js
        index.html
        index.js
        products.js
    ./build
        build.js
        index.html
    ./node_modules
    .babelrc
    .bowerrc
    package.json
    webpack.config.js
# use components:
+ 1 Search
+   Search Area Include Search Bar(i.e. input)
+ 2 Result
+   A List View with Search Result
# functions logic
+   1 handleQuery: bind the Search bar onChange method
```code
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
```
+   2 componentWillReceiveProps: to receive updating props
```code
    componentWillReceiveProps(nextProps){
        let filterResults = nextProps.results.filter(result=>{
            return result.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
                result.description.toLowerCase().match(nextProps.query.toLowerCase());
        });
        this.setResults(filterResults);
    }
```
+   3 renderResults: to extract the array result
```code
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
```
## github pages links
+   <https://yuanyu90221.github.io/reactWithCDN/search-demo/build/>