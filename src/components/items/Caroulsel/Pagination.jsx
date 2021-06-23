import React from 'react'

export default function Pagination({item,index}) {
    return (
        <label  key={"Caroulsel-img-pagination" + index} className="pagination-item" htmlFor={index+1}>
            <img src={item.url}/>
        </label>
    )
}
 