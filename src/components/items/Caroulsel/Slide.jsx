import React from 'react'

export default function Slide({ item, index }) {
    return (
            <div key={"Caroulsel-img-" + index} className="item-slide">
                <img src={item.url} />
            </div>
    )
}
