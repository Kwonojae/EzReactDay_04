import React, { Component } from 'react';

class Test10 extends Component {
    state = {
        username : '',
        userpwd : '',
        PasswordCheck : true
    }

    pwdCheckHandler = (e) => {
        this.setState({
            userpwd: e.target.value
        });
        
        if (e.target.value.length <= 6) {
            this.setState({
                PasswordCheck:true
            })
        } else {
            this.setState({
                PasswordCheck: false
            })
        }
    }
    render() {
        return (
            <div>
                <input type="text" name="username"/>
                <input type="text" name="userpwd" value={this.state.userpwd} onChange={this.pwdCheckHandler}/>
                <button type="button" value={this.state.userpwd} disabled={this.state.PasswordCheck}>submit</button>
            </div>
        );
    }
}

export default Test10;