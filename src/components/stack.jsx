import React, { Component } from 'react';

class Stack extends Component {
    state = {
        title: "C#",
        isSelected: false,
        color: "red",
    };

    toggleState() {
        this.setState({
            isSelected: !this.state.isSelected,
            color: this.state.isSelected ? "green" : "red"
        });
    }

    render () {
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.title}</h1>
                <button onClick={() => {this.toggleState()}}>Let's Study!</button>
            </div>
        );
    }
}

export default Stack;