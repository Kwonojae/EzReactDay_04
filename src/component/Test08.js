import React, { Component } from 'react';

class Test07 extends Component {
    no = 1; //고유번호
    text1Input = React.createRef()//참조값
    state = {
        text1 :'',
        text2 : '',
        data:[]
        
    }
    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleAdd = (e) => {
        e.preventDefault()
        const {data, text1, text2} = this.state
        this.setState({
            data : data.concat({no:this.no++,text1, text2}),
            text1:'',
            text2:'',
        })
        this.text1Input.current.focus()
    }
    handleRemove = (id) => {
        const {data} = this.state
        this.setState({
            data : data.filter( item => item.no !== id)
        })
    }
    render() {
        const {data,text1,text2} = this.state
        return (
            <div>
                <h2>엔터로 값넣기:form - onSubmit</h2>
                <form onSubmit={this.handleAdd}>
                    <input type="text" name="text1" value={text1} ref={this.text1Input} onChange={this.handleChange}/>
                    <input type="text" name="text2" value={text2} onChange={this.handleChange}/>
                    <button type="submit">입력</button>
                </form>
                <ul>
                    {
                        data.map(item =><li key={item.no}>
                            {item.no} / {item.text1} / {item.text2}
                            <button onClick={() => this.handleRemove(item.no)}>삭제</button>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test07;