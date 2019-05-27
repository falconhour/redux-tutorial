const actionType = {
    ADD: 'ADD',
    SUBSTRACT: 'SUBSTRACT'
}

const ADD = {
    type: actionType.ADD,
    val: 2
}

const SUBSTRACT = {
    type: actionType.SUBSTRACT,
    val: 3
}

const counter = {
    actionType,
    ADD,
    SUBSTRACT
}

export default counter;