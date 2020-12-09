import React, { Component } from 'react';
import './Base.css'
import './Test04.css'
import Test04Sub1 from './Test04Sub1';
import Test04Sub2 from './Test04Sub2';
import Test04Sub3 from './Test04Sub3';
import Test04Sub4 from './Test04Sub4';

class Test04 extends Component {
    //class영역
    state = {
        step:1, //1~2왔따갔따해준다 
        firstname:'',
        lastname:'',
        email:'',
        occ:'',
        tel:'',
        addr:''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    nextStep = () => {
        this.setState({
            step : this.state.step + 1
        })
    }

    prevStep = () => {
        this.setState( state => {
            return {
                step : state.step -1
            }
        })
    }


    render() {
        const { step, firstname, lastname, email, occ, addr, tel } = this.state
        const values1 = { step, firstname, lastname, email, occ, addr, tel }
      switch( step ) {
        case 1:
            return <Test04Sub1 values={values1} handleChange={this.handleChange}
            nextStep = {this.nextStep}
            />    //앞이 연결되고 뒤는 값이다 
        case 2:
            return <Test04Sub2 values={values1} handleChange={this.handleChange}
            nextStep = {this.nextStep} prevStep = {this.prevStep}
            />
        case 3:
            return <Test04Sub3 values={values1} nextStep={this.nextStep} prevStep={this.prevStep} />
        case 4:
            return <Test04Sub4/>
        default : 
            console.log('그외')

      }
    }
}

export default Test04;