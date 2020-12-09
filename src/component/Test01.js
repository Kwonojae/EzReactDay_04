import React, { Component } from 'react';

class Test01 extends Component {
    state = {
        text1 : '',
        text2 : ''
    }
    render() {
        return (
            <div>
                <h2>input</h2>
                <p>
                    <input type="text" onChange={(e) => this.setState({text1:e.target.value})}/>
                    <input type="text" onChange={ e => this.setState({text2:e.target.value})}/>
                </p>
                <p>
                    {this.state.text1} / {this.state.text2}
                </p>
            </div>
        );
    }
}

export default Test01;