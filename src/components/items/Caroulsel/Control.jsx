import React from 'react'

export default function Control({ index }) {
    return (
        <>
            <input 
                key={"Caroulsel-input-" + index} 
                type="radio" id={index + 1} 
                name="image-slide" hidden 
            />
        </>
    )
}
