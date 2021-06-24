import React from 'react'
import { Link } from 'gatsby'

export default function Advertising({ AdvertisingItems }) {
    return (
        <section className="Advertising">
            <div className="Advertising-container">
                <div className="Advertising-content">
                    {
                        AdvertisingItems.map((item, index) => (
                            <div key={item.name} className="item">
                                <Link to={item.url}><img src={item.img} alt="" /></Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
