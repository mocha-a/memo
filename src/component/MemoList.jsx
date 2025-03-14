import React from 'react'

function MemoList({item, setData}) {

    return (
        <div key={item.id}>
            <b>{item.subject} ({item.date})</b>
            <p>{item.content}</p>
        </div>
    )
}

export default MemoList