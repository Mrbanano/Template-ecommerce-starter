import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Slide({ item, index }) {
    return (
            <div key={"Caroulsel-img-slide"+index} className="item-slide">
                <img src={item.url} />
            </div>
    )
}
