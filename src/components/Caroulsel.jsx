import React from 'react'
import Control from './items/Caroulsel/Control'
import Slide from './items/Caroulsel/Slide'
import Pagination from './items/Caroulsel/Pagination'

export default function Caroulsel({ Caroulsel }) {

    const Random = Math.round(Math.random() * 10)

    return (
        <div className="Caroulsel">
            <div className="container-all">
                {
                    Caroulsel.map((item,index)=>(<Control key={"control-"+index} index={index} />))
                }
                <div className="slide">
                    {
                        Caroulsel.map((item,index)=>( <Slide key={"slide-"+index} index={index} item={item}/>))
                    }
                </div>
                <div className="pagination">
                    {
                        Caroulsel.map((item,index)=>( <Pagination  key={"pagination"+index} index={index} item={item}/>))
                    }
                </div>
            </div>
        </div>
    )
}
