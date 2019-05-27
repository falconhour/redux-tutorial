import { todoList } from "../actions";

const initialState = {
    todos: [
        {
            todo: 'test',
            isDone: true
        },
        {
            todo: 'some',
            isDone: false
        }
    ]
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case todoList.actionType.ADD_TODO: {
            return {
                todos: state.todos.concat(action.payload)
            };
        }

        case todoList.actionType.FINISH_TODO: {
            return {
                todos: state.todos.map(todo => {
                    if (todo.todo === action.payload.todo)   
                        todo.isDone = true;

                    return todo;
                })
            };
        }

        default:
            return state;
    }
};

export default reducer;