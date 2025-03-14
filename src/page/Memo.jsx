import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MemoMap from '../component/MemoMap';
import MemoInsert from '../component/MemoInsert';

function Memo() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_APIURL}/memo/m1`,{
      headers: {"Content-Type" : "application/json"}
    })
    .then((res)=>
        setData(res.data)
    )
  },[])

  return (
    <div>
      <MemoInsert data={data} setData={setData}/>
      <MemoMap data={data} setData={setData}/>
    </div>
  )
}

export default Memo