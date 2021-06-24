import React from 'react'
import ProductCard from './items/ProductCard'

export default function Products({ productsData }) {

    return (
        <div className="Products">
            <div className="Products-container">
                <div className="Products-content">
                    {
                        productsData.map((product, index) => (
                            <ProductCard
                                key={"Product-card-" + index}
                                product={product}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
