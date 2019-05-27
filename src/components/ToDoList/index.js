import React, { Component } from "react";
import { connect } from "react-redux";

import Todo from "../Todo";
import { todoList } from "../../store/actions";


class ToDoList extends Component {

    handleSubmit = (e) => {
        e.preventDefault();        
        var todo = {
            todo: e.target.todo.value,
            isDone: false
        }
        this.props.dispatch({
            type: todoList.actionType.ADD_TODO,
            payload: todo
        });
        this.todo.value = '';
    }

    handleFinishTodo = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type: todoList.actionType.FINISH_TODO,
            payload: {
                todo: e.target.dataset.todo,
                isDone: true
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>To Do List</h1>
                <hr />
                <br />
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='todo'
                        ref={(el) => this.todo = el}
                    />
                    <button>Submit</button>
                </form>
                <ul>
                    
                    {
                        this.props.todos.map((todo, i) => {
                            return <Todo key={i} todo={todo.todo}
                                isDone={todo.isDone}
                                data-todo={todo.todo}
                                onClick={this.handleFinishTodo}/>
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoList.todos

    }
}


export default connect(mapStateToProps)(ToDoList);