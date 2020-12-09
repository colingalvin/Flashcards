import React, { Component } from 'react';
import Stack from "./stack"

class Flashcard extends Component {
    state = {
        selected: -1,
    }

    renderStack(title, index)  {
        return <Stack
            value={index}
            title={title}
            isSelected={this.state.selected === index ? true : false}
            onClick={() => this.selectStack(index)}
        />;
    }

    selectStack(index) {
        //alert('clicked');
        this.setState({selected: index});
    }

    render() { 
        return ( 
            <div>
                {this.renderStack("C#", 0)}
                {this.renderStack("JS", 1)}
                {this.renderStack("Python", 2)}
            </div>
         );
    }
}
 
export default Flashcard;