import React, { Component } from 'react';

class Stack extends Component {
    state = {
        value: this.props.value,
        title: this.props.title,
        isSelected: this.props.isSelected,
        color: this.props.isSelected ? "green" : "black",
    };
 
    render () {
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.title}</h1>
                <button onClick={() => this.props.onClick()}>Let's Study!</button>
            </div>
        );
    }
}

export default Stack;