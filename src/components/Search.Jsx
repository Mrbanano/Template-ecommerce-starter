import React from 'react'

export default function Search() {
    return (
        <div className="Search">
            <div className="Search-container">
                <div className="Search-content">
                    <div className="Search-bar">
                        <input type="text" placeholder="Buscar" />
                        <div className="loupe">
                            <img src="https://i.postimg.cc/cJMLsLsc/lupa.png" alt="lupa" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
