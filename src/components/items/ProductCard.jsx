import { Link } from 'gatsby'
import React from 'react'
import { socialItems } from '../../data/content'

export default function ProductCard({product}) {
    return (
        <div className="Card">
            <div className="Card-container">
                <div className="Card-content">
                    <div className="Card-image">
                        <img src={product.images} alt="" />
                    </div>
                    <div className="Card-description">
                        <h4>
                            {product.name}
                        </h4>
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div className="Card-footer">
                        <div className="content-footer-button">
                            <Link className="a" to={"/productos/"+product.slug} >Ver producto </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
<div key={'productos-estoesunkeydifetente'+index}className="ejemplo">
                      <h3 key={'productos-estoesunkeydifetenteotro'+index}>{item.name}</h3>
                      <p>{item.description}</p>
                     <img src={item.images}  width="20px" height="20px" alt="algo salio mal" /> 
                  </div>

*/