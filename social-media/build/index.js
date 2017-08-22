class Card extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "card" },
            React.createElement(Photo, null),
            React.createElement(Bio, null),
            React.createElement(Updates, null)
        );
    }
}

class Photo extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "photo" },
            React.createElement("img", { src: "https://avatars2.githubusercontent.com/u/7987905?v=4&u=65d717e74740ad2da06247e71c8ff8c31c163579&s=400", alt: "json" })
        );
    }
}

class Bio extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "bio" },
            React.createElement(
                "h1",
                { className: "name" },
                "Json"
            ),
            React.createElement(
                "h2",
                { className: "location" },
                "Taiwan, Taipei"
            ),
            React.createElement(
                "div",
                { className: "occupation" },
                React.createElement(
                    "p",
                    null,
                    "innovation"
                )
            )
        );
    }
}

class Updates extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "updates" },
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    { className: "update" },
                    "Update"
                ),
                React.createElement(
                    "li",
                    { className: "update" },
                    "Update"
                )
            )
        );
    }
}
ReactDOM.render(React.createElement(Card, null), document.getElementById('root'));