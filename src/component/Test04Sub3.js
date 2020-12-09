import React, { Component } from 'react';

class Test04Sub3 extends Component {
    render() {
        const {handleChange, nextStep, prevStep, values} = this.props
        const {
            firstname, lastname, email, tel, occ, addr
        } = values //비구조 할당 
        return (
            <div className="Test4">
                <div>
                    <ul>
                        <li><span>성</span> : {firstname}</li>
                        <li><span>이름</span> : {lastname}</li>
                        <li><span>이메일</span> : {email}</li>
                        <li><span>직업</span> : {occ}</li>
                        <li><span>전화번호</span> : {tel}</li>
                        <li><span>주소</span> : {addr}</li>
                    </ul>
                    <p>
                        <button onClick={prevStep}>이전</button>
                        <button onClick={nextStep}>다음</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Test04Sub3;