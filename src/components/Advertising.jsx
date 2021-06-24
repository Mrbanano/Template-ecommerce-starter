import React from 'react'

export default function Advertising({ AdvertisingItems }) {
    return (
        <section className="Advertising">
            <div className="Advertising-container">
                <div className="Advertising-content">
                    {
                        AdvertisingItems.map((item, index) => (
                            <div key={item.name} className="item">
                                <a href={item.url}><img src={item.img} alt="" /></a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
