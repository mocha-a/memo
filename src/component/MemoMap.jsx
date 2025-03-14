import React from 'react'
import MemoList from './MemoList'

function MemoMap({data, setData}) {
  return (
    <div className='list'>
        {data.map((item)=>
                <MemoList item={item} setData={setData}/>
            )}
    </div>
  )
}

export default MemoMap