import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MemoMap from '../component/MemoMap';
import MemoInsert from '../component/MemoInsert';

function Memo() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/memo/m1')
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