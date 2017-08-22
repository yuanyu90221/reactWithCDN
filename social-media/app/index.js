class Card extends React.Component {
    render(){
        return (
            <div className="card">
                <Photo />
                <Bio />
                <Updates />
            </div>
        );
    }
}

class Photo extends React.Component {
    render() {
        return (
            <div className="photo">
                <img src="https://avatars2.githubusercontent.com/u/7987905?v=4&u=65d717e74740ad2da06247e71c8ff8c31c163579&s=400" alt="json"/>
            </div>
        );
    }
}

class Bio extends React.Component {
    render() {
        return (
            <div className="bio">
                <h1 className="name">Json</h1>
                <h2 className="location">Taiwan, Taipei</h2>
                <div className="occupation">
                    <p>innovation</p>
                </div>
            </div>
        );
    }
} 

class Updates extends React.Component {
    render() {
        return (
            <div className="updates">
                <ul>
                    <li className="update">Update</li>
                    <li className="update">Update</li>
                </ul>
            </div>
        );
    }
}           
ReactDOM.render(
    <Card />,
    document.getElementById('root'));