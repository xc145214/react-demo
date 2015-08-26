/**
 * Created by Administrator on 2015/8/26.
 */


var HelloMessage = React.createClass({
    render: function () {
        return <div>Hello {this.props.name}</div>;
    }
});

React.render(
    <HelloMessage name="panda"/>,
    document.getElementById("mountNode1")
);

var Timer = React.createClass({
    getInitialState: function () {
        return {secondsElapsed: 0};
    },
    tick: function () {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    },
    componentDidMount: function () {
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function () {
        clearInterval(this.interval);
    },
    render: function () {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
});


React.render(
    <Timer/>,
    document.getElementById("mountNode2")
);


var TodoList = React.createClass({
    render: function() {
        var createItem = function(itemText) {
            return <li>{itemText}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});
var TodoApp = React.createClass({
    getInitialState: function() {
        return {items: [], text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
});



React.render(
    <TodoApp />,
    document.getElementById("mountNode3")
);