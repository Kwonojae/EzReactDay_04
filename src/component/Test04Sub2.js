import React, { Component } from 'react';

class Test04Sub2 extends Component {
    
    render() {
         const {handleChange, nextStep, prevStep} = this.props
        return (
            <div className="Test4">
                <div>
                    <ul>
                        <li>
                            <label htmlFor="occ">직업</label>
                            :<input type="text" name="occ" id="occ" onChange={handleChange}/>
                        </li>
                        <li>
                            <label htmlFor="tel">전화번호</label>
                            :<input type="text" name="tel" id="tel" onChange={handleChange}/>
                        </li>
                        <li>
                            <label htmlFor="addr">주소</label>
                            :<input type="text" name="addr" id="addr" onChange={handleChange}/>
                        </li>
                    </ul>
                    <p>
                        <button onClick={prevStep}>이전</button>
                        <button onClick={nextStep}>결과</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Test04Sub2;