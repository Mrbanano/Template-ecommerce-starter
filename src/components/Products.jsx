import React from 'react'


export default function Products({productsData}) {
    
    return (
        <div>
            {
            productsData.map((item,index)=>(
                  <div key={'productos-estoesunkeydifetente'+index}className="ejemplo">
                      <h3 key={'productos-estoesunkeydifetenteotro'+index}>{item.name}</h3>
                  </div>
            ))
            }
        </div>
    )
}
