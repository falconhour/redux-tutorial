import './Counter.css'

import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD, SUBSTRACT } from "../../store/actions";

class Counter extends Component {

    state = {
        age: 25
    }

    handleDecrement = () => {
        this.props.dispatch(SUBSTRACT);
    }

    handleIncrement = () => {
        this.props.dispatch(ADD);
    }
    

    render() {
        return (
            <div className='counter'>
                <h1>
                    Counter
                </h1>
                <button onClick={this.handleDecrement}>-</button>
                <span style={{ margin: 'auto 10px' }}>{this.props.age}</span>
                <button onClick={this.handleIncrement}>+</button>
            </div> 
        );
    };
}

const mapStateToProps = (state) => (
    {
        age: state.counter.age
    }
);

export default connect(mapStateToProps)(Counter);