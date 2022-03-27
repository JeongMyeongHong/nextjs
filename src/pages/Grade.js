import React, { useState } from "react";
export default function Grade() {
    const [inputs, setInputs] = useState({})
    const { name, math, kr, en, total } = inputs
    const [result, setResult] = useState(``)

    

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onClick =(e)=>{
        e.preventDefault()
        totalgrade()
        setResult(`${name}님의 점수는 수학:${math} 국어:${kr} 영어:${en}   총점: ${total}입니다.`)
    }
    
    const totalgrade =()=>{
        setInputs({
            ...inputs,
            total: Number(kr)+Number(en)+Number(math)
        })
    }

    

    return (<div>
        <h1>성적표</h1>
        <div>
            <label htmlFor="">이름</label>
            <input type="text" onChange={onChange} name="name" /><br />

            <label htmlFor="">수학점수</label>
            <input type="text" onChange={onChange} name="math" /><br />
            <label htmlFor="">국어점수</label>
            <input type="text" onChange={onChange} name="kr" /><br />
            <label htmlFor="">영어점수</label>
            <input type="text" onChange={onChange} name="en" /><br />
            <button onClick={onClick}>RUN</button>
            <div>이름 : {name} 수학점수 : {math} 국어점수 : {kr} 영어점수 : {en} </div>
            <div>결과 : {result} </div>
        </div>
    </div>)
}