import { counter } from "../actions";

const initialState = {
    age: 21
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case counter.actionType.ADD:
            return {
                ...state,
                age: state.age + action.val
            };

        case counter.actionType.SUBSTRACT:
            return {
                ...state,
                age: state.age - action.val
            };

        default:
            return state;
    }
};

export default reducer;