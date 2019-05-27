import React, { Component } from "react";

class Todo extends Component {
    render() {
        const style = this.props.isDone ? { textDecoration: 'line-through'} : null
        return (
            <li style={style} data-todo={this.props.todo}
                onClick={this.props.onClick}
            >
                {this.props.todo}
            </li>
        );
    }
}

export default Todo;