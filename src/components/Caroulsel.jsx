import React from 'react'

export default function Caroulsel({ Caroulsel }) {

    const Random = Math.round(Math.random() * 10)

    return (
        <div className="Caroulsel">
            <div className="container-all">
                {Caroulsel.map((item, index) => (<input key={"Caroulsel-input-" + index} type="radio" id={index + 1} name="image-slide" hidden />))}
                <div class="slide">
                    {
                        Caroulsel.map((item, index) => (
                            <div key={"Caroulsel-img-" + index} className="item-slide">
                                <img src={item.url} />
                            </div>
                        ))
                    }
                </div>
                <div class="pagination">
                    {
                        Caroulsel.map((item, index) => (
                            <label  key={"Caroulsel-img-pagination" + index} class="pagination-item" for={index+1}>
                                <img src={item.url}/>
                            </label>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
