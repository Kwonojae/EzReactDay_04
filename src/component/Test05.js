import React, { Component } from 'react';

class Test05 extends Component {
    textInput = React.createRef()
    //하나로 두가지 일을 처리한다 ? true/false
    state = {
        done : false
    }
    handleToggle = () => {
        const value = this.textInput.current.value
        this.textInput.current.value = 
            this.state.done ? value.toLowerCase():value.toUpperCase()
        this.setState({
            done : !this.state.done
        })
    }
    render() {
        return (
            <div>
                <h4>ref</h4>
                <input type="text" ref={this.textInput}  />
                <button onClick={this.handleToggle}>변환</button>
            </div>
        );
    }
}

export default Test05;