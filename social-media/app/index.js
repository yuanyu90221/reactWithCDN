var person = {
    name: 'Json',
    location: 'Taiwan, Taipei',
    occupation: {
        title: 'Web developer',
        employer: '@json'
    },
    photo: "https://avatars2.githubusercontent.com/u/7987905?v=4&u=65d717e74740ad2da06247e71c8ff8c31c163579&s=400",
    updates: [
        {
            platform: 'twitter',
            status: '測試'
        },
        {
            platform: 'facebook',
            status: 'Nice Jobs'
        }
    ] 
}
class Card extends React.Component {
    
    render(){
        return (
            <div className="card">
                <Photo photo={person.photo} />
                <Bio name={person.name} location={person.location} occupation={person.occupation}/>
                <Updates updates={person.updates}/>
            </div>
        );
    }
}

class Photo extends React.Component {
    render() {
        return (
            <div className="photo">
                <img src={this.props.photo} alt="json"/>
            </div>
        );
    }
}

class Bio extends React.Component {
    render() {
        return (
            <div className="bio">
                <h1 className="name">{this.props.name}</h1>
                <h2 className="location">{this.props.location}</h2>
                <div className="occupation">
                    <p>{this.props.occupation.title} at {this.props.occupation.employer}</p>
                </div>
            </div>
        );
    }
} 

class Updates extends React.Component {
    updates() {
      
       return this.props.updates.map(function(update, index){
            return (
                <li className={"update" + update.platform} key={index}>
                    {update.status}
                </li>
            )
       });
    }
    render() {
        return (
            <div className="updates">
                <ul>
                    {this.updates()}
                </ul>
            </div>
        );
    }
}           
ReactDOM.render(
    <Card />,
    document.getElementById('root'));