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
                    Caroulsel.map((item,index)=>(<Control index={index} />))
                }
                <div class="slide">
                    {
                        Caroulsel.map((item,index)=>( <Slide index={index} item={item}/>))
                    }
                </div>
                <div class="pagination">
                    {
                        Caroulsel.map((item,index)=>( <Pagination index={index} item={item}/>))
                    }
                </div>
            </div>
        </div>
    )
}
