import React, { Component } from 'react';

class Test06 extends Component {
    state = {
        data : [
            {no:1, name:'권오재', done:false},
            {no:2, name:'김종원', done:true},
            {no:3, name:'김보근', done:false},
            {no:4, name:'이성희', done:true},
            {no:5, name:'심성철', done:false},
        ]
    }
    handleAdd = () => {
        const {data} =this.state
        this.setState({
            data : data.concat({no:6, name:'이효리', done:false})
        })
    }
    handleRemove = ( id ) =>{
        const { data } =this.state
        this.setState({
            data : data.filter( item => item.no !== id)
        })
    }
    handleMod1 = (id) =>{
        const {data}=this.state
        this.setState({
            data : data.map (item => {
                if(item.no === id) {
                    return{
                        ...item,
                        name:'화사',
                        done:true
                    }
                }else {
                    return item
                }
            })
        })
    }
    handleMod2 = (id) => {
        const {data} = this.state
        this.setState ({
            data : data.map( item=>
                item.no === id ? {...item,name:'김영희',done:true}:item)
        })
    }
    handleMod3 = (id) => {
        const {data} = this.state
        this.setState({
            data : data.map (item =>{
                if(item.no ===id) {
                    return{
                        ...item,
                        name:'필용이',
                        done:true
                    }
                }else {
                    return item
                }
            })
        })
    }
    handleMod4 = (id) => {
        const {data} = this.state
        this.setState ({
            data : data.map( item => item.no === id ? {...item,name:'비트캠프',done:true}:item)
        })
    }
    render() {
        const { data } = this.state
        return (
            <div>
                <p>
                    <button onClick={this.handleAdd}>추가</button>
                    <button onClick={() => this.handleRemove(1)}>삭제</button>
                    <button onClick={() => this.handleMod1(2)}>수정1</button>
                    <button onClick={() => this.handleMod2(3)}>수정2</button>
                    <button onClick={() => this.handleMod3(4)}>수정3</button>
                    <button onClick={() => this.handleMod4(5)}>수정4</button>
                </p>
                <ul>
                    {
                        data.map(item => <li key={item.no}>
                            {item.name} / {item.done === true ? '참':'거짓'}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test06;