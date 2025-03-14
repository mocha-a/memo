import React, { useState } from 'react'
import axios from 'axios';

function MemoInsert({data, setData}) {
    const [state, setState] = useState(false)

    function insert(e){
        e.preventDefault();
        // console.log(e.target.subject.value);
        // console.log(e.target.content.value);
        // console.log(formdata.getAll("subject"));

        let date = new Date();
        date = date.toISOString().split('T')[0]
        // console.log(
        //     date.getFullYear(),
        //     date.getMonth()+1,
        //     date.getDate(),
        //     ["일","월","화","수","목","금","토"][date.getDay()],

        //     date.getHours(),
        //     date.getMinutes(),
        //     date.getSeconds(),

        //     String(date.getMonth()+1).padStart(2,'0'),
        //     date.toISOString().split('T')[0]
        // );
        

        const formdata = new FormData(e.target);
        formdata.append('date', date);
        formdata.append('id', Date.now());

        const entries = Object.fromEntries(formdata)

        axios({
            url:`${process.env.REACT_APP_APIURL}/memo/m2`,
            method: "post",
            data: JSON.stringify(entries),
            headers: {"Content-Type" : "application/json"}
        })
        .then(res=>
            setData([...data, entries])
        )

        e.target.reset();
        e.target.subject.focus()
        setState(false)
    }   
    return (
        <>
        <button onClick={()=>{setState(true)}}>나와랏</button>
            <div className={`insert ${state ? 'active' : ''}`}>
                <form onSubmit={insert}>
                    <input type="text" name="subject"/>
                    <textarea name="content"></textarea>
                    <input type="submit" value="저장"/>
                </form>
            </div>
        </>
        )
}

export default MemoInsert