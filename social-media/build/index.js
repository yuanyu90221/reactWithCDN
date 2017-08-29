var person = {
    name: 'Json',
    location: 'Taiwan, Taipei',
    occupation: {
        title: 'Web developer',
        employer: '@json'
    },
    photo: "https://avatars2.githubusercontent.com/u/7987905?v=4&u=65d717e74740ad2da06247e71c8ff8c31c163579&s=400",
    updates: [{
        platform: 'twitter',
        status: '測試'
    }, {
        platform: 'facebook',
        status: 'Nice Jobs'
    }]
};
class Card extends React.Component {

    render() {
        return React.createElement(
            'div',
            { className: 'card' },
            React.createElement(Photo, { photo: person.photo }),
            React.createElement(Bio, { name: person.name, location: person.location, occupation: person.occupation }),
            React.createElement(Updates, { updates: person.updates })
        );
    }
}

class Photo extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'photo' },
            React.createElement('img', { src: this.props.photo, alt: 'json' })
        );
    }
}

class Bio extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'bio' },
            React.createElement(
                'h1',
                { className: 'name' },
                this.props.name
            ),
            React.createElement(
                'h2',
                { className: 'location' },
                this.props.location
            ),
            React.createElement(
                'div',
                { className: 'occupation' },
                React.createElement(
                    'p',
                    null,
                    this.props.occupation.title,
                    ' at ',
                    this.props.occupation.employer
                )
            )
        );
    }
}

class Updates extends React.Component {
    updates() {

        return this.props.updates.map(function (update, index) {
            return React.createElement(
                'li',
                { className: "update" + update.platform, key: index },
                update.status
            );
        });
    }
    render() {
        return React.createElement(
            'div',
            { className: 'updates' },
            React.createElement(
                'ul',
                null,
                this.updates()
            )
        );
    }
}
ReactDOM.render(React.createElement(Card, null), document.getElementById('root'));