import React, { Component } from 'react';

  //dom -> 플러그인, setInterval, setTimeout, scrollTop값
    //방법1) class영역에 이름 = null
    //      요소 이름 연결 ref={ref=>{this.이름=ref}}
    //      this.이름.focus()
    //방법2) class영역에 이름 = React.createRef()
    //      요소 이름 연결 ref={this.이름}
    //      this.이름.current.focus()
class Test02 extends Component {
    // nameInput = null
    nameInput = React.createRef
    state = {
        username : '',
        userpwd : '',
        useraddr : ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value //name값 접근 
        })
    }
    handleReset = () => {
        this.setState ({
            username:'', userpwd:'', useraddr:''
        })
        this.nameInput.focus()
    }

    render() {
        const { username, userpwd, useraddr} = this.state
        return (
            <div>
                {/* value값까지 넣어줘야 input창안의 text도 지워짐 */}
                {/* <input type="text" ref={ref =>{this.nameInput = ref}} value={username} name="username" onChange={this.handleChange}/> */}
                <input type="text" ref={this.nameInput} value={username} name="username" onChange={this.handleChange}/>
                <input type="text" ref={ref =>{this.nameInput = ref}} value={username} name="username" onChange={this.handleChange}/>
                <input type="text" value={userpwd} name="userpwd" onChange={this.handleChange}/>
                <input type="text" value={useraddr} name="useraddr" onChange={this.handleChange}/>
                <button onClick={this.handleReset}>초기화</button>
                <p>
                    이름 : / {username}
                    비밀번호: / {userpwd}
                    주소 : / {useraddr}
                </p>
            </div>
        );
    }
}

export default Test02;